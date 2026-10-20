# Ứng Dụng Tự Học & Ôn Tập Tiếng Trung HSK 1

Ứng dụng web sổ tay ôn tập trực tuyến được xây dựng để hỗ trợ bạn tự học và ôn tập theo chuỗi bài giảng **Giáo Trình Chuẩn HSK 1 của Thầy Thành Luân**:
👉 **Link Playlist YouTube gốc**: [Giáo trình chuẩn HSK 1 - Thành Luân](https://www.youtube.com/playlist?list=PLkDxGl-gi2racE5ND8L9HP_xsAl9qLxSG)

---

## 🌟 Các Tính Năng Nổi Bật

1. **Bài 1 Đầy Đủ Chi Tiết (你好 - Xin chào!)**:
   - **📺 Bài giảng Video & Tua nhanh (Timecodes)**: Nhúng video Thầy Thành Luân trực tiếp với danh sách các mốc thời gian (Phát âm, Thanh mẫu, Vận mẫu, 4 thanh điệu, Biến điệu, Từ vựng, Bài khóa). Bấm vào mốc nào là video tự động tua tới đoạn đó.
   - **🗣️ Bảng Ngữ Âm Tương Tác**:
     - 11 Thanh mẫu cơ bản: `b, p, m, f, d, t, n, l, g, k, h` kèm khẩu hình và mẹo phát âm tiếng Việt. Bấm vào là nghe đọc bản xứ ngay!
     - 15 Vận mẫu cơ bản: `a, o, e, i, u, ü, ai, ei, ao, ou, an, en, ang, eng, ong`.
     - 4 Thanh điệu & Khinh thanh với biểu đồ độ cao (5-5, 3-5, 2-1-4, 5-1) và nút nghe mẫu.
     - Quy tắc biến điệu quan trọng: `3 + 3 ➔ 2 + 3` (ví dụ: `nǐ hǎo` đọc thành `ní hǎo`).
   - **🗂️ Từ Vựng & Thẻ Flashcard 3D**:
     - Xem dạng danh sách hoặc lật thẻ 3D trực quan.
     - Đầy đủ: Chữ Hán, Pinyin, Âm Hán Việt, Bộ thủ, Mẹo ghi nhớ cấu tạo chữ, ví dụ thực tế.
     - Nghe phát âm chuẩn giọng Bắc Kinh cho từng từ.
     - Đánh dấu **"Đã thuộc"** / **"Cần ôn lại"** để lọc từ vựng khi ôn bài.
   - **💬 Hội Thoại Mẫu (Bài Khóa)**:
     - 3 bài hội thoại kinh điển trong đời sống.
     - Nút bật/tắt Pinyin và Dịch nghĩa tiếng Việt để bạn tự kiểm tra khả năng đọc chữ Hán.
     - Bấm vào từng câu để nghe phát âm cả câu.
   - **✍️ Nét Bút & Bảng Tập Viết (Ô Chữ Điền 田字格)**:
     - 7 quy tắc bút thuận kinh điển và 5 nét cơ bản.
     - Bảng vẽ tương tác: dùng chuột hoặc ngón tay (trên điện thoại/iPad) để tự tay viết chữ Hán có hỗ trợ nét mờ chuẩn.
   - **🎯 Trắc Nghiệm Ôn Tập (Quiz)**:
     - 8 câu hỏi cốt lõi kiểm tra ngay kiến thức vừa học, kèm giải thích chi tiết.
   - **📝 Sổ Tay Ghi Chú Cá Nhân**:
     - Tự ghi chép các lưu ý cá nhân, hệ thống tự động lưu vào trình duyệt (LocalStorage).
   - **💾 Sao Lưu & Khôi Phục Dữ Liệu**:
     - Xuất/nhập file `.json` để không lo mất tiến độ khi đổi thiết bị.
   - **🌙 Giao Diện Tối / Sáng (Dark Mode) & Tương thích 100% với điện thoại di động**.

---

## 🚀 Hướng Dẫn Đưa Lên Netlify Miễn Phí (Chỉ mất 30 giây)

Ứng dụng là **Zero-Build Static Web App** (không cần cài đặt Node.js hay build code phức tạp). Bạn có thể đưa lên Netlify theo 2 cách cực kỳ nhanh:

### Cách 1: Kéo thả trực tiếp qua Netlify Drop (Khuyên dùng - Nhanh nhất)
1. Đăng ký/đăng nhập tài khoản miễn phí tại: [app.netlify.com](https://app.netlify.com).
2. Truy cập đường dẫn: **[app.netlify.com/drop](https://app.netlify.com/drop)**.
3. Mở File Explorer trên máy tính, kéo nguyên thư mục `E:\TOI-TU-HOC` và thả vào ô tải lên của Netlify.
4. Netlify sẽ tải trang web lên trong vài giây và cung cấp một đường link truy cập dạng:  
   `https://tu-hoc-tieng-trung.netlify.app`
5. Bạn lưu link này vào điện thoại hoặc máy tính để mở ra học và ôn bài hàng ngày!

---

### Cách 2: Đẩy lên GitHub rồi kết nối Netlify (Tự động cập nhật mỗi khi thêm bài mới)
1. Tạo một repository mới trên GitHub (ví dụ: `toi-tu-hoc-tieng-trung`).
2. Mở PowerShell trong thư mục này và chạy:
   ```bash
   git init
   git add .
   git commit -m "Khoi tao web app on tap HSK 1 - Bai 1"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-cua-ban>/toi-tu-hoc-tieng-trung.git
   git push -u origin main
   ```
3. Đăng nhập [app.netlify.com](https://app.netlify.com), chọn **Add new site** ➔ **Import an existing project** ➔ Chọn **GitHub** ➔ Chọn repo vừa tạo ➔ Nhấn **Deploy**.
4. Sau này mỗi khi bạn học xong Bài 2, Bài 3,... và cập nhật vào `data.js`, bạn chỉ cần `git push` là Netlify tự động cập nhật ngay lập tức!

---

## 💻 Cách Chạy Thử Ngay Trên Máy Tính

Bạn có thể mở trực tiếp file `index.html` bằng cách nhấp đúp chuột vào file `index.html` trong thư mục `E:\TOI-TU-HOC` bằng bất kỳ trình duyệt nào (Chrome, Edge, Cốc Cốc, Brave, Firefox, Safari).

Hoặc dùng Python có sẵn trên máy để mở server cục bộ:
```powershell
cd E:\TOI-TU-HOC
python -m http.server 8000
```
Sau đó truy cập: `http://localhost:8000` trên trình duyệt.
