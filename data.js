// data.js - Dữ liệu giáo trình HSK 1 - Chuỗi bài giảng Thầy Thành Luân
const HSK1_DATA = {
  courseTitle: "Giáo trình chuẩn HSK 1 - Tự học tiếng Trung",
  instructor: "Thầy Thành Luân",
  playlistUrl: "https://www.youtube.com/playlist?list=PLkDxGl-gi2racE5ND8L9HP_xsAl9qLxSG",
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
  ]
};
