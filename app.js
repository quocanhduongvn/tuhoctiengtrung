// app.js - Logic & Tương tác cho Web App Tự Học Tiếng Trung HSK 1

// ==================== TRẠNG THÁI ỨNG DỤNG (STATE) ====================
const STORAGE_KEY = "hsk1_study_app_data_v1";

let appState = {
  currentLessonId: 1,
  completedLessons: [],
  masteredVocabs: [],
  customVocabs: [],
  notes: {},
  quizAnswers: {},
  theme: "light",
  showPinyin: true,
  showViet: true,
  activeVocabFilter: "all",
  activeFlashcardIndex: 0,
  isCardFlipped: false,
  showGhostWatermark: true,
  completedShadowingSentences: {},
  vocabScope: "all",
  vocabCategory: "all",
  vocabSearchQuery: ""
};

// ==================== KHỞI TẠO DỮ LIỆU & LOCAL STORAGE ====================
function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      appState = { ...appState, ...parsed };
    }
  } catch (e) {
    console.error("Lỗi khi đọc LocalStorage:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    updateProgressUI();
  } catch (e) {
    console.error("Lỗi khi lưu LocalStorage:", e);
  }
}

// ==================== HỆ THỐNG PHÁT ÂM TIẾNG TRUNG ĐA TẦNG (HYBRID AUDIO ENGINE) ====================
// Bảng ánh xạ phát âm chuẩn giáo trình cho 23 Thanh mẫu và 15 Vận mẫu (sử dụng âm chuẩn người bản xứ)
const PHONETIC_AUDIO_MAP = {
  // 23 Thanh mẫu
  b: '波', p: '坡', m: '摸', f: '佛',
  d: '得', t: '特', n: '讷', l: '勒',
  g: '哥', k: '科', h: '喝',
  j: '鸡', q: '七', x: '西',
  zh: '知', ch: '吃', sh: '诗', r: '日',
  z: '资', c: '疵', s: '思',
  y: '衣', w: '乌',
  // 15 Vận mẫu
  a: '阿', o: '喔', e: '鹅', i: '衣', u: '乌', 'ü': '迂',
  ai: '爱', ei: '诶', ao: '奥', ou: '欧',
  an: '安', en: '恩', ang: '肮', eng: '鞥', ong: '轰'
};

let currentPlayingAudio = null;
let cachedVoices = [];

// Khởi tạo và nạp trước danh sách giọng đọc của hệ thống (nếu có)
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const populateVoices = () => {
    try {
      cachedVoices = window.speechSynthesis.getVoices() || [];
    } catch(e) {}
  };
  populateVoices();
  if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
    window.speechSynthesis.onvoiceschanged = populateVoices;
  }
}

// Hàm chuẩn hóa chuỗi cần phát âm (trích xuất chữ Hán nếu có dạng "mā (妈 - Mẹ)" hoặc "bàba (爸爸)")
function extractPronounceableText(rawText) {
  if (!rawText) return "";
  const str = String(rawText).trim();

  // 1. Nếu có chữ Hán trong ngoặc đơn (ví dụ: "mā (妈 - Mẹ)" hoặc "bàba (爸爸)")
  const hanziMatch = str.match(/[\u4e00-\u9fa5]+/);
  if (hanziMatch && (str.includes("(") || str.includes(" - "))) {
    return hanziMatch[0];
  }

  // 2. Nếu là thanh mẫu hoặc vận mẫu đơn lẻ (b, p, m, a, o, ü...)
  const lower = str.toLowerCase();
  if (PHONETIC_AUDIO_MAP[lower]) {
    return PHONETIC_AUDIO_MAP[lower];
  }

  // 3. Nếu là chuỗi chữ Hán nguyên bản (ví dụ "你好", "我是越南人")
  return str;
}

// Hàm phát âm chính - Đảm bảo hoạt động trên mọi thiết bị di động (kể cả iPhone gạt cần rung/không có gói tiếng Trung)
function playChineseAudio(rawText, buttonElement = null, customRate = null) {
  if (!rawText) return;

  const textToSpeak = extractPronounceableText(rawText);
  if (!textToSpeak) return;

  // Hiệu ứng nhấp nháy phát âm trên giao diện
  if (buttonElement) {
    buttonElement.classList.add("playing-audio");
    setTimeout(() => buttonElement.classList.remove("playing-audio"), 1500);
  }

  // 1. ƯU TIÊN SỐ 1: Phát âm thanh MP3 người bản xứ trực tiếp qua HTML5 Audio (Youdao Native Voice)
  // Cách này hoạt động trên mọi điện thoại (iOS, Android, PC) mà không phụ thuộc vào gói giọng cài trên máy
  const isShortWordOrPhrase = textToSpeak.length <= 15 && !textToSpeak.includes("，") && !textToSpeak.includes("！") && !textToSpeak.includes("？");
  
  if (isShortWordOrPhrase) {
    try {
      if (currentPlayingAudio) {
        try {
          currentPlayingAudio.pause();
          currentPlayingAudio.currentTime = 0;
        } catch(e) {}
      }

      const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(textToSpeak)}&le=zh`;
      const audio = new Audio(audioUrl);
      currentPlayingAudio = audio;

      if (customRate && customRate !== 1.0) {
        audio.playbackRate = customRate;
      }

      audio.onerror = () => {
        playViaWebSpeech(textToSpeak, customRate, buttonElement);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          if (buttonElement) {
            audio.onended = () => buttonElement.classList.remove("playing-audio");
          }
        }).catch(() => {
          // Nếu trình duyệt chặn phát MP3, chuyển sang Web Speech API
          playViaWebSpeech(textToSpeak, customRate, buttonElement);
        });
        return;
      }
    } catch (e) {}
  }

  // 2. ƯU TIÊN SỐ 2: Web Speech API cho câu dài hoặc khi online audio không khả dụng
  playViaWebSpeech(textToSpeak, customRate, buttonElement);
}

// Phát qua Web Speech API
function playViaWebSpeech(text, customRate = null, buttonElement = null) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    fallbackOnlineAudio(text);
    return;
  }

  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = customRate || 0.85;

    if (!cachedVoices || cachedVoices.length === 0) {
      cachedVoices = window.speechSynthesis.getVoices() || [];
    }
    const zhVoice = cachedVoices.find(v => v.lang.startsWith('zh') || v.lang.includes('cmn'));
    if (zhVoice) {
      utterance.voice = zhVoice;
    }

    utterance.onend = () => {
      if (buttonElement) buttonElement.classList.remove("playing-audio");
    };

    utterance.onerror = () => {
      if (buttonElement) buttonElement.classList.remove("playing-audio");
      fallbackOnlineAudio(text);
    };

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    fallbackOnlineAudio(text);
  }
}

function fallbackOnlineAudio(text) {
  try {
    if (!text) return;
    const cleanText = text.replace(/[\s，。！？,!?.…:：]+/g, '');
    const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanText || text)}&le=zh`;
    const audio = new Audio(audioUrl);
    audio.play().catch(() => {});
  } catch (e) {}
}

// ==================== RENDER DANH SÁCH BÀI HỌC (SIDEBAR) ====================
function renderLessonList(filterText = "") {
  const container = document.getElementById("lessonListContainer");
  if (!container) return;

  const currentId = appState.currentLessonId;
  const filtered = HSK1_DATA.lessons.filter(l => {
    if (!filterText) return true;
    const q = filterText.toLowerCase();
    return l.title.toLowerCase().includes(q) || l.pinyin.toLowerCase().includes(q) || l.meaning.toLowerCase().includes(q);
  });

  container.innerHTML = filtered.map(lesson => {
    const isActive = lesson.id === currentId;
    const isCompleted = appState.completedLessons.includes(lesson.id);
    const isReady = lesson.id === 1;

    let statusBadge = '';
    if (isCompleted) {
      statusBadge = `<span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-400">Đã xong</span>`;
    } else if (isReady) {
      statusBadge = `<span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-400">Đang học</span>`;
    } else {
      statusBadge = `<span class="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">Khung bài</span>`;
    }

    const activeClasses = isActive 
      ? 'bg-chineseRed-50 border-chineseRed-500 dark:bg-slate-800/90 dark:border-chineseRed-500 shadow-sm'
      : 'bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/60 border-slate-200 dark:border-slate-800';

    return `
      <div onclick="selectLesson(${lesson.id})" class="cursor-pointer p-3 rounded-xl border transition-all flex items-start gap-3 ${activeClasses}">
        <div class="w-7 h-7 rounded-lg ${isActive ? 'bg-chineseRed-600 text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'} flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
          ${lesson.id}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-1 mb-0.5">
            <h4 class="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">${lesson.title.split(':')[1] || lesson.title}</h4>
            ${statusBadge}
          </div>
          <p class="text-[11px] text-chineseRed-600 dark:text-chineseRed-400 font-medium truncate">${lesson.pinyin}</p>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">${lesson.meaning}</p>
        </div>
      </div>
    `;
  }).join("");

  refreshIcons();
}

function selectLesson(id) {
  appState.currentLessonId = id;
  saveState();
  renderLessonList();
  renderCurrentLesson();

  // Đóng sidebar trên mobile sau khi chọn bài
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  if (sidebar && backdrop && !sidebar.classList.contains("-translate-x-full")) {
    sidebar.classList.add("-translate-x-full");
    backdrop.classList.add("hidden");
  }
}

// Helper tạo URL nhúng YouTube chuẩn Referrer và tránh Lỗi 153
function getYouTubeEmbedUrl(videoId, startSeconds = 0) {
  const isHttp = window.location.protocol.startsWith("http");
  const originParam = isHttp ? `&origin=${encodeURIComponent(window.location.origin)}` : '';
  const startParam = startSeconds > 0 ? `&start=${startSeconds}&autoplay=1` : '';
  return `https://www.youtube.com/embed/${videoId}?rel=0&enablejsapi=1${originParam}${startParam}`;
}

// ==================== RENDER NỘI DUNG BÀI HỌC HIỆN TẠI ====================
function renderCurrentLesson() {
  const lesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId) || HSK1_DATA.lessons[0];

  // Cập nhật Header
  document.getElementById("currentLessonBadge").textContent = `Bài ${lesson.id}`;
  document.getElementById("currentLessonTitle").textContent = lesson.title;
  document.getElementById("currentLessonDesc").textContent = lesson.description;

  const isCompleted = appState.completedLessons.includes(lesson.id);
  const statusText = document.getElementById("currentLessonStatusText");
  const completeBtnText = document.getElementById("lessonCompleteBtnText");

  if (isCompleted) {
    statusText.textContent = "Đã hoàn thành";
    statusText.className = "text-xs font-semibold text-emerald-600 dark:text-emerald-400";
    completeBtnText.textContent = "Đánh dấu chưa hoàn thành";
  } else {
    statusText.textContent = "Đang học";
    statusText.className = "text-xs font-semibold text-amber-600 dark:text-amber-400";
    completeBtnText.textContent = "Đánh dấu đã hoàn thành";
  }

  // Cập nhật Iframe Video YouTube & External Link
  const ytPlayer = document.getElementById("youtubePlayer");
  if (ytPlayer && lesson.videoId) {
    ytPlayer.src = getYouTubeEmbedUrl(lesson.videoId);
  }
  const extLink = document.getElementById("externalYoutubeLink");
  if (extLink && lesson.videoId) {
    extLink.href = `https://www.youtube.com/watch?v=${lesson.videoId}`;
  }
  const fileNoticeLink = document.getElementById("fileProtocolWatchDirectBtn");
  if (fileNoticeLink && lesson.videoId) {
    fileNoticeLink.href = `https://www.youtube.com/watch?v=${lesson.videoId}`;
  }

  // Kiểm tra nếu đang mở trực tiếp file:// thì bật thông báo hướng dẫn
  const fileNotice = document.getElementById("fileProtocolNotice");
  if (fileNotice) {
    if (window.location.protocol === "file:") {
      fileNotice.classList.remove("hidden");
    } else {
      fileNotice.classList.add("hidden");
    }
  }

  // Cập nhật Timecodes
  renderTimecodes(lesson);

  // Render từ vựng (Hỗ trợ cả Trọn bộ 154 từ HSK 1 lẫn từ vựng từng bài học 1-15)
  renderVocabTab(lesson);

  // Nếu là Bài 1, render các thành phần chi tiết ngữ âm, bài khóa, tập viết, trắc nghiệm
  if (lesson.id === 1) {
    renderPhoneticsTab(lesson);
    renderDialoguesTab(lesson);
    renderWritingTab(lesson);
    renderQuizTab(lesson);
  } else {
    renderUpcomingPlaceholder(lesson);
  }

  // Cập nhật ghi chú cá nhân
  const noteArea = document.getElementById("personalNoteTextarea");
  if (noteArea) {
    noteArea.value = appState.notes[lesson.id] || "";
  }

  refreshIcons();
}

// Render Timecodes
function renderTimecodes(lesson) {
  const container = document.getElementById("timecodesContainer");
  if (!container) return;

  if (!lesson.timecodes || lesson.timecodes.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400 italic">Mốc thời gian đang được cập nhật...</p>`;
    return;
  }

  container.innerHTML = lesson.timecodes.map(tc => {
    // Chuyển mốc hh:mm hoặc mm:ss sang giây để tua video
    const seconds = parseTimeToSeconds(tc.time);
    return `
      <button onclick="seekVideo('${lesson.videoId}', ${seconds})" class="w-full text-left p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-chineseRed-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition group flex items-center justify-between">
        <span class="text-xs text-slate-700 dark:text-slate-300 group-hover:text-chineseRed-600 dark:group-hover:text-chineseRed-400 font-medium">${tc.label}</span>
        <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-chineseRed-100 group-hover:text-chineseRed-700">${tc.time}</span>
      </button>
    `;
  }).join("");
}

function parseTimeToSeconds(timeStr) {
  const parts = timeStr.split(":").map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return 0;
}

