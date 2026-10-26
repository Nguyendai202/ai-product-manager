---
title: "AI sinh nội dung (generative AI): khái niệm, use case, công cụ và khác biệt với AI truyền thống"
course: "Khoá 5: Introduction to Artificial Intelligence (AI)"
module: "Module 1 · Giới thiệu và ứng dụng của AI"
order: 510102
---

## Video 1: Giới thiệu AI sinh nội dung và các use case

**Ý chính**

- AI truyền thống thường tập trung **phân tích dữ liệu và ra quyết định** (gợi ý bài hát, dịch ngôn ngữ). **AI sinh nội dung (generative AI, Gen AI)** tiến thêm một bước: **tạo ra nội dung mới** từ đầu, từ văn bản, hình ảnh đến âm nhạc và video. Nó không dựa vào luật và mẫu định sẵn mà dùng kỹ thuật học sâu và các tập dữ liệu khổng lồ để sinh ra ý tưởng mới.
- Có thể dùng **mô hình ngôn ngữ lớn (LLM)** để xử lý và sinh văn bản giống người, làm các tác vụ NLP như sinh văn bản, dịch, tóm tắt; hoặc đưa LLM vào hệ thống AI lớn hơn để làm việc phức tạp như ra quyết định và giải quyết vấn đề.
- **Năng lực chính:** sinh nội dung đa dạng (văn bản, hình ảnh, video, âm thanh); đối thoại như người; **tăng cường dữ liệu** (sinh dữ liệu huấn luyện mới để tăng độ chính xác của mô hình học máy).
- Theo nghiên cứu được trích trong video, AI sinh nội dung có thể giúp kinh tế toàn cầu tăng khoảng 7% (gần 7 nghìn tỷ USD) và nâng tăng trưởng năng suất 1,5% trong mười năm; đây là số liệu của nguồn được trích.
- **Use case theo lĩnh vực chức năng:** marketing (quảng cáo, email, bài mạng xã hội cá nhân hoá); sáng tạo (nghệ thuật số, nhạc, video, nhạc nền phim hay game); phát triển sản phẩm (phân tích xu hướng và phản hồi để gợi ý ý tưởng, tối ưu thiết kế).
- **Use case theo ngành:** y tế và y học chính xác (điều trị cá nhân hoá, mô phỏng phẫu thuật, tạo ảnh y khoa); game (màn chơi, nhân vật, vật thể thích ứng với người chơi); thời trang (thử đồ ảo, gợi ý cá nhân hoá); giáo dục (tài liệu học tập tuỳ chỉnh, môi trường học tương tác thích ứng phong cách và nhịp học).

---

## Video 2: Công cụ và ứng dụng của AI sinh nội dung

**Ý chính**

- Ngôn ngữ là lĩnh vực ứng dụng quan trọng nhất. Công cụ sinh nội dung chạy trên các mô hình nền như LLM. Ban đầu LLM chỉ nhận và trả văn bản; nay có **mô hình đa phương thức (multimodal)** xử lý được âm thanh, hình ảnh và video, nên công cụ có thể chú thích ảnh, trả lời câu hỏi về ảnh, mô tả video, thảo luận nội dung đa phương tiện.
- Nhiều họ mô hình ngôn ngữ lớn từ các hãng khác nhau đang thay đổi cách tạo và tương tác với nội dung.
- **Hình ảnh và thiết kế:** các mô hình chuyển văn bản thành ảnh (khuếch tán và mô hình sinh ảnh khớp câu mô tả), mô hình sinh khuôn mặt chất lượng cao, mô hình siêu phân giải tăng số điểm ảnh.
- **Giọng nói:** nền tảng tạo giọng tổng hợp gần với sắc thái giọng người; mô hình nhận dạng giọng nói mã nguồn mở có thể chép lời và dịch sang tiếng Anh nhiều ngôn ngữ.
- **Âm nhạc:** công cụ sinh nhạc theo thể loại (cổ điển đến đương đại) và theo tâm trạng; có công cụ sinh bài hát hơn 250 phong cách trong vài giây.
- **Video:** mô hình sinh video độ nét cao và dựng cảnh chân thực từ câu lệnh văn bản.
- **Doanh nghiệp áp dụng:** theo một khảo sát được trích, 55% tổ chức đang ở chế độ thử nghiệm hoặc triển khai thật với AI sinh nội dung. Các hãng lớn tích hợp vào chỉnh ảnh, hiểu ngôn ngữ tự nhiên, sinh nhạc, ứng dụng trò chuyện trong công cụ làm việc, chỉnh sửa ảnh và nhận diện font, và nền tảng dữ liệu cho doanh nghiệp tạo ứng dụng AI riêng.

---

## Video 3: Tiến hoá của AI: truyền thống và sinh nội dung

**Kiến trúc AI truyền thống**
1. **Kho dữ liệu (repository):** nơi tổ chức giữ thông tin lịch sử (bảng, ảnh, tài liệu).
2. **Nền tảng phân tích (analytics platform):** nơi xây mô hình.
3. **Tầng ứng dụng:** nơi dùng mô hình để hành động.
- Ví dụ công ty viễn thông muốn biết ai có khả năng rời mạng: lấy dữ liệu khách từ kho, xây mô hình trên nền tảng phân tích, đưa vào ứng dụng để liên hệ giữ khách. Bản thân việc này mới là **phân tích dự đoán**, chưa phải AI. Muốn thành AI, cần **vòng phản hồi (feedback loop)** để mô hình học từ lần đúng và sai (dự đoán rời mạng mà không rời) và cải thiện.

**Kiến trúc AI sinh nội dung**
1. Bắt đầu bằng **dữ liệu ngoài tổ chức** với lượng khổng lồ về mọi thứ.
2. **Mô hình ngôn ngữ lớn** được xây từ lượng dữ liệu đó: rất mạnh nhưng chung chung, không biết chi tiết riêng của doanh nghiệp (ví dụ lý do khách riêng của bạn rời đi).
3. **Tầng prompt và tinh chỉnh (prompting and tuning):** biến mô hình tổng quát thành mô hình cho trường hợp riêng của bạn.
4. **Tầng ứng dụng** giống AI truyền thống.
5. Cũng có **vòng phản hồi**, nhưng thường quay về tầng prompt và tinh chỉnh vì mô hình nằm ngoài tổ chức.
- **Khác biệt cốt lõi:** kiến trúc khác vì **quy mô dữ liệu và mô hình** quá lớn so với bất kỳ kho dữ liệu nào của tổ chức.

**Tự kiểm tra**

- Vì sao phân tích dự đoán chưa phải AI nếu thiếu vòng phản hồi?
- Tầng prompt và tinh chỉnh làm gì trong kiến trúc AI sinh nội dung?
