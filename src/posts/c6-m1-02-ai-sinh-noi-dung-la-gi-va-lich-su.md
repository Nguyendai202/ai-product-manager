---
title: "AI sinh nội dung là gì, khác AI phân biệt ra sao và lịch sử phát triển"
course: "Khoá 6: Generative AI: Introduction and Applications"
module: "Module 1 · Giới thiệu và năng lực của AI sinh nội dung"
order: 610102
---

## Video 1: Giới thiệu AI sinh nội dung

**Ý chính**

- **AI** là sự mô phỏng trí thông minh của con người bằng máy. Mô hình AI học từ lượng dữ liệu hiện có khổng lồ; quá trình học từ dữ liệu gọi là **huấn luyện.** Có hai cách tiếp cận nền tảng: AI phân biệt và AI sinh nội dung.

| | AI phân biệt (discriminative) | AI sinh nội dung (generative) |
| --- | --- | --- |
| Việc chính | Học **phân biệt các lớp** dữ liệu: nhận tập huấn luyện mà mỗi điểm dữ liệu có nhãn, rồi dự đoán lớp của điểm mới bằng cách xem điểm đó nằm ở phía nào của ranh giới quyết định; phân loại, nhận mẫu hình, rút kết luận | Học **tạo nội dung mới** dựa trên dữ liệu huấn luyện: nắm bắt phân phối nền tảng của dữ liệu và sinh các mẫu mới |
| Ví dụ | Bộ lọc thư rác phân biệt thư rác và thư thường; "ảnh này vẽ cái tổ hay quả trứng?" | "Hãy vẽ một cái tổ có ba quả trứng" |
| Hạn chế | Không hiểu được ngữ cảnh hay sinh nội dung mới từ hiểu biết ngữ cảnh của dữ liệu huấn luyện | Bắt chước cả kỹ năng sáng tạo, không chỉ kỹ năng phân tích và dự đoán |

- **Cách AI sinh nội dung hoạt động:** bắt đầu từ một **prompt** (văn bản, hình ảnh, video hay bất kỳ đầu vào nào mô hình xử lý được); đầu ra là nội dung mới gồm văn bản, hình ảnh, âm thanh, video, mã và dữ liệu. Đầu ra có thể cùng dạng với prompt (**văn bản thành văn bản**) hoặc khác dạng (**văn bản thành hình ảnh**, **hình ảnh thành video**).
- Cả hai loại mô hình đều xây bằng **học sâu:** huấn luyện **mạng nơ-ron nhân tạo** (tập hợp các đơn vị tính toán nhỏ gọi là nơ-ron, mô phỏng cách não xử lý thông tin) học từ lượng dữ liệu lớn.
- **Các "khối xây dựng" mang kỹ năng sáng tạo:** mạng đối nghịch sinh (GAN), bộ mã hoá tự động biến phân (VAE), transformer và mô hình khuếch tán.

**Lịch sử ngắn**
- Không phải khái niệm mới: gốc rễ từ nguồn gốc của học máy. Cuối thập niên 1950, các nhà khoa học đề xuất học máy và đã thử dùng thuật toán tạo dữ liệu mới.
- Thập niên 1990: mạng nơ-ron trỗi dậy, thêm đà cho AI sinh nội dung.
- Đầu thập niên 2010: học sâu, nhờ có tập dữ liệu lớn và sức mạnh tính toán tăng, đẩy mạnh phát triển.
- **Năm 2014:** GAN ra đời, tạo bước ngoặt. GAN, VAE, transformer đặt nền cho sự tăng trưởng và cho **mô hình nền** cùng các công cụ.
- **Mô hình nền** là mô hình AI có năng lực rộng, có thể thích nghi để tạo mô hình hoặc công cụ chuyên biệt cho từng use case. **Mô hình ngôn ngữ lớn (LLM)** là loại mô hình nền được huấn luyện để hiểu ngôn ngữ người, xử lý và sinh văn bản. Năm 2018 xuất hiện LLM dựa transformer đầu tiên của dòng GPT; sau đó nhiều LLM giúp sinh văn bản mạch lạc và liên quan; có các mô hình tương tự cho ảnh (khuếch tán) và các use case khác.
- Sự phát triển của nhiều mô hình khiến thị trường công cụ AI sinh nội dung lớn dần: sinh văn bản, sinh ảnh, sinh video, sinh mã.
- Theo một báo cáo tư vấn được trích: AI sinh nội dung có tiềm năng **thay đổi "giải phẫu" của công việc**, tăng cường năng lực từng người lao động bằng cách tự động hoá một số hoạt động; tác động đến năng suất có thể bổ sung hàng nghìn tỷ USD giá trị cho kinh tế toàn cầu.

---

## Video 2: Góc nhìn chuyên gia về sự tiến hoá của AI sinh nội dung

**Ý chính**

- AI sinh nội dung tiến hoá cùng AI, nhưng gần đây mới thu hút mạnh. Nó từng ở trạng thái "ngủ" hơn 20 năm; sự xuất hiện của GAN và VAE đã kéo nó trở lại và gần như thành tương lai của ngành.
- Các mô hình đời đầu còn hạn chế về độ mạch lạc và chất lượng; nhưng từ các mô hình ngôn ngữ lớn thế hệ mới và mô hình sinh ảnh, văn bản và hình ảnh đã tinh vi, tăng sáng tạo và tự động hoá ở nhiều lĩnh vực.
- **Dòng thời gian khái niệm:**
  1. **Hệ dựa luật:** chỉ làm trong ngữ cảnh ta cung cấp và theo luật.
  2. **Học máy và mô hình thống kê:** tìm mẫu hình trong tập dữ liệu; học có giám sát, bán giám sát và tăng cường thông minh hơn hệ luật.
  3. **Học sâu và mạng nơ-ron:** tìm mẫu theo cách nâng cao và xử lý dữ liệu phi cấu trúc.
  4. **GAN:** kỷ nguyên mới cho tác vụ sinh và tạo dữ liệu mới.
  5. **LSTM và mạng hồi quy:** xử lý tốt hơn dữ liệu phi cấu trúc và chuỗi thời gian.
  6. **VAE, GAN, mô hình tự hồi quy** (tạo từng bước, hợp với ngôn ngữ như trò chuyện và viết).
  7. **Năm 2017:** bài báo "Attention is All You Need" mở ra thời đại mới cho tác vụ sinh; ý tưởng là có mô hình **tiền huấn luyện trên tập dữ liệu khổng lồ** rồi dễ dàng **tinh chỉnh** cho tác vụ cụ thể.
- **Khác AI truyền thống:** AI truyền thống tập trung phân tích và dự đoán từ dữ liệu có sẵn (phân loại, hồi quy, gợi ý); AI sinh nội dung tạo dữ liệu mới giống dữ liệu huấn luyện, tạo đầu ra chất lượng như người. "AI cũ làm đúng điều bạn bảo, AI sinh nội dung tự phát minh và tạo ra."

**Tự kiểm tra**

- Cho ví dụ một bài toán phù hợp AI phân biệt và một bài toán cần AI sinh nội dung.
- Vì sao năm 2014 và 2017 được coi là hai mốc quan trọng?