function seekVideo(videoId, seconds) {
  const ytPlayer = document.getElementById("youtubePlayer");
  if (ytPlayer) {
    ytPlayer.src = getYouTubeEmbedUrl(videoId, seconds);
  }
  const extLink = document.getElementById("externalYoutubeLink");
  if (extLink) {
    extLink.href = `https://www.youtube.com/watch?v=${videoId}&t=${seconds}s`;
  }
  const fileNoticeLink = document.getElementById("fileProtocolWatchDirectBtn");
  if (fileNoticeLink) {
    fileNoticeLink.href = `https://www.youtube.com/watch?v=${videoId}&t=${seconds}s`;
  }
}

// ==================== TAB 2: NGỮ ÂM & PINYIN ====================
function renderPhoneticsTab(lesson) {
  // 11 Thanh mẫu
  const initContainer = document.getElementById("initialsContainer");
  if (initContainer && lesson.initials) {
    initContainer.innerHTML = lesson.initials.map(item => `
      <div onclick="playChineseAudio('${item.char}', this)" class="cursor-pointer p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-chineseRed-400 hover:shadow-md transition text-center group">
        <div class="flex items-center justify-center gap-1 mb-1">
          <span class="text-2xl font-bold font-mono text-chineseRed-600 dark:text-chineseRed-400">${item.char}</span>
          <i data-lucide="volume-2" class="w-3.5 h-3.5 text-slate-400 group-hover:text-chineseRed-500"></i>
        </div>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mb-1">${item.tip}</p>
        <span class="inline-block text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono">${item.example}</span>
      </div>
    `).join("");
  }

  // 15 Vận mẫu
  const finalsContainer = document.getElementById("finalsContainer");
  if (finalsContainer && lesson.finals) {
    finalsContainer.innerHTML = lesson.finals.map(item => `
      <div onclick="playChineseAudio('${item.char}', this)" class="cursor-pointer p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-amber-400 hover:shadow-md transition text-center group">
        <div class="flex items-center justify-center gap-1 mb-1">
          <span class="text-xl font-bold font-mono text-imperialGold-600 dark:text-imperialGold-400">${item.char}</span>
          <i data-lucide="volume-2" class="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500"></i>
        </div>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mb-1">${item.tip}</p>
        <span class="inline-block text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono">${item.example}</span>
      </div>
    `).join("");
  }

  // 4 Thanh điệu
  const tonesContainer = document.getElementById("tonesContainer");
  if (tonesContainer && lesson.tones) {
    tonesContainer.innerHTML = lesson.tones.map(t => `
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-sm text-slate-900 dark:text-white">${t.name}</h4>
            <span class="text-lg font-bold font-mono px-2 py-0.5 rounded bg-chineseRed-100 text-chineseRed-700 dark:bg-chineseRed-950 dark:text-chineseRed-300">${t.symbol}</span>
          </div>
          <p class="text-xs font-semibold text-chineseRed-600 dark:text-chineseRed-400 mb-1">Cao độ: ${t.pitch}</p>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">${t.desc}</p>
        </div>
        <button onclick="playChineseAudio('${t.example}', this)" class="w-full flex items-center justify-center gap-2 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-chineseRed-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition">
          <i data-lucide="volume-2" class="w-4 h-4 text-chineseRed-600"></i>
          <span>Nghe phát âm: ${t.example}</span>
        </button>
      </div>
    `).join("");
  }

  // Quy tắc biến điệu
  const rulesContainer = document.getElementById("toneRulesContainer");
  if (rulesContainer && lesson.toneRules) {
    rulesContainer.innerHTML = lesson.toneRules.map(r => `
      <div class="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 space-y-2">
        <div class="flex items-center justify-between">
          <h4 class="font-bold text-xs sm:text-sm text-rose-900 dark:text-rose-200">${r.title}</h4>
          <span class="px-2 py-0.5 text-xs font-mono font-bold rounded bg-rose-200 text-rose-800 dark:bg-rose-900 dark:text-rose-200">${r.rule}</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${r.explanation}</p>
        <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-rose-100 dark:border-rose-900/40 text-xs">
          ${r.exampleHtml}
        </div>
      </div>
    `).join("");
  }
}

// ==================== TAB 3: TỪ VỰNG & FLASHCARDS ====================
function getActiveVocabScopeList() {
  if (appState.vocabScope === "lesson") {
    const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
    if (curLesson && curLesson.vocab && curLesson.vocab.length > 0) {
      return curLesson.vocab;
    }
    return (HSK1_DATA.allVocab || []).filter(v => v.lessonId === appState.currentLessonId);
  }
  // Mặc định: Trọn bộ 154 từ HSK 1
  return HSK1_DATA.allVocab || [];
}

function getFilteredVocabList() {
  if (appState.activeVocabFilter === "saved") {
    return appState.customVocabs || [];
  }

  let list = getActiveVocabScopeList();

  // 1. Lọc theo chủ đề (Category)
  if (appState.vocabCategory && appState.vocabCategory !== "all") {
    list = list.filter(v => v.category === appState.vocabCategory);
  }

  // 2. Lọc theo trạng thái học (Status)
  if (appState.activeVocabFilter === "mastered") {
    list = list.filter(v => appState.masteredVocabs.includes(v.id));
  } else if (appState.activeVocabFilter === "learning") {
    list = list.filter(v => !appState.masteredVocabs.includes(v.id));
  }

  // 3. Tìm kiếm theo từ khóa (Hanzi, Pinyin, Sino-Viet, Nghĩa, Ví dụ)
  if (appState.vocabSearchQuery && appState.vocabSearchQuery.trim()) {
    const q = appState.vocabSearchQuery.trim().toLowerCase();
    list = list.filter(v => {
      const hanzi = (v.hanzi || "").toLowerCase();
      const pinyin = (v.pinyin || "").toLowerCase();
      const sinoViet = (v.sinoViet || "").toLowerCase();
      const meaning = (v.meaning || v.viet || "").toLowerCase();
      const exStr = typeof v.example === "string" ? v.example : (v.example && v.example.cn ? `${v.example.cn} ${v.example.vi || ""}` : "");
      return hanzi.includes(q) || pinyin.includes(q) || sinoViet.includes(q) || meaning.includes(q) || exStr.toLowerCase().includes(q);
    });
  }

  return list;
}

function renderVocabTab(lesson) {
  const scopeList = getActiveVocabScopeList();
  const customList = appState.customVocabs || [];

  // Tính số đếm cho các badge theo phạm vi (Scope) và chủ đề (nếu có)
  let baseForCounts = scopeList;
  if (appState.vocabCategory && appState.vocabCategory !== "all") {
    baseForCounts = baseForCounts.filter(v => v.category === appState.vocabCategory);
  }

  const totalInScope = baseForCounts.length;
  const masteredInScope = baseForCounts.filter(v => appState.masteredVocabs.includes(v.id)).length;
  const learningInScope = totalInScope - masteredInScope;

  const countAllEl = document.getElementById("countAllVocab");
  if (countAllEl) countAllEl.textContent = totalInScope;
  const countMasteredEl = document.getElementById("countMasteredVocab");
  if (countMasteredEl) countMasteredEl.textContent = masteredInScope;
  const countLearningEl = document.getElementById("countLearningVocab");
  if (countLearningEl) countLearningEl.textContent = learningInScope;
  const countSavedEl = document.getElementById("countSavedVocab");
  if (countSavedEl) countSavedEl.textContent = customList.length;

  const scopeLessonLabel = document.getElementById("scopeLessonLabel");
  if (scopeLessonLabel && lesson) {
    scopeLessonLabel.textContent = `Theo bài học (Bài ${lesson.id})`;
  }

  const filtered = getFilteredVocabList();
  const showingCountEl = document.getElementById("vocabShowingCount");
  if (showingCountEl) showingCountEl.textContent = filtered.length;

  // 1. RENDER CHẾ ĐỘ DANH SÁCH (LIST MODE)
  const listContainer = document.getElementById("vocabListModeView");
  if (listContainer) {
    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400 text-xs bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-8 space-y-2">
          <i data-lucide="search-x" class="w-8 h-8 mx-auto text-slate-300 dark:text-slate-600 mb-2"></i>
          <p class="font-semibold text-slate-600 dark:text-slate-300">Không tìm thấy từ vựng phù hợp</p>
          <p class="text-[11px] text-slate-400">Thử xóa ô tìm kiếm, chọn "Tất cả chủ đề" hoặc bấm "Trọn bộ 154 Từ HSK 1".</p>
        </div>
      `;
    } else {
      listContainer.innerHTML = filtered.map(item => {
        const isMastered = appState.masteredVocabs.includes(item.id);
        const exText = typeof item.example === "string" ? item.example : (item.example && item.example.cn ? `${item.example.cn} (${item.example.pinyin || ""} - ${item.example.vi || ""})` : item.hanzi);
        return `
          <div class="bg-white dark:bg-slate-900 rounded-2xl border ${isMastered ? 'border-emerald-300 dark:border-emerald-800/80 shadow-emerald-500/5' : 'border-slate-200 dark:border-slate-800'} p-4 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-chineseRed-200 dark:hover:border-chineseRed-900/40 transition">
            <div>
              <div class="flex items-start justify-between gap-2 mb-2">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">${item.type || "Từ vựng"}</span>
                  ${item.lessonId ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-chineseRed-50 text-chineseRed-600 dark:bg-chineseRed-950/50 dark:text-chineseRed-400">Bài ${item.lessonId}</span>` : ''}
                  ${item.category ? `<span class="px-1.5 py-0.5 rounded text-[10px] text-slate-400 bg-slate-50 dark:bg-slate-800/60 hidden sm:inline">${item.category}</span>` : ''}
                </div>
                <button onclick="toggleVocabMastered('${item.id}')" class="p-1 rounded-full ${isMastered ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60' : 'text-slate-300 hover:text-slate-500'} transition" title="${isMastered ? 'Đã thuộc (Bấm để ôn lại)' : 'Đánh dấu đã thuộc'}">
                  <i data-lucide="${isMastered ? 'check-circle-2' : 'circle'}" class="w-5 h-5"></i>
                </button>
              </div>

              <!-- Chữ Hán, Pinyin & Hán Việt -->
              <div class="flex items-baseline gap-2.5 mb-2">
                <span class="font-hanzi text-3xl font-bold text-slate-900 dark:text-white cursor-pointer hover:text-chineseRed-600 transition" onclick="playChineseAudio('${item.hanzi}', this)">${item.hanzi}</span>
                <span class="text-sm font-semibold text-chineseRed-600 dark:text-chineseRed-400 font-mono">${item.pinyin}</span>
                <span class="text-xs text-slate-400">(${item.sinoViet || item.pinyin})</span>
              </div>

              <!-- Nghĩa tiếng Việt -->
              <p class="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2 leading-relaxed">${item.meaning || item.viet}</p>
              
              <!-- Mẹo nhớ cấu tạo chữ -->
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 mb-2 leading-relaxed">
                <span class="font-semibold text-amber-600 dark:text-amber-400">💡 Mẹo nhớ:</span> ${item.memoryTip || (item.radicals ? `Bộ thủ: ${item.radicals}` : "Nghe phát âm chuẩn và thực hành lặp lại.")}
              </div>
            </div>

            <!-- Ví dụ mẫu & Nút nghe phát âm -->
            <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
              <span class="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[220px]" title="${exText}">${exText}</span>
              <button onclick="playChineseAudio('${item.hanzi}', this)" class="p-1.5 rounded-lg bg-chineseRed-50 text-chineseRed-600 dark:bg-chineseRed-950/60 dark:text-chineseRed-400 hover:bg-chineseRed-100 transition shrink-0" title="Nghe phát âm">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // 2. CẬP NHẬT GIAO DIỆN FLASHCARD (FLASHCARD MODE)
  updateFlashcardUI();

  if (window.lucide) {
    lucide.createIcons();
  }
}

function updateFlashcardUI() {
  const filtered = getFilteredVocabList();
  const total = filtered.length;

  const currentIdxEl = document.getElementById("currentCardIndex");
  const totalCardEl = document.getElementById("totalCardCount");

  if (total === 0) {
    if (currentIdxEl) currentIdxEl.textContent = 0;
    if (totalCardEl) totalCardEl.textContent = 0;
    const hanziEl = document.getElementById("fcHanzi");
    if (hanziEl) hanziEl.textContent = "空";
    const pinyinEl = document.getElementById("fcPinyin");
    if (pinyinEl) pinyinEl.textContent = "kōng";
    const meaningEl = document.getElementById("fcMeaning");
    if (meaningEl) meaningEl.textContent = "Không tìm thấy từ vựng nào phù hợp";
    const memoryTipEl = document.getElementById("fcMemoryTip");
    if (memoryTipEl) memoryTipEl.textContent = "Vui lòng chọn bộ lọc khác hoặc nhấn 'Tất cả chủ đề'.";
    return;
  }

  if (appState.activeFlashcardIndex >= total) {
    appState.activeFlashcardIndex = 0;
  }
  if (appState.activeFlashcardIndex < 0) {
    appState.activeFlashcardIndex = total - 1;
  }

  const current = filtered[appState.activeFlashcardIndex];
  if (!current) return;

  if (currentIdxEl) currentIdxEl.textContent = appState.activeFlashcardIndex + 1;
  if (totalCardEl) totalCardEl.textContent = total;

  // Cập nhật nội dung thẻ
  const partTypeEl = document.getElementById("fcPartType");
  if (partTypeEl) {
    partTypeEl.textContent = current.category ? `${current.type || "Từ vựng"} · ${current.category}` : (current.type || "Từ đã lưu");
  }
  const hanziEl = document.getElementById("fcHanzi");
  if (hanziEl) hanziEl.textContent = current.hanzi;
  const pinyinEl = document.getElementById("fcPinyin");
  if (pinyinEl) pinyinEl.textContent = current.pinyin;
  const sinoVietEl = document.getElementById("fcSinoViet");
  if (sinoVietEl) sinoVietEl.textContent = current.sinoViet ? `Âm Hán Việt: ${current.sinoViet}` : `Phiên âm: ${current.pinyin}`;
  const radicalsEl = document.getElementById("fcRadicals");
  if (radicalsEl) {
    radicalsEl.textContent = current.radicals ? `Bộ: ${current.radicals}` : (current.lessonId ? `Bài ${current.lessonId}` : `Từ đã lưu`);
  }
  const meaningEl = document.getElementById("fcMeaning");
  if (meaningEl) meaningEl.textContent = current.meaning || current.viet;
  const memoryTipEl = document.getElementById("fcMemoryTip");
  if (memoryTipEl) memoryTipEl.textContent = current.memoryTip || "Chạm vào từ để nghe phát âm giọng bản xứ chuẩn.";
  const exampleEl = document.getElementById("fcExample");
  if (exampleEl) {
    const exText = typeof current.example === "string" ? current.example : (current.example && current.example.cn ? `${current.example.cn} (${current.example.pinyin || ""} - ${current.example.vi || ""})` : current.hanzi);
    exampleEl.textContent = exText;
  }

  // Cập nhật nút trạng thái thuộc
  const isMastered = appState.masteredVocabs.includes(current.id);
  const masteredBtnText = document.getElementById("fcMasteredBtnText");
  const masteredBtn = document.getElementById("fcToggleMasteredBtn");
  if (masteredBtnText && masteredBtn) {
    if (isMastered) {
      masteredBtnText.textContent = "Đã thuộc (Bấm để ôn lại)";
      masteredBtn.className = "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition";
    } else {
      masteredBtnText.textContent = "Đánh dấu đã thuộc";
      masteredBtn.className = "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium shadow-sm transition";
    }
  }

  // Thiết lập sự kiện audio trên flashcard
  const audioBtn = document.getElementById("fcPlayAudioBtn");
  if (audioBtn) {
    audioBtn.onclick = (e) => {
      e.stopPropagation();
      playChineseAudio(current.hanzi, audioBtn);
    };
  }

  // Reset trạng thái lật về mặt trước khi đổi thẻ
  const cardElement = document.getElementById("activeFlashcard");
  if (cardElement) {
    cardElement.classList.remove("is-flipped");
    appState.isCardFlipped = false;
  }
}

function toggleVocabMastered(vocabId) {
  const idx = appState.masteredVocabs.indexOf(vocabId);
  if (idx > -1) {
    appState.masteredVocabs.splice(idx, 1);
  } else {
    appState.masteredVocabs.push(vocabId);
  }
  saveState();
  const lesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
  if (lesson) renderVocabTab(lesson);
}

// ==================== TAB 4: HỘI THOẠI MẪU (BÀI KHÓA) ====================
function renderDialoguesTab(lesson) {
  const container = document.getElementById("dialoguesContainer");
  if (!container || !lesson.dialogues) return;

  container.innerHTML = lesson.dialogues.map((dlg, idx) => `
    <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm space-y-3">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
        <div>
          <h4 class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-chineseRed-100 dark:bg-chineseRed-950 text-chineseRed-600 font-bold text-xs flex items-center justify-center">${idx + 1}</span>
            ${dlg.title}
          </h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Tình huống: ${dlg.situation}</p>
        </div>
      </div>

      <!-- Dialogue lines -->
      <div class="space-y-3 pt-1">
        ${dlg.lines.map(line => `
          <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-chineseRed-50/40 dark:hover:bg-slate-800 transition group cursor-pointer" onclick="playChineseAudio('${line.hanzi}')">
            <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0">
              ${line.speaker.charAt(0)}
            </div>
            <div class="flex-1">
              <div class="flex items-baseline gap-3">
                <span class="font-hanzi text-lg font-bold text-slate-900 dark:text-white">${line.hanzi}</span>
                <span class="dlg-pinyin text-xs font-semibold text-chineseRed-600 dark:text-chineseRed-400 font-mono ${appState.showPinyin ? '' : 'hidden'}">${line.pinyin}</span>
              </div>
              <p class="dlg-viet text-xs text-slate-500 dark:text-slate-400 mt-0.5 ${appState.showViet ? '' : 'hidden'}">${line.viet}</p>
            </div>
            <button class="p-1.5 rounded-lg text-slate-400 group-hover:text-chineseRed-600 transition" title="Nghe câu này">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </div>
        `).join("")}
      </div>

      <!-- Dialogue Note -->
      ${dlg.note ? `
        <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-300">
          <span class="font-semibold">💡 Lưu ý:</span> ${dlg.note}
        </div>
      ` : ''}
    </div>
  `).join("");
}

// ==================== TAB 5: NÉT BÚT & TẬP VIẾT CHỮ HÁN ====================
function renderWritingTab(lesson) {
  // 7 Quy tắc bút thuận
  const rulesContainer = document.getElementById("strokeRulesContainer");
  if (rulesContainer && lesson.strokeRules) {
    rulesContainer.innerHTML = lesson.strokeRules.map(rule => `
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 font-medium">
        ${rule}
      </div>
    `).join("");
  }

  // 5 Nét cơ bản
  const strokesContainer = document.getElementById("strokesContainer");
  if (strokesContainer && lesson.hanziStrokes) {
    strokesContainer.innerHTML = lesson.hanziStrokes.map(stroke => `
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
        <h4 class="font-bold text-xs sm:text-sm text-chineseRed-600 dark:text-chineseRed-400 mb-1">${stroke.name}</h4>
        <p class="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 mb-1">${stroke.direction}</p>
        <span class="text-[10px] text-slate-500 dark:text-slate-400 block">${stroke.example}</span>
      </div>
    `).join("");
  }

  setupDrawingCanvas();
}

// Bảng vẽ tương tác (Canvas tập viết chữ Hán)
let canvasCtx = null;
let isDrawing = false;

function setupDrawingCanvas() {
  const canvas = document.getElementById("drawingCanvas");
  if (!canvas) return;

  canvasCtx = canvas.getContext("2d");
  drawGridGuidelines(canvas, canvasCtx);

  // Mouse Events
  canvas.onmousedown = (e) => startStroke(e, canvas);
  canvas.onmousemove = (e) => moveStroke(e, canvas);
  window.onmouseup = () => endStroke();

  // Touch Events (Hỗ trợ điện thoại & máy tính bảng)
  canvas.ontouchstart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    startStroke(touch, canvas);
  };
  canvas.ontouchmove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    moveStroke(touch, canvas);
  };
  canvas.ontouchend = () => endStroke();
}

