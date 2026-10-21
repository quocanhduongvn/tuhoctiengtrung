// app.js - Logic & Tương tác cho Web App Tự Học Tiếng Trung HSK 1

// ==================== TRẠNG THÁI ỨNG DỤNG (STATE) ====================
const STORAGE_KEY = "hsk1_study_app_data_v1";

let appState = {
  currentLessonId: 1,
  completedLessons: [],
  masteredVocabs: [],
  notes: {},
  quizAnswers: {},
  theme: "light",
  showPinyin: true,
  showViet: true,
  activeVocabFilter: "all",
  activeFlashcardIndex: 0,
  isCardFlipped: false,
  showGhostWatermark: true
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

  // Nếu là Bài 1, render các thành phần chi tiết
  if (lesson.id === 1) {
    renderPhoneticsTab(lesson);
    renderVocabTab(lesson);
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
function renderVocabTab(lesson) {
  if (!lesson.vocab) return;

  const total = lesson.vocab.length;
  const masteredCount = lesson.vocab.filter(v => appState.masteredVocabs.includes(v.id)).length;
  const learningCount = total - masteredCount;

  // Cập nhật số đếm ở các badge
  document.getElementById("countAllVocab").textContent = total;
  document.getElementById("countMasteredVocab").textContent = masteredCount;
  document.getElementById("countLearningVocab").textContent = learningCount;

  // Lọc từ vựng
  let filtered = lesson.vocab;
  if (appState.activeVocabFilter === "mastered") {
    filtered = lesson.vocab.filter(v => appState.masteredVocabs.includes(v.id));
  } else if (appState.activeVocabFilter === "learning") {
    filtered = lesson.vocab.filter(v => !appState.masteredVocabs.includes(v.id));
  }

  // 1. RENDER CHẾ ĐỘ DANH SÁCH (LIST MODE)
  const listContainer = document.getElementById("vocabListModeView");
  if (listContainer) {
    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="col-span-full py-8 text-center text-slate-400 text-xs">
          Không có từ vựng nào trong danh mục này.
        </div>
      `;
    } else {
      listContainer.innerHTML = filtered.map(item => {
        const isMastered = appState.masteredVocabs.includes(item.id);
        return `
          <div class="bg-white dark:bg-slate-900 rounded-2xl border ${isMastered ? 'border-emerald-300 dark:border-emerald-800/80' : 'border-slate-200 dark:border-slate-800'} p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div class="flex items-start justify-between gap-2 mb-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">${item.type}</span>
                <button onclick="toggleVocabMastered('${item.id}')" class="p-1 rounded-full ${isMastered ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60' : 'text-slate-300 hover:text-slate-500'} transition" title="${isMastered ? 'Đã thuộc' : 'Đánh dấu đã thuộc'}">
                  <i data-lucide="${isMastered ? 'check-circle-2' : 'circle'}" class="w-5 h-5"></i>
                </button>
              </div>

              <!-- Chữ Hán & Pinyin -->
              <div class="flex items-baseline gap-3 mb-2">
                <span class="font-hanzi text-3xl font-bold text-slate-900 dark:text-white cursor-pointer hover:text-chineseRed-600 transition" onclick="playChineseAudio('${item.hanzi}', this)">${item.hanzi}</span>
                <span class="text-sm font-semibold text-chineseRed-600 dark:text-chineseRed-400 font-mono">${item.pinyin}</span>
                <span class="text-xs text-slate-400">(${item.sinoViet})</span>
              </div>

              <!-- Nghĩa -->
              <p class="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">${item.meaning}</p>
              
              <!-- Mẹo nhớ cấu tạo chữ -->
              <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 mb-2">
                <span class="font-semibold text-imperialGold-600 dark:text-imperialGold-400">Mẹo nhớ:</span> ${item.memoryTip}
              </div>
            </div>

            <!-- Ví dụ & Nút nghe phát âm -->
            <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span class="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[200px]">${item.example}</span>
              <button onclick="playChineseAudio('${item.hanzi}', this)" class="p-1.5 rounded-lg bg-chineseRed-50 text-chineseRed-600 dark:bg-chineseRed-950/60 dark:text-chineseRed-400 hover:bg-chineseRed-100 transition shrink-0" title="Nghe phát âm">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // 2. RENDER CHẾ ĐỘ FLASHCARD (FLASHCARD MODE)
  updateFlashcardUI();
}

function updateFlashcardUI() {
  const lesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
  if (!lesson || !lesson.vocab) return;

  const vocabs = lesson.vocab;
  const total = vocabs.length;
  if (appState.activeFlashcardIndex >= total) {
    appState.activeFlashcardIndex = 0;
  }

  const current = vocabs[appState.activeFlashcardIndex];
  if (!current) return;

  document.getElementById("currentCardIndex").textContent = appState.activeFlashcardIndex + 1;
  document.getElementById("totalCardCount").textContent = total;

  // Cập nhật nội dung thẻ
  document.getElementById("fcPartType").textContent = current.type;
  document.getElementById("fcHanzi").textContent = current.hanzi;
  document.getElementById("fcPinyin").textContent = current.pinyin;
  document.getElementById("fcSinoViet").textContent = `Âm Hán Việt: ${current.sinoViet}`;
  document.getElementById("fcRadicals").textContent = `Bộ: ${current.radicals || '---'}`;
  document.getElementById("fcMeaning").textContent = current.meaning;
  document.getElementById("fcMemoryTip").textContent = current.memoryTip;
  document.getElementById("fcExample").textContent = current.example;

  // Cập nhật nút trạng thái thuộc
  const isMastered = appState.masteredVocabs.includes(current.id);
  const masteredBtnText = document.getElementById("fcMasteredBtnText");
  const masteredBtn = document.getElementById("fcToggleMasteredBtn");
  if (isMastered) {
    masteredBtnText.textContent = "Đã thuộc (Bấm để ôn lại)";
    masteredBtn.className = "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition";
  } else {
    masteredBtnText.textContent = "Đánh dấu đã thuộc";
    masteredBtn.className = "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium shadow-sm transition";
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
  const lesson1 = HSK1_DATA.lessons[0];
  const totalVocab = lesson1.vocab ? lesson1.vocab.length : 15;
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

  // 2. Chuyển đổi Danh sách / Flashcard trong Từ Vựng
  const listModeBtn = document.getElementById("viewListModeBtn");
  const flashcardModeBtn = document.getElementById("viewFlashcardModeBtn");
  const listModeView = document.getElementById("vocabListModeView");
  const flashcardModeView = document.getElementById("vocabFlashcardModeView");

  if (listModeBtn && flashcardModeBtn) {
    listModeBtn.addEventListener("click", () => {
      listModeBtn.className = "flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-lg bg-chineseRed-600 text-white flex items-center justify-center gap-1.5 transition";
      flashcardModeBtn.className = "flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 flex items-center justify-center gap-1.5 transition";
      listModeView.classList.remove("hidden");
      flashcardModeView.classList.add("hidden");
    });

    flashcardModeBtn.addEventListener("click", () => {
      flashcardModeBtn.className = "flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-lg bg-chineseRed-600 text-white flex items-center justify-center gap-1.5 transition";
      listModeBtn.className = "flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 flex items-center justify-center gap-1.5 transition";
      listModeView.classList.add("hidden");
      flashcardModeView.classList.remove("hidden");
      updateFlashcardUI();
    });
  }

  // 3. Lật Flashcard 3D & Vuốt chạm trên điện thoại (Touch Swipe Gestures)
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
        const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
        const total = curLesson && curLesson.vocab ? curLesson.vocab.length : 15;
        if (deltaX < 0) {
          // Vuốt sang trái ➔ Thẻ tiếp theo
          appState.activeFlashcardIndex = (appState.activeFlashcardIndex + 1) % total;
        } else {
          // Vuốt sang phải ➔ Thẻ trước đó
          appState.activeFlashcardIndex = (appState.activeFlashcardIndex - 1 + total) % total;
        }
        updateFlashcardUI();
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
      const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
      const total = curLesson && curLesson.vocab ? curLesson.vocab.length : 15;
      appState.activeFlashcardIndex = (appState.activeFlashcardIndex - 1 + total) % total;
      updateFlashcardUI();
    });
  }

  if (nextCardBtn) {
    nextCardBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
      const total = curLesson && curLesson.vocab ? curLesson.vocab.length : 15;
      appState.activeFlashcardIndex = (appState.activeFlashcardIndex + 1) % total;
      updateFlashcardUI();
    });
  }

  // Đánh dấu thuộc ngay trên Flashcard
  const fcMasteredBtn = document.getElementById("fcToggleMasteredBtn");
  if (fcMasteredBtn) {
    fcMasteredBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
      if (curLesson && curLesson.vocab) {
        const current = curLesson.vocab[appState.activeFlashcardIndex];
        if (current) {
          toggleVocabMastered(current.id);
          updateFlashcardUI();
        }
      }
    });
  }

  // 4. Lọc từ vựng (Tất cả / Đã thuộc / Cần ôn lại)
  document.querySelectorAll(".vocab-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".vocab-filter-btn").forEach(b => {
        b.className = "vocab-filter-btn px-2.5 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200";
      });
      btn.className = "vocab-filter-btn active px-2.5 py-1 text-xs rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold";
      appState.activeVocabFilter = btn.getAttribute("data-filter");
      const curLesson = HSK1_DATA.lessons.find(l => l.id === appState.currentLessonId);
      if (curLesson) renderVocabTab(curLesson);
    });
  });

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

