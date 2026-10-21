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

  // TRỌN BỘ 150+ TỪ VỰNG HSK 1 CHUẨN QUỐC TẾ
  allVocab: [
    {
        "id": "hsk1_001",
        "hanzi": "你",
        "pinyin": "nǐ",
        "sinoViet": "Nhĩ",
        "type": "Đại từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 1,
        "meaning": "Bạn, anh, chị (ngôi thứ 2 số ít)",
        "memoryTip": "Bộ Nhân đứng (亻) trước mặt, chính là 'Bạn'.",
        "example": "你好！(Nǐ hǎo! - Xin chào!)"
    },
    {
        "id": "hsk1_002",
        "hanzi": "好",
        "pinyin": "hǎo",
        "sinoViet": "Hảo",
        "type": "Tính từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 1,
        "meaning": "Tốt, đẹp, khỏe, hay",
        "memoryTip": "Người phụ nữ (女) sinh con trai (子) là điều tốt lành.",
        "example": "很好！(Hěn hǎo! - Rất tốt!)"
    },
    {
        "id": "hsk1_003",
        "hanzi": "您",
        "pinyin": "nín",
        "sinoViet": "Nẫm",
        "type": "Đại từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 1,
        "meaning": "Ngài, ông, bà (kính ngữ của 你)",
        "memoryTip": "Chữ 你 đặt trên bộ Tâm (心) - tôn trọng từ tận đáy lòng.",
        "example": "您好！(Nín hǎo! - Chào ngài ạ!)"
    },
    {
        "id": "hsk1_004",
        "hanzi": "你们",
        "pinyin": "nǐmen",
        "sinoViet": "Nhĩ môn",
        "type": "Đại từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 1,
        "meaning": "Các bạn, các anh, các chị (số nhiều)",
        "memoryTip": "Thêm đuôi '们' (môn) vào sau đại từ để tạo số nhiều.",
        "example": "你们好！(Nǐmen hǎo! - Chào các bạn!)"
    },
    {
        "id": "hsk1_005",
        "hanzi": "我",
        "pinyin": "wǒ",
        "sinoViet": "Ngã",
        "type": "Đại từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 1,
        "meaning": "Tôi, tao, tớ, mình (ngôi thứ 1)",
        "memoryTip": "Tay cầm ngọn giáo tự bảo vệ bản thân (Tôi).",
        "example": "我是学生。(Wǒ shì xuésheng. - Tôi là học sinh.)"
    },
    {
        "id": "hsk1_006",
        "hanzi": "我们",
        "pinyin": "wǒmen",
        "sinoViet": "Ngã môn",
        "type": "Đại từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 1,
        "meaning": "Chúng tôi, chúng ta",
        "memoryTip": "Tôi (我) cùng mọi người (们) tạo thành Chúng tôi.",
        "example": "我们都是朋友。(Wǒmen dōu shì péngyou. - Chúng tôi đều là bạn bè.)"
    },
    {
        "id": "hsk1_007",
        "hanzi": "他",
        "pinyin": "tā",
        "sinoViet": "Tha",
        "type": "Đại từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 4,
        "meaning": "Anh ấy, ông ấy, cậu ấy (nam giới)",
        "memoryTip": "Bộ Nhân đứng (亻) chỉ người đàn ông ấy.",
        "example": "他是老师。(Tā shì lǎoshī. - Anh ấy là giáo viên.)"
    },
    {
        "id": "hsk1_008",
        "hanzi": "她",
        "pinyin": "tā",
        "sinoViet": "Tha",
        "type": "Đại từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 4,
        "meaning": "Cô ấy, bà ấy, chị ấy (nữ giới)",
        "memoryTip": "Bộ Nữ (女) bên trái chỉ phái nữ.",
        "example": "她很漂亮。(Tā hěn piàoliang. - Cô ấy rất xinh đẹp.)"
    },
    {
        "id": "hsk1_009",
        "hanzi": "他们",
        "pinyin": "tāmen",
        "sinoViet": "Tha môn",
        "type": "Đại từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 4,
        "meaning": "Họ, các anh ấy, chúng nó",
        "memoryTip": "Nhóm người bao gồm nam giới.",
        "example": "他们都在家。(Tāmen dōu zài jiā. - Họ đều ở nhà.)"
    },
    {
        "id": "hsk1_010",
        "hanzi": "她们",
        "pinyin": "tāmen",
        "sinoViet": "Tha môn",
        "type": "Đại từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 4,
        "meaning": "Họ, các cô ấy (toàn nữ giới)",
        "memoryTip": "Nhóm toàn phụ nữ với bộ Nữ (女).",
        "example": "她们去学校了。(Tāmen qù xuéxiào le. - Các cô ấy đi đến trường rồi.)"
    },
    {
        "id": "hsk1_011",
        "hanzi": "谢谢",
        "pinyin": "xièxie",
        "sinoViet": "Tạ tạ",
        "type": "Động từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 2,
        "meaning": "Cảm ơn",
        "memoryTip": "Dùng lời nói (言) bắn ra mũi tên (射) bày tỏ sự biết ơn.",
        "example": "谢谢你！(Xièxie nǐ! - Cảm ơn bạn!)"
    },
    {
        "id": "hsk1_012",
        "hanzi": "不客气",
        "pinyin": "bú kèqi",
        "sinoViet": "Bất khách khí",
        "type": "Cụm từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 2,
        "meaning": "Không có chi, đừng khách sáo",
        "memoryTip": "Không (不) cần làm khách (客) xa lạ.",
        "example": "不客气，请坐！(Bú kèqi, qǐng zuò! - Đừng khách sáo, mời ngồi!)"
    },
    {
        "id": "hsk1_013",
        "hanzi": "再见",
        "pinyin": "zàijiàn",
        "sinoViet": "Tái kiến",
        "type": "Động từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 2,
        "meaning": "Tạm biệt, hẹn gặp lại",
        "memoryTip": "Tái (再) nghĩa là lại, Kiến (见) nghĩa là gặp gỡ.",
        "example": "明天见，再见！(Míngtiān jiàn, zàijiàn! - Mai gặp lại, tạm biệt!)"
    },
    {
        "id": "hsk1_014",
        "hanzi": "对不起",
        "pinyin": "duìbuqǐ",
        "sinoViet": "Đối bất khởi",
        "type": "Cụm từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 2,
        "meaning": "Xin lỗi",
        "memoryTip": "Cảm thấy không xứng đáng (不起) khi đối mặt (对) với người khác.",
        "example": "对不起，我迟到了。(Duìbuqǐ, wǒ chídào le. - Xin lỗi, tôi đến muộn.)"
    },
    {
        "id": "hsk1_015",
        "hanzi": "没关系",
        "pinyin": "méi guānxi",
        "sinoViet": "Một quan hệ",
        "type": "Cụm từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 2,
        "meaning": "Không sao đâu, không có gì",
        "memoryTip": "Không có (没) mối liên quan (关系) phiền phức nào cả.",
        "example": "没关系，别客气！(Méi guānxi, bié kèqi! - Không sao đâu, đừng khách khí!)"
    },
    {
        "id": "hsk1_016",
        "hanzi": "请",
        "pinyin": "qǐng",
        "sinoViet": "Thỉnh",
        "type": "Động từ",
        "category": "Chào hỏi & Đại từ",
        "lessonId": 2,
        "meaning": "Mời, xin vui lòng",
        "memoryTip": "Dùng lời nói (讠) trong sáng (青) để thỉnh cầu.",
        "example": "请进，请喝茶！(Qǐng jìn, qǐng hē chá! - Mời vào, mời uống trà!)"
    },
    {
        "id": "hsk1_017",
        "hanzi": "这",
        "pinyin": "zhè",
        "sinoViet": "Giá",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 3,
        "meaning": "Đây, này (chỉ vật ở gần)",
        "memoryTip": "Bộ Quai xước (辶) chỉ phương hướng ngay trước mắt.",
        "example": "这是我的书。(Zhè shì wǒ de shū. - Đây là sách của tôi.)"
    },
    {
        "id": "hsk1_018",
        "hanzi": "这儿",
        "pinyin": "zhèr",
        "sinoViet": "Giá nhi",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 9,
        "meaning": "Ở đây, chỗ này",
        "memoryTip": "Thêm âm 'uốn lưỡi' r (儿) chỉ nơi chốn gần.",
        "example": "我在这儿等你。(Wǒ zài zhèr děng nǐ. - Tôi ở đây đợi bạn.)"
    },
    {
        "id": "hsk1_019",
        "hanzi": "那",
        "pinyin": "nà",
        "sinoViet": "Na",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 3,
        "meaning": "Đó, kia (chỉ vật ở xa)",
        "memoryTip": "Chỉ vật ở xa tầm tay.",
        "example": "那是谁的电脑？(Nà shì shéi de diànnǎo? - Đó là máy tính của ai?)"
    },
    {
        "id": "hsk1_020",
        "hanzi": "那儿",
        "pinyin": "nàr",
        "sinoViet": "Na nhi",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 9,
        "meaning": "Ở kia, chỗ đó",
        "memoryTip": "Địa điểm ở khoảng cách xa người nói.",
        "example": "那儿有一家饭店。(Nàr yǒu yì jiā fàndiàn. - Ở đằng kia có một quán ăn.)"
    },
    {
        "id": "hsk1_021",
        "hanzi": "哪",
        "pinyin": "nǎ",
        "sinoViet": "Nã",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 3,
        "meaning": "Nào (trong câu hỏi)",
        "memoryTip": "Có bộ Khẩu (口) ở đầu để mở miệng hỏi 'Cái nào?'.",
        "example": "你是哪国人？(Nǐ shì nǎ guó rén? - Bạn là người nước nào?)"
    },
    {
        "id": "hsk1_022",
        "hanzi": "哪儿",
        "pinyin": "nǎr",
        "sinoViet": "Nã nhi",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 9,
        "meaning": "Ở đâu, chỗ nào",
        "memoryTip": "Từ để hỏi địa điểm, tương đương với 'nǎlǐ'.",
        "example": "你去哪儿？(Nǐ qù nǎr? - Bạn đi đâu đấy?)"
    },
    {
        "id": "hsk1_023",
        "hanzi": "谁",
        "pinyin": "shéi",
        "sinoViet": "Thùy",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 4,
        "meaning": "Ai (hỏi về người)",
        "memoryTip": "Dùng ngôn ngữ (讠) để hỏi danh tính người khác.",
        "example": "他是谁？(Tā shì shéi? - Anh ấy là ai?)"
    },
    {
        "id": "hsk1_024",
        "hanzi": "什么",
        "pinyin": "shénme",
        "sinoViet": "Thập ma",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 3,
        "meaning": "Cái gì, gì",
        "memoryTip": "Từ để hỏi phổ biến nhất trong tiếng Trung.",
        "example": "你说什么？(Nǐ shuō shénme? - Bạn nói gì cơ?)"
    },
    {
        "id": "hsk1_025",
        "hanzi": "多少",
        "pinyin": "duōshao",
        "sinoViet": "Đa thiểu",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 5,
        "meaning": "Bao nhiêu (hỏi số lượng > 10 hoặc giá cả)",
        "memoryTip": "Ghép giữa Nhiều (多) và Ít (少) thành 'Bao nhiêu'.",
        "example": "这个多少钱？(Zhè ge duōshao qián? - Cái này bao nhiêu tiền?)"
    },
    {
        "id": "hsk1_026",
        "hanzi": "几",
        "pinyin": "jǐ",
        "sinoViet": "Kỷ",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 5,
        "meaning": "Mấy (hỏi số lượng < 10, ngày tháng, giờ giấc)",
        "memoryTip": "Hình dáng chiếc ghế con nhỏ, hỏi số lượng nhỏ.",
        "example": "现在几点？(Xiànzài jǐ diǎn? - Bây giờ là mấy giờ?)"
    },
    {
        "id": "hsk1_027",
        "hanzi": "怎么",
        "pinyin": "zěnme",
        "sinoViet": "Chẩm ma",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 12,
        "meaning": "Làm sao, như thế nào (hỏi phương thức, cách làm)",
        "memoryTip": "Dưới có bộ Tâm (心) suy nghĩ cách thức thực hiện.",
        "example": "这个字怎么读？(Zhè ge zì zěnme dú? - Chữ này đọc như thế nào?)"
    },
    {
        "id": "hsk1_028",
        "hanzi": "怎么样",
        "pinyin": "zěnmeyàng",
        "sinoViet": "Chẩm ma dạng",
        "type": "Đại từ",
        "category": "Đại từ & Chỉ định",
        "lessonId": 12,
        "meaning": "Thế nào, ra sao (hỏi ý kiến, tính chất)",
        "memoryTip": "Dạng (样) nghĩa là hình dáng, tình trạng.",
        "example": "今天天气怎么样？(Jīntiān tiānqì zěnmeyàng? - Hôm nay thời tiết thế nào?)"
    },
    {
        "id": "hsk1_029",
        "hanzi": "一",
        "pinyin": "yī",
        "sinoViet": "Nhất",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 1,
        "meaning": "Số 1",
        "memoryTip": "Một vạch ngang duy nhất tượng trưng cho số 1.",
        "example": "一个人。(Yí gè rén. - Một người.)"
    },
    {
        "id": "hsk1_030",
        "hanzi": "二",
        "pinyin": "èr",
        "sinoViet": "Nhị",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 1,
        "meaning": "Số 2",
        "memoryTip": "Hai vạch ngang song song biểu thị số 2.",
        "example": "二月。(Èryuè. - Tháng 2.)"
    },
    {
        "id": "hsk1_031",
        "hanzi": "三",
        "pinyin": "sān",
        "sinoViet": "Tam",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 1,
        "meaning": "Số 3",
        "memoryTip": "Ba vạch ngang xếp chồng lên nhau biểu thị số 3.",
        "example": "三个人。(Sān gè rén. - Ba người.)"
    },
    {
        "id": "hsk1_032",
        "hanzi": "四",
        "pinyin": "sì",
        "sinoViet": "Tứ",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 5,
        "meaning": "Số 4",
        "memoryTip": "Hình khung chữ nhật có 2 nét rủ bên trong biểu thị số 4.",
        "example": "四点钟。(Sì diǎn zhōng. - 4 giờ đúng.)"
    },
    {
        "id": "hsk1_033",
        "hanzi": "五",
        "pinyin": "wǔ",
        "sinoViet": "Ngũ",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 5,
        "meaning": "Số 5",
        "memoryTip": "Năm nét nối đất và trời biểu thị ngũ hành.",
        "example": "五块钱。(Wǔ kuài qián. - 5 tệ.)"
    },
    {
        "id": "hsk1_034",
        "hanzi": "六",
        "pinyin": "liù",
        "sinoViet": "Lục",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 5,
        "meaning": "Số 6",
        "memoryTip": "Số 6 mang ý nghĩa thuận buồm xuôi gió (Lục Lục Đại Thuận).",
        "example": "星期六。(Xīngqīliù. - Thứ Bảy.)"
    },
    {
        "id": "hsk1_035",
        "hanzi": "七",
        "pinyin": "qī",
        "sinoViet": "Thất",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 5,
        "meaning": "Số 7",
        "memoryTip": "Một nét ngang và một nét cong móc cắt qua nhau.",
        "example": "七月七号。(Qī yuè qī hào. - Ngày 7 tháng 7.)"
    },
    {
        "id": "hsk1_036",
        "hanzi": "八",
        "pinyin": "bā",
        "sinoViet": "Bát",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 1,
        "meaning": "Số 8 (con số phát tài phát lộc)",
        "memoryTip": "Hai nét mở rộng sang hai bên như mở rộng cửa đón tài lộc.",
        "example": "八点。(Bā diǎn. - 8 giờ.)"
    },
    {
        "id": "hsk1_037",
        "hanzi": "九",
        "pinyin": "jiǔ",
        "sinoViet": "Cửu",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 5,
        "meaning": "Số 9 (trường thọ, vĩnh cửu)",
        "memoryTip": "Đọc đồng âm với chữ Cửu (久) - lâu dài bền vững.",
        "example": "九个苹果。(Jiǔ gè píngguǒ. - 9 quả táo.)"
    },
    {
        "id": "hsk1_038",
        "hanzi": "十",
        "pinyin": "shí",
        "sinoViet": "Thập",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 1,
        "meaning": "Số 10 (thập toàn thập mỹ)",
        "memoryTip": "Hình dấu thập (+), đầy đủ bốn phương tám hướng.",
        "example": "十岁。(Shí suì. - 10 tuổi.)"
    },
    {
        "id": "hsk1_039",
        "hanzi": "零",
        "pinyin": "líng",
        "sinoViet": "Linh",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 5,
        "meaning": "Số 0",
        "memoryTip": "Bộ Vũ (雨) che trên chữ Lệnh (令).",
        "example": "二零二六。(Èr líng èr liù. - Năm 2026.)"
    },
    {
        "id": "hsk1_040",
        "hanzi": "百",
        "pinyin": "bǎi",
        "sinoViet": "Bách",
        "type": "Số từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 5,
        "meaning": "Trăm, 100",
        "memoryTip": "Một vạch ngang trên chữ Bạch (白) biểu thị một trăm.",
        "example": "一百块。(Yì bǎi kuài. - 100 tệ.)"
    },
    {
        "id": "hsk1_041",
        "hanzi": "个",
        "pinyin": "gè",
        "sinoViet": "Cá",
        "type": "Lượng từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 3,
        "meaning": "Cái, con, quả, người (lượng từ đa năng phổ biến nhất)",
        "memoryTip": "Một nét sổ thẳng chia đều mọi vật.",
        "example": "一个人，两个苹果。(Yí gè rén, liǎng gè píngguǒ. - 1 người, 2 quả táo.)"
    },
    {
        "id": "hsk1_042",
        "hanzi": "岁",
        "pinyin": "suì",
        "sinoViet": "Tuế",
        "type": "Lượng từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 5,
        "meaning": "Tuổi",
        "memoryTip": "Dùng sau số đếm để nói về số tuổi của người.",
        "example": "我今年二十岁。(Wǒ jīnnián èrshí suì. - Năm nay tôi 20 tuổi.)"
    },
    {
        "id": "hsk1_043",
        "hanzi": "本",
        "pinyin": "běn",
        "sinoViet": "Bổn",
        "type": "Lượng từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 9,
        "meaning": "Quyển, cuốn (dùng cho sách vở)",
        "memoryTip": "Chữ Mộc (木) có thêm nét ngang chỉ gốc rễ để làm giấy sách.",
        "example": "三本书。(Sān běn shū. - 3 cuốn sách.)"
    },
    {
        "id": "hsk1_044",
        "hanzi": "些",
        "pinyin": "xiē",
        "sinoViet": "Ta",
        "type": "Lượng từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 14,
        "meaning": "Một vài, một số",
        "memoryTip": "Chữ Thử (此) trên chữ Nhị (二) chỉ số lượng nhỏ.",
        "example": "买一些水果。(Mǎi yìxiē shuǐguǒ. - Mua một ít hoa quả.)"
    },
    {
        "id": "hsk1_045",
        "hanzi": "块",
        "pinyin": "kuài",
        "sinoViet": "Khối",
        "type": "Lượng từ",
        "category": "Số đếm & Lượng từ",
        "lessonId": 8,
        "meaning": "Đồng (đơn vị tiền tệ khẩu ngữ Tệ), miếng, cục",
        "memoryTip": "Bộ Thổ (土) chỉ khối đất, viên gạch, đồng tiền kim loại.",
        "example": "五块钱。(Wǔ kuài qián. - 5 đồng tệ.)"
    },
    {
        "id": "hsk1_046",
        "hanzi": "不",
        "pinyin": "bù",
        "sinoViet": "Bất",
        "type": "Phó từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 1,
        "meaning": "Không, chẳng (phủ định)",
        "memoryTip": "Hình hạt giống chưa đâm chồi lên khỏi mặt đất (Chưa / Không).",
        "example": "我不是老师。(Wǒ bú shì lǎoshī. - Tôi không phải là giáo viên.)"
    },
    {
        "id": "hsk1_047",
        "hanzi": "没",
        "pinyin": "méi",
        "sinoViet": "Một",
        "type": "Phó từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 6,
        "meaning": "Không có, chưa (phủ định của 有)",
        "memoryTip": "Bộ Ba chấm thủy (氵) chỉ sự chìm nghỉm, không còn gì.",
        "example": "我没有钱。(Wǒ méiyǒu qián. - Tôi không có tiền.)"
    },
    {
        "id": "hsk1_048",
        "hanzi": "很",
        "pinyin": "hěn",
        "sinoViet": "Hẩn",
        "type": "Phó từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 4,
        "meaning": "Rất, lắm",
        "memoryTip": "Bộ Xích (彳) bước đi thật xa, mức độ 'Rất cao'.",
        "example": "汉语很好学。(Hànyǔ hěn hǎo xué. - Tiếng Trung rất dễ học.)"
    },
    {
        "id": "hsk1_049",
        "hanzi": "太",
        "pinyin": "tài",
        "sinoViet": "Thái",
        "type": "Phó từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 12,
        "meaning": "Quá, lắm",
        "memoryTip": "Chữ Đại (大) có thêm một dấu chấm ở dưới thành Thái (Quá mức).",
        "example": "太好了！(Tài hǎo le! - Tốt quá rồi!)"
    },
    {
        "id": "hsk1_050",
        "hanzi": "都",
        "pinyin": "dōu",
        "sinoViet": "Đô",
        "type": "Phó từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 4,
        "meaning": "Đều, tất cả",
        "memoryTip": "Mọi người tụ họp đông đủ tại kinh đô (都).",
        "example": "我们都是中国人。(Wǒmen dōu shì Zhōngguó rén. - Chúng tôi đều là người Trung Quốc.)"
    },
    {
        "id": "hsk1_051",
        "hanzi": "和",
        "pinyin": "hé",
        "sinoViet": "Hòa",
        "type": "Liên từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 5,
        "meaning": "Và, cùng với",
        "memoryTip": "Cây lúa (禾) vào miệng (口) thì no ấm hòa thuận.",
        "example": "我和你。(Wǒ hé nǐ. - Tôi và bạn.)"
    },
    {
        "id": "hsk1_052",
        "hanzi": "在",
        "pinyin": "zài",
        "sinoViet": "Tại",
        "type": "Giới từ / Động từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 9,
        "meaning": "Ở, tại; đang (hành động)",
        "memoryTip": "Đất (土) ở dưới chân nơi mình sinh sống tồn tại.",
        "example": "他在学校。(Tā zài xuéxiào. - Anh ấy ở trường học.)"
    },
    {
        "id": "hsk1_053",
        "hanzi": "的",
        "pinyin": "de",
        "sinoViet": "Đích",
        "type": "Trợ từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 4,
        "meaning": "Của (trợ từ sở hữu); người mà...",
        "memoryTip": "Chữ Bạch (白) bên cạnh chữ Thược (勺). Trợ từ sở hữu số 1.",
        "example": "我的书。(Wǒ de shū. - Cuốn sách của tôi.)"
    },
    {
        "id": "hsk1_054",
        "hanzi": "了",
        "pinyin": "le",
        "sinoViet": "Liễu",
        "type": "Trợ từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 14,
        "meaning": "Rồi (biểu thị thay đổi hoặc hoàn thành)",
        "memoryTip": "Chỉ có 2 nét ngắn gọn nhưng diễn đạt hành động đã xong.",
        "example": "我吃了。(Wǒ chī le. - Tôi ăn rồi.)"
    },
    {
        "id": "hsk1_055",
        "hanzi": "吗",
        "pinyin": "ma",
        "sinoViet": "Ma",
        "type": "Trợ từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 1,
        "meaning": "Không? Có phải... không? (hỏi)",
        "memoryTip": "Bộ Khẩu (口) bên cạnh con ngựa Mã (马) dùng để cất tiếng hỏi.",
        "example": "你好吗？(Nǐ hǎo ma? - Bạn có khỏe không?)"
    },
    {
        "id": "hsk1_056",
        "hanzi": "呢",
        "pinyin": "ne",
        "sinoViet": "Ni",
        "type": "Trợ từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 3,
        "meaning": "Thế còn... thì sao? Đang...",
        "memoryTip": "Bộ Khẩu (口) bên cạnh chữ Ni (尼) tạo ngữ điệu hỏi ngược lại.",
        "example": "我很好，你呢？(Wǒ hěn hǎo, nǐ ne? - Tôi rất khỏe, còn bạn thì sao?)"
    },
    {
        "id": "hsk1_057",
        "hanzi": "喂",
        "pinyin": "wèi",
        "sinoViet": "Vị",
        "type": "Thán từ",
        "category": "Ngữ pháp & Trợ từ",
        "lessonId": 13,
        "meaning": "A lô (khi nghe điện thoại), này",
        "memoryTip": "Bộ Khẩu (口) mở miệng gọi alo khi nhấc máy.",
        "example": "喂，你好！(Wèi, nǐ hǎo! - A lô, xin chào!)"
    },
    {
        "id": "hsk1_058",
        "hanzi": "家",
        "pinyin": "jiā",
        "sinoViet": "Gia",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 5,
        "meaning": "Nhà, gia đình",
        "memoryTip": "Dưới mái nhà (宀) có nuôi chú heo (豕) là một tổ ấm gia đình.",
        "example": "我家在北京。(Wǒ jiā zài Běijīng. - Nhà tôi ở Bắc Kinh.)"
    },
    {
        "id": "hsk1_059",
        "hanzi": "爸爸",
        "pinyin": "bàba",
        "sinoViet": "Ba ba",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 5,
        "meaning": "Bố, ba, cha",
        "memoryTip": "Phía trên là bộ Phụ (父 - người cha), phía dưới là chữ Ba (巴).",
        "example": "我爸爸是医生。(Wǒ bàba shì yīshēng. - Bố tôi là bác sĩ.)"
    },
    {
        "id": "hsk1_060",
        "hanzi": "妈妈",
        "pinyin": "māma",
        "sinoViet": "Ma ma",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 5,
        "meaning": "Mẹ, má",
        "memoryTip": "Người phụ nữ (女) hiền hậu chăm chỉ như chú ngựa (马).",
        "example": "我爱我妈妈。(Wǒ ài wǒ māma. - Tôi yêu mẹ tôi.)"
    },
    {
        "id": "hsk1_061",
        "hanzi": "儿子",
        "pinyin": "érzi",
        "sinoViet": "Nhi tử",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 5,
        "meaning": "Con trai",
        "memoryTip": "Chữ Nhi (儿 - đứa trẻ) ghép với chữ Tử (子 - con trai).",
        "example": "他儿子五岁了。(Tā érzi wǔ suì le. - Con trai anh ấy 5 tuổi rồi.)"
    },
    {
        "id": "hsk1_062",
        "hanzi": "女儿",
        "pinyin": "nǚ'ér",
        "sinoViet": "Nữ nhi",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 5,
        "meaning": "Con gái",
        "memoryTip": "Ghép giữa Nữ (女) và Nhi (儿) nghĩa là con gái bé bỏng.",
        "example": "她女儿很漂亮。(Tā nǚ'ér hěn piàoliang. - Con gái cô ấy rất xinh đẹp.)"
    },
    {
        "id": "hsk1_063",
        "hanzi": "老师",
        "pinyin": "lǎoshī",
        "sinoViet": "Lão sư",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 4,
        "meaning": "Giáo viên, thầy cô giáo",
        "memoryTip": "Người thầy đáng kính giàu kinh nghiệm (Lão - 老).",
        "example": "王老师好！(Wáng lǎoshī hǎo! - Chào thầy Vương ạ!)"
    },
    {
        "id": "hsk1_064",
        "hanzi": "学生",
        "pinyin": "xuésheng",
        "sinoViet": "Học sinh",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 4,
        "meaning": "Học sinh, sinh viên",
        "memoryTip": "Người sinh ra (生) để học tập (学) kiến thức.",
        "example": "他是汉语学生。(Tā shì Hànyǔ xuésheng. - Anh ấy là học viên tiếng Trung.)"
    },
    {
        "id": "hsk1_065",
        "hanzi": "同学",
        "pinyin": "tóngxué",
        "sinoViet": "Đồng học",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 4,
        "meaning": "Bạn cùng lớp, bạn học",
        "memoryTip": "Đồng (同 - cùng) chung việc học (学) với nhau.",
        "example": "他们是我的同学。(Tāmen shì wǒ de tóngxué. - Họ là bạn cùng lớp của tôi.)"
    },
    {
        "id": "hsk1_066",
        "hanzi": "朋友",
        "pinyin": "péngyou",
        "sinoViet": "Bằng hữu",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 4,
        "meaning": "Bạn bè",
        "memoryTip": "Hai vầng trăng (朋) kề vai sát cánh cùng nhau.",
        "example": "我们是好朋友。(Wǒmen shì hǎo péngyou. - Chúng tôi là bạn tốt của nhau.)"
    },
    {
        "id": "hsk1_067",
        "hanzi": "医生",
        "pinyin": "yīshēng",
        "sinoViet": "Y sinh",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 9,
        "meaning": "Bác sĩ",
        "memoryTip": "Người thầy thuốc làm nghề y cứu sống sinh mạng con người.",
        "example": "他在医院当医生。(Tā zài yīyuàn dāng yīshēng. - Anh ấy làm bác sĩ ở bệnh viện.)"
    },
    {
        "id": "hsk1_068",
        "hanzi": "先生",
        "pinyin": "xiānsheng",
        "sinoViet": "Tiên sinh",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 10,
        "meaning": "Ông, ngài, anh; chồng (lịch sự)",
        "memoryTip": "Người sinh ra trước (Tiên Sinh) đáng kính nể.",
        "example": "张先生请坐。(Zhāng xiānsheng qǐng zuò. - Mời ngài Trương ngồi.)"
    },
    {
        "id": "hsk1_069",
        "hanzi": "小姐",
        "pinyin": "xiǎojiě",
        "sinoViet": "Tiểu thư",
        "type": "Danh từ",
        "category": "Con người & Gia đình",
        "lessonId": 10,
        "meaning": "Cô, tiểu thư (xưng hô nữ giới trẻ tuổi)",
        "memoryTip": "Cách gọi trang trọng lịch sự dành cho các cô gái.",
        "example": "李小姐，你好！(Lǐ xiǎojiě, nǐ hǎo! - Chào cô Lý!)"
    },
    {
        "id": "hsk1_070",
        "hanzi": "年",
        "pinyin": "nián",
        "sinoViet": "Niên",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 7,
        "meaning": "Năm",
        "memoryTip": "Một chu kỳ mùa màng gặt hái sau một năm.",
        "example": "今年是2026年。(Jīnnián shì èr líng èr liù nián. - Năm nay là năm 2026.)"
    },
    {
        "id": "hsk1_071",
        "hanzi": "月",
        "pinyin": "yuè",
        "sinoViet": "Nguyệt",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 7,
        "meaning": "Tháng, mặt trăng",
        "memoryTip": "Hình dáng trăng lưỡi liềm chiếu sáng ban đêm.",
        "example": "十月。(Shíyuè. - Tháng 10.)"
    },
    {
        "id": "hsk1_072",
        "hanzi": "日",
        "pinyin": "rì",
        "sinoViet": "Nhật",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 7,
        "meaning": "Ngày (văn viết), mặt trời",
        "memoryTip": "Hình mặt trời tròn có tia sáng ở giữa.",
        "example": "十月一日。(Shí yuè yī rì. - Ngày 1 tháng 10.)"
    },
    {
        "id": "hsk1_073",
        "hanzi": "号",
        "pinyin": "hào",
        "sinoViet": "Hào",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 7,
        "meaning": "Ngày (khẩu ngữ), số nhà, kích cỡ",
        "memoryTip": "Có bộ Khẩu (口) dùng khi nói chuyện hàng ngày.",
        "example": "今天几号？(Jīntiān jǐ hào? - Hôm nay ngày mùng mấy?)"
    },
    {
        "id": "hsk1_074",
        "hanzi": "星期",
        "pinyin": "xīngqī",
        "sinoViet": "Tinh kỳ",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 7,
        "meaning": "Tuần, thứ",
        "memoryTip": "Chu kỳ tuần hoàn theo các vì sao (Tinh - 星).",
        "example": "星期天。(Xīngqītiān. - Chủ Nhật.)"
    },
    {
        "id": "hsk1_075",
        "hanzi": "点",
        "pinyin": "diǎn",
        "sinoViet": "Điểm",
        "type": "Danh từ / Lượng từ",
        "category": "Thời gian & Con số",
        "lessonId": 11,
        "meaning": "Giờ (thời gian), điểm, chấm",
        "memoryTip": "Bộ Hỏa ở dưới biểu thị từng đốm lửa nhỏ chỉ mốc giờ.",
        "example": "现在八点。(Xiànzài bā diǎn. - Bây giờ là 8 giờ.)"
    },
    {
        "id": "hsk1_076",
        "hanzi": "分钟",
        "pinyin": "fēnzhōng",
        "sinoViet": "Phân chung",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 11,
        "meaning": "Phút",
        "memoryTip": "Chia (分) thời gian theo nhịp chuông đồng hồ (钟).",
        "example": "十分钟。(Shí fēnzhōng. - 10 phút.)"
    },
    {
        "id": "hsk1_077",
        "hanzi": "现在",
        "pinyin": "xiànzài",
        "sinoViet": "Hiện tại",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 11,
        "meaning": "Bây giờ, hiện nay",
        "memoryTip": "Hiện (现 - ngay lúc này) Tại (在 - đang diễn ra).",
        "example": "现在几点？(Xiànzài jǐ diǎn? - Bây giờ là mấy giờ?)"
    },
    {
        "id": "hsk1_078",
        "hanzi": "今天",
        "pinyin": "jīntiān",
        "sinoViet": "Kim thiên",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 7,
        "meaning": "Hôm nay",
        "memoryTip": "Kim (今 - hiện tại) Thiên (天 - trời, ngày).",
        "example": "今天天气很好。(Jīntiān tiānqì hěn hǎo. - Hôm nay thời tiết rất đẹp.)"
    },
    {
        "id": "hsk1_079",
        "hanzi": "明天",
        "pinyin": "míngtiān",
        "sinoViet": "Minh thiên",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 7,
        "meaning": "Ngày mai",
        "memoryTip": "Mặt trời (日) cùng mặt trăng (月) sáng bừng lên ngày mai (明).",
        "example": "明天见！(Míngtiān jiàn! - Ngày mai gặp lại!)"
    },
    {
        "id": "hsk1_080",
        "hanzi": "昨天",
        "pinyin": "zuótiān",
        "sinoViet": "Tạc thiên",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 7,
        "meaning": "Hôm qua",
        "memoryTip": "Mặt trời ngày hôm qua (Tạc - 昨).",
        "example": "昨天很冷。(Zuótiān hěn lěng. - Hôm qua rất lạnh.)"
    },
    {
        "id": "hsk1_081",
        "hanzi": "上午",
        "pinyin": "shàngwǔ",
        "sinoViet": "Thượng ngọ",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 11,
        "meaning": "Buổi sáng (trước 12h trưa)",
        "memoryTip": "Khoảng thời gian nằm phía trên (上) giờ ngọ (午).",
        "example": "上午我去学校。(Shàngwǔ wǒ qù xuéxiào. - Buổi sáng tôi đến trường.)"
    },
    {
        "id": "hsk1_082",
        "hanzi": "中午",
        "pinyin": "zhōngwǔ",
        "sinoViet": "Trung ngọ",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 11,
        "meaning": "Buổi trưa (khoảng 12h)",
        "memoryTip": "Đúng giữa (中) giờ ngọ (午) là ban trưa.",
        "example": "中午十二点吃午饭。(Zhōngwǔ shí'èr diǎn chī wǔfàn. - Buổi trưa 12 giờ ăn cơm trưa.)"
    },
    {
        "id": "hsk1_083",
        "hanzi": "下午",
        "pinyin": "xiàwǔ",
        "sinoViet": "Hạ ngọ",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 11,
        "meaning": "Buổi chiều (sau 12h trưa)",
        "memoryTip": "Khoảng thời gian nằm phía dưới (下) giờ ngọ.",
        "example": "下午三点开会。(Xiàwǔ sān diǎn kāihuì. - Buổi chiều 3 giờ họp.)"
    },
    {
        "id": "hsk1_084",
        "hanzi": "时候",
        "pinyin": "shíhou",
        "sinoViet": "Thời hậu",
        "type": "Danh từ",
        "category": "Thời gian & Con số",
        "lessonId": 11,
        "meaning": "Lúc, khi, thời điểm",
        "memoryTip": "Dùng trong cụm '...de shíhou' (khi...) hoặc 'shénme shíhou' (khi nào).",
        "example": "你什么时候回家？(Nǐ shénme shíhou huí jiā? - Khi nào bạn về nhà?)"
    },
    {
        "id": "hsk1_085",
        "hanzi": "北京",
        "pinyin": "Běijīng",
        "sinoViet": "Bắc Kinh",
        "type": "Danh từ riêng",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 3,
        "meaning": "Bắc Kinh (thủ đô nước CHND Trung Hoa)",
        "memoryTip": "Kinh đô nằm ở phương Bắc (Bắc Kinh).",
        "example": "我想去北京。(Wǒ xiǎng qù Běijīng. - Tôi muốn đi Bắc Kinh.)"
    },
    {
        "id": "hsk1_086",
        "hanzi": "中国",
        "pinyin": "Zhōngguó",
        "sinoViet": "Trung Quốc",
        "type": "Danh từ riêng",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 3,
        "meaning": "Trung Quốc",
        "memoryTip": "Đất nước (国) nằm ở vị trí trung tâm (中).",
        "example": "中国菜很好吃。(Zhōngguó cài hěn hǎochī. - Món ăn Trung Quốc rất ngon.)"
    },
    {
        "id": "hsk1_087",
        "hanzi": "学校",
        "pinyin": "xuéxiào",
        "sinoViet": "Học hiệu",
        "type": "Danh từ",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 7,
        "meaning": "Trường học",
        "memoryTip": "Nơi học tập (学) có trường sở khuôn viên (校).",
        "example": "我们的学校很大。(Wǒmen de xuéxiào hěn dà. - Trường học của chúng tôi rất lớn.)"
    },
    {
        "id": "hsk1_088",
        "hanzi": "饭店",
        "pinyin": "fàndiàn",
        "sinoViet": "Phạn điếm",
        "type": "Danh từ",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 8,
        "meaning": "Nhà hàng, khách sạn, quán ăn",
        "memoryTip": "Cửa tiệm (店) bán cơm và món ăn (饭).",
        "example": "去饭店吃午饭。(Qù fàndiàn chī wǔfàn. - Đến nhà hàng ăn cơm trưa.)"
    },
    {
        "id": "hsk1_089",
        "hanzi": "商店",
        "pinyin": "shāngdiàn",
        "sinoViet": "Thương điếm",
        "type": "Danh từ",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 8,
        "meaning": "Cửa hàng, tiệm buôn",
        "memoryTip": "Nơi làm nghề kinh doanh thương mại (Thương - 商).",
        "example": "我去商店买东西。(Wǒ qù shāngdiàn mǎi dōngxi. - Tôi đi cửa hàng mua đồ.)"
    },
    {
        "id": "hsk1_090",
        "hanzi": "医院",
        "pinyin": "yīyuàn",
        "sinoViet": "Y viện",
        "type": "Danh từ",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 9,
        "meaning": "Bệnh viện",
        "memoryTip": "Khuôn viên viện sở (院) dành cho bác sĩ chữa bệnh (医).",
        "example": "他生病了，在医院。(Tā shēngbìng le, zài yīyuàn. - Anh ấy ốm rồi, đang ở bệnh viện.)"
    },
    {
        "id": "hsk1_091",
        "hanzi": "火车站",
        "pinyin": "huǒchēzhàn",
        "sinoViet": "Hỏa xa trạm",
        "type": "Danh từ",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 9,
        "meaning": "Ga tàu hỏa, bến xe lửa",
        "memoryTip": "Trạm dừng (站) của những đoàn xe chạy bằng lửa than (Hỏa xa).",
        "example": "坐出租车去火车站。(Zuò chūzūchē qù huǒchēzhàn. - Đi taxi ra ga xe lửa.)"
    },
    {
        "id": "hsk1_092",
        "hanzi": "上",
        "pinyin": "shàng",
        "sinoViet": "Thượng",
        "type": "Danh từ phương vị",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 10,
        "meaning": "Trên, bên trên; lên",
        "memoryTip": "Nét chỉ về phía trên mặt đất.",
        "example": "桌子上有一本书。(Zhuōzi shang yǒu yì běn shū. - Trên bàn có một cuốn sách.)"
    },
    {
        "id": "hsk1_093",
        "hanzi": "下",
        "pinyin": "xià",
        "sinoViet": "Hạ",
        "type": "Danh từ phương vị",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 10,
        "meaning": "Dưới, bên dưới; xuống",
        "memoryTip": "Nét chỉ về phía dưới mặt đất.",
        "example": "椅子下有一只猫。(Yǐzi xià yǒu yì zhī māo. - Dưới ghế có một con mèo.)"
    },
    {
        "id": "hsk1_094",
        "hanzi": "前面",
        "pinyin": "qiánmiàn",
        "sinoViet": "Tiền diện",
        "type": "Danh từ phương vị",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 10,
        "meaning": "Phía trước, đằng trước",
        "memoryTip": "Mặt trước (Tiền diện).",
        "example": "学校前面是一个商店。(Xuéxiào qiánmiàn shì yí gè shāngdiàn. - Phía trước trường là một tiệm tạp hóa.)"
    },
    {
        "id": "hsk1_095",
        "hanzi": "后面",
        "pinyin": "hòumiàn",
        "sinoViet": "Hậu diện",
        "type": "Danh từ phương vị",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 10,
        "meaning": "Phía sau, đằng sau",
        "memoryTip": "Mặt sau (Hậu diện).",
        "example": "我家后面有公园。(Wǒ jiā hòumiàn yǒu gōngyuán. - Phía sau nhà tôi có công viên.)"
    },
    {
        "id": "hsk1_096",
        "hanzi": "里",
        "pinyin": "lǐ",
        "sinoViet": "Lý",
        "type": "Danh từ phương vị",
        "category": "Địa điểm & Đồ vật",
        "lessonId": 10,
        "meaning": "Trong, bên trong",
        "memoryTip": "Ruộng đất (Điền - 田) bên trong làng xóm (Thổ - 土).",
        "example": "房间里有人。(Fángjiān lǐ yǒu rén. - Trong phòng có người.)"
    },
    {
        "id": "hsk1_097",
        "hanzi": "桌子",
        "pinyin": "zhuōzi",
        "sinoViet": "Trác tử",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 10,
        "meaning": "Cái bàn",
        "memoryTip": "Bộ Mộc (木) làm từ gỗ có 4 chân vững chãi.",
        "example": "这是一张木桌子。(Zhè shì yì zhāng mù zhuōzi. - Đây là một chiếc bàn gỗ.)"
    },
    {
        "id": "hsk1_098",
        "hanzi": "椅子",
        "pinyin": "yǐzi",
        "sinoViet": "Cử tử",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 10,
        "meaning": "Cái ghế",
        "memoryTip": "Bộ Mộc (木) làm từ gỗ dùng để tựa lưng ngồi.",
        "example": "请坐在椅子上。(Qǐng zuò zài yǐzi shang. - Mời ngồi lên ghế.)"
    },
    {
        "id": "hsk1_099",
        "hanzi": "电脑",
        "pinyin": "diànnǎo",
        "sinoViet": "Điện não",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 10,
        "meaning": "Máy vi tính",
        "memoryTip": "Bộ não (脑) hoạt động bằng điện (电).",
        "example": "这台电脑是新的。(Zhè tái diànnǎo shì xīn de. - Chiếc máy tính này là đồ mới.)"
    },
    {
        "id": "hsk1_100",
        "hanzi": "电视",
        "pinyin": "diànshì",
        "sinoViet": "Điện thị",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 13,
        "meaning": "Ti vi, truyền hình",
        "memoryTip": "Hình ảnh thị giác (视) chạy bằng điện lực (电).",
        "example": "看电视。(Kàn diànshì. - Xem tivi.)"
    },
    {
        "id": "hsk1_101",
        "hanzi": "飞机",
        "pinyin": "fēijī",
        "sinoViet": "Phi cơ",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 15,
        "meaning": "Máy bay",
        "memoryTip": "Cỗ máy cơ khí (机) biết bay lượn trên bầu trời (飞).",
        "example": "坐飞机去中国。(Zuò fēijī qù Zhōngguó. - Đi máy bay đến Trung Quốc.)"
    },
    {
        "id": "hsk1_102",
        "hanzi": "出租车",
        "pinyin": "chūzūchē",
        "sinoViet": "Xuất tô xa",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 15,
        "meaning": "Xe taxi",
        "memoryTip": "Chiếc xe (车) đem cho thuê dịch vụ (出租).",
        "example": "坐出租车回家。(Zuò chūzūchē huí jiā. - Bắt taxi về nhà.)"
    },
    {
        "id": "hsk1_103",
        "hanzi": "水",
        "pinyin": "shuǐ",
        "sinoViet": "Thủy",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 8,
        "meaning": "Nước",
        "memoryTip": "Dòng nước chảy róc rách nguồn sống tinh khiết.",
        "example": "多喝水。(Duō hē shuǐ. - Uống nhiều nước nhé.)"
    },
    {
        "id": "hsk1_104",
        "hanzi": "茶",
        "pinyin": "chá",
        "sinoViet": "Trà",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 8,
        "meaning": "Trà, chè",
        "memoryTip": "Lá cỏ thảo mộc (艹) người (人) hái trên cây (木) pha thành Trà.",
        "example": "我想喝中国茶。(Wǒ xiǎng hē Zhōngguó chá. - Tôi muốn uống trà Trung Quốc.)"
    },
    {
        "id": "hsk1_105",
        "hanzi": "菜",
        "pinyin": "cài",
        "sinoViet": "Thái",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 6,
        "meaning": "Món ăn, rau củ",
        "memoryTip": "Bộ Thảo (艹) trên đầu rau củ chế biến thành món ngon.",
        "example": "今天吃什么菜？(Jīntiān chī shénme cài? - Hôm nay ăn món gì thế?)"
    },
    {
        "id": "hsk1_106",
        "hanzi": "米饭",
        "pinyin": "mǐfàn",
        "sinoViet": "Mễ phạn",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 8,
        "meaning": "Cơm trắng",
        "memoryTip": "Hạt gạo (米) nấu chín thành bữa cơm no ấm (饭).",
        "example": "吃一碗米饭。(Chī yì wǎn mǐfàn. - Ăn một bát cơm trắng.)"
    },
    {
        "id": "hsk1_107",
        "hanzi": "苹果",
        "pinyin": "píngguǒ",
        "sinoViet": "Bình quả",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 14,
        "meaning": "Quả táo",
        "memoryTip": "Trái cây mang ý nghĩa bình an (Bình Quả).",
        "example": "红苹果很甜。(Hóng píngguǒ hěn tián. - Táo đỏ rất ngọt.)"
    },
    {
        "id": "hsk1_108",
        "hanzi": "衣服",
        "pinyin": "yīfu",
        "sinoViet": "Y phục",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 14,
        "meaning": "Quần áo",
        "memoryTip": "Y phục che thân giữ ấm cho con người.",
        "example": "这件衣服太漂亮了！(Zhè jiàn yīfu tài piàoliang le! - Bộ quần áo này đẹp quá!)"
    },
    {
        "id": "hsk1_109",
        "hanzi": "书",
        "pinyin": "shū",
        "sinoViet": "Thư",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 9,
        "meaning": "Cuốn sách",
        "memoryTip": "Tri thức lưu lại trong văn thư sách vở.",
        "example": "一本汉语书。(Yì běn Hànyǔ shū. - Một cuốn sách tiếng Trung.)"
    },
    {
        "id": "hsk1_110",
        "hanzi": "钱",
        "pinyin": "qián",
        "sinoViet": "Tiền",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 8,
        "meaning": "Tiền, tiền bạc",
        "memoryTip": "Bộ Kim (钅) kim loại đúc thành tiền vàng bạc.",
        "example": "这个多少钱？(Zhè ge duōshao qián? - Cái này bao nhiêu tiền?)"
    },
    {
        "id": "hsk1_111",
        "hanzi": "天气",
        "pinyin": "tiānqì",
        "sinoViet": "Thiên khí",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 12,
        "meaning": "Thời tiết",
        "memoryTip": "Khí trời nóng lạnh mưa gió của bầu trời (Thiên).",
        "example": "今天天气真好！(Jīntiān tiānqì zhēn hǎo! - Thời tiết hôm nay đẹp thật đấy!)"
    },
    {
        "id": "hsk1_112",
        "hanzi": "字",
        "pinyin": "zì",
        "sinoViet": "Tự",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 6,
        "meaning": "Chữ Hán, văn tự",
        "memoryTip": "Dưới mái nhà (宀) dạy dỗ con trẻ (子) học chữ.",
        "example": "这个字我会写。(Zhè ge zì wǒ huì xiě. - Chữ này tôi biết viết.)"
    },
    {
        "id": "hsk1_113",
        "hanzi": "名字",
        "pinyin": "míngzi",
        "sinoViet": "Danh tự",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 3,
        "meaning": "Tên gọi, họ tên",
        "memoryTip": "Danh tiếng được gọi bằng tên của mình.",
        "example": "你叫什么名字？(Nǐ jiào shénme míngzi? - Bạn tên là gì?)"
    },
    {
        "id": "hsk1_114",
        "hanzi": "汉语",
        "pinyin": "Hànyǔ",
        "sinoViet": "Hán ngữ",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 4,
        "meaning": "Tiếng Trung, tiếng Hán",
        "memoryTip": "Ngôn ngữ (语) của người Hán (汉).",
        "example": "我说汉语。(Wǒ shuō Hànyǔ. - Tôi nói tiếng Trung.)"
    },
    {
        "id": "hsk1_115",
        "hanzi": "猫",
        "pinyin": "māo",
        "sinoViet": "Miêu",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 10,
        "meaning": "Con mèo",
        "memoryTip": "Bộ Khuyển (犭) chỉ loài thú cưng kêu meo meo trên ruộng lúa (苗).",
        "example": "小猫很可爱。(Xiǎo māo hěn kě'ài. - Chú mèo con rất đáng yêu.)"
    },
    {
        "id": "hsk1_116",
        "hanzi": "狗",
        "pinyin": "gǒu",
        "sinoViet": "Cẩu",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 10,
        "meaning": "Con chó",
        "memoryTip": "Bộ Khuyển (犭) ghép với chữ Cú (句).",
        "example": "那是一只小狗。(Nà shì yì zhī xiǎo gǒu. - Đó là một chú cún con.)"
    },
    {
        "id": "hsk1_117",
        "hanzi": "东西",
        "pinyin": "dōngxi",
        "sinoViet": "Đông Tây",
        "type": "Danh từ",
        "category": "Đồ dùng & Cuộc sống",
        "lessonId": 14,
        "meaning": "Đồ vật, đồ đạc, hàng hóa",
        "memoryTip": "Đi chợ từ phía Đông (东) sang phía Tây (西) mua đồ.",
        "example": "买东西。(Mǎi dōngxi. - Đi mua đồ.)"
    },
    {
        "id": "hsk1_118",
        "hanzi": "是",
        "pinyin": "shì",
        "sinoViet": "Thị",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 1,
        "meaning": "Là, đúng, phải, vâng",
        "memoryTip": "Mặt trời (日) mọc thẳng thắn ngay chính (正) là Sự thật.",
        "example": "我是越南人。(Wǒ shì Yuènán rén. - Tôi là người Việt Nam.)"
    },
    {
        "id": "hsk1_119",
        "hanzi": "有",
        "pinyin": "yǒu",
        "sinoViet": "Hữu",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 5,
        "meaning": "Có, sở hữu",
        "memoryTip": "Bàn tay nắm lấy miếng thịt (Nguyệt) biểu thị Có tài sản.",
        "example": "我有两个中国朋友。(Wǒ yǒu liǎng gè Zhōngguó péngyou. - Tôi có 2 người bạn Trung Quốc.)"
    },
    {
        "id": "hsk1_120",
        "hanzi": "看",
        "pinyin": "kàn",
        "sinoViet": "Khán",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 8,
        "meaning": "Nhìn, xem, đọc",
        "memoryTip": "Đưa bàn tay (手) che lên trên mắt (目) để phóng tầm mắt nhìn xa.",
        "example": "看书，看电影。(Kàn shū, kàn diànyǐng. - Đọc sách, xem phim.)"
    },
    {
        "id": "hsk1_121",
        "hanzi": "看见",
        "pinyin": "kànjiàn",
        "sinoViet": "Khán kiến",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 14,
        "meaning": "Nhìn thấy, trông thấy",
        "memoryTip": "Nhìn (看) và thu lại được hình ảnh vào mắt (见).",
        "example": "我看见他了。(Wǒ kànjiàn tā le. - Tôi nhìn thấy anh ấy rồi.)"
    },
    {
        "id": "hsk1_122",
        "hanzi": "听",
        "pinyin": "tīng",
        "sinoViet": "Thính",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 6,
        "meaning": "Nghe, lắng nghe",
        "memoryTip": "Bộ Khẩu (口) bên cạnh chữ Cân (斤) đo đếm âm thanh vào tai.",
        "example": "听音乐。(Tīng yīnyuè. - Nghe âm nhạc.)"
    },
    {
        "id": "hsk1_123",
        "hanzi": "说",
        "pinyin": "shuō",
        "sinoViet": "Thuyết",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 6,
        "meaning": "Nói",
        "memoryTip": "Bộ Ngôn (讠) dùng lời nói giải bày tâm tư.",
        "example": "说汉语。(Shuō Hànyǔ. - Nói tiếng Trung.)"
    },
    {
        "id": "hsk1_124",
        "hanzi": "读",
        "pinyin": "dú",
        "sinoViet": "Độc",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 6,
        "meaning": "Đọc (thành tiếng)",
        "memoryTip": "Dùng ngôn ngữ (讠) để đọc chữ Hán ra miệng.",
        "example": "请读课文。(Qǐng dú kèwén. - Xin mời đọc bài khóa.)"
    },
    {
        "id": "hsk1_125",
        "hanzi": "写",
        "pinyin": "xiě",
        "sinoViet": "Tả",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 6,
        "meaning": "Viết",
        "memoryTip": "Cầm bút viết nét chữ nắn nót.",
        "example": "写汉字。(Xiě Hànzì. - Viết chữ Hán.)"
    },
    {
        "id": "hsk1_126",
        "hanzi": "叫",
        "pinyin": "jiào",
        "sinoViet": "Khiếu",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 3,
        "meaning": "Tên là, gọi",
        "memoryTip": "Bộ Khẩu (口) cất tiếng gọi tên ai đó.",
        "example": "我叫李明。(Wǒ jiào Lǐ Míng. - Tôi tên là Lý Minh.)"
    },
    {
        "id": "hsk1_127",
        "hanzi": "来",
        "pinyin": "lái",
        "sinoViet": "Lai",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 9,
        "meaning": "Đến, tới",
        "memoryTip": "Cây lúa trĩu bông tới mùa thu hoạch mời gọi đến.",
        "example": "欢迎你来我家。(Huānyíng nǐ lái wǒ jiā. - Hoan nghênh bạn đến nhà tôi.)"
    },
    {
        "id": "hsk1_128",
        "hanzi": "回",
        "pinyin": "huí",
        "sinoViet": "Hồi",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 7,
        "meaning": "Về, quay về",
        "memoryTip": "Hình vòng tròn xoáy về lại điểm ban đầu.",
        "example": "回家。(Huí jiā. - Về nhà.)"
    },
    {
        "id": "hsk1_129",
        "hanzi": "去",
        "pinyin": "qù",
        "sinoViet": "Khứ",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 7,
        "meaning": "Đi (rời xa người nói)",
        "memoryTip": "Người bước chân đi rời khỏi nơi chốn cũ.",
        "example": "我去商店。(Wǒ qù shāngdiàn. - Tôi đi cửa hàng.)"
    },
    {
        "id": "hsk1_130",
        "hanzi": "吃",
        "pinyin": "chī",
        "sinoViet": "Cật",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 6,
        "meaning": "Ăn",
        "memoryTip": "Bộ Khẩu (口) mở miệng nhai thức ăn ngon lành.",
        "example": "吃苹果。(Chī píngguǒ. - Ăn quả táo.)"
    },
    {
        "id": "hsk1_131",
        "hanzi": "喝",
        "pinyin": "hē",
        "sinoViet": "Hát",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 8,
        "meaning": "Uống",
        "memoryTip": "Bộ Khẩu (口) thưởng thức từng ngụm nước ấm.",
        "example": "喝茶，喝水。(Hē chá, hē shuǐ. - Uống trà, uống nước.)"
    },
    {
        "id": "hsk1_132",
        "hanzi": "睡觉",
        "pinyin": "shuìjiào",
        "sinoViet": "Thụy giác",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 11,
        "meaning": "Ngủ, đi ngủ",
        "memoryTip": "Đôi mắt (目) khép lại sau một ngày dài mệt mỏi.",
        "example": "十点睡觉。(Shí diǎn shuìjiào. - 10 giờ đi ngủ.)"
    },
    {
        "id": "hsk1_133",
        "hanzi": "打电话",
        "pinyin": "dǎ diànhuà",
        "sinoViet": "Đả điện thoại",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 13,
        "meaning": "Gọi điện thoại",
        "memoryTip": "Tay cầm máy (打) trò chuyện qua đường dây điện thoại (电话).",
        "example": "给他打电话。(Gěi tā dǎ diànhuà. - Gọi điện thoại cho anh ấy.)"
    },
    {
        "id": "hsk1_134",
        "hanzi": "做",
        "pinyin": "zuò",
        "sinoViet": "Tác",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 6,
        "meaning": "Làm, nấu nướng, chế tạo",
        "memoryTip": "Con người (亻) bắt tay vào làm việc cổ vũ nhau.",
        "example": "做中国菜。(Zuò Zhōngguó cài. - Nấu món ăn Trung Quốc.)"
    },
    {
        "id": "hsk1_135",
        "hanzi": "买",
        "pinyin": "mǎi",
        "sinoViet": "Mãi",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 8,
        "meaning": "Mua (ngược với Bán - 卖)",
        "memoryTip": "Bỏ tiền ra mua hàng mang về nhà.",
        "example": "买苹果。(Mǎi píngguǒ. - Mua táo.)"
    },
    {
        "id": "hsk1_136",
        "hanzi": "开",
        "pinyin": "kāi",
        "sinoViet": "Khai",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 15,
        "meaning": "Mở, lái xe, bắt đầu",
        "memoryTip": "Hai cánh tay mở rộng cánh cổng đón gió.",
        "example": "开车。(Kāichē. - Lái xe ô tô.)"
    },
    {
        "id": "hsk1_137",
        "hanzi": "坐",
        "pinyin": "zuò",
        "sinoViet": "Tọa",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 10,
        "meaning": "Ngồi, đi (tàu xe máy bay)",
        "memoryTip": "Hai người (人人) ngồi trên bãi đất (土) trò chuyện.",
        "example": "请坐！(Qǐng zuò! - Mời ngồi!)"
    },
    {
        "id": "hsk1_138",
        "hanzi": "住",
        "pinyin": "zhù",
        "sinoViet": "Trú",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 9,
        "meaning": "Sống, ở, cư trú",
        "memoryTip": "Người (亻) làm chủ (主) căn nhà mình sinh sống.",
        "example": "你住在哪里？(Nǐ zhù zài nǎlǐ? - Bạn sống ở đâu?)"
    },
    {
        "id": "hsk1_139",
        "hanzi": "学习",
        "pinyin": "xuéxí",
        "sinoViet": "Học tập",
        "type": "Động từ",
        "category": "Động từ hành động",
        "lessonId": 13,
        "meaning": "Học tập, học hỏi",
        "memoryTip": "Tập vỗ cánh (羽) bay như chim non chăm chỉ luyện tập.",
        "example": "好好学习，天天向上。(Hǎohǎo xuéxí, tiāntiān xiàngshàng. - Học tập chăm chỉ, ngày ngày tiến bộ.)"
    },
    {
        "id": "hsk1_140",
        "hanzi": "工作",
        "pinyin": "gōngzuò",
        "sinoViet": "Công tác",
        "type": "Động từ / Danh từ",
        "category": "Động từ hành động",
        "lessonId": 9,
        "meaning": "Làm việc; công việc",
        "memoryTip": "Công (工 - bàn tay thợ) Tác (作 - làm ra sản phẩm).",
        "example": "你在哪儿工作？(Nǐ zài nǎr gōngzuò? - Bạn làm việc ở đâu?)"
    },
    {
        "id": "hsk1_141",
        "hanzi": "想",
        "pinyin": "xiǎng",
        "sinoViet": "Tưởng",
        "type": "Động từ năng nguyện",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 8,
        "meaning": "Muốn, nhớ, suy nghĩ",
        "memoryTip": "Cây cối (Mộc) đôi mắt (Mục) đặt trên trái tim (Tâm) thương nhớ da diết.",
        "example": "我想去北京。(Wǒ xiǎng qù Běijīng. - Tôi muốn đi Bắc Kinh.)"
    },
    {
        "id": "hsk1_142",
        "hanzi": "会",
        "pinyin": "huì",
        "sinoViet": "Hội",
        "type": "Động từ năng nguyện",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 6,
        "meaning": "Biết (qua học tập rèn luyện); sẽ",
        "memoryTip": "Con người tụ họp học hỏi kỹ năng mới.",
        "example": "我会说汉语。(Wǒ huì shuō Hànyǔ. - Tôi biết nói tiếng Trung.)"
    },
    {
        "id": "hsk1_143",
        "hanzi": "能",
        "pinyin": "néng",
        "sinoViet": "Năng",
        "type": "Động từ năng nguyện",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 10,
        "meaning": "Có thể, đủ điều kiện/năng lực",
        "memoryTip": "Con gấu khỏe khoắn có năng lực làm được việc lớn.",
        "example": "我能坐这儿吗？(Wǒ néng zuò zhèr ma? - Tôi có thể ngồi ở đây không?)"
    },
    {
        "id": "hsk1_144",
        "hanzi": "喜欢",
        "pinyin": "xǐhuan",
        "sinoViet": "Hỉ hoan",
        "type": "Động từ",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 8,
        "meaning": "Thích, yêu thích",
        "memoryTip": "Hỉ (喜 - niềm vui), Hoan (欢 - vui mừng).",
        "example": "我喜欢吃中国菜。(Wǒ xǐhuan chī Zhōngguó cài. - Tôi thích ăn món Trung Quốc.)"
    },
    {
        "id": "hsk1_145",
        "hanzi": "爱",
        "pinyin": "ài",
        "sinoViet": "Ái",
        "type": "Động từ",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 12,
        "meaning": "Yêu, yêu thương",
        "memoryTip": "Trái tim (Tâm) đặt ở giữa sự che chở và trao gửi tình yêu.",
        "example": "我爱我爸爸妈妈。(Wǒ ài wǒ bàba māma. - Tôi yêu bố mẹ tôi.)"
    },
    {
        "id": "hsk1_146",
        "hanzi": "认识",
        "pinyin": "rènshi",
        "sinoViet": "Nhận thức",
        "type": "Động từ",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 15,
        "meaning": "Quen biết, làm quen, nhận ra",
        "memoryTip": "Dùng ngôn ngữ (讠) để nhận biết thế giới.",
        "example": "很高兴认识你！(Hěn gāoxìng rènshi nǐ! - Rất vui được quen bạn!)"
    },
    {
        "id": "hsk1_147",
        "hanzi": "大",
        "pinyin": "dà",
        "sinoViet": "Đại",
        "type": "Tính từ",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 1,
        "meaning": "To, lớn, vĩ đại",
        "memoryTip": "Hình dáng con người dang rộng hai tay hai chân hết cỡ.",
        "example": "这个苹果很大。(Zhè ge píngguǒ hěn dà. - Quả táo này rất to.)"
    },
    {
        "id": "hsk1_148",
        "hanzi": "小",
        "pinyin": "xiǎo",
        "sinoViet": "Tiểu",
        "type": "Tính từ",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 10,
        "meaning": "Nhỏ, bé, ít tuổi",
        "memoryTip": "Chia nhỏ một vật thành 3 mảnh tí hon.",
        "example": "那只小狗很可爱。(Nà zhī xiǎo gǒu hěn kě'ài. - Chú cún con kia rất dễ thương.)"
    },
    {
        "id": "hsk1_149",
        "hanzi": "多",
        "pinyin": "duō",
        "sinoViet": "Đa",
        "type": "Tính từ",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 14,
        "meaning": "Nhiều",
        "memoryTip": "Hai vầng trăng (Tịch - 夕) chồng lên nhau là Nhiều.",
        "example": "学校里有很多学生。(Xuéxiào lǐ yǒu hěn duō xuésheng. - Trong trường có rất nhiều học sinh.)"
    },
    {
        "id": "hsk1_150",
        "hanzi": "少",
        "pinyin": "shǎo",
        "sinoViet": "Thiểu",
        "type": "Tính từ",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 14,
        "meaning": "Ít (ngược với Đa - 多)",
        "memoryTip": "Chữ Tiểu (小) bớt đi một nét phẩy chỉ số lượng ít ỏi.",
        "example": "太少了。(Tài shǎo le. - Ít quá rồi.)"
    },
    {
        "id": "hsk1_151",
        "hanzi": "冷",
        "pinyin": "lěng",
        "sinoViet": "Lãnh",
        "type": "Tính từ",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 12,
        "meaning": "Lạnh, rét buốt",
        "memoryTip": "Bộ Băng (冫) biểu thị băng tuyết giá lạnh.",
        "example": "今天不冷。(Jīntiān bù lěng. - Hôm nay không lạnh.)"
    },
    {
        "id": "hsk1_152",
        "hanzi": "热",
        "pinyin": "rè",
        "sinoViet": "Nhiệt",
        "type": "Tính từ",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 12,
        "meaning": "Nóng, nhiệt tình",
        "memoryTip": "Bốn chấm hỏa (灬) ở dưới đáy là ngọn lửa đỏ rực nóng bức.",
        "example": "喝热茶。(Hē rè chá. - Uống trà nóng.)"
    },
    {
        "id": "hsk1_153",
        "hanzi": "高兴",
        "pinyin": "gāoxìng",
        "sinoViet": "Cao hưng",
        "type": "Tính từ",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 15,
        "meaning": "Vui vẻ, phấn khởi, hân hạnh",
        "memoryTip": "Tâm trạng hứng khởi (Hưng) dâng lên thật cao (Cao).",
        "example": "大家都很高兴。(Dàjiā dōu hěn gāoxìng. - Mọi người đều rất vui vẻ.)"
    },
    {
        "id": "hsk1_154",
        "hanzi": "漂亮",
        "pinyin": "piàoliang",
        "sinoViet": "Phiêu lượng",
        "type": "Tính từ",
        "category": "Cảm xúc & Tính từ",
        "lessonId": 12,
        "meaning": "Xinh đẹp, đẹp đẽ",
        "memoryTip": "Làn nước (氵) trong veo chiếu sáng vẻ đẹp xinh tươi.",
        "example": "她很漂亮。(Tā hěn piàoliang. - Cô ấy rất xinh đẹp.)"
    }
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
        "category": "Chào hỏi & Xã giao",
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
        "category": "Mua sắm & Taobao",
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
        "category": "Ẩm thực & Quán xá",
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
        "category": "Nhà xưởng & Công sở",
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
        "category": "Du lịch & Khách sạn",
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
        "category": "Gia đình & Đời sống",
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
,
{
        "id": "sh7",
        "title": "Order Lẩu Haidilao & Thưởng Thức Ẩm Thực Tứ Xuyên",
        "category": "Ẩm thực & Quán xá",
        "duration": "11:40",
        "difficulty": "Trung cấp HSK 2",
        "youtubeId": "Lz15QYWoVAM",
        "description": "Học cách gọi nước lẩu cay Tứ Xuyên, nước lẩu cà chua, gọi thêm thịt bò lát và tự pha bát nước chấm chuẩn vị.",
        "sentences": [
            {
                "speaker": "Khách hàng",
                "hanzi": "服务员，我们要一个番茄锅和一个麻辣锅！",
                "pinyin": "Fúwùyuán, wǒmen yào yí gè fānqié guō hé yí gè málà guō!",
                "phoneticVi": "Phú u doán, ủa mân dao ý cưa phan chế cua hớ ý cưa má la cua!",
                "viet": "Phục vụ ơi, chúng tôi muốn một nồi lẩu cà chua và một nồi lẩu cay tê!",
                "tip": "Nhấn mạnh 'fānqié' (cà chua) và 'málà' (cay tê). 'fúwùyuán' lên giọng thân thiện.",
                "tokens": [
                    {
                        "hanzi": "服务员",
                        "pinyin": "fúwùyuán",
                        "viet": "Phục vụ"
                    },
                    {
                        "hanzi": "我们要",
                        "pinyin": "wǒmen yào",
                        "viet": "Chúng tôi muốn"
                    },
                    {
                        "hanzi": "一个番茄锅",
                        "pinyin": "yí gè fānqié guō",
                        "viet": "Một nồi lẩu cà chua"
                    },
                    {
                        "hanzi": "和",
                        "pinyin": "hé",
                        "viet": "Và"
                    },
                    {
                        "hanzi": "一个麻辣锅",
                        "pinyin": "yí gè málà guō",
                        "viet": "Một nồi lẩu cay tê"
                    }
                ]
            },
            {
                "speaker": "Phục vụ quán",
                "hanzi": "好的！请问麻辣锅要微辣、中辣还是特辣？",
                "pinyin": "Hǎo de! Qǐngwèn málà guō yào wēilà, zhōnglà háishì tèlà?",
                "phoneticVi": "Hảo tợ! Chỉnh uân má la cua dao uây la, chung la hái sư thưa la?",
                "viet": "Vâng ạ! Xin hỏi nồi lẩu cay quý khách muốn cay nhẹ, cay vừa hay siêu cay ạ?",
                "tip": "'wēilà' (cay nhẹ), 'zhōnglà' (cay vừa), 'tèlà' (rất cay) là 3 từ khóa vàng.",
                "tokens": [
                    {
                        "hanzi": "好的",
                        "pinyin": "hǎo de",
                        "viet": "Được rồi / Vâng ạ"
                    },
                    {
                        "hanzi": "请问",
                        "pinyin": "qǐngwèn",
                        "viet": "Xin hỏi"
                    },
                    {
                        "hanzi": "微辣",
                        "pinyin": "wēilà",
                        "viet": "Cay nhẹ"
                    },
                    {
                        "hanzi": "中辣",
                        "pinyin": "zhōnglà",
                        "viet": "Cay vừa"
                    },
                    {
                        "hanzi": "还是",
                        "pinyin": "háishì",
                        "viet": "Hay là"
                    },
                    {
                        "hanzi": "特辣",
                        "pinyin": "tèlà",
                        "viet": "Siêu cay"
                    }
                ]
            },
            {
                "speaker": "Khách hàng",
                "hanzi": "微辣就可以，再来两份肥牛和一份虾滑。",
                "pinyin": "Wēilà jiù kěyǐ, zài lái liǎng fèn féiniú hé yí fèn xiāhuá.",
                "phoneticVi": "Uây la chiêu khử dỉ, chai lái lẻng phân phấy niếu hớ ý phân xia hoá.",
                "viet": "Cay nhẹ là được rồi, cho thêm hai đĩa thịt bò ba chỉ và một phần chả tôm nữa nhé.",
                "tip": "'zài lái' là cấu trúc gọi thêm món cực kỳ phổ biến tại Trung Quốc.",
                "tokens": [
                    {
                        "hanzi": "微辣",
                        "pinyin": "wēilà",
                        "viet": "Cay nhẹ"
                    },
                    {
                        "hanzi": "就可以",
                        "pinyin": "jiù kěyǐ",
                        "viet": "Là được rồi"
                    },
                    {
                        "hanzi": "再来",
                        "pinyin": "zài lái",
                        "viet": "Cho thêm / Lấy thêm"
                    },
                    {
                        "hanzi": "两份肥牛",
                        "pinyin": "liǎng fèn féiniú",
                        "viet": "Hai đĩa thịt bò ba chỉ"
                    },
                    {
                        "hanzi": "虾滑",
                        "pinyin": "xiāhuá",
                        "viet": "Chả tôm / Paste tôm"
                    }
                ]
            },
            {
                "speaker": "Phục vụ quán",
                "hanzi": "好的，调料台在那边，您可以去自己调配小料。",
                "pinyin": "Hǎo de, tiáoliàotái zài nàbiān, nín kěyǐ qù zìjǐ tiáopèi xiǎoliào.",
                "phoneticVi": "Hảo tợ, thiéo liêu thái chai na piên, nín khử dỉ chuy chự dỉ thiéo phây xẻo liêu.",
                "viet": "Dạ vâng, quầy nước chấm ở đằng kia, quý khách có thể qua tự pha chế nước sốt ạ.",
                "tip": "'tiáoliàotái' là quầy gia vị nước chấm tự phục vụ đặc trưng quán lẩu.",
                "tokens": [
                    {
                        "hanzi": "好的",
                        "pinyin": "hǎo de",
                        "viet": "Vâng ạ"
                    },
                    {
                        "hanzi": "调料台",
                        "pinyin": "tiáoliàotái",
                        "viet": "Quầy nước chấm"
                    },
                    {
                        "hanzi": "在那边",
                        "pinyin": "zài nàbiān",
                        "viet": "Ở đằng kia"
                    },
                    {
                        "hanzi": "自己",
                        "pinyin": "zìjǐ",
                        "viet": "Tự mình"
                    },
                    {
                        "hanzi": "调配小料",
                        "pinyin": "tiáopèi xiǎoliào",
                        "viet": "Pha nước chấm"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh8",
        "title": "Thử Đồ & Hỏi Đổi Trả Hàng Săn Sale Taobao",
        "category": "Mua sắm & Taobao",
        "duration": "10:50",
        "difficulty": "Trung cấp HSK 2",
        "youtubeId": "ExgUJ2X6y2M",
        "description": "Học cách hỏi size quần áo, kiểm tra chất liệu vải, hỏi phí ship bưu điện và yêu cầu hoàn tiền đổi size.",
        "sentences": [
            {
                "speaker": "Khách hàng",
                "hanzi": "掌柜，这件衣服有大一号的吗？我想换一件。",
                "pinyin": "Zhǎngguì, zhè jiàn yīfu yǒu dà yí hào de ma? Wǒ xiǎng huàn yí jiàn.",
                "phoneticVi": "Chảng quây, chưa chiên y phu dẩu ta ý hao tơ ma? Ủa xẻng hoán ý chiên.",
                "viet": "Chủ shop ơi, chiếc áo này có cỡ lớn hơn một số không? Tôi muốn đổi một chiếc.",
                "tip": "'Zhǎngguì' (chưởng quầy) là cách xưng hô thân mật khi chat với chủ shop Taobao.",
                "tokens": [
                    {
                        "hanzi": "掌柜",
                        "pinyin": "zhǎngguì",
                        "viet": "Chủ tiệm / Chủ shop"
                    },
                    {
                        "hanzi": "这件衣服",
                        "pinyin": "zhè jiàn yīfu",
                        "viet": "Chiếc áo này"
                    },
                    {
                        "hanzi": "大一号",
                        "pinyin": "dà yí hào",
                        "viet": "Lớn hơn một cỡ (size)"
                    },
                    {
                        "hanzi": "想换",
                        "pinyin": "xiǎng huàn",
                        "viet": "Muốn đổi"
                    }
                ]
            },
            {
                "speaker": "Chủ shop Taobao",
                "hanzi": "亲，有的！支持七天无理由退换货，包邮哦！",
                "pinyin": "Qīn, yǒu de! Zhīchí qī tiān wú lǐyóu tuì huàn huò, bāoyóu ó!",
                "phoneticVi": "Chin, dẩu tợ! Chư chử chi thiên ú lỉ dố thuy hoán hua, bao dố o!",
                "viet": "Khách yêu ơi, còn hàng ạ! Shop hỗ trợ 7 ngày đổi trả không cần lý do, miễn phí ship nha!",
                "tip": "'Qīn' (khách yêu) và 'bāoyóu' (miễn phí vận chuyển) là từ ngữ kinh điển khi mua sắm online.",
                "tokens": [
                    {
                        "hanzi": "亲",
                        "pinyin": "qīn",
                        "viet": "Khách yêu / Bạn thân mến"
                    },
                    {
                        "hanzi": "有的",
                        "pinyin": "yǒu de",
                        "viet": "Có hàng ạ"
                    },
                    {
                        "hanzi": "七天无理由",
                        "pinyin": "qī tiān wú lǐyóu",
                        "viet": "7 ngày không cần lý do"
                    },
                    {
                        "hanzi": "退换货",
                        "pinyin": "tuì huàn huò",
                        "viet": "Đổi trả hàng"
                    },
                    {
                        "hanzi": "包邮",
                        "pinyin": "bāoyóu",
                        "viet": "Miễn phí vận chuyển (Freeship)"
                    }
                ]
            },
            {
                "speaker": "Khách hàng",
                "hanzi": "那我把这件寄回去，运费险会自动赔付吗？",
                "pinyin": "Nà wǒ bǎ zhè jiàn jì huíqù, yùnfèixiǎn huì zìdòng péifù ma?",
                "phoneticVi": "Na ủa bả chưa chiên chi huấy chuy, duân phây xẻn huây chự tung phấy phu ma?",
                "viet": "Vậy tôi gửi món này lại, bảo hiểm cước vận chuyển có tự động bồi thường không?",
                "tip": "'yùnfèixiǎn' (bảo hiểm phí ship) là tính năng mua sắm cực hữu ích trên Taobao.",
                "tokens": [
                    {
                        "hanzi": "那我",
                        "pinyin": "nà wǒ",
                        "viet": "Vậy thì tôi"
                    },
                    {
                        "hanzi": "寄回去",
                        "pinyin": "jì huíqù",
                        "viet": "Gửi trả lại"
                    },
                    {
                        "hanzi": "运费险",
                        "pinyin": "yùnfèixiǎn",
                        "viet": "Bảo hiểm phí vận chuyển"
                    },
                    {
                        "hanzi": "自动赔付",
                        "pinyin": "zìdòng péifù",
                        "viet": "Tự động bồi thường"
                    }
                ]
            },
            {
                "speaker": "Chủ shop Taobao",
                "hanzi": "是的亲，您点击退货退款，快递上门取件就可以啦！",
                "pinyin": "Shì de qīn, nín diǎnjī tuìhuò tuìkuǎn, kuàidì shàngmén qǔjiàn jiù kěyǐ la!",
                "phoneticVi": "Sư tợ chin, nín tẻn chi thuy hua thuy khoản, khoai ti sang mấn chủ chiên chiêu khử dỉ la!",
                "viet": "Đúng rồi bạn yêu ơi, bạn bấm 'Trả hàng hoàn tiền', shipper sẽ đến tận nhà lấy hàng là xong nha!",
                "tip": "'kuàidì shàngmén qǔjiàn' là shipper đến tận cửa lấy hàng trả.",
                "tokens": [
                    {
                        "hanzi": "是的",
                        "pinyin": "shì de",
                        "viet": "Đúng rồi ạ"
                    },
                    {
                        "hanzi": "点击",
                        "pinyin": "diǎnjī",
                        "viet": "Bấm vào / Nhấp vào"
                    },
                    {
                        "hanzi": "退货退款",
                        "pinyin": "tuìhuò tuìkuǎn",
                        "viet": "Trả hàng hoàn tiền"
                    },
                    {
                        "hanzi": "快递上门",
                        "pinyin": "kuàidì shàngmén",
                        "viet": "Shipper tới tận nhà"
                    },
                    {
                        "hanzi": "取件",
                        "pinyin": "qǔjiàn",
                        "viet": "Lấy bưu phẩm"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh9",
        "title": "Check-in Khách Sạn & Đổi Phòng Ban Công View Đẹp",
        "category": "Du lịch & Khách sạn",
        "duration": "09:35",
        "difficulty": "Trung cấp HSK 2",
        "youtubeId": "gqNSF_imQjk",
        "description": "Giao tiếp tại quầy lễ tân: xuất trình hộ chiếu, hỏi mật khẩu Wi-Fi, yêu cầu phòng tầng cao có cửa sổ nhìn ra phố.",
        "sentences": [
            {
                "speaker": "Khách du lịch",
                "hanzi": "您好，我在携程上预订了一间大床房。",
                "pinyin": "Nín hǎo, wǒ zài Xiéchéng shang yùdìng le yì jiān dàchuáng fáng.",
                "phoneticVi": "Nín hảo, ủa chai Sié chấng sang duy ting lơ ý chiên ta choáng pháng.",
                "viet": "Xin chào, tôi đã đặt trước một phòng giường lớn trên app Ctrip.",
                "tip": "'Xiéchéng' (Ctrip / Trip.com) là ứng dụng đặt vé và khách sạn số 1 Trung Quốc.",
                "tokens": [
                    {
                        "hanzi": "您好",
                        "pinyin": "nín hǎo",
                        "viet": "Xin chào ngài"
                    },
                    {
                        "hanzi": "在携程上",
                        "pinyin": "zài Xiéchéng shang",
                        "viet": "Trên app Ctrip"
                    },
                    {
                        "hanzi": "预订了",
                        "pinyin": "yùdìng le",
                        "viet": "Đã đặt trước"
                    },
                    {
                        "hanzi": "大床房",
                        "pinyin": "dàchuáng fáng",
                        "viet": "Phòng giường đôi lớn"
                    }
                ]
            },
            {
                "speaker": "Lễ tân khách sạn",
                "hanzi": "请出示一下您的护照，我帮您办理入住手续。",
                "pinyin": "Qǐng chūshì yíxià nín de hùzhào, wǒ bāng nín bànlǐ rùzhù shǒuxù.",
                "phoneticVi": "Chỉnh chu sư ý sia nín tơ hu chao, ủa bang nín pan lỉ ru chu sẩu xuy.",
                "viet": "Xin vui lòng xuất trình hộ chiếu, tôi sẽ giúp quý khách làm thủ tục nhận phòng.",
                "tip": "'chūshì' (xuất trình), 'hùzhào' (hộ chiếu), 'rùzhù' (nhận phòng khách sạn).",
                "tokens": [
                    {
                        "hanzi": "请出示",
                        "pinyin": "qǐng chūshì",
                        "viet": "Xin xuất trình"
                    },
                    {
                        "hanzi": "护照",
                        "pinyin": "hùzhào",
                        "viet": "Hộ chiếu"
                    },
                    {
                        "hanzi": "办理",
                        "pinyin": "bànlǐ",
                        "viet": "Làm / Xử lý"
                    },
                    {
                        "hanzi": "入住手续",
                        "pinyin": "rùzhù shǒuxù",
                        "viet": "Thủ tục nhận phòng"
                    }
                ]
            },
            {
                "speaker": "Khách du lịch",
                "hanzi": "可以给我安排一个高楼层、带阳台的房间吗？",
                "pinyin": "Kěyǐ gěi wǒ ānpái yí gè gāo lóucéng, dài yángtái de fángjiān ma?",
                "phoneticVi": "Khử dỉ cấy ủa an phái ý cưa cao lốu chấng, tai dáng thái tơ pháng chiên ma?",
                "viet": "Có thể sắp xếp cho tôi một phòng tầng cao, có ban công được không ạ?",
                "tip": "'gāo lóucéng' (tầng cao thoáng đãng), 'yángtái' (ban công ngắm cảnh).",
                "tokens": [
                    {
                        "hanzi": "可以",
                        "pinyin": "kěyǐ",
                        "viet": "Có thể"
                    },
                    {
                        "hanzi": "安排",
                        "pinyin": "ānpái",
                        "viet": "Sắp xếp"
                    },
                    {
                        "hanzi": "高楼层",
                        "pinyin": "gāo lóucéng",
                        "viet": "Tầng cao"
                    },
                    {
                        "hanzi": "带阳台",
                        "pinyin": "dài yángtái",
                        "viet": "Có ban công"
                    },
                    {
                        "hanzi": "房间",
                        "pinyin": "fángjiān",
                        "viet": "Căn phòng"
                    }
                ]
            },
            {
                "speaker": "Lễ tân khách sạn",
                "hanzi": "没问题！这是您的房卡808，WiFi密码是房间号。",
                "pinyin": "Méi wèntí! Zhè shì nín de fángkǎ bā líng bā, WiFi mìmǎ shì fángjiān hào.",
                "phoneticVi": "Mấy uân thí! Chưa sư nín tơ pháng khả pa líng pa, WiFi mi mả sư pháng chiên hao.",
                "viet": "Không vấn đề gì ạ! Đây là thẻ phòng 808 của quý khách, mật khẩu Wi-Fi là số phòng nhé ạ.",
                "tip": "Đọc từng con số phòng 'bā líng bā'. 'fángkǎ' là thẻ từ mở phòng.",
                "tokens": [
                    {
                        "hanzi": "没问题",
                        "pinyin": "méi wèntí",
                        "viet": "Không vấn đề gì"
                    },
                    {
                        "hanzi": "房卡",
                        "pinyin": "fángkǎ",
                        "viet": "Thẻ phòng"
                    },
                    {
                        "hanzi": "密码",
                        "pinyin": "mìmǎ",
                        "viet": "Mật khẩu"
                    },
                    {
                        "hanzi": "房间号",
                        "pinyin": "fángjiān hào",
                        "viet": "Số phòng"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh10",
        "title": "Xin Wechat & Rủ Bạn Đi Xem Phim Cuối Tuần",
        "category": "Hẹn hò & Đời sống",
        "duration": "08:20",
        "difficulty": "Cơ bản HSK 1",
        "youtubeId": "EpSs4cdSML0",
        "description": "Cách bắt chuyện làm quen tinh tế, hỏi tài khoản Wechat (微信) và hẹn lịch đi uống cà phê hoặc xem rạp chiếu phim.",
        "sentences": [
            {
                "speaker": "Bạn nam",
                "hanzi": "今天和你聊天很开心，我们加个微信吧？",
                "pinyin": "Jīntiān hé nǐ liáotiān hěn kāixīn, wǒmen jiā gè Wēixìn ba?",
                "phoneticVi": "Chin thiên hớ nỉ liéo thiên hẩn khai xin, ủa mân chia cưa Uây xin pa?",
                "viet": "Hôm nay nói chuyện với bạn rất vui, chúng mình kết bạn WeChat nhé?",
                "tip": "'jiā gè Wēixìn' là câu cửa miệng số 1 khi muốn giữ liên lạc với người Trung Quốc.",
                "tokens": [
                    {
                        "hanzi": "今天",
                        "pinyin": "jīntiān",
                        "viet": "Hôm nay"
                    },
                    {
                        "hanzi": "聊天",
                        "pinyin": "liáotiān",
                        "viet": "Nói chuyện / Tán gẫu"
                    },
                    {
                        "hanzi": "开心",
                        "pinyin": "kāixīn",
                        "viet": "Vui vẻ"
                    },
                    {
                        "hanzi": "加微信",
                        "pinyin": "jiā Wēixìn",
                        "viet": "Kết bạn WeChat"
                    }
                ]
            },
            {
                "speaker": "Bạn nữ",
                "hanzi": "好啊，我扫你还是你扫我？",
                "pinyin": "Hǎo a, wǒ sǎo nǐ háishì nǐ sǎo wǒ?",
                "phoneticVi": "Hảo a, ủa sảo nỉ hái sư nỉ sảo ủa?",
                "viet": "Được chứ, để tôi quét mã bạn hay bạn quét mã tôi nào?",
                "tip": "'wǒ sǎo nǐ' nghĩa là tôi quét mã QR của bạn bằng điện thoại.",
                "tokens": [
                    {
                        "hanzi": "好啊",
                        "pinyin": "hǎo a",
                        "viet": "Được chứ / Ok nha"
                    },
                    {
                        "hanzi": "我扫你",
                        "pinyin": "wǒ sǎo nǐ",
                        "viet": "Tôi quét bạn"
                    },
                    {
                        "hanzi": "还是",
                        "pinyin": "háishì",
                        "viet": "Hay là"
                    },
                    {
                        "hanzi": "你扫我",
                        "pinyin": "nǐ sǎo wǒ",
                        "viet": "Bạn quét tôi"
                    }
                ]
            },
            {
                "speaker": "Bạn nam",
                "hanzi": "我扫你吧！周末你有空吗？请你去看电影！",
                "pinyin": "Wǒ sǎo nǐ ba! Zhōumò nǐ yǒu kòng ma? Qǐng nǐ qù kàn diànyǐng!",
                "phoneticVi": "Ủa sảo nỉ pa! Châu mua nỉ dẩu khung ma? Chỉnh nỉ chuy khan tiên dỉnh!",
                "viet": "Để tôi quét bạn nhé! Cuối tuần bạn có rảnh không? Mời bạn đi xem phim!",
                "tip": "'yǒu kòng' nghĩa là có thời gian rảnh rỗi. 'qǐng' mang nghĩa bao / đãi.",
                "tokens": [
                    {
                        "hanzi": "周末",
                        "pinyin": "zhōumò",
                        "viet": "Cuối tuần"
                    },
                    {
                        "hanzi": "有空吗",
                        "pinyin": "yǒu kòng ma",
                        "viet": "Có rảnh không"
                    },
                    {
                        "hanzi": "请你",
                        "pinyin": "qǐng nǐ",
                        "viet": "Mời bạn / Bao bạn"
                    },
                    {
                        "hanzi": "看电影",
                        "pinyin": "kàn diànyǐng",
                        "viet": "Xem phim"
                    }
                ]
            },
            {
                "speaker": "Bạn nữ",
                "hanzi": "周六下午可以，那我们微信上联系！",
                "pinyin": "Zhōuliù xiàwǔ kěyǐ, nà wǒmen Wēixìn shang liánxì!",
                "phoneticVi": "Châu liêu sia ủ khử dỉ, na ủa mân Uây xin sang liến si!",
                "viet": "Chiều thứ Bảy được đấy, vậy chúng mình nhắn tin trên WeChat nhé!",
                "tip": "'liánxì' nghĩa là liên lạc, giữ liên lạc thường xuyên.",
                "tokens": [
                    {
                        "hanzi": "周六下午",
                        "pinyin": "zhōuliù xiàwǔ",
                        "viet": "Chiều thứ Bảy"
                    },
                    {
                        "hanzi": "可以",
                        "pinyin": "kěyǐ",
                        "viet": "Được / Đồng ý"
                    },
                    {
                        "hanzi": "微信上",
                        "pinyin": "Wēixìn shang",
                        "viet": "Trên WeChat"
                    },
                    {
                        "hanzi": "联系",
                        "pinyin": "liánxì",
                        "viet": "Liên hệ / Nhắn tin"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh11",
        "title": "Phỏng Vấn Xin Việc & Thảo Luận Mức Lương Thưởng",
        "category": "Nhà xưởng & Công sở",
        "duration": "14:15",
        "difficulty": "Nâng cao HSK 3",
        "youtubeId": "ve0wlvFIWUM",
        "description": "Giới thiệu kinh nghiệm làm việc, thế mạnh bản thân và trao đổi về thời gian thử việc cùng đãi ngộ công ty.",
        "sentences": [
            {
                "speaker": "Nhà tuyển dụng",
                "hanzi": "请简单介绍一下你之前的工作经验。",
                "pinyin": "Qǐng jiǎndān jièshào yíxià nǐ zhīqián de gōngzuò jīngyàn.",
                "phoneticVi": "Chỉnh chẻn tan chia sao ý sia nỉ chư chiến tơ cung chua chinh yên.",
                "viet": "Xin vui lòng giới thiệu vắn tắt về kinh nghiệm làm việc trước đây của bạn.",
                "tip": "'jièshào' (giới thiệu), 'gōngzuò jīngyàn' (kinh nghiệm làm việc công sở).",
                "tokens": [
                    {
                        "hanzi": "请简单",
                        "pinyin": "qǐng jiǎndān",
                        "viet": "Xin vắn tắt / Đơn giản"
                    },
                    {
                        "hanzi": "介绍一下",
                        "pinyin": "jièshào yíxià",
                        "viet": "Giới thiệu một chút"
                    },
                    {
                        "hanzi": "之前",
                        "pinyin": "zhīqián",
                        "viet": "Trước đây"
                    },
                    {
                        "hanzi": "工作经验",
                        "pinyin": "gōngzuò jīngyàn",
                        "viet": "Kinh nghiệm làm việc"
                    }
                ]
            },
            {
                "speaker": "Ứng viên",
                "hanzi": "我有三年的外贸跟单经验，中文听说读写很流利。",
                "pinyin": "Wǒ yǒu sān nián de wàimào gēndān jīngyàn, zhōngwén tīng shuō dú xiě hěn liúlì.",
                "phoneticVi": "Ủa dẩu san niên tơ oai mao cân tan chinh yên, chung uân thing sua tú sẻ hẩn liếu ly.",
                "viet": "Tôi có 3 năm kinh nghiệm làm theo dõi đơn hàng xuất nhập khẩu, nghe nói đọc viết tiếng Trung rất lưu loát.",
                "tip": "'wàimào gēndān' (quản lý đơn hàng ngoại thương), 'liúlì' (lưu loát, trôi chảy).",
                "tokens": [
                    {
                        "hanzi": "三年",
                        "pinyin": "sān nián",
                        "viet": "3 năm"
                    },
                    {
                        "hanzi": "外贸跟单",
                        "pinyin": "wàimào gēndān",
                        "viet": "Theo dõi đơn ngoại thương"
                    },
                    {
                        "hanzi": "中文",
                        "pinyin": "zhōngwén",
                        "viet": "Tiếng Trung"
                    },
                    {
                        "hanzi": "听说读写",
                        "pinyin": "tīng shuō dú xiě",
                        "viet": "Nghe nói đọc viết"
                    },
                    {
                        "hanzi": "很流利",
                        "pinyin": "hěn liúlì",
                        "viet": "Rất lưu loát"
                    }
                ]
            },
            {
                "speaker": "Nhà tuyển dụng",
                "hanzi": "你对薪资待遇有什么期望？",
                "pinyin": "Nǐ duì xīnzī dàiyù yǒu shénme qīwàng?",
                "phoneticVi": "Nỉ tuây xin chư tai dỳ dẩu sấn mơ chi oang?",
                "viet": "Bạn có kỳ vọng gì về mức lương và chế độ đãi ngộ?",
                "tip": "'xīnzī dàiyù' là thuật ngữ chỉ mức lương bổng và phúc lợi lao động.",
                "tokens": [
                    {
                        "hanzi": "对",
                        "pinyin": "duì",
                        "viet": "Đối với"
                    },
                    {
                        "hanzi": "薪资待遇",
                        "pinyin": "xīnzī dàiyù",
                        "viet": "Lương và đãi ngộ"
                    },
                    {
                        "hanzi": "什么",
                        "pinyin": "shénme",
                        "viet": "Gì / Cái gì"
                    },
                    {
                        "hanzi": "期望",
                        "pinyin": "qīwàng",
                        "viet": "Kỳ vọng / Mong muốn"
                    }
                ]
            },
            {
                "speaker": "Ứng viên",
                "hanzi": "我希望税后月薪能达到两千万越南盾，有五险一金。",
                "pinyin": "Wǒ xīwàng shuìhòu yuèxīn néng dádào liǎng qiān wàn Yuènándùn, yǒu wǔxiǎnyìjīn.",
                "phoneticVi": "Ủa si oang suây hốu duê xin nấng tá tao lẻng chiên oan Duê nan tuân, dẩu ủ sẻn ý chin.",
                "viet": "Tôi hy vọng lương thực nhận sau thuế đạt 20 triệu VNĐ, và có đầy đủ bảo hiểm xã hội.",
                "tip": "'shuìhòu yuèxīn' là lương net hàng tháng sau thuế.",
                "tokens": [
                    {
                        "hanzi": "希望",
                        "pinyin": "xīwàng",
                        "viet": "Hy vọng"
                    },
                    {
                        "hanzi": "税后月薪",
                        "pinyin": "shuìhòu yuèxīn",
                        "viet": "Lương sau thuế (lương net)"
                    },
                    {
                        "hanzi": "两千万",
                        "pinyin": "liǎng qiān wàn",
                        "viet": "20 triệu"
                    },
                    {
                        "hanzi": "五险一金",
                        "pinyin": "wǔxiǎnyìjīn",
                        "viet": "Bảo hiểm & Phúc lợi đầy đủ"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh12",
        "title": "Báo Cáo Máy Móc Trục Trặc Với Quản Đốc Phân Xưởng",
        "category": "Nhà xưởng & Công sở",
        "duration": "13:00",
        "difficulty": "Trung cấp HSK 2",
        "youtubeId": "r4xJgTbGp80",
        "description": "Xử lý sự cố máy ép dừng đột ngột, báo tổ trưởng kỹ thuật bảo trì và xin linh kiện thay thế.",
        "sentences": [
            {
                "speaker": "Công nhân",
                "hanzi": "主管，三号流水线的机器突然停了！",
                "pinyin": "Zhǔguǎn, sān hào liúshuǐxiàn de jīqì tūrán tíng le!",
                "phoneticVi": "Chủ quản, san hao liếu suẩy xiên tơ chi chi thū rán thính lơ!",
                "viet": "Quản đốc ơi, máy móc ở dây chuyền số 3 đột nhiên bị dừng hoạt động rồi!",
                "tip": "'liúshuǐxiàn' (dây chuyền sản xuất), 'tūrán tíng' (đột ngột dừng lại).",
                "tokens": [
                    {
                        "hanzi": "主管",
                        "pinyin": "zhǔguǎn",
                        "viet": "Quản đốc / Tổ trưởng"
                    },
                    {
                        "hanzi": "三号",
                        "pinyin": "sān hào",
                        "viet": "Số 3"
                    },
                    {
                        "hanzi": "流水线",
                        "pinyin": "liúshuǐxiàn",
                        "viet": "Dây chuyền sản xuất"
                    },
                    {
                        "hanzi": "机器",
                        "pinyin": "jīqì",
                        "viet": "Máy móc"
                    },
                    {
                        "hanzi": "突然停了",
                        "pinyin": "tūrán tíng le",
                        "viet": "Đột nhiên dừng lại"
                    }
                ]
            },
            {
                "speaker": "Quản đốc xưởng",
                "hanzi": "先切断电源，注意安全！是什么原因引起的？",
                "pinyin": "Xiān qiēduàn diànyuán, zhùyì ānquán! Shì shénme yuányīn yǐnqǐ de?",
                "phoneticVi": "Siên chiê toan tiện doán, chu ý an choán! Sư sấn mơ doán in dỉn chỉ tợ?",
                "viet": "Trước tiên ngắt nguồn điện ngay, chú ý an toàn! Là do nguyên nhân gì gây ra?",
                "tip": "'qiēduàn diànyuán' (ngắt cầu dao điện), 'zhùyì ānquán' (an toàn là trên hết).",
                "tokens": [
                    {
                        "hanzi": "先",
                        "pinyin": "xiān",
                        "viet": "Trước tiên"
                    },
                    {
                        "hanzi": "切断电源",
                        "pinyin": "qiēduàn diànyuán",
                        "viet": "Ngắt nguồn điện"
                    },
                    {
                        "hanzi": "注意安全",
                        "pinyin": "zhùyì ānquán",
                        "viet": "Chú ý an toàn"
                    },
                    {
                        "hanzi": "什么原因",
                        "pinyin": "shénme yuányīn",
                        "viet": "Nguyên nhân gì"
                    }
                ]
            },
            {
                "speaker": "Công nhân",
                "hanzi": "好像是电机过热卡住了，需要机修师傅过来检修。",
                "pinyin": "Hǎoxiàng shì diànjī guòrè kǎzhù le, xūyào jīxiū shīfu guòlai jiǎnxiū.",
                "phoneticVi": "Hảo xêang sư tiện chi cua rơ khả chu lơ, xuy dao chi siêu sư phu cua lái chẻn siêu.",
                "viet": "Hình như mô tơ bị quá nhiệt kẹt cứng rồi, cần thợ cơ khí qua kiểm tra sửa chữa ạ.",
                "tip": "'jīxiū shīfu' là bác thợ sửa máy móc / cơ khí trong nhà xưởng.",
                "tokens": [
                    {
                        "hanzi": "好像是",
                        "pinyin": "hǎoxiàng shì",
                        "viet": "Hình như là"
                    },
                    {
                        "hanzi": "电机过热",
                        "pinyin": "diànjī guòrè",
                        "viet": "Mô tơ quá nhiệt"
                    },
                    {
                        "hanzi": "卡住了",
                        "pinyin": "kǎzhù le",
                        "viet": "Bị kẹt rồi"
                    },
                    {
                        "hanzi": "机修师傅",
                        "pinyin": "jīxiū shīfu",
                        "viet": "Thợ sửa máy"
                    },
                    {
                        "hanzi": "检修",
                        "pinyin": "jiǎnxiū",
                        "viet": "Kiểm tra sửa chữa"
                    }
                ]
            },
            {
                "speaker": "Quản đốc xưởng",
                "hanzi": "好的，我马上通知工程部，大家先整理物料！",
                "pinyin": "Hǎo de, wǒ mǎshàng tōngzhī gōngchéngbù, dàjiā xiān zhěnglǐ wùliào!",
                "phoneticVi": "Hảo tợ, ủa mả sang thung chư cung chấng pu, ta chia siên chửng lỉ u liêu!",
                "viet": "Được rồi, tôi thông báo bộ phận kỹ thuật ngay, mọi người tranh thủ sắp xếp gọn vật liệu trước!",
                "tip": "'mǎshàng' (ngay lập tức), 'zhěnglǐ wùliào' (sắp xếp nguyên vật liệu ngăn nắp).",
                "tokens": [
                    {
                        "hanzi": "马上",
                        "pinyin": "mǎshàng",
                        "viet": "Ngay lập tức"
                    },
                    {
                        "hanzi": "通知",
                        "pinyin": "tōngzhī",
                        "viet": "Thông báo"
                    },
                    {
                        "hanzi": "工程部",
                        "pinyin": "gōngchéngbù",
                        "viet": "Bộ phận kỹ thuật"
                    },
                    {
                        "hanzi": "整理物料",
                        "pinyin": "zhěnglǐ wùliào",
                        "viet": "Sắp xếp nguyên vật liệu"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh13",
        "title": "Đi Khám Sức Khỏe & Mua Thuốc Tại Hiệu Thuốc Bản Xứ",
        "category": "Y tế & Tiện ích",
        "duration": "07:50",
        "difficulty": "Trung cấp HSK 2",
        "youtubeId": "Lz15QYWoVAM",
        "description": "Mô tả triệu chứng đau đầu, viêm họng, sốt nhẹ và hỏi cách uống thuốc ngày mấy lần sau bữa ăn.",
        "sentences": [
            {
                "speaker": "Người bệnh",
                "hanzi": "医生，我从昨天开始头疼、嗓子疼，还有点发烧。",
                "pinyin": "Yīshēng, wǒ cóng zuótiān kāishǐ tóuténg, sǎngzi téng, hái yǒudiǎn fāshāo.",
                "phoneticVi": "Y sâng, ủa chúng chúa thiên khai sỉ thốu thấng, sảng chự thấng, hái dẩu tẻn pha sao.",
                "viet": "Bác sĩ ơi, từ hôm qua đến giờ tôi bị đau đầu, rát họng và còn hơi sốt nhẹ nữa.",
                "tip": "'tóuténg' (đau đầu), 'sǎngzi téng' (đau họng), 'fāshāo' (phát sốt).",
                "tokens": [
                    {
                        "hanzi": "医生",
                        "pinyin": "yīshēng",
                        "viet": "Bác sĩ"
                    },
                    {
                        "hanzi": "头疼",
                        "pinyin": "tóuténg",
                        "viet": "Đau đầu"
                    },
                    {
                        "hanzi": "嗓子疼",
                        "pinyin": "sǎngzi téng",
                        "viet": "Đau rát họng"
                    },
                    {
                        "hanzi": "有点",
                        "pinyin": "yǒudiǎn",
                        "viet": "Hơi / Một chút"
                    },
                    {
                        "hanzi": "发烧",
                        "pinyin": "fāshāo",
                        "viet": "Bị sốt"
                    }
                ]
            },
            {
                "speaker": "Bác sĩ",
                "hanzi": "我先量一下体温。三十八度二，是轻度风热感冒。",
                "pinyin": "Wǒ xiān liáng yíxià tǐwēn. Sānshíbā dù èr, shì qīngdù fēngrè gǎnmào.",
                "phoneticVi": "Ủa siên liáng ý sia thỉ uân. San sư pa tu ơ, sư ching tu phâng rơ cảm mao.",
                "viet": "Để tôi đo nhiệt độ trước nhé. 38 độ 2, là bị cảm mạo phong nhiệt mức độ nhẹ.",
                "tip": "'liáng tǐwēn' (đo nhiệt độ cơ thể), 'gǎnmào' (cảm cúm thông thường).",
                "tokens": [
                    {
                        "hanzi": "量一下",
                        "pinyin": "liáng yíxià",
                        "viet": "Đo một chút"
                    },
                    {
                        "hanzi": "体温",
                        "pinyin": "tǐwēn",
                        "viet": "Thân nhiệt"
                    },
                    {
                        "hanzi": "三十八度二",
                        "pinyin": "sānshíbā dù èr",
                        "viet": "38.2 độ"
                    },
                    {
                        "hanzi": "感冒",
                        "pinyin": "gǎnmào",
                        "viet": "Cảm cúm"
                    }
                ]
            },
            {
                "speaker": "Người bệnh",
                "hanzi": "请问这两种药怎么吃？饭前还是饭后？",
                "pinyin": "Qǐngwèn zhè liǎng zhǒng yào zěnme chī? Fànqián háishì fànhòu?",
                "phoneticVi": "Chỉnh uân chưa lẻng chủng dao chẩn mơ chư? Phan chiến hái sư phan hốu?",
                "viet": "Xin hỏi hai loại thuốc này uống như thế nào ạ? Uống trước bữa ăn hay sau bữa ăn?",
                "tip": "'zěnme chī' (uống thuốc như thế nào), 'fànhòu' (sau khi ăn).",
                "tokens": [
                    {
                        "hanzi": "请问",
                        "pinyin": "qǐngwèn",
                        "viet": "Xin hỏi"
                    },
                    {
                        "hanzi": "这两种药",
                        "pinyin": "zhè liǎng zhǒng yào",
                        "viet": "Hai loại thuốc này"
                    },
                    {
                        "hanzi": "怎么吃",
                        "pinyin": "zěnme chī",
                        "viet": "Uống / Dùng thế nào"
                    },
                    {
                        "hanzi": "饭前",
                        "pinyin": "fànqián",
                        "viet": "Trước bữa ăn"
                    },
                    {
                        "hanzi": "饭后",
                        "pinyin": "fànhòu",
                        "viet": "Sau bữa ăn"
                    }
                ]
            },
            {
                "speaker": "Bác sĩ",
                "hanzi": "一日三次，一次两片，记得饭后半小时吃，多喝温水！",
                "pinyin": "Yí rì sān cì, yí cì liǎng piàn, jìde fànhòu bàn xiǎoshí chī, duō hē wēnshuǐ!",
                "phoneticVi": "Ý rự san chư, ý chư lẻng phiến, chi tợ phan hốu pan xẻo sư chư, tua hơ uân suẩy!",
                "viet": "Ngày 3 lần, mỗi lần 2 viên, nhớ uống sau bữa ăn nửa tiếng và uống nhiều nước ấm nhé!",
                "tip": "'yí rì sān cì' (ngày 3 lần), 'duō hē wēnshuǐ' (uống nhiều nước ấm) là lời khuyên phổ biến nhất.",
                "tokens": [
                    {
                        "hanzi": "一日三次",
                        "pinyin": "yí rì sān cì",
                        "viet": "Một ngày 3 lần"
                    },
                    {
                        "hanzi": "一次两片",
                        "pinyin": "yí cì liǎng piàn",
                        "viet": "Mỗi lần 2 viên"
                    },
                    {
                        "hanzi": "饭后半小时",
                        "pinyin": "fànhòu bàn xiǎoshí",
                        "viet": "Sau ăn nửa tiếng"
                    },
                    {
                        "hanzi": "多喝温水",
                        "pinyin": "duō hē wēnshuǐ",
                        "viet": "Uống nhiều nước ấm"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh14",
        "title": "Khẩu Ngữ Douyin & Tiếng Lóng Giới Trẻ Cực Hot (YYDS, Quá Đỉnh)",
        "category": "Khẩu ngữ & Douyin",
        "duration": "06:40",
        "difficulty": "Thực chiến Douyin",
        "youtubeId": "ExgUJ2X6y2M",
        "description": "Bắt trend tiếng lóng trên mạng xã hội Trung Quốc: YYDS (vĩnh viễn thần), 种草 (mê mẩn), 打卡 (check-in sống ảo).",
        "sentences": [
            {
                "speaker": "Tiktoker A",
                "hanzi": "这家奶茶店真的是YYDS，味道绝了！",
                "pinyin": "Zhè jiā nǎichádiàn zhēn de shì YYDS, wèidao jué le!",
                "phoneticVi": "Chưa chia nải chá tiện chân tợ sư YYDS, uây tao chuế lơ!",
                "viet": "Quán trà sữa này đúng là đỉnh nóc kịch trần (YYDS), hương vị đỉnh chóp luôn!",
                "tip": "'YYDS' (yǒng yuǎn de shén - mãi mãi là thần tượng/đỉnh chóp), 'jué le' (quá tuyệt vời).",
                "tokens": [
                    {
                        "hanzi": "这家奶茶店",
                        "pinyin": "zhè jiā nǎichádiàn",
                        "viet": "Quán trà sữa này"
                    },
                    {
                        "hanzi": "真的是",
                        "pinyin": "zhēn de shì",
                        "viet": "Đúng thật là"
                    },
                    {
                        "hanzi": "YYDS",
                        "pinyin": "yyds",
                        "viet": "Đỉnh chóp / Vĩnh viễn là thần"
                    },
                    {
                        "hanzi": "味道",
                        "pinyin": "wèidao",
                        "viet": "Hương vị"
                    },
                    {
                        "hanzi": "绝了",
                        "pinyin": "jué le",
                        "viet": "Quá đỉnh / Hết nước chấm"
                    }
                ]
            },
            {
                "speaker": "Tiktoker B",
                "hanzi": "瞬间被你种草了！赶紧发个定位，我也要去打卡！",
                "pinyin": "Shùnjiān bèi nǐ zhòngcǎo le! Gǎnjǐn fā gè dìngwèi, wǒ yě yào qù dǎkǎ!",
                "phoneticVi": "Suân chiên pây nỉ chung thảo lơ! Cản chỉn pha cưa ting uây, ủa dẻ dao chuy tả khả!",
                "viet": "Tự dưng bị bạn làm cho mê mẩn luôn rồi! Mau gửi định vị đi, tôi cũng muốn đi check-in sống ảo!",
                "tip": "'zhòngcǎo' (gieo cỏ = làm người khác mê mẩn muốn mua), 'dǎkǎ' (check-in địa điểm hot).",
                "tokens": [
                    {
                        "hanzi": "瞬间",
                        "pinyin": "shùnjiān",
                        "viet": "Ngay tức thì / Lập tức"
                    },
                    {
                        "hanzi": "种草了",
                        "pinyin": "zhòngcǎo le",
                        "viet": "Mê mẩn muốn thử / Bị gieo mầm"
                    },
                    {
                        "hanzi": "发定位",
                        "pinyin": "fā dìngwèi",
                        "viet": "Gửi vị trí / Định vị GPS"
                    },
                    {
                        "hanzi": "去打卡",
                        "pinyin": "qù dǎkǎ",
                        "viet": "Đi check-in sống ảo"
                    }
                ]
            },
            {
                "speaker": "Tiktoker A",
                "hanzi": "今天周末人巨多，排队要半小时，做好心理准备哦！",
                "pinyin": "Jīntiān zhōumò rén jù duō, páiduì yào bàn xiǎoshí, zuòhǎo xīnlǐ zhǔnbèi ó!",
                "phoneticVi": "Chin thiên châu mua rấn chuy tua, phái tuây dao pan xẻo sư, chua hảo xin lỉ chuẩn pây o!",
                "viet": "Hôm nay cuối tuần đông người dã man, xếp hàng phải mất nửa tiếng, chuẩn bị sẵn tâm lý nha!",
                "tip": "'jù duō' (cực kỳ đông, tiếng lóng giới trẻ), 'páiduì' (xếp hàng).",
                "tokens": [
                    {
                        "hanzi": "今天周末",
                        "pinyin": "jīntiān zhōumò",
                        "viet": "Hôm nay cuối tuần"
                    },
                    {
                        "hanzi": "人巨多",
                        "pinyin": "rén jù duō",
                        "viet": "Người đông dã man"
                    },
                    {
                        "hanzi": "排队",
                        "pinyin": "páiduì",
                        "viet": "Xếp hàng"
                    },
                    {
                        "hanzi": "心理准备",
                        "pinyin": "xīnlǐ zhǔnbèi",
                        "viet": "Chuẩn bị tâm lý"
                    }
                ]
            },
            {
                "speaker": "Tiktoker B",
                "hanzi": "为了好吃的，排队也值了！冲鸭！",
                "pinyin": "Wèile hǎochī de, páiduì yě zhí le! Chōng yā!",
                "phoneticVi": "Uây lơ hảo chư tợ, phái tuây dẻ chử lơ! Chung ya!",
                "viet": "Vì đồ ăn ngon thì xếp hàng cũng bõ công! Triển thôi nào / Cố lên!",
                "tip": "'Chōng yā' là khẩu ngữ siêu dễ thương biến âm của 'chōng a' (xông lên / quất thôi).",
                "tokens": [
                    {
                        "hanzi": "为了",
                        "pinyin": "wèile",
                        "viet": "Vì / Để"
                    },
                    {
                        "hanzi": "好吃的",
                        "pinyin": "hǎochī de",
                        "viet": "Món ăn ngon"
                    },
                    {
                        "hanzi": "值了",
                        "pinyin": "zhí le",
                        "viet": "Đáng giá / Bõ công"
                    },
                    {
                        "hanzi": "冲鸭",
                        "pinyin": "chōng yā",
                        "viet": "Tiến lên nào / Quất luôn"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh15",
        "title": "Luyện Hát Theo Điệp Khúc Bài Hát Kinh Điển 'Đồng Thoại' (童话)",
        "category": "Bài hát tiếng Trung",
        "duration": "05:30",
        "difficulty": "Trung cấp HSK 2",
        "youtubeId": "EpSs4cdSML0",
        "description": "Luyện ngữ điệu uyển chuyển và cảm xúc qua từng câu hát tình cảm lãng mạn mà ai học tiếng Trung cũng yêu thích.",
        "sentences": [
            {
                "speaker": "Lời bài hát",
                "hanzi": "你哭着对我说，童话里都是骗人的。",
                "pinyin": "Nǐ kū zhe duì wǒ shuō, tónghuà lǐ dōu shì piànrén de.",
                "phoneticVi": "Nỉ khu chơ tuây ủa sua, thúng hoa lỉ tâu sư phiến rấn tợ.",
                "viet": "Em khóc và nói với anh rằng, trong truyện cổ tích đều là lừa người dối gạt.",
                "tip": "Hát ngân dài chữ 'shuō' và 'piànrén', luyến nhẹ thanh điệu tình cảm.",
                "tokens": [
                    {
                        "hanzi": "你哭着",
                        "pinyin": "nǐ kū zhe",
                        "viet": "Em vừa khóc"
                    },
                    {
                        "hanzi": "对我说",
                        "pinyin": "duì wǒ shuō",
                        "viet": "Vừa nói với anh"
                    },
                    {
                        "hanzi": "童话里",
                        "pinyin": "tónghuà lǐ",
                        "viet": "Trong truyện cổ tích"
                    },
                    {
                        "hanzi": "都是",
                        "pinyin": "dōu shì",
                        "viet": "Đều là"
                    },
                    {
                        "hanzi": "骗人的",
                        "pinyin": "piànrén de",
                        "viet": "Lừa dối / Dối gạt người"
                    }
                ]
            },
            {
                "speaker": "Lời bài hát",
                "hanzi": "我不可能是你的王子。",
                "pinyin": "Wǒ bù kěnéng shì nǐ de wángzǐ.",
                "phoneticVi": "Ủa pu khả nấng sư nỉ tơ oáng chử.",
                "viet": "Anh không thể nào là chàng hoàng tử của em được.",
                "tip": "'wángzǐ' đọc tròn môi âm 'wáng', hạ giọng xuống nốt trầm lắng đọng.",
                "tokens": [
                    {
                        "hanzi": "我",
                        "pinyin": "wǒ",
                        "viet": "Tôi / Anh"
                    },
                    {
                        "hanzi": "不可能",
                        "pinyin": "bù kěnéng",
                        "viet": "Không thể nào"
                    },
                    {
                        "hanzi": "是你的",
                        "pinyin": "shì nǐ de",
                        "viet": "Là của em"
                    },
                    {
                        "hanzi": "王子",
                        "pinyin": "wángzǐ",
                        "viet": "Hoàng tử"
                    }
                ]
            },
            {
                "speaker": "Lời bài hát",
                "hanzi": "也许你不会懂，从你说爱我以后，我的天空星星都亮了。",
                "pinyin": "Yěxǔ nǐ bú huì dǒng, cóng nǐ shuō ài wǒ yǐhòu, wǒ de tiānkōng xīngxing dōu liàng le.",
                "phoneticVi": "Dẻ xủy nỉ pú huây tủng, chúng nỉ sua ai ủa dỉ hốu, ủa tơ thiên khung xing xing tâu liêng lơ.",
                "viet": "Có lẽ em không thể hiểu, từ khi em nói yêu anh, cả bầu trời của anh ngàn vì sao đều bừng sáng.",
                "tip": "'liàng le' ngân vang cao trào, diễn tả niềm hạnh phúc bừng nở.",
                "tokens": [
                    {
                        "hanzi": "也许",
                        "pinyin": "yěxǔ",
                        "viet": "Có lẽ"
                    },
                    {
                        "hanzi": "不会懂",
                        "pinyin": "bú huì dǒng",
                        "viet": "Sẽ không hiểu"
                    },
                    {
                        "hanzi": "说爱我",
                        "pinyin": "shuō ài wǒ",
                        "viet": "Nói yêu tôi"
                    },
                    {
                        "hanzi": "天空",
                        "pinyin": "tiānkōng",
                        "viet": "Bầu trời"
                    },
                    {
                        "hanzi": "星星都亮了",
                        "pinyin": "xīngxing dōu liàng le",
                        "viet": "Vì sao đều sáng rực"
                    }
                ]
            },
            {
                "speaker": "Lời bài hát",
                "hanzi": "我愿变成童话里，你爱的那个天使，张开双手变成翅膀守护你。",
                "pinyin": "Wǒ yuàn biàn chéng tónghuà lǐ, nǐ ài de nà gè tiānshǐ, zhāngkāi shuāngshǒu biàn chéng chìbǎng shǒuhù nǐ.",
                "phoneticVi": "Ủa doan piên chấng thúng hoa lỉ, nỉ ai tơ na cưa thiên sử, chang khai soang sẩu piên chấng chư pảng sẩu hu nỉ.",
                "viet": "Anh nguyện hóa thành thiên sứ trong truyện cổ tích mà em yêu thích, giang rộng đôi tay thành đôi cánh để bảo vệ em.",
                "tip": "'tiānshǐ' (thiên thần), 'chìbǎng' (đôi cánh), 'shǒuhù' (canh giữ bảo vệ).",
                "tokens": [
                    {
                        "hanzi": "我愿",
                        "pinyin": "wǒ yuàn",
                        "viet": "Anh nguyện / Tôi muốn"
                    },
                    {
                        "hanzi": "变成",
                        "pinyin": "biàn chéng",
                        "viet": "Hóa thành / Trở thành"
                    },
                    {
                        "hanzi": "天使",
                        "pinyin": "tiānshǐ",
                        "viet": "Thiên thần / Thiên sứ"
                    },
                    {
                        "hanzi": "双手",
                        "pinyin": "shuāngshǒu",
                        "viet": "Đôi tay"
                    },
                    {
                        "hanzi": "翅膀",
                        "pinyin": "chìbǎng",
                        "viet": "Đôi cánh"
                    },
                    {
                        "hanzi": "守护你",
                        "pinyin": "shǒuhù nǐ",
                        "viet": "Bảo vệ chở che cho em"
                    }
                ]
            }
        ]
    },
    {
        "id": "sh16",
        "title": "Tìm Phòng Thuê Trọ & Thỏa Thuận Tiền Cọc, Điện Nước",
        "category": "Hẹn hò & Đời sống",
        "duration": "11:15",
        "difficulty": "Trung cấp HSK 2",
        "youtubeId": "gqNSF_imQjk",
        "description": "Hỏi chủ nhà tiền cọc bao nhiêu tháng (押一付三), tiền điện nước tính theo đồng hồ và ngày bắt đầu dọn vào.",
        "sentences": [
            {
                "speaker": "Khách thuê nhà",
                "hanzi": "房东您好，我想看一看那个朝南的一居室。",
                "pinyin": "Fángdōng nín hǎo, wǒ xiǎng kànyikàn nà gè cháonán de yījīushì.",
                "phoneticVi": "Pháng tung nín hảo, ủa xẻng khan ý khan na cưa cháo nán tơ y chiu sư.",
                "viet": "Chào bác chủ nhà, tôi muốn xem căn hộ một phòng ngủ hướng Nam đằng kia ạ.",
                "tip": "'Fángdōng' (chủ nhà), 'cháonán' (hướng Nam đón gió mát ấm áp mùa đông).",
                "tokens": [
                    {
                        "hanzi": "房东",
                        "pinyin": "fángdōng",
                        "viet": "Chủ nhà trọ"
                    },
                    {
                        "hanzi": "想看一看",
                        "pinyin": "xiǎng kànyikàn",
                        "viet": "Muốn xem một chút"
                    },
                    {
                        "hanzi": "朝南",
                        "pinyin": "cháonán",
                        "viet": "Hướng Nam"
                    },
                    {
                        "hanzi": "一居室",
                        "pinyin": "yījīushì",
                        "viet": "Căn hộ 1 phòng ngủ"
                    }
                ]
            },
            {
                "speaker": "Chủ nhà",
                "hanzi": "里面家具家电齐全，拎包入住，一个月租金两千块。",
                "pinyin": "Lǐmiàn jiājù jiādiàn qíquán, līn bāo rùzhù, yí gè yuè zūjīn liǎng qiān kuài.",
                "phoneticVi": "Lỉ miên chia chuy chia tiện chi choán, lin bao ru chu, ý cưa duê chu chin lẻng chiên khoai.",
                "viet": "Bên trong nội thất đồ điện đầy đủ, chỉ việc xách vali vào ở, tiền thuê mỗi tháng 2000 tệ.",
                "tip": "'līn bāo rùzhù' (chỉ cần xách vali vào ở) là cụm từ quảng cáo nhà trọ phổ biến nhất.",
                "tokens": [
                    {
                        "hanzi": "家具家电",
                        "pinyin": "jiājù jiādiàn",
                        "viet": "Nội thất đồ điện"
                    },
                    {
                        "hanzi": "齐全",
                        "pinyin": "qíquán",
                        "viet": "Đầy đủ"
                    },
                    {
                        "hanzi": "拎包入住",
                        "pinyin": "līn bāo rùzhù",
                        "viet": "Xách vali vào ở ngay"
                    },
                    {
                        "hanzi": "租金",
                        "pinyin": "zūjīn",
                        "viet": "Tiền thuê nhà"
                    }
                ]
            },
            {
                "speaker": "Khách thuê nhà",
                "hanzi": "请问押金怎么交？水电费是民用还是商用？",
                "pinyin": "Qǐngwèn yājīn zěnme jiāo? Shuǐdiànfèi shì mínyòng háishì shāngyòng?",
                "phoneticVi": "Chỉnh uân da chin chẩn mơ chieo? Suẩy tiện phây sư mính dung hái sư sang dung?",
                "viet": "Xin hỏi tiền cọc thanh toán thế nào? Tiền điện nước tính theo giá sinh hoạt dân dụng hay kinh doanh ạ?",
                "tip": "'yājīn' (tiền đặt cọc), 'mínyòng' (giá điện nước dân sinh rẻ hơn thương mại).",
                "tokens": [
                    {
                        "hanzi": "请问",
                        "pinyin": "qǐngwèn",
                        "viet": "Xin hỏi"
                    },
                    {
                        "hanzi": "押金",
                        "pinyin": "yājīn",
                        "viet": "Tiền đặt cọc"
                    },
                    {
                        "hanzi": "怎么交",
                        "pinyin": "zěnme jiāo",
                        "viet": "Nộp như thế nào"
                    },
                    {
                        "hanzi": "水电费",
                        "pinyin": "shuǐdiànfèi",
                        "viet": "Tiền điện nước"
                    },
                    {
                        "hanzi": "民用",
                        "pinyin": "mínyòng",
                        "viet": "Giá dân dụng"
                    }
                ]
            },
            {
                "speaker": "Chủ nhà",
                "hanzi": "押一付三，水电都是民用标准，网络费免费送！",
                "pinyin": "Yā yī fù sān, shuǐdiàn dōu shì mínyòng biāozhǔn, wǎngluòfèi miǎnfèi sòng!",
                "phoneticVi": "Da y phu san, suẩy tiện tâu sư mính dung pieo chuẩn, oảng luo phây mẻn phây sung!",
                "viet": "Đặt cọc 1 tháng trả tiền 3 tháng (áp nhất phó tam), điện nước chuẩn giá dân, tiền mạng internet miễn phí tặng kèm!",
                "tip": "'yā yī fù sān' là quy tắc thuê nhà chuẩn ở các thành phố Trung Quốc (cọc 1 đóng 3).",
                "tokens": [
                    {
                        "hanzi": "押一付三",
                        "pinyin": "yā yī fù sān",
                        "viet": "Cọc 1 tháng đóng 3 tháng"
                    },
                    {
                        "hanzi": "民用标准",
                        "pinyin": "mínyòng biāozhǔn",
                        "viet": "Tiêu chuẩn giá dân dụng"
                    },
                    {
                        "hanzi": "网络费",
                        "pinyin": "wǎngluòfèi",
                        "viet": "Tiền mạng Wi-Fi"
                    },
                    {
                        "hanzi": "免费送",
                        "pinyin": "miǎnfèi sòng",
                        "viet": "Tặng miễn phí"
                    }
                ]
            }
        ]
    }
]
};

// Khởi tạo và phân bổ ngân hàng 154 từ vựng HSK 1 chuẩn vào toàn bộ 15 bài học
if (typeof HSK1_DATA !== 'undefined' && HSK1_DATA.allVocab) {
  HSK1_DATA.lessons.forEach(l => {
    l.vocab = HSK1_DATA.allVocab.filter(v => v.lessonId === l.id);
  });
}