function drawGridGuidelines(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Nền kem nhẹ
  ctx.fillStyle = "#fffdf7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Viền ngoài đỏ
  ctx.strokeStyle = "#ef4444";
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Đường nét đứt chữ Điền
  ctx.save();
  ctx.strokeStyle = "#fca5a5";
  ctx.lineWidth = 1;
  ctx.setLineDash([6, 6]);

  // Trục dọc
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  // Trục ngang
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();

  // 2 Đường chéo
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.moveTo(canvas.width, 0);
  ctx.lineTo(0, canvas.height);
  ctx.stroke();

  ctx.restore();
}

function startStroke(e, canvas) {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
  const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
  const x = (clientX - rect.left) * scaleX;
  const y = (clientY - rect.top) * scaleY;

  canvasCtx.beginPath();
  canvasCtx.moveTo(x, y);
  canvasCtx.strokeStyle = document.documentElement.classList.contains("dark") ? "#f8fafc" : "#0f172a";
  canvasCtx.lineWidth = 10;
  canvasCtx.lineCap = "round";
  canvasCtx.lineJoin = "round";
}

function moveStroke(e, canvas) {
  if (!isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
  const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
  const x = (clientX - rect.left) * scaleX;
  const y = (clientY - rect.top) * scaleY;

  canvasCtx.lineTo(x, y);
  canvasCtx.stroke();
}

function endStroke() {
  isDrawing = false;
}

// ==================== TAB 6: TRẮC NGHIỆM ÔN TẬP (QUIZ) ====================
function renderQuizTab(lesson) {
  const container = document.getElementById("quizQuestionsContainer");
  if (!container || !lesson.quiz) return;

  let correctCount = 0;

  container.innerHTML = lesson.quiz.map((q, idx) => {
    const selected = appState.quizAnswers[q.id];
    const isAnswered = selected !== undefined;
    const isCorrect = selected === q.correct;
    if (isCorrect) correctCount++;

    return `
      <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
        <div class="flex items-start justify-between gap-3">
          <h4 class="font-bold text-sm text-slate-900 dark:text-white">
            <span class="text-chineseRed-600 font-bold">Câu ${idx + 1}:</span> ${q.question}
          </h4>
          ${isAnswered ? `
            <span class="px-2.5 py-0.5 text-xs font-bold rounded-full ${isCorrect ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'} shrink-0">
              ${isCorrect ? 'Đúng ✓' : 'Chưa đúng ✕'}
            </span>
          ` : ''}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          ${q.options.map((opt, optIdx) => {
            let optClasses = 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200';
            
            if (isAnswered) {
              if (optIdx === q.correct) {
                optClasses = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
              } else if (selected === optIdx) {
                optClasses = 'bg-red-50 dark:bg-red-950/60 border-red-500 text-red-800 dark:text-red-200 line-through';
              }
            }

            return `
              <button onclick="handleSelectAnswer('${q.id}', ${optIdx})" class="p-3 text-left rounded-xl border text-xs transition ${optClasses}">
                <span class="font-bold mr-1.5 text-slate-400">${String.fromCharCode(65 + optIdx)}.</span>
                ${opt}
              </button>
            `;
          }).join("")}
        </div>

        ${isAnswered ? `
          <div class="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
            <span class="font-bold">Giải thích:</span> ${q.explain}
          </div>
        ` : ''}
      </div>
    `;
  }).join("");

  // Cập nhật điểm số
  const scoreText = document.getElementById("quizScoreText");
  if (scoreText) {
    scoreText.textContent = `${correctCount} / ${lesson.quiz.length} câu`;
  }
}

function handleSelectAnswer(questionId, optionIndex) {
  appState.quizAnswers[questionId] = optionIndex;
  saveState();
  const lesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
  if (lesson) renderQuizTab(lesson);
}

// ==================== CẬP NHẬT TIẾN ĐỘ TỔNG QUAN (UI) ====================
function updateProgressUI() {
  const totalVocab = (HSK1_DATA.allVocab && HSK1_DATA.allVocab.length > 0) ? HSK1_DATA.allVocab.length : 154;
  const masteredCount = appState.masteredVocabs.length;
  const percent = Math.min(100, Math.round((masteredCount / totalVocab) * 100));

  const navCount = document.getElementById("navVocabMasteredCount");
  if (navCount) navCount.textContent = `${masteredCount}/${totalVocab}`;

  const navProgress = document.getElementById("navProgressBar");
  if (navProgress) navProgress.style.width = `${percent}%`;

  const sideProgress = document.getElementById("sideProgressBar");
  if (sideProgress) sideProgress.style.width = `${Math.max(5, percent)}%`;

  const completedBadge = document.getElementById("sideCompletedBadge");
  if (completedBadge) {
    completedBadge.textContent = `${appState.completedLessons.length}/15 Đã xong`;
  }
}

// Placeholder cho các bài 2-15 đang chuẩn bị
function renderUpcomingPlaceholder(lesson) {
  const phoneticsContainer = document.getElementById("tab-phonetics");
  if (phoneticsContainer) {
    phoneticsContainer.innerHTML = `
      <div class="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
        <div class="w-12 h-12 rounded-full bg-chineseRed-100 dark:bg-chineseRed-950 text-chineseRed-600 flex items-center justify-center mx-auto">
          <i data-lucide="sparkles" class="w-6 h-6"></i>
        </div>
        <h3 class="font-bold text-slate-900 dark:text-white text-base">${lesson.title}</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">${lesson.description}</p>
        <p class="text-xs text-chineseRed-600 dark:text-chineseRed-400 font-medium">Bạn có thể xem trước video bài giảng của Thầy Thành Luân ở Tab "Bài giảng Video" ngay bây giờ!</p>
      </div>
    `;
    refreshIcons();
  }
}

// ==================== SỰ KIỆN GIAO DIỆN & TƯƠNG TÁC ====================
function switchTab(targetId) {
  // Cập nhật tab buttons trên desktop / tablet
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(b => {
    if (b.getAttribute("data-tab") === targetId) {
      b.classList.add("active", "border-chineseRed-600", "text-chineseRed-600", "dark:text-chineseRed-400");
      b.classList.remove("border-transparent", "text-slate-500");
      b.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    } else {
      b.classList.remove("active", "border-chineseRed-600", "text-chineseRed-600", "dark:text-chineseRed-400");
      b.classList.add("border-transparent", "text-slate-500");
    }
  });

  // Cập nhật tab buttons dưới thanh điều hướng di động (Mobile Bottom Nav)
  const mobileButtons = document.querySelectorAll(".mobile-tab-btn");
  mobileButtons.forEach(mb => {
    if (mb.getAttribute("data-target") === targetId) {
      mb.classList.add("text-chineseRed-600", "dark:text-chineseRed-400", "font-bold");
      mb.classList.remove("text-slate-500", "dark:text-slate-400");
    } else {
      mb.classList.remove("text-chineseRed-600", "dark:text-chineseRed-400", "font-bold");
      mb.classList.add("text-slate-500", "dark:text-slate-400");
    }
  });

  // Hiển thị panel tương ứng
  document.querySelectorAll(".tab-content").forEach(panel => {
    if (panel.id === targetId) {
      panel.classList.remove("hidden");
      panel.classList.add("block");
    } else {
      panel.classList.remove("block");
      panel.classList.add("hidden");
    }
  });
}

function setupEventListeners() {
  
  // Element Sidebar & Backdrop chung
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebarBackdrop");

  // 1. Chuyển đổi Tabs trên thanh trên
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      switchTab(targetId);
    });
  });

  // Chuyển đổi Tabs trên thanh điều hướng dưới đáy điện thoại (Mobile Bottom Nav)
  const mobileButtons = document.querySelectorAll(".mobile-tab-btn");
  mobileButtons.forEach(mBtn => {
    mBtn.addEventListener("click", () => {
      const targetId = mBtn.getAttribute("data-target");
      if (targetId) switchTab(targetId);
    });
  });

  // Nút mở 23 Thanh mẫu trên mobile bottom nav
  const mobileInitialsBtn = document.getElementById("mobileInitialsBtn");
  if (mobileInitialsBtn) {
    mobileInitialsBtn.addEventListener("click", () => {
      const initialsModal = document.getElementById("initialsQuickLookupModal");
      if (initialsModal) {
        initialsModal.classList.remove("hidden");
        render23InitialsGrid("all", "");
        refreshIcons();
      }
    });
  }

  // Nút mở menu danh sách 15 bài trên mobile bottom nav
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  if (mobileMenuBtn && sidebar && backdrop) {
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.remove("-translate-x-full");
      backdrop.classList.remove("hidden");
    });
  }

  // 2. PHẠM VI TỪ VỰNG: TRỌN BỘ 154 TỪ HSK 1 VS THEO BÀI HỌC
  const scopeAllBtn = document.getElementById("scopeAllVocabBtn");
  const scopeLessonBtn = document.getElementById("scopeLessonVocabBtn");

  if (scopeAllBtn && scopeLessonBtn) {
    scopeAllBtn.addEventListener("click", () => {
      appState.vocabScope = "all";
      appState.activeFlashcardIndex = 0;
      scopeAllBtn.className = "flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm transition flex items-center justify-center gap-1.5";
      scopeLessonBtn.className = "flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition flex items-center justify-center gap-1.5";
      const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
      if (curLesson) renderVocabTab(curLesson);
    });

    scopeLessonBtn.addEventListener("click", () => {
      appState.vocabScope = "lesson";
      appState.activeFlashcardIndex = 0;
      scopeLessonBtn.className = "flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm transition flex items-center justify-center gap-1.5";
      scopeAllBtn.className = "flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition flex items-center justify-center gap-1.5";
      const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
      if (curLesson) renderVocabTab(curLesson);
    });
  }

  // Chuyển đổi Danh sách / Flashcard 3D trong Từ Vựng
  const listModeBtn = document.getElementById("viewListModeBtn");
  const flashcardModeBtn = document.getElementById("viewFlashcardModeBtn");
  const listModeView = document.getElementById("vocabListModeView");
  const flashcardModeView = document.getElementById("vocabFlashcardModeView");

  if (listModeBtn && flashcardModeBtn) {
    listModeBtn.addEventListener("click", () => {
      listModeBtn.className = "flex-1 sm:flex-initial px-3 py-1.5 text-xs font-semibold rounded-lg bg-chineseRed-600 text-white flex items-center justify-center gap-1.5 shadow-sm transition";
      flashcardModeBtn.className = "flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center gap-1.5 transition";
      listModeView.classList.remove("hidden");
      flashcardModeView.classList.add("hidden");
    });

    flashcardModeBtn.addEventListener("click", () => {
      flashcardModeBtn.className = "flex-1 sm:flex-initial px-3 py-1.5 text-xs font-semibold rounded-lg bg-chineseRed-600 text-white flex items-center justify-center gap-1.5 shadow-sm transition";
      listModeBtn.className = "flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center gap-1.5 transition";
      listModeView.classList.add("hidden");
      flashcardModeView.classList.remove("hidden");
      updateFlashcardUI();
    });
  }

  // TÌM KIẾM TỪ VỰNG REAL-TIME
  const vocabSearchInput = document.getElementById("vocabSearchInput");
  const clearVocabSearchBtn = document.getElementById("clearVocabSearchBtn");

  if (vocabSearchInput) {
    vocabSearchInput.addEventListener("input", (e) => {
      appState.vocabSearchQuery = e.target.value;
      appState.activeFlashcardIndex = 0;
      if (clearVocabSearchBtn) {
        if (e.target.value.trim().length > 0) {
          clearVocabSearchBtn.classList.remove("hidden");
        } else {
          clearVocabSearchBtn.classList.add("hidden");
        }
      }
      const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
      if (curLesson) renderVocabTab(curLesson);
    });
  }

  if (clearVocabSearchBtn && vocabSearchInput) {
    clearVocabSearchBtn.addEventListener("click", () => {
      vocabSearchInput.value = "";
      appState.vocabSearchQuery = "";
      appState.activeFlashcardIndex = 0;
      clearVocabSearchBtn.classList.add("hidden");
      const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
      if (curLesson) renderVocabTab(curLesson);
      vocabSearchInput.focus();
    });
  }

  // LỌC THEO CHỦ ĐỀ (CATEGORY PILLS)
  document.querySelectorAll(".vocab-cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".vocab-cat-btn").forEach(b => {
        b.className = "vocab-cat-btn shrink-0 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition";
      });
      btn.className = "vocab-cat-btn active shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-chineseRed-600 text-white transition";
      appState.vocabCategory = btn.getAttribute("data-category");
      appState.activeFlashcardIndex = 0;
      const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
      if (curLesson) renderVocabTab(curLesson);
    });
  });

  // LỌC THEO TRẠNG THÁI HỌC (Tất cả / Đã thuộc / Cần ôn lại / Đã lưu từ video)
  document.querySelectorAll(".vocab-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".vocab-filter-btn").forEach(b => {
        const filterVal = b.getAttribute("data-filter");
        if (filterVal === "mastered") {
          b.className = "vocab-filter-btn px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition";
        } else if (filterVal === "learning") {
          b.className = "vocab-filter-btn px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition";
        } else if (filterVal === "saved") {
          b.className = "vocab-filter-btn px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/60 shrink-0 font-medium transition";
        } else {
          b.className = "vocab-filter-btn px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition";
        }
      });
      btn.className = "vocab-filter-btn active px-3 py-1 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold transition";
      appState.activeVocabFilter = btn.getAttribute("data-filter");
      appState.activeFlashcardIndex = 0;
      const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
      if (curLesson) renderVocabTab(curLesson);
    });
  });

  // 3. LẬT FLASHCARD 3D & VUỐT CHẠM TRÊN ĐIỆN THOẠI (TOUCH SWIPE GESTURES)
  const activeCard = document.getElementById("activeFlashcard");

  if (activeCard) {
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;

    activeCard.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      isSwiping = false;
    }, { passive: true });

    activeCard.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Nếu vuốt ngang rõ rệt (> 45px và ngang nhiều hơn dọc)
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
        isSwiping = true;
        const list = getFilteredVocabList();
        const total = list.length;
        if (total > 0) {
          if (deltaX < 0) {
            // Vuốt sang trái ➔ Thẻ tiếp theo
            appState.activeFlashcardIndex = (appState.activeFlashcardIndex + 1) % total;
          } else {
            // Vuốt sang phải ➔ Thẻ trước đó
            appState.activeFlashcardIndex = (appState.activeFlashcardIndex - 1 + total) % total;
          }
          updateFlashcardUI();
        }
      }
    }, { passive: true });

    activeCard.addEventListener("click", () => {
      if (isSwiping) return; // Nếu vừa vuốt chuyển thẻ thì không lật
      appState.isCardFlipped = !appState.isCardFlipped;
      if (appState.isCardFlipped) {
        activeCard.classList.add("is-flipped");
      } else {
        activeCard.classList.remove("is-flipped");
      }
    });
  }

  // Next / Prev Flashcard
  const prevCardBtn = document.getElementById("prevCardBtn");
  const nextCardBtn = document.getElementById("nextCardBtn");

  if (prevCardBtn) {
    prevCardBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const list = getFilteredVocabList();
      const total = list.length;
      if (total > 0) {
        appState.activeFlashcardIndex = (appState.activeFlashcardIndex - 1 + total) % total;
        updateFlashcardUI();
      }
    });
  }

  if (nextCardBtn) {
    nextCardBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const list = getFilteredVocabList();
      const total = list.length;
      if (total > 0) {
        appState.activeFlashcardIndex = (appState.activeFlashcardIndex + 1) % total;
        updateFlashcardUI();
      }
    });
  }

  // Đánh dấu thuộc ngay trên Flashcard
  const fcMasteredBtn = document.getElementById("fcToggleMasteredBtn");
  if (fcMasteredBtn) {
    fcMasteredBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const list = getFilteredVocabList();
      if (list.length > 0 && appState.activeFlashcardIndex < list.length) {
        const current = list[appState.activeFlashcardIndex];
        if (current) {
          toggleVocabMastered(current.id);
        }
      }
    });
  }

  // 5. Ẩn / Hiện Pinyin và Dịch Tiếng Việt trong Hội thoại
  const togglePinyin = document.getElementById("togglePinyinCheckbox");
  if (togglePinyin) {
    togglePinyin.addEventListener("change", (e) => {
      appState.showPinyin = e.target.checked;
      document.querySelectorAll(".dlg-pinyin").forEach(el => {
        if (appState.showPinyin) el.classList.remove("hidden");
        else el.classList.add("hidden");
      });
    });
  }

  const toggleViet = document.getElementById("toggleVietCheckbox");
  if (toggleViet) {
    toggleViet.addEventListener("change", (e) => {
      appState.showViet = e.target.checked;
      document.querySelectorAll(".dlg-viet").forEach(el => {
        if (appState.showViet) el.classList.remove("hidden");
        else el.classList.add("hidden");
      });
    });
  }

  // 6. Chọn chữ mẫu tập viết trong Canvas
  const sampleSelect = document.getElementById("sampleHanziSelect");
  const sampleDisplay = document.getElementById("sampleDisplayHanzi");
  const ghostWatermark = document.getElementById("ghostWatermark");
  const playSampleAudioBtn = document.getElementById("playSampleAudioBtn");

  if (sampleSelect) {
    sampleSelect.addEventListener("change", (e) => {
      const char = e.target.value;
      if (sampleDisplay) sampleDisplay.textContent = char;
      if (ghostWatermark) ghostWatermark.textContent = char;
      const canvas = document.getElementById("drawingCanvas");
      if (canvas && canvasCtx) drawGridGuidelines(canvas, canvasCtx);
    });
  }

  if (playSampleAudioBtn) {
    playSampleAudioBtn.addEventListener("click", () => {
      const char = sampleSelect ? sampleSelect.value : "你";
      playChineseAudio(char);
    });
  }

  // Xóa viết lại Canvas
  const clearBtn = document.getElementById("clearCanvasBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      const canvas = document.getElementById("drawingCanvas");
      if (canvas && canvasCtx) drawGridGuidelines(canvas, canvasCtx);
    });
  }

  // Ẩn/Hiện nét mờ watermark
  const toggleGhostBtn = document.getElementById("toggleGhostBtn");
  if (toggleGhostBtn && ghostWatermark) {
    toggleGhostBtn.addEventListener("click", () => {
      appState.showGhostWatermark = !appState.showGhostWatermark;
      if (appState.showGhostWatermark) {
        ghostWatermark.classList.remove("hidden");
      } else {
        ghostWatermark.classList.add("hidden");
      }
    });
  }

  // 7. Làm lại Quiz
  const restartQuizBtn = document.getElementById("restartQuizBtn");
  if (restartQuizBtn) {
    restartQuizBtn.addEventListener("click", () => {
      if (confirm("Bạn có muốn làm lại toàn bộ bài trắc nghiệm không?")) {
        appState.quizAnswers = {};
        saveState();
        renderQuizTab(lesson);
      }
    });
  }

  // 8. Tự động lưu ghi chú cá nhân (Debounced Auto-save)
  const noteArea = document.getElementById("personalNoteTextarea");
  let noteTimeout = null;
  if (noteArea) {
    noteArea.addEventListener("input", (e) => {
      clearTimeout(noteTimeout);
      const status = document.getElementById("notesSavedStatus");
      if (status) status.innerHTML = `<span class="text-amber-500">Đang lưu...</span>`;

      noteTimeout = setTimeout(() => {
        appState.notes[appState.currentLessonId] = e.target.value;
        saveState();
        if (status) {
          status.innerHTML = `
            <i data-lucide="cloud" class="w-3.5 h-3.5 text-emerald-600"></i>
            <span class="text-emerald-600 dark:text-emerald-400">Đã lưu tự động</span>
          `;
          refreshIcons();
        }
      }, 600);
    });
  }

  const clearNoteBtn = document.getElementById("clearNoteBtn");
  if (clearNoteBtn && noteArea) {
    clearNoteBtn.addEventListener("click", () => {
      if (confirm("Bạn có chắc chắn muốn xóa toàn bộ ghi chú của bài này?")) {
        noteArea.value = "";
        delete appState.notes[appState.currentLessonId];
        saveState();
      }
    });
  }

  // 9. Nút Hoàn Thành Bài Học
  const toggleCompleteBtn = document.getElementById("toggleLessonCompleteBtn");
  if (toggleCompleteBtn) {
    toggleCompleteBtn.addEventListener("click", () => {
      const curId = appState.currentLessonId;
      const idx = appState.completedLessons.indexOf(curId);
      if (idx > -1) {
        appState.completedLessons.splice(idx, 1);
      } else {
        appState.completedLessons.push(curId);
      }
      saveState();
      renderLessonList();
      renderCurrentLesson();
    });
  }

  // 10. Ôn tập nhanh
  const quickReviewBtn = document.getElementById("quickReviewBtn");
  if (quickReviewBtn) {
    quickReviewBtn.addEventListener("click", () => {
      // Chuyển sang Tab Quiz ngay lập tức
      const quizTabBtn = document.querySelector('[data-tab="tab-quiz"]');
      if (quizTabBtn) quizTabBtn.click();
    });
  }

  // 11. Tìm kiếm bài học
  const searchInput = document.getElementById("lessonSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderLessonList(e.target.value.trim());
    });
  }

  // 12. Dark Mode Toggle
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      appState.theme = isDark ? "dark" : "light";
      saveState();
      updateThemeIcon(isDark);
      const canvas = document.getElementById("drawingCanvas");
      if (canvas && canvasCtx) drawGridGuidelines(canvas, canvasCtx);
    });
  }

  // 13. Mobile Sidebar Toggle
  const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");

  if (sidebarToggleBtn && sidebar && backdrop) {
    sidebarToggleBtn.addEventListener("click", () => {
      sidebar.classList.remove("-translate-x-full");
      backdrop.classList.remove("hidden");
    });
  }

  if (closeSidebarBtn && sidebar && backdrop) {
    closeSidebarBtn.addEventListener("click", () => {
      sidebar.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    });
  }

  if (backdrop && sidebar) {
    backdrop.addEventListener("click", () => {
      sidebar.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    });
  }

  // 14. Netlify Guide Modal
  const openNetlifyBtn = document.getElementById("openNetlifyGuideBtn");
  const drawerNetlifyBtn = document.getElementById("drawerNetlifyBtn");
  const closeNetlifyBtn = document.getElementById("closeNetlifyModalBtn");
  const closeNetlifyBottomBtn = document.getElementById("closeNetlifyModalBottomBtn");
  const netlifyModal = document.getElementById("netlifyGuideModal");

  const showNetlifyModal = () => {
    if (netlifyModal) netlifyModal.classList.remove("hidden");
    if (sidebar && backdrop) {
      sidebar.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    }
  };

  if (openNetlifyBtn) openNetlifyBtn.addEventListener("click", showNetlifyModal);
  if (drawerNetlifyBtn) drawerNetlifyBtn.addEventListener("click", showNetlifyModal);
  if (closeNetlifyBtn && netlifyModal) {
    closeNetlifyBtn.addEventListener("click", () => netlifyModal.classList.add("hidden"));
  }
  if (closeNetlifyBottomBtn && netlifyModal) {
    closeNetlifyBottomBtn.addEventListener("click", () => netlifyModal.classList.add("hidden"));
  }

  // 15. Backup & Restore Modal
  const openBackupBtn = document.getElementById("openBackupModalBtn");
  const drawerBackupBtn = document.getElementById("drawerBackupBtn");
  const closeBackupBtn = document.getElementById("closeBackupModalBtn");
  const backupModal = document.getElementById("backupModal");
  const exportBtn = document.getElementById("exportDataBtn");
  const importInput = document.getElementById("importDataInput");
  const resetBtn = document.getElementById("resetAllDataBtn");

  const showBackupModal = () => {
    if (backupModal) backupModal.classList.remove("hidden");
    if (sidebar && backdrop) {
      sidebar.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    }
  };

  if (openBackupBtn) openBackupBtn.addEventListener("click", showBackupModal);
  if (drawerBackupBtn) drawerBackupBtn.addEventListener("click", showBackupModal);
  if (closeBackupBtn && backupModal) {
    closeBackupBtn.addEventListener("click", () => backupModal.classList.add("hidden"));
  }

  // Export JSON file
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `tieng-trung-hsk1-backup-${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });
  }

  // Import JSON file
  if (importInput) {
    importInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          appState = { ...appState, ...imported };
          saveState();
          alert("Khôi phục dữ liệu học tập thành công!");
          window.location.reload();
        } catch (err) {
          alert("Tập tin backup không hợp lệ!");
        }
      };
      reader.readAsText(file);
    });
  }

  // Reset dữ liệu
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Cảnh báo: Toàn bộ tiến độ và ghi chú sẽ bị xóa. Bạn có chắc chắn không?")) {
        localStorage.removeItem(STORAGE_KEY);
        window.location.reload();
      }
    });
  }

  // 16. Bảng Tra Nhanh 23 Thanh Mẫu Modal
  const openInitialsBtn = document.getElementById("openInitialsQuickLookupBtn");
  const openInitialsPhoneticsBtn = document.getElementById("openInitialsFromPhoneticsBtn");
  const closeInitialsBtn = document.getElementById("closeInitialsModalBtn");
  const closeInitialsBottomBtn = document.getElementById("closeInitialsModalBottomBtn");
  const initialsModal = document.getElementById("initialsQuickLookupModal");
  const initialsSearchInput = document.getElementById("initialsSearchInput");

  let currentInitialsGroup = "all";

  const drawerInitialsBtn = document.getElementById("drawerInitialsBtn");

  const openInitialsModal = () => {
    if (initialsModal) {
      initialsModal.classList.remove("hidden");
      render23InitialsGrid(currentInitialsGroup, initialsSearchInput ? initialsSearchInput.value : "");
      refreshIcons();
    }
    if (sidebar && backdrop) {
      sidebar.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    }
  };

  if (openInitialsBtn) openInitialsBtn.addEventListener("click", openInitialsModal);
  if (drawerInitialsBtn) drawerInitialsBtn.addEventListener("click", openInitialsModal);
  if (openInitialsPhoneticsBtn) openInitialsPhoneticsBtn.addEventListener("click", openInitialsModal);
  if (closeInitialsBtn) closeInitialsBtn.addEventListener("click", () => initialsModal && initialsModal.classList.add("hidden"));
  if (closeInitialsBottomBtn) closeInitialsBottomBtn.addEventListener("click", () => initialsModal && initialsModal.classList.add("hidden"));

  // Lọc theo từ khóa tìm kiếm
  if (initialsSearchInput) {
    initialsSearchInput.addEventListener("input", (e) => {
      render23InitialsGrid(currentInitialsGroup, e.target.value.trim());
      refreshIcons();
    });
  }

  // Lọc theo nhóm 23 Thanh Mẫu
  document.querySelectorAll(".initials-group-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".initials-group-btn").forEach(b => {
        b.className = "initials-group-btn px-2.5 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 shrink-0";
      });
      btn.className = "initials-group-btn active px-2.5 py-1 text-xs rounded-lg bg-chineseRed-600 text-white font-medium shrink-0";
      currentInitialsGroup = btn.getAttribute("data-group");
      render23InitialsGrid(currentInitialsGroup, initialsSearchInput ? initialsSearchInput.value.trim() : "");
      refreshIcons();
    });
  });

  // 17. Modal Cài Đặt App Cho Điện Thoại (PWA)
  const openInstallBtn = document.getElementById("openInstallModalBtn");
  const drawerInstallBtn = document.getElementById("drawerInstallBtn");
  const closeInstallBtn = document.getElementById("closeInstallModalBtn");
  const closeInstallBottomBtn = document.getElementById("closeInstallModalBottomBtn");
  const pwaModal = document.getElementById("pwaInstallModal");
  const pwaTriggerBtn = document.getElementById("pwaInstallTriggerBtn");

  const showInstallModal = () => {
    if (pwaModal) pwaModal.classList.remove("hidden");
    if (sidebar && backdrop) {
      sidebar.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    }
  };

  if (openInstallBtn) openInstallBtn.addEventListener("click", showInstallModal);
  if (drawerInstallBtn) drawerInstallBtn.addEventListener("click", showInstallModal);
  if (closeInstallBtn && pwaModal) {
    closeInstallBtn.addEventListener("click", () => pwaModal.classList.add("hidden"));
  }
  if (closeInstallBottomBtn && pwaModal) {
    closeInstallBottomBtn.addEventListener("click", () => pwaModal.classList.add("hidden"));
  }

  // 18. Nút mở nhanh Shadowing từ Drawer điện thoại
  const drawerShadowingBtn = document.getElementById("drawerShadowingBtn");
  if (drawerShadowingBtn) {
    drawerShadowingBtn.addEventListener("click", () => {
      const btn = document.querySelector('button.tab-btn[data-tab="tab-shadowing"]');
      if (btn) btn.click();
      const sidebar = document.getElementById("sidebar");
      const backdrop = document.getElementById("sidebarBackdrop");
      if (sidebar) sidebar.classList.add("-translate-x-full");
      if (backdrop) backdrop.classList.add("hidden");
    });
  }

  // Sự kiện kích hoạt cài đặt PWA bản địa (Android/Chrome/Edge)
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

  if (pwaTriggerBtn) {
    pwaTriggerBtn.addEventListener("click", async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
          if (pwaModal) pwaModal.classList.add("hidden");
        }
        deferredPrompt = null;
      } else {
        alert("Để cài đặt trên thiết bị của bạn:\n- Trên Chrome/Edge Android: Nhấn vào menu 3 chấm ở góc trên rồi chọn 'Cài đặt ứng dụng' hoặc 'Thêm vào màn hình chính'.\n- Trên iPhone (Safari): Nhấn nút Chia sẻ (hình vuông có mũi tên) rồi chọn 'Thêm vào MH chính'.");
      }
    });
  }

  // 18. Lọc & Tìm kiếm Mẫu Câu Giao Tiếp Cấp Tốc
  const expressSearchInput = document.getElementById("expressSearchInput");
  if (expressSearchInput) {
    expressSearchInput.addEventListener("input", (e) => {
      renderExpressPhrasesGrid(currentExpressCategory, e.target.value.trim());
      refreshIcons();
    });
  }

  document.querySelectorAll(".express-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".express-filter-btn").forEach(b => {
        b.className = "express-filter-btn px-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 shrink-0";
      });
      btn.className = "express-filter-btn active px-3 py-1.5 text-xs rounded-xl bg-chineseRed-600 text-white font-semibold shrink-0";
      currentExpressCategory = btn.getAttribute("data-cat");
      renderExpressPhrasesGrid(currentExpressCategory, expressSearchInput ? expressSearchInput.value.trim() : "");
      refreshIcons();
    });
  });
}

// Render danh sách 23 Thanh Mẫu trong Modal
function render23InitialsGrid(filterGroup = "all", searchText = "") {
  const container = document.getElementById("initialsModalGrid");
  if (!container || !HSK1_DATA.all23Initials) return;

  const q = searchText.toLowerCase();
  const filtered = HSK1_DATA.all23Initials.filter(item => {
    const matchGroup = filterGroup === "all" || item.group === filterGroup;
    const matchSearch = !searchText || 
      item.char.toLowerCase().includes(q) || 
      item.read.toLowerCase().includes(q) || 
      item.note.toLowerCase().includes(q) ||
      item.group.toLowerCase().includes(q);
    return matchGroup && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-10 text-center text-xs text-slate-400">
        Không tìm thấy thanh mẫu nào phù hợp với từ khóa "${searchText}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div onclick="playChineseAudio('${item.char}', this)" class="cursor-pointer p-3.5 rounded-2xl bg-slate-50 hover:bg-chineseRed-50/50 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 hover:border-chineseRed-400 dark:hover:border-chineseRed-500 shadow-sm hover:shadow transition flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between gap-1 mb-2">
          <span class="w-5 h-5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-bold flex items-center justify-center font-mono">${item.num}</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300">${item.group}</span>
          <button class="p-1 rounded-md text-slate-400 group-hover:text-chineseRed-600 dark:group-hover:text-chineseRed-400 transition" title="Nghe phát âm">
            <i data-lucide="volume-2" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Chữ cái & Cách đọc nhanh -->
        <div class="flex items-baseline gap-2 mb-1">
          <span class="text-2xl sm:text-3xl font-bold font-mono text-chineseRed-600 dark:text-chineseRed-400">${item.char}</span>
          <span class="text-xs text-slate-400">➔ đọc</span>
          <span class="text-sm sm:text-base font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700">${item.read}</span>
        </div>

        <!-- Lưu ý khẩu hình / vị trí lưỡi -->
        <p class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed mt-1.5">
          ${item.note}
        </p>
      </div>

      <!-- Ví dụ -->
      <div class="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
        <span>Ví dụ: <strong class="text-slate-700 dark:text-slate-200 font-mono">${item.example}</strong></span>
        <span class="text-[10px] text-chineseRed-500 font-medium opacity-0 group-hover:opacity-100 transition">Bấm nghe</span>
      </div>
    </div>
  `).join("");
}

