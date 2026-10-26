---
title: "Mô hình nền (foundation model), góc nhìn chuyên gia và tổng kết Module 1"
course: "Khoá 8: Generative AI: Foundation Models and Platforms"
module: "Module 1 · Các mô hình cho AI sinh nội dung"
order: 810103
---

## Video 1: Mô hình nền là gì?

**Định nghĩa**

- Theo một trung tâm nghiên cứu mô hình nền của một trường đại học, mô hình nền là **mô hình "huấn luyện một lần trên lượng dữ liệu khổng lồ, rồi thích nghi cho nhiều ứng dụng."** Đây là mô hình mẫu mới thành công để xây hệ thống AI.
- **Phần 1: huấn luyện một mô hình trên lượng dữ liệu lớn.** Mô hình nền là mô hình **lớn, đa dụng, tự giám sát (self-supervised),** được **huấn luyện trước (pre-trained)** trên lượng dữ liệu không nhãn khổng lồ với hàng tỷ tham số. Huấn luyện trước là kỹ thuật để thuật toán không giám sát liên tục được "tự do" tạo kết nối giữa các mảng thông tin khác nhau.
- Hệ quả: mô hình phát triển năng lực **đa phương thức (multimodal)** và **đa lĩnh vực (multi-domain).** Nhận prompt ở nhiều dạng (văn bản, ảnh, âm thanh, video) và làm được các việc phức tạp, sáng tạo: trả lời câu hỏi, tóm tắt tài liệu, viết bài luận, giải phương trình, trích thông tin từ ảnh, thậm chí viết mã.
- **So sánh với mô hình nhỏ:** mô hình AI sinh nội dung nhỏ được huấn luyện trên dữ liệu thuộc phạm vi hẹp và làm việc hạn chế. Ví dụ: một mô hình chỉ phân loại ảnh thì **không phải** mô hình nền, còn một họ mô hình làm được nhiều việc về ảnh thì là mô hình nền.
- **Quan hệ giữa các khái niệm (nhớ kỹ):**
  - Mọi mô hình nền đều có năng lực AI sinh nội dung, nhưng **không phải** mọi mô hình AI sinh nội dung đều là mô hình nền.
  - Mọi LLM là mô hình nền, nhưng **không phải** mọi mô hình nền là LLM (ví dụ mô hình nền sinh ảnh dùng kiến trúc khuếch tán).
  - Mô hình nền huấn luyện trên cơ sở dữ liệu ngôn ngữ tự nhiên lớn được gọi là **LLM.**
- LLM phát triển khả năng suy luận độc lập nên phản hồi truy vấn một cách riêng biệt. Video điểm qua nhiều LLM với số tham số (hay số token huấn luyện) rất khác nhau, từ hàng tỷ đến hàng trăm tỷ, và nhắc rằng một số mô hình đủ nhỏ để chạy trên máy tính xách tay. Các con số này có thể thay đổi khi công cụ tiến hoá.

**Phần 2: thích nghi cho nhiều ứng dụng**

- Nhờ huấn luyện rộng, mô hình học được điều mới và thích nghi với tình huống mới. Doanh nghiệp nhỏ tận dụng để tạo mô hình AI sinh nội dung tuỳ chỉnh, hiệu quả hơn với chi phí hợp lý.
- Vì thế mô hình nền còn gọi là **mô hình cơ sở (base model).** Giúp hệ thống AI dễ tiếp cận với doanh nghiệp và cá nhân không đủ nguồn lực huấn luyện mô hình từ đầu; đưa **thời gian tạo ra giá trị từ hàng tháng xuống hàng tuần.**
- **Ví dụ chatbot:** chatbot đời đầu huấn luyện trên tập dữ liệu nhỏ, chỉ dự đoán phản hồi theo từ khoá và trả lời định sẵn. Chatbot ngày nay được huấn luyện trước nhiều lần trên dữ liệu lớn, nên dự đoán từ chính xác hơn và trả lời hữu ích, sáng tạo hơn: chỉ với một câu prompt có thể ra bài luận so sánh, infographic, danh sách kiểm tra hay truyện ngắn.
- Mô hình nền cũng nằm sau các công cụ sinh ảnh từ văn bản: một câu prompt có thể cho vài ảnh độ phân giải cao ở nhiều phong cách (ảnh thực, tranh vẽ). Một số dùng kiến trúc transformer, số khác dùng khuếch tán, ví dụ khuếch tán tầng (cascaded) xây trên một LLM.

**Hạn chế**

- **Thiên kiến:** nếu dữ liệu huấn luyện thiên lệch thì đầu ra có thể thiên lệch.
- **Ảo giác (hallucination):** LLM sinh thông tin sai vì hiểu sai ngữ cảnh của các tham số trong tập dữ liệu. Vì vậy **luôn kiểm chứng độ chính xác** đầu ra của chatbot AI sinh nội dung.

**Lưu ý khi đọc (ghi chú của tôi):** các con số về số tham số của từng mô hình trong video có thể sai hoặc đã lỗi thời, vì vậy tôi không ghi lại trong site. Điều cần nắm là khái niệm: huấn luyện trước một lần trên dữ liệu lớn, sau đó tinh chỉnh hoặc dùng prompt để thích nghi (tự đặt).

