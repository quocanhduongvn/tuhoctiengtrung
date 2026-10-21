// data.js - Dữ liệu giáo trình HSK 1 - Chuỗi bài giảng Thầy Thành Luân
const HSK1_DATA = {
  courseTitle: "Giáo trình chuẩn HSK 1 - Tự học tiếng Trung",
  instructor: "Thầy Thành Luân",
  playlistUrl: "https://www.youtube.com/playlist?list=PLkDxGl-gi2racE5ND8L9HP_xsAl9qLxSG",
  
  // BẢNG 23 THANH MẪU TRA NHANH TOÀN DIỆN
  all23Initials: [
    { num: 1, char: "b", read: "bua", note: "Không bật hơi", group: "Âm môi", audioText: "bo", example: "ba (bố)" },
    { num: 2, char: "p", read: "pua", note: "Bặm môi, bật hơi mạnh", group: "Âm môi", audioText: "po", example: "pa (sợ)" },
    { num: 3, char: "m", read: "mua", note: "Âm mũi hai môi", group: "Âm môi", audioText: "mo", example: "ma (mẹ)" },
    { num: 4, char: "f", read: "fo", note: "Răng trên chạm môi dưới", group: "Âm môi", audioText: "fo", example: "fa (phát)" },
    { num: 5, char: "d", read: "tưa", note: "Không bật hơi (giống t tiếng Việt)", group: "Âm đầu lưỡi", audioText: "de", example: "da (lớn)" },
    { num: 6, char: "t", read: "thưa", note: "Bật hơi mạnh (giống th tiếng Việt)", group: "Âm đầu lưỡi", audioText: "te", example: "ta (anh ấy)" },
    { num: 7, char: "n", read: "nưa", note: "Âm mũi đầu lưỡi", group: "Âm đầu lưỡi", audioText: "ne", example: "na (đó)" },
    { num: 8, char: "l", read: "lưa", note: "Âm biên đầu lưỡi", group: "Âm đầu lưỡi", audioText: "le", example: "la (kéo)" },
    { num: 9, char: "g", read: "cưa", note: "Không bật hơi (giống c/k tiếng Việt)", group: "Âm cuống lưỡi", audioText: "ge", example: "ge (anh trai)" },
    { num: 10, char: "k", read: "khưa", note: "Bật hơi mạnh từ cuống họng", group: "Âm cuống lưỡi", audioText: "ke", example: "ke (khát)" },
    { num: 11, char: "h", read: "hưa", note: "Đọc nhẹ lai giữa h và kh", group: "Âm cuống lưỡi", audioText: "he", example: "ha (uống)" },
    { num: 12, char: "j", read: "chi", note: "Đọc nhẹ, không bật hơi", group: "Âm mặt lưỡi", audioText: "ji", example: "ji (con gà)" },
    { num: 13, char: "q", read: "chi", note: "Bật hơi mạnh, luồng hơi dứt khoát", group: "Âm mặt lưỡi", audioText: "qi", example: "qi (số 7)" },
    { num: 14, char: "x", read: "xi", note: "Mặt lưỡi nâng nhẹ, hơi thoát qua khe", group: "Âm mặt lưỡi", audioText: "xi", example: "xi (rửa/tây)" },
    { num: 15, char: "zh", read: "trư", note: "Cong lưỡi, đọc nhẹ, không bật hơi", group: "Âm cong lưỡi", audioText: "zhi", example: "zhe (này)" },
    { num: 16, char: "ch", read: "trư", note: "Cong lưỡi, bật mạnh luồng hơi", group: "Âm cong lưỡi", audioText: "chi", example: "chi (ăn)" },
    { num: 17, char: "sh", read: "sư", note: "Cong lưỡi, phát âm xát", group: "Âm cong lưỡi", audioText: "shi", example: "shi (là/thì)" },
    { num: 18, char: "r", read: "rư", note: "Cong lưỡi, thanh đới rung nhẹ", group: "Âm cong lưỡi", audioText: "ri", example: "ri (mặt trời)" },
    { num: 19, char: "z", read: "chư", note: "Lưỡi thẳng, đọc nhẹ, không bật hơi", group: "Âm lưỡi thẳng", audioText: "zi", example: "zi (chữ)" },
    { num: 20, char: "c", read: "chư", note: "Lưỡi thẳng, bật hơi thật mạnh", group: "Âm lưỡi thẳng", audioText: "ci", example: "ci (lần)" },
    { num: 21, char: "s", read: "xư", note: "Lưỡi thẳng, hơi ma sát mặt răng", group: "Âm lưỡi thẳng", audioText: "si", example: "si (số 4)" },
    { num: 22, char: "y", read: "i", note: "Thanh mẫu đặc biệt (bán nguyên âm)", group: "Đặc biệt", audioText: "yi", example: "yi (số 1)" },
    { num: 23, char: "w", read: "u", note: "Thanh mẫu đặc biệt (bán nguyên âm)", group: "Đặc biệt", audioText: "wu", example: "wu (số 5)" }
  ],

  lessons: [
    {
      id: 1,
      title: "Bài 1: 你好 - Xin chào!",
      pinyin: "Nǐ hǎo",
      meaning: "Chào bạn / Xin chào",
      videoId: "EpSs4cdSML0",
      description: "Bài mở đầu làm quen với Ngữ âm tiếng Trung (Pinyin), Thanh mẫu, Vận mẫu, 4 Thanh điệu, Quy tắc biến điệu thanh 3, Từ vựng chào hỏi cơ bản và các nét chữ Hán đầu tiên.",
      timecodes: [
        { time: "00:00", label: "Giới thiệu tổng quan HSK 1 & Giáo trình" },
        { time: "05:20", label: "Phần 1: Ngữ âm tiếng Trung & Bảng Pinyin" },
        { time: "14:15", label: "11 Thanh mẫu cơ bản (b, p, m, f, d, t, n, l, g, k, h)" },
        { time: "28:30", label: "15 Vận mẫu đơn & kép (a, o, e, i, u, ü, ai, ei...)" },
        { time: "42:10", label: "4 Thanh điệu cơ bản & Mô hình độ cao âm thanh" },
        { time: "55:00", label: "Quy tắc biến điệu quan trọng (2 thanh 3 đi liền)" },
        { time: "1:08:20", label: "Từ mới & Bài khóa 1, 2, 3" },
        { time: "1:22:45", label: "Các nét cơ bản & Quy tắc bút thuận viết chữ Hán" }
      ],
      initials: [
        { char: "b", pinyin: "b", ipa: "[p]", tip: "Đọc như 'p' trong tiếng Việt nhưng không bật hơi (ví dụ: ba - bố)", example: "bàba (爸爸)" },
        { char: "p", pinyin: "p", ipa: "[pʰ]", tip: "Bật hơi mạnh! Đọc như 'p' bật hơi (để tờ giấy trước miệng sẽ bay)", example: "píngguǒ (苹果)" },
        { char: "m", pinyin: "m", ipa: "[m]", tip: "Đọc như 'm' trong tiếng Việt (mẹ, mua)", example: "māmā (妈妈)" },
        { char: "f", pinyin: "f", ipa: "[f]", tip: "Đọc như 'ph' trong tiếng Việt (phở, phát)", example: "fēi (飞)" },
        { char: "d", pinyin: "d", ipa: "[t]", tip: "Đọc như 't' trong tiếng Việt, không bật hơi (ta, tôi)", example: "dà (大)" },
        { char: "t", pinyin: "t", ipa: "[tʰ]", tip: "Bật hơi mạnh! Đọc như 'th' trong tiếng Việt (tha, thở)", example: "tā (他)" },
        { char: "n", pinyin: "n", ipa: "[n]", tip: "Đọc như 'n' trong tiếng Việt (nắng, no)", example: "nǐ (你)" },
        { char: "l", pinyin: "l", ipa: "[l]", tip: "Đọc như 'l' trong tiếng Việt (lớn, làm)", example: "lǎo (老)" },
        { char: "g", pinyin: "g", ipa: "[k]", tip: "Đọc như 'c/k' trong tiếng Việt, không bật hơi (cá, kem)", example: "gēge (哥哥)" },
        { char: "k", pinyin: "k", ipa: "[kʰ]", tip: "Bật hơi mạnh từ cuống họng! Gần như 'kh' nhẹ bật hơi", example: "kě (渴)" },
        { char: "h", pinyin: "h", ipa: "[x]", tip: "Đọc lai giữa 'h' và 'kh' nhẹ (hát, không khí)", example: "hǎo (好)" }
      ],
      finals: [
        { char: "a", pinyin: "a", tip: "Đọc mở miệng to như 'a' tiếng Việt", example: "bā (八 - Tám)" },
        { char: "o", pinyin: "o", tip: "Đọc tròn môi như 'ua / ô' nhẹ", example: "pópo (婆婆)" },
        { char: "e", pinyin: "e", tip: "Đọc như 'ưa / ơ' tiếng Việt, mở họng tự nhiên", example: "è (饿 - Đói)" },
        { char: "i", pinyin: "i", tip: "Đọc dẹt môi như 'i' tiếng Việt", example: "yī (一 - Một)" },
        { char: "u", pinyin: "u", tip: "Đọc tròn môi như 'u' tiếng Việt", example: "wǔ (五 - Năm)" },
        { char: "ü", pinyin: "ü", tip: "Chu tròn môi phát âm chữ 'i' nhưng giữ khẩu hình tròn 'u'", example: "nǚ (女 - Nữ)" },
        { char: "ai", pinyin: "ai", tip: "Đọc như 'ai' tiếng Việt", example: "bái (白 - Trắng)" },
        { char: "ei", pinyin: "ei", tip: "Đọc như 'ây / ê' tiếng Việt", example: "bēi (杯 - Cốc)" },
        { char: "ao", pinyin: "ao", tip: "Đọc như 'ao' tiếng Việt", example: "hǎo (好 - Tốt)" },
        { char: "ou", pinyin: "ou", tip: "Đọc như 'âu / ô' tiếng Việt", example: "kǒu (口 - Miệng)" },
        { char: "an", pinyin: "an", tip: "Đọc như 'an' tiếng Việt", example: "bàn (半 - Nửa)" },
        { char: "en", pinyin: "en", tip: "Đọc như 'ơn / ân' tiếng Việt", example: "hěn (很 - Rất)" },
        { char: "ang", pinyin: "ang", tip: "Đọc như 'ang' tiếng Việt, mở rộng vòm họng", example: "máng (忙 - Bận)" },
        { char: "eng", pinyin: "eng", tip: "Đọc như 'âng' tiếng Việt", example: "léng (冷 - Lạnh)" },
        { char: "ong", pinyin: "ong", tip: "Đọc như 'ung / ông' tiếng Việt", example: "hóng (红 - Đỏ)" }
      ],
      tones: [
        {
          name: "Thanh 1 (Âm Bình / 阴平)",
          symbol: "ā",
          pitch: "5 - 5 (Cao & Ngang phẳng)",
          desc: "Đọc âm vực cao, giọng đều và kéo dài ổn định, không lên không xuống. Giống như nốt Sol ngân dài.",
          example: "mā (妈 - Mẹ)"
        },
        {
          name: "Thanh 2 (Dương Bình / 阳平)",
          symbol: "á",
          pitch: "3 - 5 (Đi lên cao)",
          desc: "Bắt đầu từ độ cao trung bình rồi vuốt mạnh lên cao, tương tự dấu sắc trong tiếng Việt khi hỏi 'Hả?'.",
          example: "má (麻 - Cây gai / tê)"
        },
        {
          name: "Thanh 3 (Thượng Thanh / 上声)",
          symbol: "ǎ",
          pitch: "2 - 1 - 4 (Xuống sâu rồi lên)",
          desc: "Bắt đầu trung bình thấp, hạ sâu xuống cổ họng rồi móc nhẹ lên. Gần giống dấu hỏi tiếng Việt nhưng sâu hơn.",
          example: "mǎ (马 - Con ngựa)"
        },
        {
          name: "Thanh 4 (Khứ Thanh / 去声)",
          symbol: "à",
          pitch: "5 - 1 (Hạ dứt khoát)",
          desc: "Bắt đầu từ điểm cao nhất giật dứt khoát xuống thấp nhất. Không kéo dài, giống như tiếng ra lệnh hay từ chối dứt khoát.",
          example: "mà (骂 - Mắng mỏ)"
        },
        {
          name: "Khinh thanh (Thanh nhẹ)",
          symbol: "a",
          pitch: "Nhẹ & Ngắn",
          desc: "Không đánh dấu thanh, phát âm rất ngắn và nhẹ nhàng ở âm tiết phụ trợ phía sau.",
          example: "māma (妈妈 - Mẹ), nǐmen (你们 - Các bạn)"
        }
      ],
      toneRules: [
        {
          title: "Quy tắc biến điệu hai thanh 3 đi liền nhau (Cực kỳ quan trọng)",
          rule: "3 + 3 ➔ 2 + 3",
          explanation: "Khi hai âm tiết mang thanh 3 đứng cạnh nhau, âm thanh 3 phía trước sẽ biến đổi thành thanh 2 khi đọc (viết pinyin vẫn giữ nguyên dấu thanh 3).",
          exampleHtml: "<strong>你好</strong>: Viết là <code>nǐ hǎo</code> ➔ Thực tế đọc là <code>ní hǎo</code>.<br><strong>很好</strong>: Viết là <code>hěn hǎo</code> ➔ Thực tế đọc là <code>hén hǎo</code>."
        },
        {
          title: "Quy tắc biến điệu của từ 不 (bù)",
          rule: "bù + thanh 4 ➔ bú + thanh 4",
          explanation: "Từ '不' gốc là thanh 4 (bù). Khi đứng trước một từ mang thanh 4 khác, 'bù' biến thành 'bú' (thanh 2).",
          exampleHtml: "<strong>不是</strong>: Viết <code>bù shì</code> ➔ Đọc là <code>bú shì</code>.<br><strong>不对</strong>: Viết <code>bù duì</code> ➔ Đọc là <code>bú duì</code>."
        }
      ],
      vocab: [
        {
          id: "v1_1",
          hanzi: "你",
          pinyin: "nǐ",
          sinoViet: "Nhĩ",
          meaning: "Bạn, anh, chị, em (ngôi thứ 2 số ít)",
          type: "Đại từ",
          radicals: "亻 (Nhân đứng) + 尔 (Nhĩ)",
          memoryTip: "Người đứng (亻) trước mặt chính là Bạn (你).",
          example: "你好！(Nǐ hǎo! - Xin chào bạn!)"
        },
        {
          id: "v1_2",
          hanzi: "好",
          pinyin: "hǎo",
          sinoViet: "Hảo",
          meaning: "Tốt, đẹp, khỏe, ngon, lành",
          type: "Tính từ",
          radicals: "女 (Nữ) + 子 (Tử)",
          memoryTip: "Người phụ nữ (女) sinh được đứa con (子) chính là điều tốt lành, viên mãn (好).",
          example: "很好。(Hěn hǎo. - Rất tốt.)"
        },
        {
          id: "v1_3",
          hanzi: "您",
          pinyin: "nín",
          sinoViet: "Nẫm",
          meaning: "Ngài, ông, bà, bác, thầy (kính ngữ của 你)",
          type: "Đại từ kính trọng",
          radicals: "你 (Bạn) + 心 (Tâm)",
          memoryTip: "Đặt chữ Bạn (你) trong Trái tim (心) để thể hiện sự tôn trọng, kính trọng (您).",
          example: "老师，您好！(Lǎoshī, nín hǎo! - Thưa thầy/cô, xin chào thầy/cô!)"
        },
        {
          id: "v1_4",
          hanzi: "你们",
          pinyin: "nǐmen",
          sinoViet: "Nhĩ môn",
          meaning: "Các bạn, các anh, các chị (ngôi thứ 2 số nhiều)",
          type: "Đại từ số nhiều",
          radicals: "你 (Bạn) + 们 (Hậu tố chỉ số nhiều)",
          memoryTip: "Thêm chữ 们 vào sau đại từ chỉ người sẽ thành số nhiều (Chúng tôi, Các bạn, Họ).",
          example: "你们好！(Nǐmen hǎo! - Chào các bạn!)"
        },
        {
          id: "v1_5",
          hanzi: "对不起",
          pinyin: "duìbuqǐ",
          sinoViet: "Đối bất khởi",
          meaning: "Xin lỗi",
          type: "Cụm từ lịch sự",
          radicals: "对 (Đúng/Đối) + 不 (Không) + 起 (Dậy)",
          memoryTip: "Khi làm điều gì có lỗi, đối mặt không nổi ➔ Nói câu Xin lỗi (对不起).",
          example: "对不起，我迟到了。(Duìbuqǐ, wǒ chídào le. - Xin lỗi, tôi đến muộn.)"
        },
        {
          id: "v1_6",
          hanzi: "没关系",
          pinyin: "méi guānxi",
          sinoViet: "Một quan hệ",
          meaning: "Không sao đâu, không có gì, không hề gì",
          type: "Cụm từ lịch sự",
          radicals: "没 (Không có) + 关系 (Quan hệ, liên quan)",
          memoryTip: "Không có vấn đề gì liên can, không việc gì phải lo ➔ Không sao đâu (没关系).",
          example: "A: 对不起！ B: 没关系！(A: Xin lỗi! B: Không sao đâu!)"
        },
        {
          id: "v1_7",
          hanzi: "一",
          pinyin: "yī",
          sinoViet: "Nhất",
          meaning: "Số 1 (Một)",
          type: "Số từ",
          radicals: "Bộ Nhất (一)",
          memoryTip: "Một nét gạch ngang duy nhất tượng trưng cho số 1.",
          example: "一天。(Yì tiān. - Một ngày.)"
        },
        {
          id: "v1_8",
          hanzi: "五",
          pinyin: "wǔ",
          sinoViet: "Ngũ",
          meaning: "Số 5 (Năm)",
          type: "Số từ",
          radicals: "Bộ Nhị (二)",
          memoryTip: "Hình tượng ngũ hành kết nối đất trời.",
          example: "五个人。(Wǔ ge rén. - Năm người.)"
        },
        {
          id: "v1_9",
          hanzi: "八",
          pinyin: "bā",
          sinoViet: "Bát",
          meaning: "Số 8 (Tám - tượng trưng cho phát tài)",
          type: "Số từ",
          radicals: "Bộ Bát (八)",
          memoryTip: "Hai nét tẽ ra hai bên, giống như tài lộc mở rộng.",
          example: "八月。(Bā yuè. - Tháng Tám.)"
        },
        {
          id: "v1_10",
          hanzi: "大",
          pinyin: "dà",
          sinoViet: "Đại",
          meaning: "To, lớn",
          type: "Tính từ",
          radicals: "Bộ Đại (大)",
          memoryTip: "Hình ảnh một người (人) dang rộng hai tay hai chân hết cỡ để diễn tả sự To Lớn (大).",
          example: "很大。(Hěn dà. - Rất to lớn.)"
        },
        {
          id: "v1_11",
          hanzi: "不",
          pinyin: "bù",
          sinoViet: "Bất",
          meaning: "Không, chẳng (phủ định)",
          type: "Phó từ phủ định",
          radicals: "Bộ Nhất (一)",
          memoryTip: "Hình tượng cây non mới nhú chưa phát triển xong ➔ Mang nghĩa chưa, không.",
          example: "不好。(Bù hǎo. - Không tốt.)"
        },
        {
          id: "v1_12",
          hanzi: "口",
          pinyin: "kǒu",
          sinoViet: "Khẩu",
          meaning: "Miệng, mồm, lượng từ chỉ người trong gia đình",
          type: "Danh từ",
          radicals: "Bộ Khẩu (口)",
          memoryTip: "Hình vẽ một cái miệng vuông vức mở ra.",
          example: "一家三口人。(Yì jiā sān kǒu rén. - Gia đình có ba người.)"
        },
        {
          id: "v1_13",
          hanzi: "白",
          pinyin: "bái",
          sinoViet: "Bạch",
          meaning: "Màu trắng, sáng, rõ ràng",
          type: "Tính từ",
          radicals: "Bộ Bạch (白)",
          memoryTip: "Hình ảnh hạt gạo trắng hoặc ánh mặt trời ló rạng.",
          example: "白色的书。(Báisè de shū. - Cuốn sách màu trắng.)"
        },
        {
          id: "v1_14",
          hanzi: "女",
          pinyin: "nǚ",
          sinoViet: "Nữ",
          meaning: "Nữ giới, con gái, phụ nữ",
          type: "Danh từ",
          radicals: "Bộ Nữ (女)",
          memoryTip: "Hình vẽ người phụ nữ dịu dàng quỳ gối chắp tay ngày xưa.",
          example: "女人。(Nǚrén. - Phụ nữ.)"
        },
        {
          id: "v1_15",
          hanzi: "马",
          pinyin: "mǎ",
          sinoViet: "Mã",
          meaning: "Con ngựa",
          type: "Danh từ",
          radicals: "Bộ Mã (马)",
          memoryTip: "Hình vẽ đầu, bờm và bốn vó ngựa đang phi nước đại.",
          example: "白马。(Bái mǎ. - Con ngựa trắng.)"
        }
      ],
      dialogues: [
        {
          title: "Bài khóa 1: Lời chào thân mật hàng ngày",
          situation: "Chào hỏi thông thường giữa hai người bạn hoặc người ngang hàng.",
          lines: [
            { speaker: "A", hanzi: "你好！", pinyin: "Nǐ hǎo!", viet: "Chào bạn / Xin chào!" },
            { speaker: "B", hanzi: "你好！", pinyin: "Nǐ hǎo!", viet: "Chào bạn / Xin chào!" }
          ],
          note: "Chú ý: Cả hai chữ 'nǐ' và 'hǎo' đều là thanh 3. Khi nói đọc biến âm là 'Ní hǎo!'."
        },
        {
          title: "Bài khóa 2: Chào hỏi người bề trên & Số nhiều",
          situation: "Người ít tuổi / học sinh chào người lớn / thầy cô giáo, và lời chào đáp lại số đông.",
          lines: [
            { speaker: "A (Học sinh)", hanzi: "您好！", pinyin: "Nín hǎo!", viet: "Chào ngài / Chào thầy / Chào bác!" },
            { speaker: "B (Thầy giáo)", hanzi: "你们好！", pinyin: "Nǐmen hǎo!", viet: "Chào các em / Chào các bạn!" }
          ],
          note: "'您' (Nín) dùng để thể hiện sự tôn trọng, lễ phép với người lớn tuổi, thầy cô, đối tác. '你们' (Nǐmen) là số nhiều (các bạn)."
        },
        {
          title: "Bài khóa 3: Lời xin lỗi và tha thứ lịch sự",
          situation: "Giao tiếp lịch thiệp khi lỡ làm phiền người khác.",
          lines: [
            { speaker: "A", hanzi: "对不起！", pinyin: "Duìbuqǐ!", viet: "Xin lỗi!" },
            { speaker: "B", hanzi: "没关系！", pinyin: "Méi guānxi!", viet: "Không sao đâu / Không có gì!" }
          ],
          note: "'不' trong 'duìbuqǐ' và 'xi' trong 'guānxi' đọc là khinh thanh (thanh nhẹ, lướt nhanh)."
        }
      ],
      hanziStrokes: [
        {
          name: "Nét Ngang (横 - Héng)",
          direction: "Viết từ trái sang phải: ─",
          example: "一 (yī - một), 二 (èr - hai), 三 (sān - ba)"
        },
        {
          name: "Nét Sổ (竖 - Shù)",
          direction: "Viết thẳng từ trên xuống dưới: │",
          example: "十 (shí - mười), 中 (zhōng - trung)"
        },
        {
          name: "Nét Phẩy (撇 - Piě)",
          direction: "Viết từ trên chếch xuống bên trái: ╱",
          example: "八 (bā - tám), 人 (rén - người)"
        },
        {
          name: "Nét Mác (捺 - Nà)",
          direction: "Viết từ trên chếch nghiêng xuống bên phải: ╲",
          example: "大 (dà - lớn), 人 (rén - người)"
        },
        {
          name: "Nét Chấm (点 - Diǎn)",
          direction: "Chấm một chấm từ trên xuống nghiêng nhẹ: 丶",
          example: "不 (bù - không), 下 (xià - dưới)"
        }
      ],
      strokeRules: [
        "1. Ngang trước, sổ sau (Ví dụ chữ 十: Viết nét Ngang 一 trước, nét Sổ 丨 sau)",
        "2. Phẩy trước, mác sau (Ví dụ chữ 八: Nét Phẩy 丿 bên trái trước, nét Mác 乀 bên phải sau)",
        "3. Trên trước, dưới sau (Ví dụ chữ 二, 三: Viết nét trên trước, nét dưới sau)",
        "4. Trái trước, phải sau (Ví dụ chữ 你, 好: Viết bộ phận bên trái trước, bên phải sau)",
        "5. Ngoài trước, trong sau (Bao quanh ngoài trước, viết ruột bên trong sau)",
        "6. Vào trước, đóng sau (Vào cửa trước rồi mới đóng then chốt)",
        "7. Giữa trước, hai bên sau (Ví dụ chữ 小, 水: Nét chính giữa trước, hai nét phụ hai bên sau)"
      ],
      quiz: [
        {
          id: "q1",
          question: "Khi hai âm mang thanh 3 đi liền nhau (ví dụ: 你 nǐ + 好 hǎo), phát âm chuẩn thực tế là:",
          options: [
            "Giữ nguyên hai thanh 3: nǐ hǎo",
            "Thanh 3 thứ nhất biến thành thanh 2: ní hǎo",
            "Cả hai thanh chuyển thành thanh 1: nī hāo",
            "Thanh 3 thứ hai chuyển thành thanh 4: nǐ hào"
          ],
          correct: 1,
          explain: "Theo quy tắc biến điệu: 3 + 3 ➔ 2 + 3. Vì vậy 'nǐ hǎo' được phát âm là 'ní hǎo'."
        },
        {
          id: "q2",
          question: "Chữ '您' (Nín) khác chữ '你' (Nǐ) ở điểm nào?",
          options: [
            "Chữ '您' có thêm bộ Tâm (心) ở dưới, dùng để kính trọng người lớn tuổi/bề trên",
            "Chữ '您' dùng để chỉ số nhiều (các bạn)",
            "Chữ '您' chỉ dùng cho phụ nữ",
            "Hai chữ hoàn toàn giống nhau không có khác biệt"
          ],
          correct: 0,
          explain: "'您' (Nín) có bộ Tâm (心) ở dưới, là đại từ ngôi thứ hai số ít dùng với sắc thái tôn kính, lịch sự."
        },
        {
          id: "q3",
          question: "Khi người khác nói '对不起！' (Duìbuqǐ! - Xin lỗi!), câu đáp lại lịch sự và tự nhiên nhất là:",
          options: [
            "你好！(Nǐ hǎo!)",
            "没关系！(Méi guānxi!)",
            "再见！(Zàijiàn!)",
            "不用谢！(Bú yòng xiè!)"
          ],
          correct: 1,
          explain: "Đáp lại lời xin lỗi '对不起！' là '没关系！' (Không sao đâu, không có gì!)."
        },
        {
          id: "q4",
          question: "Thanh mẫu (phụ âm đầu) 'p' trong tiếng Trung phát âm như thế nào?",
          options: [
            "Đọc như chữ 'p' tiếng Việt không bật hơi",
            "Đọc bật hơi thật mạnh, luồng gió từ miệng đẩy mạnh ra ngoài",
            "Đọc giống chữ 'm'",
            "Đọc giống chữ 'ph' tiếng Việt"
          ],
          correct: 1,
          explain: "Trong tiếng Trung, 'b' là âm không bật hơi, còn 'p' là âm hai môi bật hơi rất mạnh."
        },
        {
          id: "q5",
          question: "Chữ Hán '好' (hǎo - tốt đẹp) được tạo thành bởi hai bộ thủ nào?",
          options: [
            "Bộ Nhân (亻) và bộ Khẩu (口)",
            "Bộ Nữ (女 - phụ nữ) và bộ Tử (子 - con cái)",
            "Bộ Mộc (木) và bộ Thủy (水)",
            "Bộ Nhật (日) và bộ Nguyệt (月)"
          ],
          correct: 1,
          explain: "'好' gồm bộ Nữ (女) và bộ Tử (子), hàm ý người mẹ sinh được con cái là điềm lành, tốt đẹp."
        },
        {
          id: "q6",
          question: "Từ nào sau đây có nghĩa là 'Số 8'?",
          options: [
            "一 (yī)",
            "五 (wǔ)",
            "八 (bā)",
            "大 (dà)"
          ],
          correct: 2,
          explain: "八 (bā) là số 8. 一 là 1, 五 là 5, 大 là to lớn."
        },
        {
          id: "q7",
          question: "Thanh 4 (Khứ thanh) trong tiếng Trung có đặc điểm phát âm là gì?",
          options: [
            "Cao độ 5-5 đều đều không đổi",
            "Bắt đầu từ cao nhất (5) hạ thật dứt khoát xuống thấp nhất (1)",
            "Hạ xuống rồi lại móc lên cao",
            "Đọc nhẹ và lướt nhanh"
          ],
          correct: 1,
          explain: "Thanh 4 có cao độ 5-1, bắt đầu rất cao rồi giật dứt khoát xuống, phát âm mạnh mẽ dứt khoát."
        },
        {
          id: "q8",
          question: "Quy tắc viết nét bút chữ Hán nào sau đây là ĐÚNG?",
          options: [
            "Sổ trước ngang sau, Dưới trước trên sau",
            "Ngang trước sổ sau, Trên trước dưới sau, Phẩy trước mác sau",
            "Trong trước ngoài sau, Đóng trước vào sau",
            "Tùy ý viết nét nào thuận tay nhất"
          ],
          correct: 1,
          explain: "Các quy tắc bút thuận cơ bản: Ngang trước sổ sau, Trên trước dưới sau, Trái trước phải sau, Phẩy trước mác sau."
        }
      ]
    },
    {
      id: 2,
      title: "Bài 2: 谢谢你 - Cảm ơn bạn!",
      pinyin: "Xièxie nǐ",
      meaning: "Cảm ơn bạn",
      videoId: "EfN5_uU35vY",
      description: "Học cách nói lời cảm ơn, từ chối lịch sự, các thanh mẫu zh, ch, sh, r, z, c, s và quy tắc thanh nhẹ.",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Bài 3: 你叫什么名字 - Bạn tên là gì?",
      pinyin: "Nǐ jiào shénme míngzi",
      meaning: "Bạn tên là gì?",
      videoId: "gZrvRS91p-I",
      description: "Học cách hỏi tên, giới thiệu bản thân, quốc tịch và cấu trúc câu hỏi với 什么.",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Bài 4: 她是我的汉语老师 - Cô ấy là giáo viên tiếng Trung của tôi",
      pinyin: "Tā shì wǒ de Hànyǔ lǎoshī",
      meaning: "Cô ấy là giáo viên tiếng Trung của tôi",
      videoId: "WNKzPU_W3bE",
      description: "Đại từ nhân xưng ngôi thứ 3 (他, 她), trợ từ kết cấu 的, câu chữ 是.",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Bài 5: 她女儿今年二十岁 - Con gái cô ấy năm nay 20 tuổi",
      pinyin: "Tā nǚ'ér jīnnián èrshí suì",
      meaning: "Con gái cô ấy năm nay 20 tuổi",
      videoId: "f8DFvv7FiDs",
      description: "Học cách hỏi và nói về tuổi tác, thành viên trong gia đình, số đếm từ 1-100.",
      status: "upcoming"
    },
    {
      id: 6,
      title: "Bài 6: 我会说汉语 - Tôi biết nói tiếng Trung",
      pinyin: "Wǒ huì shuō Hànyǔ",
      meaning: "Tôi biết nói tiếng Trung",
      videoId: "lDq6edF4Ovk",
      description: "Động từ năng nguyện 会 (biết qua học tập), nói về món ăn Trung Quốc, cách làm món ăn.",
      status: "upcoming"
    },
    {
      id: 7,
      title: "Bài 7: 今天几号 - Hôm nay ngày mấy?",
      pinyin: "Jīntiān jǐ hào",
      meaning: "Hôm nay ngày mấy?",
      videoId: "MDNnjsSX0DU",
      description: "Cách nói ngày, tháng, thứ trong tuần, cấu trúc câu vị ngữ danh từ biểu thị thời gian.",
      status: "upcoming"
    },
    {
      id: 8,
      title: "Bài 8: 我想喝茶 - Tôi muốn uống trà",
      pinyin: "Wǒ xiǎng hē chá",
      meaning: "Tôi muốn uống trà",
      videoId: "9OQI2UK-qX0",
      description: "Động từ năng nguyện 想 (muốn), gọi đồ ăn thức uống, hỏi giá tiền (多少钱).",
      status: "upcoming"
    },
    {
      id: 9,
      title: "Bài 9: 你儿子在哪儿工作 - Con trai bạn làm việc ở đâu?",
      pinyin: "Nǐ érzi zài nǎr gōngzuò",
      meaning: "Con trai bạn làm việc ở đâu?",
      videoId: "-u3sGPl2QzI",
      description: "Giới từ 在 (ở, tại), hỏi địa điểm vị trí với 哪儿, các nghề nghiệp phổ biến.",
      status: "upcoming"
    },
    {
      id: 10,
      title: "Bài 10: 我能坐这儿吗 - Tôi có thể ngồi đây không?",
      pinyin: "Wǒ néng zuò zhèr ma",
      meaning: "Tôi có thể ngồi đây không?",
      videoId: "cm2WUE5zGyY",
      description: "Động từ năng nguyện 能 (có thể), xin phép lịch sự, từ chỉ phương vị (trên, dưới, trước, sau).",
      status: "upcoming"
    },
    {
      id: 11,
      title: "Bài 11: 现在几点 - Bây giờ là mấy giờ?",
      pinyin: "Xiànzài jǐ diǎn",
      meaning: "Bây giờ là mấy giờ?",
      videoId: "3O5EQGb1vLk",
      description: "Hỏi và nói giờ phút chính xác, lịch trình sinh hoạt hàng ngày.",
      status: "upcoming"
    },
    {
      id: 12,
      title: "Bài 12: 明天天气怎么样 - Thời tiết ngày mai như thế nào?",
      pinyin: "Míngtiān tiānqì zěnmeyàng",
      meaning: "Thời tiết ngày mai thế nào?",
      videoId: "em01hp4pVYc",
      description: "Hỏi về thời tiết, tình trạng sức khỏe, cấu trúc câu 怎么样.",
      status: "upcoming"
    },
    {
      id: 13,
      title: "Bài 13: 他在学做中国菜呢 - Anh ấy đang học nấu món Trung Quốc đấy",
      pinyin: "Tā zài xué zuò Zhōngguó cài ne",
      meaning: "Anh ấy đang học nấu món Trung Quốc đấy",
      videoId: "-oib4Xw-LGI",
      description: "Thì hiện tại tiếp diễn với 在...呢, cách nghe điện thoại (喂 - Wèi).",
      status: "upcoming"
    },
    {
      id: 14,
      title: "Bài 14: 她买了不少衣服 - Cô ấy đã mua rất nhiều quần áo",
      pinyin: "Tā mǎi le bù shǎo yīfu",
      meaning: "Cô ấy đã mua rất nhiều quần áo",
      videoId: "3fkgULyP81k",
      description: "Trợ từ động thái 了 biểu thị hành động đã hoàn thành, mua sắm đồ đạc.",
      status: "upcoming"
    },
    {
      id: 15,
      title: "Bài 15: 我是坐飞机来的 - Tôi đến bằng máy bay",
      pinyin: "Wǒ shì zuò fēijī lái de",
      meaning: "Tôi đến bằng máy bay",
      videoId: "pACKLvBFzkY",
      description: "Cấu trúc nhấn mạnh thời gian, địa điểm, phương thức 是...的.",
      status: "upcoming"
    }
  ],

  // BỘ MẪU CÂU GIAO TIẾP HỌC CẤP TỐC (THỰC TẾ NHẤT TRONG ĐỜI SỐNG)
  expressPhrases: [
    // 1. Chào hỏi & Xã giao
    { id: "ep1", category: "Chào hỏi & Xã giao", hanzi: "你好！", pinyin: "Nǐ hǎo!", phoneticVi: "Ní hǎo!", viet: "Xin chào!", context: "Chào hỏi phổ biến mọi lúc mọi nơi." },
    { id: "ep2", category: "Chào hỏi & Xã giao", hanzi: "早上好！", pinyin: "Zǎoshang hǎo!", phoneticVi: "Chào sang hǎo!", viet: "Chào buổi sáng!", context: "Chào đầu ngày khi gặp đồng nghiệp, bạn bè." },
    { id: "ep3", category: "Chào hỏi & Xã giao", hanzi: "很高兴认识你！", pinyin: "Hěn gāoxìng rènshi nǐ!", phoneticVi: "Hẩn cao xing rân sự nỉ!", viet: "Rất vui được làm quen với bạn!", context: "Xã giao khi lần đầu gặp mặt." },
    { id: "ep4", category: "Chào hỏi & Xã giao", hanzi: "你吃了吗？", pinyin: "Nǐ chī le ma?", phoneticVi: "Nỉ chư lơ ma?", viet: "Bạn ăn cơm chưa?", context: "Câu chào hỏi cửa miệng cực kỳ phổ biến của người Trung Quốc thay cho 'Dạo này thế nào?'." },
    { id: "ep5", category: "Chào hỏi & Xã giao", hanzi: "谢谢你！", pinyin: "Xièxie nǐ!", phoneticVi: "Xiê xie nỉ!", viet: "Cảm ơn bạn!", context: "Bày tỏ lòng biết ơn." },
    { id: "ep6", category: "Chào hỏi & Xã giao", hanzi: "不客气！", pinyin: "Bú kèqi!", phoneticVi: "Bú khơ chi!", viet: "Đừng khách sáo / Không có chi!", context: "Đáp lại khi người khác cảm ơn." },
    { id: "ep7", category: "Chào hỏi & Xã giao", hanzi: "对不起！", pinyin: "Duìbuqǐ!", phoneticVi: "Tuây bu chỉ!", viet: "Xin lỗi!", context: "Khi làm phiền hoặc làm sai điều gì." },
    { id: "ep8", category: "Chào hỏi & Xã giao", hanzi: "没关系！", pinyin: "Méi guānxi!", phoneticVi: "Mấy quan xi!", viet: "Không sao đâu / Không vấn đề gì!", context: "Đáp lại khi người khác xin lỗi." },
    { id: "ep9", category: "Chào hỏi & Xã giao", hanzi: "再见！", pinyin: "Zàijiàn!", phoneticVi: "Chai chiên!", viet: "Tạm biệt / Hẹn gặp lại!", context: "Chào tạm biệt." },

    // 2. Mua sắm & Mặc cả / Thanh toán
    { id: "ep10", category: "Mua sắm & Mặc cả", hanzi: "这个多少钱？", pinyin: "Zhège duōshao qián?", phoneticVi: "Chưa cưa đua sao chén?", viet: "Cái này bao nhiêu tiền?", context: "Hỏi giá bất kỳ món đồ nào." },
    { id: "ep11", category: "Mua sắm & Mặc cả", hanzi: "太贵了，便宜一点吧！", pinyin: "Tài guì le, piányi yìdiǎn ba!", phoneticVi: "Thai kuây lơ, phiền di ý tiển ba!", viet: "Đắt quá, rẻ một chút đi!", context: "Câu cửa miệng thần thánh khi đi mua sắm mặc cả tại Trung Quốc." },
    { id: "ep12", category: "Mua sắm & Mặc cả", hanzi: "可以刷卡吗？", pinyin: "Kěyǐ shuākǎ ma?", phoneticVi: "Khửa dỉ soa khả ma?", viet: "Có quẹt thẻ được không?", context: "Hỏi phương thức thanh toán thẻ." },
    { id: "ep13", category: "Mua sắm & Mặc cả", hanzi: "我可以扫微信吗？", pinyin: "Wǒ kěyǐ sǎo Wēixìn ma?", phoneticVi: "Ủa khửa dỉ sảo Uây-xin ma?", viet: "Tôi quét mã WeChat được không?", context: "Thanh toán không tiền mặt bằng WeChat Pay (phổ biến nhất TQ)." },
    { id: "ep14", category: "Mua sắm & Mặc cả", hanzi: "我用支付宝付款。", pinyin: "Wǒ yòng Zhīfùbǎo fùkuǎn.", phoneticVi: "Ủa dung Chi-phu-bảo phu khoản.", viet: "Tôi dùng Alipay thanh toán.", context: "Thanh toán bằng ứng dụng Alipay." },
    { id: "ep15", category: "Mua sắm & Mặc cả", hanzi: "有大一点的吗？", pinyin: "Yǒu dà yìdiǎn de ma?", phoneticVi: "Dẩu ta ý tiển tơ ma?", viet: "Có cái to hơn một chút không?", context: "Hỏi cỡ áo quần hoặc kích thước đồ vật." },
    { id: "ep16", category: "Mua sắm & Mặc cả", hanzi: "我就看看。", pinyin: "Wǒ jiù kànkan.", phoneticVi: "Ủa chiêu khan khan.", viet: "Tôi chỉ xem thử thôi.", context: "Khi nhân viên bán hàng tiếp cận mà bạn chỉ muốn dạo ngắm." },
    { id: "ep17", category: "Mua sắm & Mặc cả", hanzi: "我要这个。", pinyin: "Wǒ yào zhège.", phoneticVi: "Ủa dao chưa cưa.", viet: "Tôi lấy cái này.", context: "Chốt mua món đồ." },

    // 3. Ăn uống & Gọi món
    { id: "ep18", category: "Ăn uống & Gọi món", hanzi: "服务员，点菜！", pinyin: "Fúwùyuán, diǎncài!", phoneticVi: "Phú vu uyển, tiển chai!", viet: "Phục vụ ơi, gọi món!", context: "Gọi nhân viên khi vào quán ăn." },
    { id: "ep19", category: "Ăn uống & Gọi món", hanzi: "请给我菜单。", pinyin: "Qǐng gěi wǒ càidān.", phoneticVi: "Chỉnh cẩy ủa chai tan.", viet: "Cho tôi xin quyển thực đơn.", context: "Yêu cầu xem menu." },
    { id: "ep20", category: "Ăn uống & Gọi món", hanzi: "有什么推荐的吗？", pinyin: "Yǒu shénme tuījiàn de ma?", phoneticVi: "Dẩu sấn mơ thui chiên tơ ma?", viet: "Có món gì ngon gợi ý không?", context: "Nhờ quán tư vấn món đặc trưng." },
    { id: "ep21", category: "Ăn uống & Gọi món", hanzi: "不要太辣！", pinyin: "Bú yào tài là!", phoneticVi: "Bú dao thai la!", viet: "Đừng làm cay quá nhé!", context: "Đồ ăn Trung Quốc rất cay, hãy dùng câu này nếu bạn ăn cay kém." },
    { id: "ep22", category: "Ăn uống & Gọi món", hanzi: "不要放香菜。", pinyin: "Bú yào fàng xiāngcài.", phoneticVi: "Bú dao phang xiang chai.", viet: "Đừng cho rau mùi (ngò rí).", context: "Nhiều người không quen ăn rau mùi ở Trung Quốc." },
    { id: "ep23", category: "Ăn uống & Gọi món", hanzi: "请给我一杯水。", pinyin: "Qǐng gěi wǒ yì bēi shuǐ.", phoneticVi: "Chỉnh cẩy ủa ý pây suẩy.", viet: "Làm ơn cho tôi một cốc nước.", context: "Xin nước uống." },
    { id: "ep24", category: "Ăn uống & Gọi món", hanzi: "买单！/ 结账！", pinyin: "Mǎidān! / Jiézhàng!", phoneticVi: "Mải tan! / Chiế chang!", viet: "Thanh toán tiền / Tính tiền!", context: "Câu gọi tính tiền khi ăn xong." },
    { id: "ep25", category: "Ăn uống & Gọi món", hanzi: "打包。", pinyin: "Dǎbāo.", phoneticVi: "Tả bao.", viet: "Gói mang về / Đóng hộp mang về.", context: "Yêu cầu mang thức ăn thừa hoặc mua mang đi." },

    // 4. Taxi & Đi lại / Hỏi đường
    { id: "ep26", category: "Đi lại & Hỏi đường", hanzi: "师傅，去机场多少钱？", pinyin: "Shīfu, qù jīchǎng duōshao qián?", phoneticVi: "Sư phu, chuy chi chẳng đua sao chén?", viet: "Bác tài ơi, đi sân bay bao nhiêu tiền?", context: "Hỏi giá tài xế taxi." },
    { id: "ep27", category: "Đi lại & Hỏi đường", hanzi: "请打表。", pinyin: "Qǐng dǎbiǎo.", phoneticVi: "Chỉnh tả biẻo.", viet: "Làm ơn bật đồng hồ tính cước.", context: "Yêu cầu taxi tính theo đồng hồ cước." },
    { id: "ep28", category: "Đi lại & Hỏi đường", hanzi: "请问，洗手间在哪儿？", pinyin: "Qǐngwèn, xǐshǒujiān zài nǎr?", phoneticVi: "Chỉnh uân, xỉ sổ chiên chai nả?", viet: "Xin hỏi nhà vệ sinh ở đâu?", context: "Câu hỏi cực kỳ quan trọng và cần thiết." },
    { id: "ep29", category: "Đi lại & Hỏi đường", hanzi: "地铁站在哪儿？", pinyin: "Dìtiě zhàn zài nǎr?", phoneticVi: "Ti thiể chan chai nả?", viet: "Ga tàu điện ngầm ở đâu?", context: "Hỏi đường đi tàu điện ngầm." },
    { id: "ep30", category: "Đi lại & Hỏi đường", hanzi: "往左拐，然后一直走。", pinyin: "Wǎng zuǒ guǎi, ránhòu yìzhí zǒu.", phoneticVi: "Oảng chủa quải, rán hâu ý chứ chởu.", viet: "Rẽ trái, sau đó đi thẳng.", context: "Chỉ đường hoặc nghe người ta chỉ đường." },
    { id: "ep31", category: "Đi lại & Hỏi đường", hanzi: "我就在这儿下车。", pinyin: "Wǒ jiù zài zhèr xiàchē.", phoneticVi: "Ủa chiêu chai chưa xia xưa.", viet: "Tôi xuống xe ở đây nhé.", context: "Báo tài xế dừng xe trả khách." },

    // 5. Khách sạn & Thuê phòng
    { id: "ep32", category: "Khách sạn & Phòng ở", hanzi: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù.", phoneticVi: "Ủa dao pan lỉ ru chu.", viet: "Tôi muốn làm thủ tục nhận phòng (Check-in).", context: "Tại quầy lễ tân khách sạn." },
    { id: "ep33", category: "Khách sạn & Phòng ở", hanzi: "有无线网络吗？密码是多少？", pinyin: "Yǒu wúxiàn wǎngluò ma? Mìmǎ shì duōshao?", phoneticVi: "Dẩu ú xiên oảng luơ ma? Mi mả sự đua sao?", viet: "Có Wifi không? Mật khẩu là gì?", context: "Xin mật khẩu Wifi." },
    { id: "ep34", category: "Khách sạn & Phòng ở", hanzi: "我要退房。", pinyin: "Wǒ yào tuìfáng.", phoneticVi: "Ủa dao thui pháng.", viet: "Tôi muốn trả phòng (Check-out).", context: "Khi rời khách sạn." },

    // 6. Nhờ giúp đỡ & Khẩn cấp
    { id: "ep35", category: "Nhờ vả & Khẩn cấp", hanzi: "不好意思，麻烦你一下。", pinyin: "Bù hǎoyìsi, máfan nǐ yíxià.", phoneticVi: "Pu hảo di sự, má phan nỉ ý xia.", viet: "Ngại quá, phiền bạn một chút.", context: "Mở đầu lịch sự khi muốn nhờ người lạ giúp đỡ." },
    { id: "ep36", category: "Nhờ vả & Khẩn cấp", hanzi: "你会说英语吗？", pinyin: "Nǐ huì shuō Yīngyǔ ma?", phoneticVi: "Nỉ huây suo Y-ing dử ma?", viet: "Bạn có biết nói tiếng Anh không?", context: "Khi muốn chuyển sang giao tiếp tiếng Anh." },
    { id: "ep37", category: "Nhờ vả & Khẩn cấp", hanzi: "请说慢一点。", pinyin: "Qǐng shuō màn yìdiǎn.", phoneticVi: "Chỉnh suo man ý tiển.", viet: "Xin vui lòng nói chậm lại một chút.", context: "Khi người bản xứ nói quá nhanh bạn nghe không kịp." },
    { id: "ep38", category: "Nhờ vả & Khẩn cấp", hanzi: "我听不懂。", pinyin: "Wǒ tīng bu dǒng.", phoneticVi: "Ủa thing bu tổng.", viet: "Tôi nghe không hiểu.", context: "Nói thật để người ta đổi cách diễn đạt." },
    { id: "ep39", category: "Nhờ vả & Khẩn cấp", hanzi: "请帮帮我！", pinyin: "Qǐng bāngbang wǒ!", phoneticVi: "Chỉnh pang pang ủa!", viet: "Xin hãy giúp tôi với!", context: "Khi gặp khó khăn cần người cứu trợ." },
    { id: "ep40", category: "Nhờ vả & Khẩn cấp", hanzi: "救命啊！", pinyin: "Jiùmìng a!", phoneticVi: "Chiêu ming a!", viet: "Cứu mạng với! / Cứu với!", context: "Tình huống nguy cấp khẩn cấp." },

    // 7. Khẩu ngữ tự nhiên của người bản xứ
    { id: "ep41", category: "Khẩu ngữ đời sống", hanzi: "真的吗？", pinyin: "Zhēn de ma?", phoneticVi: "Chân tơ ma?", viet: "Thật không đấy? / Thật á?", context: "Bày tỏ sự ngạc nhiên, tò mò." },
    { id: "ep42", category: "Khẩu ngữ đời sống", hanzi: "太棒了！", pinyin: "Tài bàng le!", phoneticVi: "Thai pang lơ!", viet: "Tuyệt vời quá! / Đỉnh quá!", context: "Khen ngợi, tán thưởng nồng nhiệt." },
    { id: "ep43", category: "Khẩu ngữ đời sống", hanzi: "没问题！", pinyin: "Méi wèntí!", phoneticVi: "Mấy uân thí!", viet: "Không vấn đề gì! / Chuyện nhỏ!", context: "Đồng ý lời nhờ vả một cách sảng khoái." },
    { id: "ep44", category: "Khẩu ngữ đời sống", hanzi: "好的 / 行！", pinyin: "Hǎo de / Xíng!", phoneticVi: "Hảo tơ / Xính!", viet: "Được rồi / OK / Được chứ!", context: "Thể hiện sự đồng thuận, chấp nhận." },
    { id: "ep45", category: "Khẩu ngữ đời sống", hanzi: "算了吧。", pinyin: "Suàn le ba.", phoneticVi: "Soan lơ ba.", viet: "Thôi bỏ đi / Thôi dẹp đi.", context: "Khi không muốn tiếp tục làm việc gì hoặc bỏ qua tranh cãi." },
    { id: "ep46", category: "Khẩu ngữ đời sống", hanzi: "随便你。", pinyin: "Suíbiàn nǐ.", phoneticVi: "Suấy piên nỉ.", viet: "Tùy bạn / Sao cũng được.", context: "Khi bạn để đối phương toàn quyền quyết định." },
    { id: "ep47", category: "Khẩu ngữ đời sống", hanzi: "加油！", pinyin: "Jiāyóu!", phoneticVi: "Chia dẩu!", viet: "Cố lên! / Cố gắng lên!", context: "Cổ vũ động viên bạn bè, người thân." },
    { id: "ep48", category: "Khẩu ngữ đời sống", hanzi: "祝你一路平安！", pinyin: "Zhù nǐ yílù píng'ān!", phoneticVi: "Chu nỉ ý lu phính an!", viet: "Chúc bạn thượng lộ bình an!", context: "Lời chúc khi tiễn bạn bè lên đường đi xa." },

    // 8. Nhà xưởng & Công xưởng & Sản xuất (Thực tế công nhân, kỹ thuật, quản lý)
    { id: "ep49", category: "Nhà xưởng & Sản xuất", hanzi: "今天我们要加班吗？", pinyin: "Jīntiān wǒmen yào jiābān ma?", phoneticVi: "Chin thiên ủa mơn dao chia pan ma?", viet: "Hôm nay chúng ta có phải tăng ca không?", context: "Hỏi tổ trưởng/chủ quản về lịch tăng ca trong ngày." },
    { id: "ep50", category: "Nhà xưởng & Sản xuất", hanzi: "几点下班？", pinyin: "Jǐ diǎn xiàbān?", phoneticVi: "Chỉ tiển xia pan?", viet: "Mấy giờ tan ca?", context: "Hỏi giờ tan làm việc." },
    { id: "ep51", category: "Nhà xưởng & Sản xuất", hanzi: "机器坏了，卡住了！", pinyin: "Jīqì huài le, kǎzhù le!", phoneticVi: "Chi chi hoai lơ, khả chu lơ!", viet: "Máy móc bị hỏng, bị kẹt rồi!", context: "Báo cáo sự cố máy móc cho thợ sửa hoặc tổ trưởng." },
    { id: "ep52", category: "Nhà xưởng & Sản xuất", hanzi: "快关掉电源！", pinyin: "Kuài guāndiào diànyuán!", phoneticVi: "Khoai quan teo ti-ên doan!", viet: "Mau ngắt cầu dao / tắt nguồn điện!", context: "Trường hợp khẩn cấp an toàn điện máy móc." },
    { id: "ep53", category: "Nhà xưởng & Sản xuất", hanzi: "注意安全！", pinyin: "Zhùyì ānquán!", phoneticVi: "Chu ý an choán!", viet: "Chú ý an toàn lao động!", context: "Quy tắc an toàn bất hủ trong mọi nhà máy xí nghiệp." },
    { id: "ep54", category: "Nhà xưởng & Sản xuất", hanzi: "这个是不良品，要返工。", pinyin: "Zhège shì bùliángpǐn, yào fǎngōng.", phoneticVi: "Chơ cơ sư bu liáng phỉn, dao phán cung.", viet: "Cái này là hàng lỗi/hàng hỏng, phải làm lại.", context: "Khâu QC kiểm tra chất lượng sản phẩm." },
    { id: "ep55", category: "Nhà xưởng & Sản xuất", hanzi: "这个产品合格了。", pinyin: "Zhège chǎnpǐn hégé le.", phoneticVi: "Chơ cơ chán phỉn hứa cứa lơ.", viet: "Sản phẩm này đạt tiêu chuẩn / đạt chất lượng rồi.", context: "Xác nhận sản phẩm đạt chuẩn đóng gói xuất xưởng." },
    { id: "ep56", category: "Nhà xưởng & Sản xuất", hanzi: "缺料了，去仓库领料。", pinyin: "Quēliào le, qù cāngkù lǐngliào.", phoneticVi: "Choe leo lơ, chuy chang khu lỉng leo.", viet: "Hết nguyên liệu rồi, đi nhà kho lĩnh vật tư.", context: "Khi dây chuyền sản xuất cần bổ sung nguyên vật liệu." },
    { id: "ep57", category: "Nhà xưởng & Sản xuất", hanzi: "今天的产量是多少？", pinyin: "Jīntiān de chǎnliàng shì duōshao?", phoneticVi: "Chin thiên tơ chán leang sư tua sao?", viet: "Sản lượng của ngày hôm nay là bao nhiêu?", context: "Kiểm tra tiến độ đơn hàng theo ca." },
    { id: "ep58", category: "Nhà xưởng & Sản xuất", hanzi: "动作快一点！", pinyin: "Dòngzuò kuài yìdiǎn!", phoneticVi: "Tung chua khoai ý tiển!", viet: "Thao tác tay nhanh lên một chút!", context: "Khi cần tăng tốc độ chuyền để kịp tiến độ xuất hàng." },
    { id: "ep59", category: "Nhà xưởng & Sản xuất", hanzi: "班长，我想请假一天。", pinyin: "Bānzhǎng, wǒ xiǎng qǐngjià yì tiān.", phoneticVi: "Pan tráng, ủa xẻng chỉnh chia ý thiên.", viet: "Tổ trưởng, tôi muốn xin nghỉ phép một ngày.", context: "Gặp tổ trưởng xin phép nghỉ có việc bận hoặc ốm." },
    { id: "ep60", category: "Nhà xưởng & Sản xuất", hanzi: "明天要倒班 / 换班。", pinyin: "Míngtiān yào dǎobān / huànbān.", phoneticVi: "Mính thiên dao đảo pan / hoan pan.", viet: "Ngày mai phải đổi ca (ca ngày / ca đêm).", context: "Thông báo lịch trực xoay ca làm việc." },
    { id: "ep61", category: "Nhà xưởng & Sản xuất", hanzi: "这个怎么操作？", pinyin: "Zhège zěnme cāozuò?", phoneticVi: "Chơ cơ chẩn mơ thao chua?", viet: "Cái này thao tác / vận hành như thế nào?", context: "Hỏi người hướng dẫn khi làm việc với máy móc thiết bị mới." },
    { id: "ep62", category: "Nhà xưởng & Sản xuất", hanzi: "辛苦了！", pinyin: "Xīnkǔ le!", phoneticVi: "Xin khủ lơ!", viet: "Vất vả cho bạn rồi! / Làm tốt lắm!", context: "Câu cửa miệng động viên đồng nghiệp, công nhân sau ca làm việc." },

    // 9. Gia đình & Người thân & Cuộc sống
    { id: "ep63", category: "Gia đình & Người thân", hanzi: "你家有几口人？", pinyin: "Nǐ jiā yǒu jǐ kǒu rén?", phoneticVi: "Nỉ chia dẩu chỉ khẩu rấn?", viet: "Nhà bạn có mấy người?", context: "Hỏi thăm về quy mô gia đình." },
    { id: "ep64", category: "Gia đình & Người thân", hanzi: "我家有四口人：爸爸、妈妈、哥哥和我。", pinyin: "Wǒ jiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ.", phoneticVi: "Ủa chia dẩu sư khẩu rấn: pa ba, ma ma, cơ cơ hứa ủa.", viet: "Nhà tôi có bốn người: bố, mẹ, anh trai và tôi.", context: "Giới thiệu các thành viên trong gia đình." },
    { id: "ep65", category: "Gia đình & Người thân", hanzi: "你结婚了吗？", pinyin: "Nǐ jiéhūn le ma?", phoneticVi: "Nỉ chiê huân lơ ma?", viet: "Bạn đã kết hôn / lập gia đình chưa?", context: "Hỏi về tình trạng hôn nhân." },
    { id: "ep66", category: "Gia đình & Người thân", hanzi: "我结婚了 / 我还没结婚。", pinyin: "Wǒ jiéhūn le / Wǒ hái méi jiéhūn.", phoneticVi: "Ủa chiê huân lơ / Ủa hải mấy chiê huân.", viet: "Tôi kết hôn rồi / Tôi vẫn chưa kết hôn.", context: "Trả lời về tình trạng hôn nhân của bản thân." },
    { id: "ep67", category: "Gia đình & Người thân", hanzi: "你有孩子吗？", pinyin: "Nǐ yǒu háizi ma?", phoneticVi: "Nỉ dẩu hải chự ma?", viet: "Bạn có con chưa?", context: "Hỏi thăm con cái." },
    { id: "ep68", category: "Gia đình & Người thân", hanzi: "我有一个儿子和一个女儿。", pinyin: "Wǒ yǒu yí gè érzi hé yí gè nǚ'ér.", phoneticVi: "Ủa dẩu ý cơ ớ chự hứa ý cơ nủy ớ.", viet: "Tôi có một đứa con trai và một đứa con gái.", context: "Kể về con cái." },
    { id: "ep69", category: "Gia đình & Người thân", hanzi: "你的老家在哪儿？", pinyin: "Nǐ de lǎojiā zài nǎr?", phoneticVi: "Nỉ tơ lão chia chai nả?", viet: "Quê quán của bạn ở đâu?", context: "Hỏi thăm quê hương bản quán." },
    { id: "ep70", category: "Gia đình & Người thân", hanzi: "我好想家，想爸妈了。", pinyin: "Wǒ hǎo xiǎngjiā, xiǎng bàmā le.", phoneticVi: "Ủa hảo xẻng chia, xẻng pa ma lơ.", viet: "Tôi nhớ nhà quá, nhớ bố mẹ rồi.", context: "Tâm sự khi đi làm xa nhà hoặc xa xứ." },
    { id: "ep71", category: "Gia đình & Người thân", hanzi: "周末欢迎来我家玩！", pinyin: "Zhōumò huānyíng lái wǒ jiā wán!", phoneticVi: "Châu mo hoan dính lái ủa chia oán!", viet: "Cuối tuần hoan nghênh bạn ghé nhà tôi chơi!", context: "Mời bạn bè, đồng nghiệp về nhà tụ họp." },
    { id: "ep72", category: "Gia đình & Người thân", hanzi: "祝你和家人身体健康！", pinyin: "Zhù nǐ hé jiārén shēntǐ jiànkāng!", phoneticVi: "Chu nỉ hứa chia rấn sân thỉ chiên khang!", viet: "Chúc bạn và gia đình dồi dào sức khỏe!", context: "Lời chúc trang trọng và ấm áp dành cho gia đình đối phương." },
    { id: "ep73", category: "Gia đình & Người thân", hanzi: "你父母身体好吗？", pinyin: "Nǐ fùmǔ shēntǐ hǎo ma?", phoneticVi: "Nỉ phu mủ sân thỉ hảo ma?", viet: "Bố mẹ bạn sức khỏe có tốt không?", context: "Thăm hỏi sức khỏe phụ huynh." },
    { id: "ep74", category: "Gia đình & Người thân", hanzi: "这是我爱人 / 这是我老婆 / 这是我老公。", pinyin: "Zhè shì wǒ àiren / lǎopó / lǎogōng.", phoneticVi: "Chơ sư ủa ai rấn / lão phó / lão cung.", viet: "Đây là bạn đời / vợ tôi / chồng tôi.", context: "Giới thiệu vợ/chồng với người khác." },

    // 10. Du lịch & Tham quan & Thủ tục xuất cảnh
    { id: "ep75", category: "Du lịch & Tham quan", hanzi: "我想买一张去北京的高铁票。", pinyin: "Wǒ xiǎng mǎi yì zhāng qù Běijīng de gāotiě piào.", phoneticVi: "Ủa xẻng mải ý chang chuy Pẩy Chinh tơ cao thỉu pheo.", viet: "Tôi muốn mua một vé tàu cao tốc đi Bắc Kinh.", context: "Mua vé tàu cao tốc (Gaotie) khi du lịch Trung Quốc." },
    { id: "ep76", category: "Du lịch & Tham quan", hanzi: "这是我的护照和签证。", pinyin: "Zhè shì wǒ de hùzhào hé qiānzhèng.", phoneticVi: "Chơ sư ủa tơ hu chao hứa chiên châng.", viet: "Đây là hộ chiếu và visa của tôi.", context: "Làm thủ tục hải quan, xuất nhập cảnh sân bay hoặc khách sạn." },
    { id: "ep77", category: "Du lịch & Tham quan", hanzi: "请问，登机口在哪儿？", pinyin: "Qǐngwèn, dēngjīkǒu zài nǎr?", phoneticVi: "Chỉnh uân, tông chi khẩu chai nả?", viet: "Xin hỏi cửa lên máy bay ở đâu?", context: "Tìm cổng ra máy bay tại sân bay." },
    { id: "ep78", category: "Du lịch & Tham quan", hanzi: "这里的门票多少钱一张？", pinyin: "Zhèlǐ de ménpiào duōshao qián yì zhāng?", phoneticVi: "Chơ lỉ tơ mấn pheo tua sao chán ý chang?", viet: "Vé vào cổng ở đây bao nhiêu tiền một vé?", context: "Mua vé tham quan danh lam thắng cảnh, bảo tàng, khu vui chơi." },
    { id: "ep79", category: "Du lịch & Tham quan", hanzi: "可以帮我们拍一张合影吗？", pinyin: "Kěyǐ bāng wǒmen pāi yì zhāng héyǐng ma?", phoneticVi: "Khửa dỉ pang ủa mơn phai ý chang hứa dỉng ma?", viet: "Bạn có thể chụp giúp chúng tôi một tấm ảnh kỷ niệm được không?", context: "Nhờ người xung quanh chụp ảnh hộ khi đi du lịch." },
    { id: "ep80", category: "Du lịch & Tham quan", hanzi: "这里的风景太美了！", pinyin: "Zhèlǐ de fēngjǐng tài měi le!", phoneticVi: "Chơ lỉ tơ phâng chỉng thai mẩy lơ!", viet: "Phong cảnh ở đây đẹp tuyệt vời!", context: "Cảm thán khen ngợi cảnh đẹp tự nhiên, điểm du lịch." },
    { id: "ep81", category: "Du lịch & Tham quan", hanzi: "这附近有什么好玩的景点吗？", pinyin: "Zhè fùjìn yǒu shénme hǎowán de jǐngdiǎn ma?", phoneticVi: "Chơ phu chin dẩu sẩn mơ hảo oán tơ chỉng tiển ma?", viet: "Gần đây có điểm tham quan nào hay/vui không?", context: "Hỏi người địa phương hoặc lễ tân khách sạn để khám phá." },
    { id: "ep82", category: "Du lịch & Tham quan", hanzi: "我想换人民币，附近有银行吗？", pinyin: "Wǒ xiǎng huàn rénmínbì, fùjìn yǒu yínháng ma?", phoneticVi: "Ủa xẻng hoan rấn mín pi, phu chin dẩu dín háng ma?", viet: "Tôi muốn đổi tiền Nhân dân tệ (RMB), gần đây có ngân hàng không?", context: "Đổi ngoại tệ khi đi du lịch." },
    { id: "ep83", category: "Du lịch & Tham quan", hanzi: "可以给我一张旅游地图吗？", pinyin: "Kěyǐ gěi wǒ yì zhāng lǚyóu dìtú ma?", phoneticVi: "Khửa dỉ cẩy ủa ý chang lủy dẩu ti thu ma?", viet: "Có thể cho tôi một tấm bản đồ du lịch không?", context: "Xin bản đồ tại quầy thông tin du lịch Tourist Info." },
    { id: "ep84", category: "Du lịch & Tham quan", hanzi: "这是当地的特产吗？", pinyin: "Zhè shì dāngdì de tèchǎn ma?", phoneticVi: "Chơ sư tang ti tơ thơ chản ma?", viet: "Đây có phải là đặc sản của địa phương không?", context: "Hỏi mua quà lưu niệm, đặc sản về làm quà." },
    { id: "ep85", category: "Du lịch & Tham quan", hanzi: "行李超重了吗？", pinyin: "Xíngli chāozhòng le ma?", phoneticVi: "Xính lỉ chao trung lơ ma?", viet: "Hành lý có bị quá cân không?", context: "Khi cân hành lý ký gửi tại sân bay." },
    { id: "ep86", category: "Du lịch & Tham quan", hanzi: "我想买当地的电话卡 / SIM卡。", pinyin: "Wǒ xiǎng mǎi dāngdì de diànhuà kǎ / SIM kǎ.", phoneticVi: "Ủa xẻng mải tang ti tơ ti-ên hoa khả / sim khả.", viet: "Tôi muốn mua thẻ SIM điện thoại / SIM 4G địa phương.", context: "Mua sim du lịch để vào mạng internet." },
    { id: "ep87", category: "Du lịch & Tham quan", hanzi: "洗手间 / 厕所在哪里？", pinyin: "Xǐshǒujiān / Cèsuǒ zài nǎlǐ?", phoneticVi: "Xỉ sẩu chiên / Chưa suổ chai nả lỉ?", viet: "Nhà vệ sinh / Toilet ở chỗ nào?", context: "Câu hỏi thần thánh cứu cánh khi đi bất cứ đâu." },
    { id: "ep88", category: "Du lịch & Tham quan", hanzi: "祝你旅途愉快！", pinyin: "Zhù nǐ lǚtú yúkuài!", phoneticVi: "Chu nỉ lủy thu dý khoai!", viet: "Chúc bạn có một chuyến du lịch vui vẻ!", context: "Lời chúc tốt lành gửi tới bạn bè đi du lịch." }
  ],

  // BỘ VIDEO NGẮN LUYỆN NÓI PHẢN XẠ & CHÉP CHÍNH TẢ (CORODOMO SHADOWING & DICTATION)
  shadowingVideos: [
    {
        "id": "sh1",
        "title": "Lần Đầu Gặp Gỡ & Chào Hỏi Tự Nhiên",
        "category": "Chào hỏi",
        "duration": "15:20",
        "difficulty": "Cơ bản HSK 1",
        "youtubeId": "EpSs4cdSML0",
        "description": "Học cách chào hỏi, giới thiệu tên tuổi và quốc tịch với ngữ điệu tự nhiên, vui vẻ.",
        "sentences": [
            {
                "speaker": "Nhân vật A",
                "hanzi": "你好！很高兴认识你！",
                "pinyin": "Nǐ hǎo! Hěn gāoxìng rènshi nǐ!",
                "phoneticVi": "Nỉ hảo! Hẩn cao xing rấn sư nỉ!",
                "viet": "Xin chào! Rất vui được làm quen với bạn!",
                "tip": "Nhấn mạnh vào từ 'hěn' (rất) và hạ giọng nhẹ ở cuối câu.",
                "tokens": [
                    {
                        "hanzi": "你好",
                        "pinyin": "nǐ hǎo",
                        "viet": "Xin chào"
                    },
                    {
                        "hanzi": "很",
                        "pinyin": "hěn",
                        "viet": "Rất"
                    },
                    {
                        "hanzi": "高兴",
                        "pinyin": "gāoxìng",
                        "viet": "Vui vẻ / Hân hạnh"
                    },
                    {
                        "hanzi": "认识",
                        "pinyin": "rènshi",
                        "viet": "Làm quen / Quen biết"
                    },
                    {
                        "hanzi": "你",
                        "pinyin": "nǐ",
                        "viet": "Bạn / Anh / Chị"
                    }
                ]
            },
            {
                "speaker": "Nhân vật B",
                "hanzi": "你好！我也很高兴认识你。你叫什么名字？",
                "pinyin": "Nǐ hǎo! Wǒ yě hěn gāoxìng rènshi nǐ. Nǐ jiào shénme míngzi?",
                "phoneticVi": "Nỉ hảo! Ủa dẻ hẩn cao xing rấn sư nỉ. Nỉ teo sấn mơ mính chự?",
                "viet": "Xin chào! Tôi cũng rất vui được quen bạn. Bạn tên là gì?",
                "tip": "'wǒ yě' biến điệu thanh 3 nhẹ nhàng, 'míngzi' đọc nhẹ chữ zi.",
                "tokens": [
                    {
                        "hanzi": "你好",
                        "pinyin": "nǐ hǎo",
                        "viet": "Xin chào"
                    },
                    {
                        "hanzi": "我也",
                        "pinyin": "wǒ yě",
                        "viet": "Tôi cũng"
                    },
                    {
                        "hanzi": "很高兴",
                        "pinyin": "hěn gāoxìng",
                        "viet": "Rất vui mừng"
                    },
                    {
                        "hanzi": "认识你",
                        "pinyin": "rènshi nǐ",
                        "viet": "Quen biết bạn"
                    },
                    {
                        "hanzi": "你叫",
                        "pinyin": "nǐ jiào",
                        "viet": "Bạn tên là"
                    },
                    {
                        "hanzi": "什么",
                        "pinyin": "shénme",
                        "viet": "Gì / Cái gì"
                    },
                    {
                        "hanzi": "名字",
                        "pinyin": "míngzi",
                        "viet": "Tên họ"
                    }
                ]
            },
            {
                "speaker": "Nhân vật A",
                "hanzi": "我叫王明，你是哪国人？",
                "pinyin": "Wǒ jiào Wáng Míng, nǐ shì nǎ guó rén?",
                "phoneticVi": "Ủa teo Oáng Mính, nỉ sư nả cuố rấn?",
                "viet": "Tôi tên là Vương Minh, bạn là người nước nào?",
                "tip": "Lên giọng nhẹ ở 'nǎ guó rén' để tạo âm điệu tò mò, thân thiện.",
                "tokens": [
                    {
                        "hanzi": "我叫",
                        "pinyin": "wǒ jiào",
                        "viet": "Tôi tên là"
                    },
                    {
                        "hanzi": "王明",
                        "pinyin": "Wáng Míng",
                        "viet": "Vương Minh (tên riêng)"
                    },
                    {
                        "hanzi": "你是",
                        "pinyin": "nǐ shì",
                        "viet": "Bạn là"
                    },
                    {
                        "hanzi": "哪国人",
                        "pinyin": "nǎ guó rén",
                        "viet": "Người nước nào"
                    }
                ]
            },
            {
                "speaker": "Nhân vật B",
                "hanzi": "我是越南人。我是来中国学中文的。",
                "pinyin": "Wǒ shì Yuènán rén. Wǒ shì lái Zhōngguó xué Zhōngwén de.",
                "phoneticVi": "Ủa sư Dzuê nán rấn. Ủa sư lái Chung cuố xuế Chung uấn tơ.",
                "viet": "Tôi là người Việt Nam. Tôi đến Trung Quốc để học tiếng Trung.",
                "tip": "Thanh 4 ở 'Yuènán' dứt khoát, 'de' ở cuối câu đọc nhẹ lướt.",
                "tokens": [
                    {
                        "hanzi": "我是",
                        "pinyin": "wǒ shì",
                        "viet": "Tôi là"
                    },
                    {
                        "hanzi": "越南人",
                        "pinyin": "Yuènán rén",
                        "viet": "Người Việt Nam"
                    },
                    {
                        "hanzi": "来中国",
                        "pinyin": "lái Zhōngguó",
                        "viet": "Đến Trung Quốc"
                    },
                    {
                        "hanzi": "学中文",
                        "pinyin": "xué Zhōngwén",
                        "viet": "Học tiếng Trung"
                    },
                    {
                        "hanzi": "的",
                        "pinyin": "de",
                        "viet": "Trợ từ nhấn mạnh"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh2",
        "title": "Mặc Cả & Trả Giá Siêu Thực Chiến",
        "category": "Mua sắm",
        "duration": "10:15",
        "difficulty": "Thực chiến đời sống",
        "youtubeId": "ExgUJ2X6y2M",
        "description": "Tình huống hỏi giá, chê đắt và thương lượng giảm giá cực kỳ hữu dụng tại chợ Trung Quốc.",
        "sentences": [
            {
                "speaker": "Khách mua",
                "hanzi": "老板，这件衣服多少钱？",
                "pinyin": "Lǎobǎn, zhè jiàn yīfu duōshao qián?",
                "phoneticVi": "Lão bản, chơ chiên y phu tua sao chán?",
                "viet": "Ông chủ ơi, chiếc áo này bao nhiêu tiền vậy?",
                "tip": "Gọi 'Lǎobǎn' thân mật, chữ 'fu' trong yīfu đọc thanh nhẹ.",
                "tokens": [
                    {
                        "hanzi": "老板",
                        "pinyin": "lǎobǎn",
                        "viet": "Ông chủ / Chủ tiệm"
                    },
                    {
                        "hanzi": "这件",
                        "pinyin": "zhè jiàn",
                        "viet": "Chiếc này / Cái này"
                    },
                    {
                        "hanzi": "衣服",
                        "pinyin": "yīfu",
                        "viet": "Quần áo / Trang phục"
                    },
                    {
                        "hanzi": "多少钱",
                        "pinyin": "duōshao qián",
                        "viet": "Bao nhiêu tiền"
                    }
                ]
            },
            {
                "speaker": "Chủ quán",
                "hanzi": "一件一百二十块，质量非常好的！",
                "pinyin": "Yí jiàn yībǎi èrshí kuài, zhìliàng fēicháng hǎo de!",
                "phoneticVi": "Ý chiên y pải ơ sứ khoai, chư leang phây cháng hảo tơ!",
                "viet": "Một chiếc 120 tệ, chất lượng cực kỳ tốt đó!",
                "tip": "Ngữ điệu tự tin, nhấn mạnh vào 'fēicháng hǎo'.",
                "tokens": [
                    {
                        "hanzi": "一件",
                        "pinyin": "yí jiàn",
                        "viet": "Một chiếc / Một cái"
                    },
                    {
                        "hanzi": "一百二十块",
                        "pinyin": "yībǎi èrshí kuài",
                        "viet": "120 tệ (RMB)"
                    },
                    {
                        "hanzi": "质量",
                        "pinyin": "zhìliàng",
                        "viet": "Chất lượng"
                    },
                    {
                        "hanzi": "非常好",
                        "pinyin": "fēicháng hǎo",
                        "viet": "Vô cùng tốt / Rất xịn"
                    }
                ]
            },
            {
                "speaker": "Khách mua",
                "hanzi": "哎呀，太贵了！便宜一点吧，八十块卖不卖？",
                "pinyin": "Āiyā, tài guì le! Piányi yìdiǎn ba, bāshí kuài mài bu mài?",
                "phoneticVi": "Ai da, thai kuây lơ! Phiến di ý tiển pa, pa sứ khoai mại bu mại?",
                "viet": "Ôi dào, đắt quá! Rẻ chút đi, 80 tệ bán không anh?",
                "tip": "Thêm cảm thán 'Āiyā' ở đầu câu để tạo cảm xúc tự nhiên của người bản xứ.",
                "tokens": [
                    {
                        "hanzi": "哎呀",
                        "pinyin": "āiyā",
                        "viet": "Ôi dào / Ôi chao"
                    },
                    {
                        "hanzi": "太贵了",
                        "pinyin": "tài guì le",
                        "viet": "Đắt quá rồi"
                    },
                    {
                        "hanzi": "便宜",
                        "pinyin": "piányi",
                        "viet": "Rẻ / Giảm bớt giá"
                    },
                    {
                        "hanzi": "一点吧",
                        "pinyin": "yìdiǎn ba",
                        "viet": "Một chút đi"
                    },
                    {
                        "hanzi": "八十块",
                        "pinyin": "bāshí kuài",
                        "viet": "80 tệ"
                    },
                    {
                        "hanzi": "卖不卖",
                        "pinyin": "mài bu mài",
                        "viet": "Bán hay không bán"
                    }
                ]
            },
            {
                "speaker": "Chủ quán",
                "hanzi": "行吧行吧，看你诚心买，拿去吧！",
                "pinyin": "Xíng ba xíng ba, kàn nǐ chéngxīn mǎi, ná qù ba!",
                "phoneticVi": "Xính pa xính pa, khan nỉ chống xin mải, ná chuy pa!",
                "viet": "Được rồi được rồi, thấy bạn thật lòng muốn mua, lấy đi!",
                "tip": "'Xíng ba xíng ba' đọc nhanh, ngữ điệu nhượng bộ sảng khoái.",
                "tokens": [
                    {
                        "hanzi": "行吧",
                        "pinyin": "xíng ba",
                        "viet": "Được rồi / OK thôi"
                    },
                    {
                        "hanzi": "看你",
                        "pinyin": "kàn nǐ",
                        "viet": "Thấy bạn / Xem bạn"
                    },
                    {
                        "hanzi": "诚心买",
                        "pinyin": "chéngxīn mǎi",
                        "viet": "Thật lòng muốn mua"
                    },
                    {
                        "hanzi": "拿去吧",
                        "pinyin": "ná qù ba",
                        "viet": "Cầm lấy đi / Lấy đi"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh3",
        "title": "Gọi Món & Ăn Uống Tại Quán Bản Xứ",
        "category": "Ăn uống",
        "duration": "08:45",
        "difficulty": "Cơ bản HSK 1",
        "youtubeId": "Lz15QYWoVAM",
        "description": "Thao tác gọi phục vụ, gọi món mỳ bò không cay và thanh toán quét mã QR.",
        "sentences": [
            {
                "speaker": "Thực khách",
                "hanzi": "服务员，点单！请给我菜单。",
                "pinyin": "Fúwùyuán, diǎndān! Qǐng gěi wǒ càidān.",
                "phoneticVi": "Phú u dzoan, tiển tan! Chỉnh cẩy ủa thai tan.",
                "viet": "Phục vụ ơi, gọi món! Cho tôi xin thực đơn với.",
                "tip": "Hô to, rõ ràng hai từ 'Fúwùyuán, diǎndān!'.",
                "tokens": [
                    {
                        "hanzi": "服务员",
                        "pinyin": "fúwùyuán",
                        "viet": "Người phục vụ / Bồi bàn"
                    },
                    {
                        "hanzi": "点单",
                        "pinyin": "diǎndān",
                        "viet": "Gọi món / Chọn món"
                    },
                    {
                        "hanzi": "请给我",
                        "pinyin": "qǐng gěi wǒ",
                        "viet": "Làm ơn cho tôi"
                    },
                    {
                        "hanzi": "菜单",
                        "pinyin": "càidān",
                        "viet": "Thực đơn / Menu"
                    }
                ]
            },
            {
                "speaker": "Phục vụ",
                "hanzi": "您好，您想吃点什么特色菜？",
                "pinyin": "Nín hǎo, nín xiǎng chī diǎn tèsè cài?",
                "phoneticVi": "Nín hảo, nín xẻng chu tiển thơ sơ thai?",
                "viet": "Chào quý khách, bạn muốn ăn món đặc sản gì ạ?",
                "tip": "Dùng kính ngữ 'Nín' với ngữ điệu niềm nở.",
                "tokens": [
                    {
                        "hanzi": "您好",
                        "pinyin": "nín hǎo",
                        "viet": "Kính chào quý khách"
                    },
                    {
                        "hanzi": "您想",
                        "pinyin": "nín xiǎng",
                        "viet": "Quý khách muốn"
                    },
                    {
                        "hanzi": "吃点",
                        "pinyin": "chī diǎn",
                        "viet": "Dùng chút / Ăn một chút"
                    },
                    {
                        "hanzi": "什么",
                        "pinyin": "shénme",
                        "viet": "Gì / Món gì"
                    },
                    {
                        "hanzi": "特色菜",
                        "pinyin": "tèsè cài",
                        "viet": "Món đặc sản / Món độc đáo"
                    }
                ]
            },
            {
                "speaker": "Thực khách",
                "hanzi": "来一碗兰州牛肉面，微辣，少放香菜！",
                "pinyin": "Lái yì wǎn Lánzhōu niúròumiàn, wēilà, shǎo fàng xiāngcài!",
                "phoneticVi": "Lái ý oản Lan châu niêu dâu miên, uây la, sảo phang xiang thai!",
                "viet": "Cho một bát mỳ bò Lan Châu, cay ít, cho ít rau mùi nhé!",
                "tip": "Từ 'Lái' được dùng thay cho 'cho tôi / làm cho tôi' rất tự nhiên.",
                "tokens": [
                    {
                        "hanzi": "来一碗",
                        "pinyin": "lái yì wǎn",
                        "viet": "Cho một bát / Mang một tô"
                    },
                    {
                        "hanzi": "兰州牛肉面",
                        "pinyin": "Lánzhōu niúròumiàn",
                        "viet": "Mỳ bò Lan Châu"
                    },
                    {
                        "hanzi": "微辣",
                        "pinyin": "wēilà",
                        "viet": "Cay nhẹ / Cay ít"
                    },
                    {
                        "hanzi": "少放",
                        "pinyin": "shǎo fàng",
                        "viet": "Bỏ ít thôi / Cho ít"
                    },
                    {
                        "hanzi": "香菜",
                        "pinyin": "xiāngcài",
                        "viet": "Rau mùi / Ngò rí"
                    }
                ]
            },
            {
                "speaker": "Thực khách",
                "hanzi": "吃饱了，服务员，买单！可以扫码吗？",
                "pinyin": "Chī bǎo le, fúwùyuán, mǎidān! Kěyǐ sǎomǎ ma?",
                "phoneticVi": "Chu bảo lơ, phú u dzoan, mải tan! Khửa dỉ sảo mả ma?",
                "viet": "Ăn no rồi, phục vụ tính tiền! Quét mã được không?",
                "tip": "'sǎomǎ' (quét mã QR) là câu cửa miệng mọi nơi tại Trung Quốc.",
                "tokens": [
                    {
                        "hanzi": "吃饱了",
                        "pinyin": "chī bǎo le",
                        "viet": "Ăn no căng rồi"
                    },
                    {
                        "hanzi": "服务员",
                        "pinyin": "fúwùyuán",
                        "viet": "Phục vụ ơi"
                    },
                    {
                        "hanzi": "买单",
                        "pinyin": "mǎidān",
                        "viet": "Thanh toán / Tính tiền"
                    },
                    {
                        "hanzi": "可以",
                        "pinyin": "kěyǐ",
                        "viet": "Có thể"
                    },
                    {
                        "hanzi": "扫码吗",
                        "pinyin": "sǎomǎ ma",
                        "viet": "Quét mã QR không"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh4",
        "title": "Hỏi Giờ Tăng Ca & An Toàn Trong Xưởng",
        "category": "Nhà xưởng",
        "duration": "12:30",
        "difficulty": "Nhà xưởng thực tế",
        "youtubeId": "gqNSF_imQjk",
        "description": "Đối thoại giữa công nhân và tổ trưởng về lịch tăng ca, máy móc và quy tắc an toàn.",
        "sentences": [
            {
                "speaker": "Công nhân",
                "hanzi": "班长，今天晚上我们要加班吗？",
                "pinyin": "Bānzhǎng, jīntiān wǎnshang wǒmen yào jiābān ma?",
                "phoneticVi": "Pan tráng, chin thiên oản sang ủa mơn dao chia pan ma?",
                "viet": "Tổ trưởng, tối nay chúng ta có phải tăng ca không ạ?",
                "tip": "'Bānzhǎng' nhấn giọng lịch sự, 'jiābān' thanh 1 ngân ngang.",
                "tokens": [
                    {
                        "hanzi": "班长",
                        "pinyin": "bānzhǎng",
                        "viet": "Tổ trưởng / Trưởng ca"
                    },
                    {
                        "hanzi": "今天晚上",
                        "pinyin": "jīntiān wǎnshang",
                        "viet": "Tối ngày hôm nay"
                    },
                    {
                        "hanzi": "我们要",
                        "pinyin": "wǒmen yào",
                        "viet": "Chúng ta có cần"
                    },
                    {
                        "hanzi": "加班吗",
                        "pinyin": "jiābān ma",
                        "viet": "Tăng ca (làm thêm) không"
                    }
                ]
            },
            {
                "speaker": "Tổ trưởng",
                "hanzi": "要加班两个小时，赶完这批货。",
                "pinyin": "Yào jiābān liǎng gè xiǎoshí, gǎn wán zhè pī huò.",
                "phoneticVi": "Dao chia pan leang cơ xẻo sứ, cản oán chơ phi huo.",
                "viet": "Cần tăng ca hai tiếng, để làm cho xong lô hàng này.",
                "tip": "'liǎng gè xiǎoshí' nói liền mạch không ngắt quãng.",
                "tokens": [
                    {
                        "hanzi": "要加班",
                        "pinyin": "yào jiābān",
                        "viet": "Cần phải tăng ca"
                    },
                    {
                        "hanzi": "两个小时",
                        "pinyin": "liǎng gè xiǎoshí",
                        "viet": "Hai tiếng đồng hồ"
                    },
                    {
                        "hanzi": "赶完",
                        "pinyin": "gǎn wán",
                        "viet": "Đuổi kịp / Làm cho xong"
                    },
                    {
                        "hanzi": "这批货",
                        "pinyin": "zhè pī huò",
                        "viet": "Lô hàng hóa này"
                    }
                ]
            },
            {
                "speaker": "Công nhân",
                "hanzi": "这台机器有点卡，速度有点慢。",
                "pinyin": "Zhè tái jīqì yǒudiǎn kǎ, sùdù yǒudiǎn màn.",
                "phoneticVi": "Chơ thai chi chi dẩu tiển khả, su tu dẩu tiển man.",
                "viet": "Cái máy này hơi bị kẹt, tốc độ chạy hơi chậm.",
                "tip": "'yǒudiǎn kǎ' thể hiện sự phàn nàn nhẹ nhàng về kỹ thuật.",
                "tokens": [
                    {
                        "hanzi": "这台",
                        "pinyin": "zhè tái",
                        "viet": "Cỗ máy này / Chiếc này"
                    },
                    {
                        "hanzi": "机器",
                        "pinyin": "jīqì",
                        "viet": "Máy móc / Thiết bị xưởng"
                    },
                    {
                        "hanzi": "有点卡",
                        "pinyin": "yǒudiǎn kǎ",
                        "viet": "Hơi bị kẹt / Hơi giật"
                    },
                    {
                        "hanzi": "速度",
                        "pinyin": "sùdù",
                        "viet": "Tốc độ vận hành"
                    },
                    {
                        "hanzi": "有点慢",
                        "pinyin": "yǒudiǎn màn",
                        "viet": "Hơi bị chậm"
                    }
                ]
            },
            {
                "speaker": "Tổ trưởng",
                "hanzi": "等一下叫机修来看看。大家一定注意安全！",
                "pinyin": "Děng yíxià jiào jīxiū lái kànkan. Dàjiā yídìng zhùyì ānquán!",
                "phoneticVi": "Tẩng ý xia teo chi xiu lái khan khan. Ta chia ý tinh chu ý an choán!",
                "viet": "Lát nữa gọi thợ sửa máy qua xem. Mọi người nhất định phải chú ý an toàn!",
                "tip": "'zhùyì ānquán' nói to, dứt khoát để nhắc nhở an toàn lao động.",
                "tokens": [
                    {
                        "hanzi": "等一下",
                        "pinyin": "děng yíxià",
                        "viet": "Đợi lát nữa / Chờ chút"
                    },
                    {
                        "hanzi": "叫机修",
                        "pinyin": "jiào jīxiū",
                        "viet": "Gọi thợ sửa máy"
                    },
                    {
                        "hanzi": "来看看",
                        "pinyin": "lái kànkan",
                        "viet": "Tới kiểm tra / Xem qua"
                    },
                    {
                        "hanzi": "大家",
                        "pinyin": "dàjiā",
                        "viet": "Mọi người / Tất cả"
                    },
                    {
                        "hanzi": "一定",
                        "pinyin": "yídìng",
                        "viet": "Nhất định phải"
                    },
                    {
                        "hanzi": "注意安全",
                        "pinyin": "zhùyì ānquán",
                        "viet": "Chú ý an toàn lao động"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh5",
        "title": "Đi Taxi & Bác Tài Ơi Đi Nhanh Giúp Tôi",
        "category": "Đi lại",
        "duration": "09:10",
        "difficulty": "Sơ cấp phản xạ",
        "youtubeId": "ve0wlvFIWUM",
        "description": "Bắt taxi đi ga tàu cao tốc, yêu cầu tài xế chạy nhanh vì đang vội kịp chuyến tàu.",
        "sentences": [
            {
                "speaker": "Hành khách",
                "hanzi": "师傅，去高铁站，大概要多久？",
                "pinyin": "Shīfu, qù gāotiě zhàn, dàgài yào duōjiǔ?",
                "phoneticVi": "Sư phu, chuy cao thỉu chan, ta cai dao tua chiểu?",
                "viet": "Bác tài ơi, đi ga tàu cao tốc mất khoảng bao lâu?",
                "tip": "'Shīfu' là danh xưng tôn trọng dành cho tài xế/thợ tay nghề.",
                "tokens": [
                    {
                        "hanzi": "师傅",
                        "pinyin": "shīfu",
                        "viet": "Bác tài / Thầy thợ"
                    },
                    {
                        "hanzi": "去",
                        "pinyin": "qù",
                        "viet": "Đi / Đến"
                    },
                    {
                        "hanzi": "高铁站",
                        "pinyin": "gāotiě zhàn",
                        "viet": "Ga tàu cao tốc"
                    },
                    {
                        "hanzi": "大概",
                        "pinyin": "dàgài",
                        "viet": "Khoảng chừng / Áng chừng"
                    },
                    {
                        "hanzi": "要多久",
                        "pinyin": "yào duōjiǔ",
                        "viet": "Mất bao lâu thời gian"
                    }
                ]
            },
            {
                "speaker": "Tài xế",
                "hanzi": "大概二十多分钟，前面路口有点堵。",
                "pinyin": "Dàgài èrshí duō fēnzhōng, qiánmiàn lùkǒu yǒudiǎn dǔ.",
                "phoneticVi": "Ta cai ơ sứ tua phơn chung, chiền miên lu khẩu dẩu tiển tủ.",
                "viet": "Khoảng hơn hai mươi phút, đoạn ngã tư phía trước hơi tắc đường.",
                "tip": "'èrshí duō' là hơn hai mươi, đọc liền mạch.",
                "tokens": [
                    {
                        "hanzi": "大概",
                        "pinyin": "dàgài",
                        "viet": "Khoảng chừng"
                    },
                    {
                        "hanzi": "二十多分钟",
                        "pinyin": "èrshí duō fēnzhōng",
                        "viet": "Hơn 20 phút"
                    },
                    {
                        "hanzi": "前面",
                        "pinyin": "qiánmiàn",
                        "viet": "Phía đằng trước"
                    },
                    {
                        "hanzi": "路口",
                        "pinyin": "lùkǒu",
                        "viet": "Giao lộ / Ngã tư"
                    },
                    {
                        "hanzi": "有点堵",
                        "pinyin": "yǒudiǎn dǔ",
                        "viet": "Hơi bị kẹt xe / Tắc đường"
                    }
                ]
            },
            {
                "speaker": "Hành khách",
                "hanzi": "师傅，麻烦您开快一点，我赶火车！",
                "pinyin": "Shīfu, máfan nín kāi kuài yìdiǎn, wǒ gǎn huǒchē!",
                "phoneticVi": "Sư phu, má phan nín khai khoai ý tiển, ủa cản hủa chơ!",
                "viet": "Bác tài ơi, phiền bác lái nhanh một chút, tôi đang vội bắt chuyến tàu!",
                "tip": "Dùng 'máfan nín' (làm phiền bác) để lời nhờ vả vừa khẩn cấp vừa lịch sự.",
                "tokens": [
                    {
                        "hanzi": "师傅",
                        "pinyin": "shīfu",
                        "viet": "Bác tài xế ơi"
                    },
                    {
                        "hanzi": "麻烦您",
                        "pinyin": "máfan nín",
                        "viet": "Phiền bác / Nhờ bác"
                    },
                    {
                        "hanzi": "开快一点",
                        "pinyin": "kāi kuài yìdiǎn",
                        "viet": "Lái nhanh một chút"
                    },
                    {
                        "hanzi": "我",
                        "pinyin": "wǒ",
                        "viet": "Tôi"
                    },
                    {
                        "hanzi": "赶火车",
                        "pinyin": "gǎn huǒchē",
                        "viet": "Đuổi kịp / Kịp giờ tàu"
                    }
                ]
            },
            {
                "speaker": "Tài xế",
                "hanzi": "放心吧，走高架桥，肯定来得及！",
                "pinyin": "Fàngxīn ba, zǒu gāojiàqiáo, kěndìng láidejí!",
                "phoneticVi": "Phang xin pa, tẩu cao chia chéo, khẩn tinh lái tơ chí!",
                "viet": "Yên tâm đi, đi đường cầu vượt trên cao, chắc chắn kịp giờ!",
                "tip": "'kěndìng láidejí' dứt khoát, ngữ điệu trấn an hành khách.",
                "tokens": [
                    {
                        "hanzi": "放心吧",
                        "pinyin": "fàngxīn ba",
                        "viet": "Cứ yên tâm đi"
                    },
                    {
                        "hanzi": "走",
                        "pinyin": "zǒu",
                        "viet": "Đi theo lối"
                    },
                    {
                        "hanzi": "高架桥",
                        "pinyin": "gāojiàqiáo",
                        "viet": "Cầu vượt trên cao"
                    },
                    {
                        "hanzi": "肯定",
                        "pinyin": "kěndìng",
                        "viet": "Chắc chắn / Đảm bảo"
                    },
                    {
                        "hanzi": "来得及",
                        "pinyin": "láidejí",
                        "viet": "Kịp giờ / Kịp lúc"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh6",
        "title": "Hỏi Thăm Gia Đình & Lời Mời Về Nhà Chơi",
        "category": "Gia đình",
        "duration": "14:05",
        "difficulty": "Cơ bản HSK 1",
        "youtubeId": "r4xJgTbGp80",
        "description": "Hỏi thăm các thành viên trong gia đình và mời bạn bè về nhà thưởng thức món ăn mẹ nấu.",
        "sentences": [
            {
                "speaker": "Nhân vật A",
                "hanzi": "你家有几口人？你父母身体好吗？",
                "pinyin": "Nǐ jiā yǒu jǐ kǒu rén? Nǐ fùmǔ shēntǐ hǎo ma?",
                "phoneticVi": "Nỉ chia dẩu chỉ khẩu rấn? Nỉ phu mủ sân thỉ hảo ma?",
                "viet": "Nhà bạn có mấy người? Bố mẹ bạn sức khỏe tốt không?",
                "tip": "Hỏi thăm chân thành, ấm áp, hạ giọng ở 'hǎo ma?'.",
                "tokens": [
                    {
                        "hanzi": "你家",
                        "pinyin": "nǐ jiā",
                        "viet": "Gia đình bạn / Nhà bạn"
                    },
                    {
                        "hanzi": "有几口人",
                        "pinyin": "yǒu jǐ kǒu rén",
                        "viet": "Có mấy người"
                    },
                    {
                        "hanzi": "你父母",
                        "pinyin": "nǐ fùmǔ",
                        "viet": "Bố mẹ của bạn"
                    },
                    {
                        "hanzi": "身体好吗",
                        "pinyin": "shēntǐ hǎo ma",
                        "viet": "Sức khỏe có tốt không"
                    }
                ]
            },
            {
                "speaker": "Nhân vật B",
                "hanzi": "我家有四口人，他们身体都挺好的。",
                "pinyin": "Wǒ jiā yǒu sì kǒu rén, tāmen shēntǐ dōu tǐng hǎo de.",
                "phoneticVi": "Ủa chia dẩu sư khẩu rấn, tha mơn sân thỉ tâu thỉnh hảo tơ.",
                "viet": "Nhà tôi có bốn người, họ đều rất khỏe mạnh.",
                "tip": "'dōu tǐng hǎo de' là khẩu ngữ khen sức khỏe tốt rất phổ biến.",
                "tokens": [
                    {
                        "hanzi": "我家",
                        "pinyin": "wǒ jiā",
                        "viet": "Gia đình tôi / Nhà tôi"
                    },
                    {
                        "hanzi": "有四口人",
                        "pinyin": "yǒu sì kǒu rén",
                        "viet": "Có bốn người"
                    },
                    {
                        "hanzi": "他们身体",
                        "pinyin": "tāmen shēntǐ",
                        "viet": "Sức khỏe của họ"
                    },
                    {
                        "hanzi": "都挺好",
                        "pinyin": "dōu tǐng hǎo",
                        "viet": "Đều rất tốt / Rất khỏe"
                    }
                ]
            },
            {
                "speaker": "Nhân vật B",
                "hanzi": "周末欢迎来我家做客，尝尝我妈妈包的水饺！",
                "pinyin": "Zhōumò huānyíng lái wǒ jiā zuòkè, chángchang wǒ māma bāo de shuǐjiǎo!",
                "phoneticVi": "Châu mo hoan dính lái ủa chia chua khơ, cháng chang ủa ma ma pao tơ suẩy chẻo!",
                "viet": "Cuối tuần hoan nghênh bạn đến nhà tôi làm khách, thử sủi cảo mẹ tôi gói nhé!",
                "tip": "Ngữ điệu vui vẻ, hào hứng mời bạn bè.",
                "tokens": [
                    {
                        "hanzi": "周末",
                        "pinyin": "zhōumò",
                        "viet": "Cuối tuần"
                    },
                    {
                        "hanzi": "欢迎",
                        "pinyin": "huānyíng",
                        "viet": "Hoan nghênh / Chào đón"
                    },
                    {
                        "hanzi": "来我家做客",
                        "pinyin": "lái wǒ jiā zuòkè",
                        "viet": "Tới nhà tôi làm khách"
                    },
                    {
                        "hanzi": "尝尝",
                        "pinyin": "chángchang",
                        "viet": "Nếm thử / Thưởng thức"
                    },
                    {
                        "hanzi": "我妈妈",
                        "pinyin": "wǒ māma",
                        "viet": "Mẹ của tôi"
                    },
                    {
                        "hanzi": "包的水饺",
                        "pinyin": "bāo de shuǐjiǎo",
                        "viet": "Sủi cảo tự tay gói"
                    }
                ]
            },
            {
                "speaker": "Nhân vật A",
                "hanzi": "太好了！我也很想尝尝阿姨的手艺！",
                "pinyin": "Tài hǎo le! Wǒ yě hěn xiǎng chángchang āyí de shǒuyì!",
                "phoneticVi": "Thai hảo lơ! Ủa dẻ hẩn xẻng cháng chang a ý tơ sẩu ý!",
                "viet": "Tuyệt quá! Tôi cũng rất muốn thử tài nấu nướng của dì!",
                "tip": "'Tài hǎo le!' reo lên thích thú, 'shǒuyì' là tay nghề nấu nướng.",
                "tokens": [
                    {
                        "hanzi": "太好了",
                        "pinyin": "tài hǎo le",
                        "viet": "Tuyệt vời quá"
                    },
                    {
                        "hanzi": "我也很想",
                        "pinyin": "wǒ yě hěn xiǎng",
                        "viet": "Tôi cũng rất muốn"
                    },
                    {
                        "hanzi": "尝尝",
                        "pinyin": "chángchang",
                        "viet": "Thử / Nếm thử"
                    },
                    {
                        "hanzi": "阿姨的",
                        "pinyin": "āyí de",
                        "viet": "Của dì / Của cô"
                    },
                    {
                        "hanzi": "手艺",
                        "pinyin": "shǒuyì",
                        "viet": "Tay nghề nấu ăn"
                    }
                ]
            }
        ]
    }
]
};