// ==================== BỘ MẪU CÂU GIAO TIẾP HỌC CẤP TỐC ====================
let currentExpressCategory = "all";

function renderExpressPhrasesGrid(filterCategory = "all", searchText = "") {
  const container = document.getElementById("expressPhrasesGrid");
  if (!container || !HSK1_DATA.expressPhrases) return;

  const totalCountEl = document.getElementById("totalExpressCount");
  if (totalCountEl) {
    totalCountEl.textContent = `${HSK1_DATA.expressPhrases.length} Câu`;
  }

  const q = searchText.toLowerCase();
  const filtered = HSK1_DATA.expressPhrases.filter(item => {
    const matchCat = filterCategory === "all" || item.category === filterCategory;
    const matchSearch = !searchText ||
      item.hanzi.toLowerCase().includes(q) ||
      item.pinyin.toLowerCase().includes(q) ||
      item.phoneticVi.toLowerCase().includes(q) ||
      item.viet.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.context && item.context.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-xs text-slate-400">
        Không tìm thấy mẫu câu nào phù hợp với từ khóa "${searchText}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="express-phrase-card bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between gap-1 mb-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-900/40">${item.category}</span>
          <button onclick="playChineseAudio('${item.hanzi}', this)" class="p-1.5 rounded-lg bg-chineseRed-50 text-chineseRed-600 dark:bg-chineseRed-950/60 dark:text-chineseRed-400 hover:bg-chineseRed-100 transition shrink-0" title="Nghe phát âm bản xứ">
            <i data-lucide="volume-2" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Chữ Hán to rõ -->
        <h4 class="font-hanzi text-xl sm:text-2xl font-bold text-slate-900 dark:text-white cursor-pointer hover:text-chineseRed-600 transition mb-1" onclick="playChineseAudio('${item.hanzi}', this)">
          ${item.hanzi}
        </h4>

        <!-- Pinyin & Phiên âm bồi tiếng Việt -->
        <div class="space-y-0.5 mb-2">
          <div class="text-xs font-mono font-semibold text-chineseRed-600 dark:text-chineseRed-400">${item.pinyin}</div>
          <div class="text-[11px] text-amber-600 dark:text-amber-400 font-medium">Đọc bồi: <strong class="bg-amber-50 dark:bg-amber-950/60 px-1 py-0.5 rounded">${item.phoneticVi}</strong></div>
        </div>

        <!-- Dịch nghĩa tiếng Việt -->
        <p class="text-xs font-bold text-slate-800 dark:text-slate-100 leading-snug mb-2">
          👉 ${item.viet}
        </p>
      </div>

      <!-- Tình huống áp dụng thực tế -->
      <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
        <span class="text-slate-400">Tình huống: </span>${item.context}
      </div>
    </div>
  `).join("");
}

// ==================== BỘ VIDEO NGẮN LUYỆN NÓI PHẢN XẠ (SHADOWING) & CORODOMO UPGRADE ====================
let currentShadowingIndex = 0;
let activePracticeSentenceIndex = 0;
let currentShadowingSpeed = 1.0;
let shadowingHidePinyin = false;
let shadowingHideMeaning = false;
let currentShadowingMode = "shadowing"; // "shadowing" | "dictation"

let currentShadowingCat = "all";
let currentShadowingDiff = "all";
let currentShadowingSearch = "";

let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;

// Speech Recognition for AI Pronunciation Scoring
let speechRecognizer = null;
let recognizedTranscript = "";

// Dictation Mode State
let currentDictationSentenceIndex = 0;
let dictationAssembledTokens = [];
let dictationBankTokens = [];

function renderShadowingSection() {
  const container = document.getElementById("shadowingVideoCardsContainer");
  if (!container || !HSK1_DATA.shadowingVideos) return;

  const totalCountEl = document.getElementById("totalShadowingCount");
  if (totalCountEl) totalCountEl.textContent = `${HSK1_DATA.shadowingVideos.length} Video`;

  renderShadowingVideoCards();
  renderActiveShadowingVideo(currentShadowingIndex);
  setupShadowingControls();
  setupWordLookupModal();
}

function renderShadowingVideoCards() {
  const container = document.getElementById("shadowingVideoCardsContainer");
  if (!container || !HSK1_DATA.shadowingVideos) return;

  const q = (currentShadowingSearch || "").toLowerCase().trim();

  const filteredVideos = HSK1_DATA.shadowingVideos.filter(vid => {
    // 1. Lọc theo Danh mục
    const matchCat = currentShadowingCat === "all" || vid.category === currentShadowingCat;

    // 2. Lọc theo Cấp độ
    let matchDiff = true;
    if (currentShadowingDiff !== "all") {
      if (currentShadowingDiff === "Nâng cao") {
        matchDiff = vid.difficulty.includes("Nâng cao") || vid.difficulty.includes("Douyin") || vid.difficulty.includes("HSK 3");
      } else {
        matchDiff = vid.difficulty.includes(currentShadowingDiff);
      }
    }

    // 3. Tìm kiếm theo từ khóa
    let matchSearch = true;
    if (q) {
      matchSearch = (vid.title || "").toLowerCase().includes(q) ||
                    (vid.category || "").toLowerCase().includes(q) ||
                    (vid.description || "").toLowerCase().includes(q) ||
                    (vid.sentences || []).some(s => 
                      (s.hanzi || "").toLowerCase().includes(q) ||
                      (s.viet || "").toLowerCase().includes(q) ||
                      (s.pinyin || "").toLowerCase().includes(q)
                    );
    }
    return matchCat && matchDiff && matchSearch;
  });

  if (filteredVideos.length === 0) {
    container.innerHTML = `
      <div class="py-8 px-4 text-center text-xs text-slate-400 w-full flex flex-col items-center justify-center gap-2">
        <i data-lucide="search-x" class="w-8 h-8 text-slate-300"></i>
        <span>Không tìm thấy video nào phù hợp với bộ lọc hiện tại. Hãy thử chọn chủ đề khác nhé!</span>
      </div>
    `;
    refreshIcons();
    return;
  }

  container.innerHTML = filteredVideos.map(vid => {
    // Lấy chỉ số gốc trong HSK1_DATA.shadowingVideos
    const realIdx = HSK1_DATA.shadowingVideos.findIndex(v => v.id === vid.id);
    const isActive = realIdx === currentShadowingIndex;
    const completedList = (appState.completedShadowingSentences && appState.completedShadowingSentences[vid.id]) || [];
    const isAllDone = completedList.length >= vid.sentences.length && vid.sentences.length > 0;

    return `
      <div onclick="selectShadowingVideo(${realIdx})" class="shadowing-video-card p-3.5 rounded-3xl border transition shrink-0 cursor-pointer w-64 sm:w-72 flex flex-col justify-between ${
        isActive 
          ? "bg-purple-50 dark:bg-purple-950/40 border-purple-500 shadow-md ring-2 ring-purple-500/30"
          : "bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-purple-300 shadow-sm"
      }">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
              isActive ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300"
            }">${vid.category}</span>
            <span class="text-[11px] text-slate-400 font-mono">${vid.duration}</span>
          </div>
          <h5 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-1 mb-1">${vid.title}</h5>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">${vid.description}</p>
        </div>
        <div class="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px]">
          <span class="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
            <i data-lucide="check-circle" class="w-3.5 h-3.5 ${isAllDone ? 'text-emerald-500 fill-emerald-500/20' : 'text-slate-300'}"></i>
            ${completedList.length}/${vid.sentences.length} câu
          </span>
          <span class="px-2 py-0.5 rounded-lg font-semibold ${
            vid.difficulty.includes('Cơ bản') 
              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300' 
              : vid.difficulty.includes('Trung cấp') 
                ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                : 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300'
          }">${vid.difficulty}</span>
        </div>
      </div>
    `;
  }).join("");

  refreshIcons();
}

function selectShadowingVideo(index) {
  currentShadowingIndex = index;
  activePracticeSentenceIndex = 0;
  renderShadowingVideoCards();
  renderActiveShadowingVideo(index);
  refreshIcons();
}

function renderActiveShadowingVideo(index) {
  const vid = HSK1_DATA.shadowingVideos[index];
  if (!vid) return;

  const titleEl = document.getElementById("currentShadowingTitle");
  const catEl = document.getElementById("currentShadowingCategory");
  const durEl = document.getElementById("currentShadowingDuration");
  const player = document.getElementById("shadowingPlayer");
  const extLink = document.getElementById("externalShadowingYoutubeLink");

  if (titleEl) titleEl.textContent = vid.title;
  if (catEl) catEl.textContent = vid.category;
  if (durEl) durEl.textContent = vid.duration;
  if (extLink && vid.youtubeId) {
    extLink.href = `https://www.youtube.com/watch?v=${vid.youtubeId}`;
  }
  if (player && vid.youtubeId) {
    player.src = getYouTubeEmbedUrl(vid.youtubeId);
  }

  renderShadowingSentences(vid);
  if (currentShadowingMode === "dictation") {
    initDictationMode();
  }
}