// ==================== BỘ VIDEO NGẮN LUYỆN NÓI PHẢN XẠ (SHADOWING) ====================
let currentShadowingIndex = 0;
let currentShadowingSpeed = 1.0;
let shadowingHidePinyin = false;
let shadowingHideMeaning = false;
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;

function renderShadowingSection() {
  const container = document.getElementById("shadowingVideoCardsContainer");
  if (!container || !HSK1_DATA.shadowingVideos) return;

  const totalCountEl = document.getElementById("totalShadowingCount");
  if (totalCountEl) totalCountEl.textContent = `${HSK1_DATA.shadowingVideos.length} Video`;

  renderShadowingVideoCards();
  renderActiveShadowingVideo(currentShadowingIndex);
  setupShadowingControls();
}

function renderShadowingVideoCards() {
  const container = document.getElementById("shadowingVideoCardsContainer");
  if (!container || !HSK1_DATA.shadowingVideos) return;

  container.innerHTML = HSK1_DATA.shadowingVideos.map((vid, idx) => {
    const isActive = idx === currentShadowingIndex;
    return `
      <div onclick="selectShadowingVideo(${idx})" class="shadowing-video-card p-3 rounded-2xl border transition shrink-0 cursor-pointer w-60 sm:w-64 flex flex-col justify-between ${
        isActive 
          ? "bg-purple-50 dark:bg-purple-950/40 border-purple-500 shadow-md ring-2 ring-purple-500/30"
          : "bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-purple-300"
      }">
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
              isActive ? "bg-purple-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            }">${vid.category}</span>
            <span class="text-[11px] text-slate-400 font-mono">${vid.duration}</span>
          </div>
          <h5 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-1 mb-1">${vid.title}</h5>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">${vid.description}</p>
        </div>
        <div class="mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px]">
          <span class="text-purple-600 dark:text-purple-400 font-semibold">${vid.sentences.length} câu thoại</span>
          <span class="text-emerald-600 dark:text-emerald-400 font-medium">${vid.difficulty}</span>
        </div>
      </div>
    `;
  }).join("");
}