---

## Video 2: Chuyên gia nói về tiến bộ năng lực AI sinh nội dung

**Ý chính**

- Các mô hình nền cho văn bản và cho ảnh đã giúp cộng đồng làm quen với khái niệm AI sinh nội dung. Vì được huấn luyện trên lượng dữ liệu rất lớn nên chúng xử lý được **nhiều use case và chủ đề** trong lĩnh vực của chúng.
- Nghiên cứu về transformer dẫn tới họ mô hình sinh văn bản mạnh. Việc sinh văn bản tổng hợp từ mô hình huấn luyện trước, trong pipeline NLP, là lựa chọn rất phổ biến vì mô hình đã nạp nhiều thông tin, sinh ra văn bản trông rất trôi chảy. Với ảnh, mô hình sáng tạo và xử lý được nhiều use case.
- **Tinh chỉnh (fine-tuning)** giúp cộng đồng dùng các mô hình này mà **không cần sức mạnh tính toán khổng lồ hay nhiều dữ liệu.**
- Ứng dụng: chatbot, tạo nội dung tự động, dịch ngôn ngữ (văn bản); nghệ thuật, thiết kế, quảng cáo (ảnh từ mô tả).
- **Đạo đức và quản trị:** ngay từ đầu cộng đồng đã bàn về tác động đạo đức và xã hội. Cần quan tâm **thiên kiến và đạo đức** trong phản hồi, đặt **giới hạn hoặc giám sát** phản hồi, và có **quản trị (governance)** quanh mô hình để có thể tin tưởng.
- Kết luận: các mô hình này đặt ra chuẩn mới về chất lượng và tính đa dụng.

---

## Video 3: Chuyên gia nói về nền tảng AI doanh nghiệp

**Ý chính (giữ ở mức khái niệm, không nêu tên sản phẩm)**

Một nền tảng AI cho doanh nghiệp thường gồm ba lớp:

1. **Lớp dữ liệu:** muốn giải bài toán khoa học dữ liệu và AI sinh nội dung thì trước hết phải **truy cập đúng tập dữ liệu.** Lớp này giúp vượt qua **kho dữ liệu rời rạc (data silos),** truy cập dữ liệu ở bất kỳ nơi nào nó nằm. Có thể truy vấn bằng ngôn ngữ tự nhiên: nói tập dữ liệu mình muốn, gộp bảng, tiền xử lý dữ liệu.
2. **Lớp mô hình:** một gói nhiều LLM, gồm mô hình do chính nhà cung cấp phát triển và mô hình mã nguồn mở. Dữ liệu huấn luyện được chuẩn bị kỹ, làm sạch, không chứa nội dung xúc phạm hay thiên kiến. Có công cụ tự động giúp nhà khoa học và kỹ sư dữ liệu làm việc thuận tiện.
3. **Lớp quản trị (governance):** lập **danh mục mô hình,** bảng điều khiển hợp nhất xem các mô hình và phiên bản, giai đoạn của từng mô hình; **giám sát hiệu năng** về ảo giác, thiên kiến, **cảnh báo** khi có vấn đề, có khi tự giảm thiểu; truy ngược tới mức giao dịch xem tập dữ liệu nào gây vấn đề.

- Còn có: **sinh mã** để tự động hoá việc lặp trong lập trình; **sinh dữ liệu tổng hợp** để huấn luyện mô hình ML, giúp giải quyết lo ngại về quyền riêng tư.
- **Đánh giá kết quả** của LLM khó hơn vì đầu ra là ảnh và văn bản, cách đo có nhiều kiểu. Nền tảng đưa sẵn các **thước đo đánh giá** theo tác vụ (RAG, tóm tắt, sinh nội dung); chọn tác vụ thì thước đo tự được chọn, giúp đánh giá mô hình theo thời gian.

---

## Tổng kết Bài học 1: Các mô hình cho AI sinh nội dung

- Deep learning dùng mạng nơ-ron nhiều tầng; LLM dùng transformer để huấn luyện trước trên dữ liệu lớn, nắm mẫu hình và phân cấp, sinh phản hồi giống người. Công nghệ này làm AI sinh nội dung mở rộng được.
- Bốn khối nền: **VAE** giảm chiều mẫu nhanh; **GAN** dùng hai mạng cạnh tranh tạo mẫu thực; **transformer** dùng cơ chế chú ý mô hình hoá phụ thuộc xa trong văn bản; **khuếch tán** xử lý sự suy giảm thông tin bằng cách khử nhiễu trong không gian ẩn.
- **Mô hình nền** được huấn luyện trước trên hàng tỷ tham số, phát triển suy luận độc lập và làm được nhiều tác vụ phức tạp. Nhờ đa phương thức và đa lĩnh vực, chúng là nền tảng cho ứng dụng AI sinh nội dung.

**Tự kiểm tra cuối module**

- Giải thích: "mọi LLM là mô hình nền nhưng không phải mọi mô hình nền là LLM."
- Nếu công ty bạn không đủ nguồn lực huấn luyện mô hình từ đầu, mô hình nền giúp thế nào?
- Nêu hai rủi ro khi dùng mô hình nền và cách giảm từng rủi ro.