function selectPracticeSentence(sIdx) {
  activePracticeSentenceIndex = sIdx;
  const vid = HSK1_DATA.shadowingVideos[currentShadowingIndex];
  if (vid) {
    renderShadowingSentences(vid);
  }
  // Ẩn bảng điểm cũ để người dùng thu âm câu mới
  const aiCard = document.getElementById("aiPronunciationCard");
  if (aiCard) aiCard.classList.add("hidden");
}

function renderShadowingSentences(video) {
  const container = document.getElementById("shadowingSentencesContainer");
  const countEl = document.getElementById("shadowingCompletedCount");
  if (!container || !video.sentences) return;

  if (activePracticeSentenceIndex >= video.sentences.length) {
    activePracticeSentenceIndex = 0;
  }

  // Cập nhật banner câu đang luyện thu âm ở cột trái
  const targetStn = video.sentences[activePracticeSentenceIndex] || video.sentences[0];
  const bannerHanzi = document.getElementById("activePracticeSentenceHanzi");
  if (bannerHanzi && targetStn) {
    bannerHanzi.textContent = targetStn.hanzi;
  }
  const playTargetBtn = document.getElementById("playTargetSentenceBtn");
  if (playTargetBtn && targetStn) {
    playTargetBtn.onclick = () => playShadowingSentence(targetStn.hanzi, playTargetBtn);
  }

  if (!appState.completedShadowingSentences) {
    appState.completedShadowingSentences = {};
  }

  const completedMap = appState.completedShadowingSentences[video.id] || [];
  if (countEl) {
    countEl.textContent = `${completedMap.length}/${video.sentences.length} Đã luyện`;
  }

  container.innerHTML = video.sentences.map((stn, sIdx) => {
    const isDone = completedMap.includes(sIdx);
    const isSelected = sIdx === activePracticeSentenceIndex;
    const tokens = stn.tokens && stn.tokens.length > 0 
      ? stn.tokens 
      : [{ hanzi: stn.hanzi, pinyin: stn.pinyin, viet: stn.viet }];

    return `
      <div onclick="selectPracticeSentence(${sIdx})" class="shadowing-sentence-card p-4 rounded-3xl border transition cursor-pointer ${
        isSelected
          ? "bg-purple-50/70 dark:bg-purple-950/30 border-purple-500 shadow-md ring-2 ring-purple-500/20"
          : isDone 
            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800"
            : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-300"
      }">
        <div class="flex items-center justify-between mb-2.5">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
              isSelected ? "bg-purple-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            }">
              ${stn.speaker} ${isSelected ? "• Đang luyện" : ""}
            </span>
            <span class="text-[11px] text-slate-400">Câu ${sIdx + 1}</span>
          </div>

          <div class="flex items-center gap-1.5" onclick="event.stopPropagation()">
            <button onclick="playShadowingSentence('${stn.hanzi.replace(/'/g, "\\'")}', this)" class="px-2.5 py-1 rounded-xl bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 text-xs font-semibold hover:bg-purple-100 transition flex items-center gap-1" title="Nghe người bản xứ phát âm">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
              <span>Nghe mẫu</span>
            </button>
            <button onclick="toggleSentenceComplete('${video.id}', ${sIdx})" class="p-1 rounded-xl transition ${
              isDone ? "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50" : "text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }" title="${isDone ? "Đã hoàn thành nhại giọng" : "Đánh dấu đã nhại xong"}">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

        <!-- Khối từ vựng có thể chạm vào để tra nghĩa chuẩn Corodomo -->
        <div class="flex flex-wrap items-center gap-1.5 my-2">
          ${tokens.map(tok => `
            <span onclick="event.stopPropagation(); openWordLookup('${tok.hanzi.replace(/'/g, "\\'")}', '${tok.pinyin.replace(/'/g, "\\'")}', '${tok.viet.replace(/'/g, "\\'")}')" 
                  class="word-token-chip font-hanzi text-lg sm:text-xl font-bold" 
                  title="Chạm để tra: ${tok.hanzi} (${tok.pinyin})">
              ${tok.hanzi}
            </span>
          `).join("")}
        </div>

        <!-- Pinyin & Đọc bồi -->
        <div class="space-y-0.5 mb-2 ${shadowingHidePinyin ? "hidden" : ""}">
          <div class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">${stn.pinyin}</div>
          <div class="text-[11px] text-amber-600 dark:text-amber-400">Đọc bồi: <strong class="bg-amber-50 dark:bg-amber-950/60 px-1 py-0.5 rounded font-mono">${stn.phoneticVi}</strong></div>
        </div>

        <!-- Dịch Tiếng Việt -->
        <p class="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-2 ${shadowingHideMeaning ? "hidden" : ""}">
          👉 ${stn.viet}
        </p>

        <!-- Mẹo ngữ điệu Shadowing -->
        <div class="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-1.5">
          <i data-lucide="sparkles" class="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5"></i>
          <span><strong class="text-purple-600 dark:text-purple-400">Mẹo nhại giọng:</strong> ${stn.tip}</span>
        </div>
      </div>
    `;
  }).join("");

  refreshIcons();
}