function selectShadowingVideo(index) {
  currentShadowingIndex = index;
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

  if (titleEl) titleEl.textContent = vid.title;
  if (catEl) catEl.textContent = vid.category;
  if (durEl) durEl.textContent = vid.duration;
  if (player && vid.youtubeId) {
    player.src = `https://www.youtube.com/embed/${vid.youtubeId}?rel=0&enablejsapi=1`;
  }

  renderShadowingSentences(vid);
}

function renderShadowingSentences(video) {
  const container = document.getElementById("shadowingSentencesContainer");
  const countEl = document.getElementById("shadowingCompletedCount");
  if (!container || !video.sentences) return;

  if (!appState.completedShadowingSentences) {
    appState.completedShadowingSentences = {};
  }

  const completedMap = appState.completedShadowingSentences[video.id] || [];
  if (countEl) {
    countEl.textContent = `${completedMap.length}/${video.sentences.length} Đã luyện`;
  }

  container.innerHTML = video.sentences.map((stn, sIdx) => {
    const isDone = completedMap.includes(sIdx);
    return `
      <div class="shadowing-sentence-card p-3.5 rounded-2xl border transition ${
        isDone 
          ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800"
          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-300"
      }">
        <div class="flex items-center justify-between mb-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            ${stn.speaker}
          </span>
          <div class="flex items-center gap-1.5">
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

        <!-- Chữ Hán to rõ -->
        <h5 class="font-hanzi text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5 cursor-pointer hover:text-purple-600 transition" onclick="playShadowingSentence('${stn.hanzi.replace(/'/g, "\\'")}', this)">
          ${stn.hanzi}
        </h5>

        <!-- Pinyin & Đọc bồi -->
        <div class="space-y-0.5 mb-2 ${shadowingHidePinyin ? "hidden" : ""}">
          <div class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">${stn.pinyin}</div>
          <div class="text-[11px] text-amber-600 dark:text-amber-400">Đọc bồi: <strong class="bg-amber-50 dark:bg-amber-950/60 px-1 py-0.5 rounded">${stn.phoneticVi}</strong></div>
        </div>

        <!-- Dịch Tiếng Việt -->
        <p class="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-2 ${shadowingHideMeaning ? "hidden" : ""}">
          👉 ${stn.viet}
        </p>

        <!-- Mẹo ngữ điệu Shadowing -->
        <div class="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-1.5">
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

  // Voice recording
  setupVoiceRecorder();
}

function setupVoiceRecorder() {
  const recordBtn = document.getElementById("toggleRecordBtn");
  const recordIcon = document.getElementById("recordBtnIcon");
  const recordText = document.getElementById("recordBtnText");
  const statusBadge = document.getElementById("recordingStatusBadge");
  const playerWrapper = document.getElementById("userAudioPlayerWrapper");
  const audioPlayback = document.getElementById("userAudioPlayback");
  const deleteBtn = document.getElementById("deleteRecordingBtn");

  if (!recordBtn) return;

  if (deleteBtn) {
    deleteBtn.onclick = () => {
      if (audioPlayback) {
        audioPlayback.pause();
        audioPlayback.src = "";
      }
      playerWrapper?.classList.add("hidden");
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
        };

        mediaRecorder.start();
        isRecording = true;

        recordBtn.className = "flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-xl transition active:scale-95 animate-pulse";
        if (recordText) recordText.textContent = "⏹️ Dừng Thu Âm & So Sánh";
        statusBadge?.classList.remove("hidden");
      } catch (err) {
        alert("Không thể truy cập microphone. Vui lòng cho phép quyền truy cập micro trên trình duyệt của bạn!");
        console.warn("Mic error:", err);
      }
    } else {
      if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
      }
      isRecording = false;
      recordBtn.className = "flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-bold text-sm shadow-xl transition active:scale-95";
      if (recordText) recordText.textContent = "🎙️ Thu Âm Nhại Lại Lần Nữa";
      statusBadge?.classList.add("hidden");
    }
  };
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
    navigator.serviceWorker.register("./sw.js").catch(e => {
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