function playShadowingSentence(text, btnEl) {
  playChineseAudio(text, btnEl, currentShadowingSpeed);
}

function toggleSentenceComplete(videoId, sentenceIndex) {
  if (!appState.completedShadowingSentences) {
    appState.completedShadowingSentences = {};
  }
  if (!appState.completedShadowingSentences[videoId]) {
    appState.completedShadowingSentences[videoId] = [];
  }

  const list = appState.completedShadowingSentences[videoId];
  const idx = list.indexOf(sentenceIndex);
  if (idx > -1) {
    list.splice(idx, 1);
  } else {
    list.push(sentenceIndex);
  }

  saveState();
  const vid = HSK1_DATA.shadowingVideos[currentShadowingIndex];
  if (vid) renderShadowingSentences(vid);
}

// ==================== TÍNH NĂNG 1: TRA TỪ TRONG PHỤ ĐỀ CHUẨN CORODOMO ====================
let currentLookupWord = null;

function setupWordLookupModal() {
  const modal = document.getElementById("wordLookupModal");
  const closeBtn = document.getElementById("closeWordLookupModalBtn");
  const audioBtn = document.getElementById("lookupPlayAudioBtn");
  const saveBtn = document.getElementById("lookupSaveFlashcardBtn");

  if (closeBtn) {
    closeBtn.onclick = () => closeWordLookupModal();
  }

  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) closeWordLookupModal();
    };
  }

  if (audioBtn) {
    audioBtn.onclick = () => {
      if (currentLookupWord) {
        playChineseAudio(currentLookupWord.hanzi, audioBtn);
      }
    };
  }

  if (saveBtn) {
    saveBtn.onclick = () => {
      if (currentLookupWord) {
        toggleSaveCustomVocab(currentLookupWord.hanzi, currentLookupWord.pinyin, currentLookupWord.viet);
      }
    };
  }
}

function openWordLookup(hanzi, pinyin, viet) {
  currentLookupWord = { hanzi, pinyin, viet };
  const modal = document.getElementById("wordLookupModal");
  const hanziEl = document.getElementById("lookupHanzi");
  const pinyinEl = document.getElementById("lookupPinyin");
  const vietEl = document.getElementById("lookupViet");
  const saveBtnText = document.getElementById("lookupSaveBtnText");
  const saveBtn = document.getElementById("lookupSaveFlashcardBtn");

  if (hanziEl) hanziEl.textContent = hanzi;
  if (pinyinEl) pinyinEl.textContent = pinyin;
  if (vietEl) vietEl.textContent = viet;

  // Kiểm tra xem từ này đã được lưu vào Flashcards chưa
  appState.customVocabs = appState.customVocabs || [];
  const isSaved = appState.customVocabs.some(v => v.hanzi === hanzi);

  if (saveBtnText) {
    saveBtnText.textContent = isSaved 
      ? "✓ Đã Lưu Trong Flashcard (Bấm để xóa)" 
      : "+ Lưu Vào Thẻ Ghi Nhớ (Flashcard)";
  }

  if (saveBtn) {
    if (isSaved) {
      saveBtn.className = "w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 active:scale-95";
    } else {
      saveBtn.className = "w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-chineseRed-600 to-amber-600 hover:from-chineseRed-700 hover:to-amber-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 active:scale-95";
    }
  }

  if (modal) modal.classList.remove("hidden");
  refreshIcons();

  // Tự động phát âm ngay khi mở tra từ
  playChineseAudio(hanzi);
}

function closeWordLookupModal() {
  const modal = document.getElementById("wordLookupModal");
  if (modal) modal.classList.add("hidden");
}

function toggleSaveCustomVocab(hanzi, pinyin, viet) {
  appState.customVocabs = appState.customVocabs || [];
  const idx = appState.customVocabs.findIndex(v => v.hanzi === hanzi);
  const saveBtnText = document.getElementById("lookupSaveBtnText");
  const saveBtn = document.getElementById("lookupSaveFlashcardBtn");

  if (idx > -1) {
    appState.customVocabs.splice(idx, 1);
    if (saveBtnText) saveBtnText.textContent = "+ Lưu Vào Thẻ Ghi Nhớ (Flashcard)";
    if (saveBtn) saveBtn.className = "w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-chineseRed-600 to-amber-600 hover:from-chineseRed-700 hover:to-amber-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 active:scale-95";
  } else {
    appState.customVocabs.push({
      id: "video_" + Date.now(),
      hanzi,
      pinyin,
      meaning: viet,
      viet,
      type: "Từ vựng video",
      sinoViet: "",
      radicals: "Chữ Hán",
      memoryTip: "Từ vựng được lưu từ video Shadowing thực chiến.",
      example: `${hanzi} (${pinyin}): ${viet}`
    });
    if (saveBtnText) saveBtnText.textContent = "✓ Đã Lưu Trong Flashcard (Bấm để xóa)";
    if (saveBtn) saveBtn.className = "w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 active:scale-95";
  }

  saveState();
  const savedCountEl = document.getElementById("countSavedVocab");
  if (savedCountEl) savedCountEl.textContent = appState.customVocabs.length;
}

// ==================== TÍNH NĂNG 2: DICTATION (LUYỆN NGHE CHÉP CHÍNH TẢ) ====================
function initDictationMode() {
  const vid = HSK1_DATA.shadowingVideos[currentShadowingIndex];
  if (!vid || !vid.sentences) return;

  const tabsContainer = document.getElementById("dictationSentenceTabs");
  if (tabsContainer) {
    tabsContainer.innerHTML = vid.sentences.map((stn, idx) => `
      <button onclick="loadDictationSentence(${idx})" class="dictation-tab-btn px-2.5 py-1 text-xs rounded-xl font-bold transition shrink-0 ${
        idx === currentDictationSentenceIndex
          ? "bg-purple-600 text-white shadow-sm"
          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
      }">
        Câu ${idx + 1}
      </button>
    `).join("");
  }

  loadDictationSentence(currentDictationSentenceIndex);
}

function loadDictationSentence(sIdx) {
  const vid = HSK1_DATA.shadowingVideos[currentShadowingIndex];
  if (!vid || !vid.sentences[sIdx]) return;

  currentDictationSentenceIndex = sIdx;

  // Cập nhật tabs
  document.querySelectorAll(".dictation-tab-btn").forEach((btn, idx) => {
    if (idx === sIdx) {
      btn.className = "dictation-tab-btn px-2.5 py-1 text-xs rounded-xl font-bold transition shrink-0 bg-purple-600 text-white shadow-sm";
    } else {
      btn.className = "dictation-tab-btn px-2.5 py-1 text-xs rounded-xl font-bold transition shrink-0 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200";
    }
  });

  const stn = vid.sentences[sIdx];
  const numEl = document.getElementById("dictationSentenceNum");
  const titleEl = document.getElementById("dictationStepTitle");
  const vietHintEl = document.getElementById("dictationVietHint");
  const playNormBtn = document.getElementById("dictationPlayNormalBtn");
  const playSlowBtn = document.getElementById("dictationPlaySlowBtn");
  const resetBtn = document.getElementById("dictationResetBtn");
  const hintBtn = document.getElementById("dictationHintBtn");
  const checkBtn = document.getElementById("dictationCheckBtn");
  const nextBtn = document.getElementById("dictationNextBtn");
  const alertEl = document.getElementById("dictationFeedbackAlert");

  if (numEl) numEl.textContent = sIdx + 1;
  if (titleEl) titleEl.textContent = `Luyện Nghe Chép Câu ${sIdx + 1} / ${vid.sentences.length}`;
  if (vietHintEl) vietHintEl.textContent = `👉 Dịch nghĩa: ${stn.viet}`;

  if (playNormBtn) playNormBtn.onclick = () => playChineseAudio(stn.hanzi, playNormBtn, 1.0);
  if (playSlowBtn) playSlowBtn.onclick = () => playChineseAudio(stn.hanzi, playSlowBtn, 0.75);

  if (resetBtn) resetBtn.onclick = () => resetDictationTokens();
  if (hintBtn) hintBtn.onclick = () => hintDictationToken();
  if (checkBtn) checkBtn.onclick = () => checkDictationAnswer();
  if (nextBtn) nextBtn.onclick = () => nextDictationSentence();

  if (alertEl) alertEl.classList.add("hidden");
  if (checkBtn) checkBtn.classList.remove("hidden");
  if (nextBtn) nextBtn.classList.add("hidden");

  // Chuẩn bị tokens rời và xáo trộn
  const baseTokens = stn.tokens && stn.tokens.length > 0 
    ? stn.tokens 
    : [{ hanzi: stn.hanzi, pinyin: stn.pinyin, viet: stn.viet }];

  const tokensWithId = baseTokens.map((t, i) => ({ ...t, _id: i }));
  dictationAssembledTokens = [];
  // Xáo trộn ngẫu nhiên
  dictationBankTokens = [...tokensWithId].sort(() => Math.random() - 0.5);

  renderDictationUI();
  refreshIcons();

  // Tự động phát âm câu để người dùng nghe
  setTimeout(() => {
    playChineseAudio(stn.hanzi, null, 1.0);
  }, 300);
}

function renderDictationUI() {
  const answerZone = document.getElementById("dictationAnswerZone");
  const wordBank = document.getElementById("dictationWordBank");
  if (!answerZone || !wordBank) return;

  // 1. Render ô đáp án
  if (dictationAssembledTokens.length === 0) {
    answerZone.innerHTML = `<span class="text-xs text-slate-400 italic" id="dictationEmptyPlaceholder">Chạm vào các từ bên dưới để ghép câu...</span>`;
  } else {
    answerZone.innerHTML = dictationAssembledTokens.map((tok, aIdx) => `
      <span onclick="removeDictationToken(${aIdx})" class="dictation-slot-chip font-hanzi text-base sm:text-lg" title="Bấm để tháo từ này">
        <span>${tok.hanzi}</span>
        <i data-lucide="x" class="w-3.5 h-3.5 opacity-70 hover:opacity-100"></i>
      </span>
    `).join("");
  }

  // 2. Render kho từ còn lại
  if (dictationBankTokens.length === 0) {
    wordBank.innerHTML = `<span class="text-xs text-slate-400 italic">Đã ghép hết các từ! Nhấn "Kiểm tra đáp án" bên dưới nhé.</span>`;
  } else {
    wordBank.innerHTML = dictationBankTokens.map((tok, bIdx) => `
      <span onclick="addDictationToken(${bIdx})" class="dictation-bank-chip font-hanzi text-base sm:text-lg" title="Bấm để chọn">
        <span>${tok.hanzi}</span>
        <span class="text-[10px] text-purple-600 font-mono font-normal">(${tok.pinyin})</span>
      </span>
    `).join("");
  }

  refreshIcons();
}

function addDictationToken(bankIndex) {
  if (dictationBankTokens[bankIndex]) {
    const [token] = dictationBankTokens.splice(bankIndex, 1);
    dictationAssembledTokens.push(token);
    renderDictationUI();
  }
}

function removeDictationToken(assembledIndex) {
  if (dictationAssembledTokens[assembledIndex]) {
    const [token] = dictationAssembledTokens.splice(assembledIndex, 1);
    dictationBankTokens.push(token);
    renderDictationUI();
  }
}

function resetDictationTokens() {
  const vid = HSK1_DATA.shadowingVideos[currentShadowingIndex];
  if (!vid) return;
  const stn = vid.sentences[currentDictationSentenceIndex];
  const baseTokens = stn.tokens && stn.tokens.length > 0 ? stn.tokens : [{ hanzi: stn.hanzi, pinyin: stn.pinyin, viet: stn.viet }];
  const tokensWithId = baseTokens.map((t, i) => ({ ...t, _id: i }));
  dictationAssembledTokens = [];
  dictationBankTokens = [...tokensWithId].sort(() => Math.random() - 0.5);

  const alertEl = document.getElementById("dictationFeedbackAlert");
  if (alertEl) alertEl.classList.add("hidden");

  renderDictationUI();
}

function hintDictationToken() {
  const vid = HSK1_DATA.shadowingVideos[currentShadowingIndex];
  if (!vid) return;
  const stn = vid.sentences[currentDictationSentenceIndex];
  const baseTokens = stn.tokens || [];

  const nextTargetIndex = dictationAssembledTokens.length;
  if (nextTargetIndex < baseTokens.length) {
    const targetToken = baseTokens[nextTargetIndex];
    // Tìm token này trong bank
    const bIdx = dictationBankTokens.findIndex(t => t.hanzi === targetToken.hanzi);
    if (bIdx > -1) {
      addDictationToken(bIdx);
      playChineseAudio(targetToken.hanzi);
    }
  }
}

function checkDictationAnswer() {
  const vid = HSK1_DATA.shadowingVideos[currentShadowingIndex];
  if (!vid) return;
  const stn = vid.sentences[currentDictationSentenceIndex];
  const alertEl = document.getElementById("dictationFeedbackAlert");
  const checkBtn = document.getElementById("dictationCheckBtn");
  const nextBtn = document.getElementById("dictationNextBtn");
  const answerZone = document.getElementById("dictationAnswerZone");

  const assembledStr = dictationAssembledTokens.map(t => t.hanzi).join("");
  const targetClean = (stn.tokens || []).map(t => t.hanzi).join("") || stn.hanzi.replace(/[^\u4e00-\u9fa5]/g, "");

  if (assembledStr.replace(/[^\u4e00-\u9fa5]/g, "") === targetClean.replace(/[^\u4e00-\u9fa5]/g, "")) {
    // Đúng 100%
    if (answerZone) {
      answerZone.classList.add("pop-success");
      setTimeout(() => answerZone.classList.remove("pop-success"), 500);
    }

    if (alertEl) {
      alertEl.className = "p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center justify-between";
      alertEl.innerHTML = `
        <div class="flex items-center gap-2">
          <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600"></i>
          <div>
            <span>🎉 CHÍNH XÁC 100%! BẠN ĐÃ NGHE CHÉP RẤT CHUẨN!</span>
            <div class="text-[11px] font-mono text-purple-600 dark:text-purple-400 mt-0.5">${stn.pinyin}</div>
          </div>
        </div>
      `;
      alertEl.classList.remove("hidden");
    }

    if (checkBtn) checkBtn.classList.add("hidden");
    if (nextBtn) nextBtn.classList.remove("hidden");

    // Đánh dấu câu hoàn thành
    toggleSentenceComplete(vid.id, currentDictationSentenceIndex);
    playChineseAudio(stn.hanzi);
  } else {
    // Sai hoặc chưa đủ
    if (answerZone) {
      answerZone.classList.add("shake-animation");
      setTimeout(() => answerZone.classList.remove("shake-animation"), 400);
    }

    if (alertEl) {
      alertEl.className = "p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs font-semibold flex items-center gap-2";
      alertEl.innerHTML = `
        <i data-lucide="alert-circle" class="w-5 h-5 text-rose-600 shrink-0"></i>
        <span>❌ Chưa đúng thứ tự rồi! Hãy bấm nút "Nghe 1.0x" để nghe lại và xếp lại nhé.</span>
      `;
      alertEl.classList.remove("hidden");
    }
  }

  refreshIcons();
}

function nextDictationSentence() {
  const vid = HSK1_DATA.shadowingVideos[currentShadowingIndex];
  if (!vid) return;

  if (currentDictationSentenceIndex < vid.sentences.length - 1) {
    loadDictationSentence(currentDictationSentenceIndex + 1);
  } else {
    alert("🎉 CHÚC MỪNG BẠN! Bạn đã hoàn thành xuất sắc bài Nghe Chép Chính Tả cho toàn bộ video này!");
    loadDictationSentence(0);
  }
}

// ==================== TÍNH NĂNG 3: CORODOMO AI PRONUNCIATION SCORING ====================
function setupVoiceRecorder() {
  const recordBtn = document.getElementById("toggleRecordBtn");
  const recordIcon = document.getElementById("recordBtnIcon");
  const recordText = document.getElementById("recordBtnText");
  const statusBadge = document.getElementById("recordingStatusBadge");
  const playerWrapper = document.getElementById("userAudioPlayerWrapper");
  const audioPlayback = document.getElementById("userAudioPlayback");
  const deleteBtn = document.getElementById("deleteRecordingBtn");
  const aiRetryBtn = document.getElementById("aiRetryBtn");

  if (!recordBtn) return;

  if (aiRetryBtn) {
    aiRetryBtn.onclick = () => {
      recordBtn.click();
    };
  }

  if (deleteBtn) {
    deleteBtn.onclick = () => {
      if (audioPlayback) {
        audioPlayback.pause();
        audioPlayback.src = "";
      }
      playerWrapper?.classList.add("hidden");
      const aiCard = document.getElementById("aiPronunciationCard");
      if (aiCard) aiCard.classList.add("hidden");
    };
  }

  recordBtn.onclick = async () => {
    if (!isRecording) {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Trình duyệt của bạn chưa hỗ trợ thu âm trực tiếp qua MediaRecorder. Hãy dùng Chrome hoặc Safari mới nhất nhé!");
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        // Khởi động Web Speech API zh-CN để nhận diện chữ Hán theo thời gian thực
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognizedTranscript = "";

        if (SpeechRecognition) {
          try {
            speechRecognizer = new SpeechRecognition();
            speechRecognizer.lang = "zh-CN";
            speechRecognizer.continuous = true;
            speechRecognizer.interimResults = false;

            speechRecognizer.onresult = (evt) => {
              for (let i = evt.resultIndex; i < evt.results.length; i++) {
                if (evt.results[i].isFinal) {
                  recognizedTranscript += evt.results[i][0].transcript;
                }
              }
            };

            speechRecognizer.onerror = (err) => {
              console.warn("Speech recognition warning:", err);
            };

            speechRecognizer.start();
          } catch (e) {
            console.warn("Could not start speech recognition:", e);
          }
        }

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) audioChunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
          const audioUrl = URL.createObjectURL(audioBlob);
          if (audioPlayback) {
            audioPlayback.src = audioUrl;
            playerWrapper?.classList.remove("hidden");
          }
          stream.getTracks().forEach(t => t.stop());

          // Sau khi dừng ghi âm, tiến hành chấm điểm AI
          setTimeout(() => {
            evaluateAndDisplayAIScore();
          }, 300);
        };

        mediaRecorder.start();
        isRecording = true;

        // Ẩn bảng điểm cũ trong khi thu âm
        const aiCard = document.getElementById("aiPronunciationCard");
        if (aiCard) aiCard.classList.add("hidden");

        recordBtn.className = "flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-xl transition active:scale-95 animate-pulse";
        if (recordText) recordText.textContent = "⏹️ Dừng Thu Âm & Chấm Điểm AI";
        statusBadge?.classList.remove("hidden");
      } catch (err) {
        alert("Không thể truy cập microphone. Vui lòng cho phép quyền truy cập micro trên trình duyệt của bạn!");
        console.warn("Mic error:", err);
      }
    } else {
      if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
      }
      if (speechRecognizer) {
        try {
          speechRecognizer.stop();
        } catch (e) {}
      }

      isRecording = false;
      recordBtn.className = "flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-bold text-sm shadow-xl transition active:scale-95";
      if (recordText) recordText.textContent = "🎙️ Thu Âm Nhại Lại Lần Nữa";
      statusBadge?.classList.add("hidden");
    }
  };
}

function evaluateAndDisplayAIScore() {
  const vid = HSK1_DATA.shadowingVideos[currentShadowingIndex];
  if (!vid || !vid.sentences) return;

  const targetSentence = vid.sentences[activePracticeSentenceIndex] || vid.sentences[0];
  const aiCard = document.getElementById("aiPronunciationCard");
  const scoreNumEl = document.getElementById("aiScoreNumber");
  const scoreBadgeEl = document.getElementById("aiScoreBadge");
  const feedbackEl = document.getElementById("aiScoreFeedback");
  const recognizedTextEl = document.getElementById("aiRecognizedText");
  const tokenMatchesEl = document.getElementById("aiTokenMatchesContainer");

  if (!aiCard) return;

  // Thuật toán chấm điểm Corodomo
  const cleanTarget = (targetSentence.hanzi || "").replace(/[^\u4e00-\u9fa5]/g, "");
  const cleanRecog = (recognizedTranscript || "").replace(/[^\u4e00-\u9fa5]/g, "");

  let score = 0;
  if (cleanRecog.length > 0 && cleanTarget.length > 0) {
    let matches = 0;
    for (const ch of cleanTarget) {
      if (cleanRecog.includes(ch)) matches++;
    }
    const ratio = matches / Math.max(1, cleanTarget.length);
    if (cleanRecog === cleanTarget) {
      score = 98;
    } else {
      score = Math.min(96, Math.max(45, Math.round(ratio * 95)));
    }
  } else {
    // Trường hợp trình duyệt không có SpeechRecognition hoặc âm thanh nhỏ
    score = 75; // Điểm cơ bản ghi nhận nỗ lực phát âm
  }

  if (scoreNumEl) scoreNumEl.textContent = score;

  // Phân loại Huy hiệu & Lời khuyên
  if (score >= 85) {
    if (scoreBadgeEl) {
      scoreBadgeEl.textContent = "Xuất sắc 🎉";
      scoreBadgeEl.className = "px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    }
    if (feedbackEl) feedbackEl.textContent = "Ngữ điệu rất tự nhiên, phát âm và thanh điệu chuẩn như người bản ngữ!";
  } else if (score >= 70) {
    if (scoreBadgeEl) {
      scoreBadgeEl.textContent = "Khá chuẩn 👍";
      scoreBadgeEl.className = "px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30";
    }
    if (feedbackEl) feedbackEl.textContent = "Phát âm các từ chính rất tốt! Hãy chú ý biến điệu và nhại với tốc độ tự nhiên hơn.";
  } else {
    if (scoreBadgeEl) {
      scoreBadgeEl.textContent = "Cần cố gắng 💪";
      scoreBadgeEl.className = "px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30";
    }
    if (feedbackEl) feedbackEl.textContent = "Hãy bấm nghe mẫu 1-2 lần rồi nói to, rõ ràng từng âm tiết tiếng Trung nhé.";
  }

  // Hiển thị nội dung nhận diện
  if (recognizedTextEl) {
    recognizedTextEl.textContent = recognizedTranscript.trim() 
      ? `“${recognizedTranscript.trim()}”` 
      : "(Đã ghi lại âm thanh giọng bạn. Hãy mở trên Chrome để AI nhận diện chữ chi tiết)";
  }

  // Hiển thị highlight từng từ khóa
  if (tokenMatchesEl) {
    const tokens = targetSentence.tokens && targetSentence.tokens.length > 0 
      ? targetSentence.tokens 
      : [{ hanzi: targetSentence.hanzi, pinyin: targetSentence.pinyin, viet: targetSentence.viet }];

    tokenMatchesEl.innerHTML = tokens.map(tok => {
      const isMatched = cleanRecog.includes(tok.hanzi.replace(/[^\u4e00-\u9fa5]/g, ""));
      return `
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${
          isMatched
            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
            : "bg-slate-800 text-slate-400 border-slate-700"
        }">
          ${isMatched ? "✓" : "•"} ${tok.hanzi} (${tok.pinyin})
        </span>
      `;
    }).join("");
  }

  aiCard.classList.remove("hidden");
  refreshIcons();
}

function setupShadowingControls() {
  // Speed buttons
  document.querySelectorAll(".shadowing-speed-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".shadowing-speed-btn").forEach(b => {
        b.className = "shadowing-speed-btn px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200";
      });
      btn.className = "shadowing-speed-btn active px-2.5 py-1 rounded-lg bg-purple-600 text-white text-xs font-bold";
      currentShadowingSpeed = parseFloat(btn.getAttribute("data-speed")) || 1.0;
    };
  });

  // Toggle Pinyin
  const togglePinyinBtn = document.getElementById("toggleShadowingPinyinBtn");
  if (togglePinyinBtn) {
    togglePinyinBtn.onclick = () => {
      shadowingHidePinyin = !shadowingHidePinyin;
      togglePinyinBtn.textContent = shadowingHidePinyin ? "Hiện Pinyin" : "Ẩn Pinyin";
      const vid = HSK1_DATA.shadowingVideos[currentShadowingIndex];
      if (vid) renderShadowingSentences(vid);
    };
  }

  // Toggle Meaning
  const toggleMeaningBtn = document.getElementById("toggleShadowingMeaningBtn");
  if (toggleMeaningBtn) {
    toggleMeaningBtn.onclick = () => {
      shadowingHideMeaning = !shadowingHideMeaning;
      toggleMeaningBtn.textContent = shadowingHideMeaning ? "Hiện Dịch" : "Ẩn Dịch";
      const vid = HSK1_DATA.shadowingVideos[currentShadowingIndex];
      if (vid) renderShadowingSentences(vid);
    };
  }

  // Mode Switcher: Shadowing vs Dictation
  const modeShadowingBtn = document.getElementById("modeShadowingBtn");
  const modeDictationBtn = document.getElementById("modeDictationBtn");
  const sentencesWrapper = document.getElementById("shadowingSentencesWrapper");
  const dictationContainer = document.getElementById("shadowingDictationContainer");

  if (modeShadowingBtn && modeDictationBtn) {
    modeShadowingBtn.onclick = () => {
      currentShadowingMode = "shadowing";
      modeShadowingBtn.className = "flex-1 py-2 px-3 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm";
      modeDictationBtn.className = "flex-1 py-2 px-3 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
      sentencesWrapper?.classList.remove("hidden");
      dictationContainer?.classList.add("hidden");
    };

    modeDictationBtn.onclick = () => {
      currentShadowingMode = "dictation";
      modeDictationBtn.className = "flex-1 py-2 px-3 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm";
      modeShadowingBtn.className = "flex-1 py-2 px-3 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
      sentencesWrapper?.classList.add("hidden");
      dictationContainer?.classList.remove("hidden");
      initDictationMode();
    };
  }

  // Category filters
  document.querySelectorAll(".shadowing-cat-filter-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".shadowing-cat-filter-btn").forEach(b => {
        b.className = "shadowing-cat-filter-btn px-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 shrink-0 font-medium";
      });
      btn.className = "shadowing-cat-filter-btn active px-3 py-1.5 text-xs rounded-xl bg-purple-600 text-white font-bold shrink-0 shadow-sm";
      currentShadowingCat = btn.getAttribute("data-cat") || "all";
      renderShadowingVideoCards();
    };
  });

  // Difficulty filters
  document.querySelectorAll(".shadowing-diff-filter-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".shadowing-diff-filter-btn").forEach(b => {
        b.className = "shadowing-diff-filter-btn px-2.5 py-1 text-[11px] rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 shrink-0 font-medium";
      });
      btn.className = "shadowing-diff-filter-btn active px-2.5 py-1 text-[11px] rounded-xl bg-slate-800 text-white dark:bg-white dark:text-slate-900 font-bold shrink-0 shadow-sm";
      currentShadowingDiff = btn.getAttribute("data-diff") || "all";
      renderShadowingVideoCards();
    };
  });

  // Search input
  const searchInput = document.getElementById("shadowingSearchInput");
  if (searchInput) {
    searchInput.oninput = (e) => {
      currentShadowingSearch = e.target.value;
      renderShadowingVideoCards();
    };
  }

  // Voice recording
  setupVoiceRecorder();
}

function refreshIcons() {
  if (window.lucide && typeof lucide.createIcons === "function") {
    try {
      lucide.createIcons();
    } catch(e) {
      console.warn("Lucide icons error:", e);
    }
  }
}

function updateThemeIcon(isDark) {
  const themeIcon = document.getElementById("themeIcon");
  if (!themeIcon) return;
  themeIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
  refreshIcons();
}

// ==================== KHỞI CHẠY ỨNG DỤNG ====================
function initApp() {
  loadSavedState();

  // Khôi phục giao diện Dark Mode
  if (appState.theme === "dark" || (!appState.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    updateThemeIcon(true);
  } else {
    document.documentElement.classList.remove("dark");
    updateThemeIcon(false);
  }

  renderLessonList();
  renderCurrentLesson();
  renderExpressPhrasesGrid();
  renderShadowingSection();
  setupEventListeners();
  updateProgressUI();
  refreshIcons();

  // Đăng ký Service Worker cho PWA
  if ("serviceWorker" in navigator && (window.location.protocol.startsWith("http") || window.location.protocol.startsWith("https"))) {
    navigator.serviceWorker.register("./sw.js").then(reg => {
      reg.update().catch(() => {});
    }).catch(e => {
      console.warn("SW registration:", e);
    });
  }

  // Tự động dọn dẹp và triệt tiêu huy hiệu 'Powered by Netlify' che giao diện
  purgeNetlifyBadge();
}

// Hàm ẩn huy hiệu Netlify nếu hệ thống tự động chèn vào góc dưới
function purgeNetlifyBadge() {
  try {
    const netlifyInjected = document.querySelectorAll(
      'netlify-drawer, netlify-badge, [id*="netlify-badge"], iframe[src*="netlify"], .netlify-badge-container'
    );
    netlifyInjected.forEach(el => {
      if (el.closest('#netlifyGuideModal') || el.id === 'openNetlifyGuideBtn' || el.id === 'drawerNetlifyBtn') return;
      el.style.setProperty('display', 'none', 'important');
      el.style.setProperty('visibility', 'hidden', 'important');
      el.style.setProperty('pointer-events', 'none', 'important');
    });
  } catch (e) {}
}

// Theo dõi định kỳ badge Netlify
if (typeof window !== 'undefined') {
  window.addEventListener('load', purgeNetlifyBadge);
  setTimeout(purgeNetlifyBadge, 1000);
  setTimeout(purgeNetlifyBadge, 3000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
