---
title: "Công cụ prompt engineering, góc nhìn chuyên gia và tổng kết Module 1"
course: "Khoá 7: Generative AI: Prompt Engineering Basics"
module: "Module 1 · Prompt engineering cho AI sinh nội dung"
order: 710103
---

## Video 1: Các công cụ prompt engineering phổ biến

**Chức năng chung của công cụ**
- Công cụ prompt engineering cung cấp nhiều tính năng để tối ưu việc tạo prompt cho kết quả mong muốn. Đặc biệt hữu ích cho người dùng chưa thạo kỹ thuật NLP nhưng muốn kết quả cụ thể từ mô hình sinh nội dung. Các chức năng thường có:
  1. **Gợi ý prompt** dựa trên đầu vào hoặc đầu ra mong muốn.
  2. **Gợi ý cách cấu trúc prompt** để truyền đạt ngữ cảnh tốt hơn, giúp viết prompt cung cấp ngữ cảnh cần thiết cho mô hình hiểu ý định.
  3. **Tinh chỉnh lặp:** cải thiện prompt dựa trên phản hồi đầu để tìm prompt hiệu quả nhất.
  4. **Giảm thiên kiến:** hướng dẫn cách viết prompt để giảm khả năng đầu ra thiên lệch hoặc không phù hợp.
  5. **Hỗ trợ theo lĩnh vực:** pháp lý, y tế, kỹ thuật.
  6. **Thư viện prompt dựng sẵn** cho nhiều use case, có thể tuỳ chỉnh.

**Các loại công cụ tiêu biểu (mô tả theo chức năng)**

| Loại | Đặc điểm |
| --- | --- |
| Nền tảng tích hợp huấn luyện, tinh chỉnh, triển khai, quản lý mô hình nền, có **phòng thí nghiệm prompt (Prompt Lab)** | Thử prompt trên nhiều mô hình nền; có prompt mẫu cho tóm tắt, phân loại, sinh nội dung, trích xuất; có thể "dạy" mô hình bằng cách thêm chỉ dẫn và ví dụ |
| **Môi trường phát triển (IDE) cho ứng dụng dựa trên LLM** | Có trình soạn và thử prompt; mẫu prompt có cấu trúc; prompt dựng sẵn làm ví dụ; dùng cho sinh văn bản, trích xuất, phân loại, hỏi đáp, tự hoàn thành, tóm tắt |
| **Giao diện web để viết và xâu chuỗi prompt** | Quản lý nhiều phiên bản chuỗi prompt; có ngôn ngữ lập trình riêng và các khối chuẩn để xử lý đầu ra của LLM; tích hợp API với mô hình và dịch vụ khác |
| **Công cụ tối ưu prompt cho nhiều mô hình** | Hỗ trợ các mô hình văn bản phổ biến và mô hình tạo ảnh; chọn mô hình đích vì mỗi mô hình có chiến lược tối ưu khác; có tuỳ chọn xem trước, chất lượng, ngôn ngữ, kiểm duyệt; tự hoàn thành khi gõ; chế độ tối ưu từng bước cho đến khi hài lòng |
| **Nguồn tài nguyên và giao diện khác** | Kho mã nguồn chứa hướng dẫn, ví dụ, công cụ về prompt engineering; sân chơi web để thử prompt với các mô hình; nền tảng thử prompt văn bản để sinh ảnh; thư viện Python để xâu chuỗi prompt |
| **Chợ prompt** | Mua bán prompt cho nhiều công cụ và mô hình (ví dụ mua prompt tạo nhân vật hoạt hình hài hước); nếu bạn có kỹ năng viết prompt tốt thì có thể đăng và bán |

---

## Video 2: Chuyên gia nói về prompt engineering trong AI sinh nội dung

**Ý chính**

- Prompt engineering là kỹ thuật viết prompt tốt hoặc hiệu quả để mô hình tạo đầu ra nhất quán và nổi bật. Kỹ thuật cụ thể tuỳ ứng dụng, nhưng cơ bản vẫn là **rõ ràng trong tư duy, có ngữ cảnh, và liệt kê các đặc điểm bạn muốn.**
- Thuật ngữ này mới có vài năm gần đây nhờ AI sinh nội dung: là **hiểu cách nhắc mô hình ngôn ngữ lớn để có phản hồi mong muốn.**
- **Số "shot" là số ví dụ:**
  - **Zero-shot:** không có ví dụ, chỉ bảo "hãy làm việc này." Đây là cách nhiều người dùng công cụ trò chuyện hiện nay.
  - **One-shot:** đưa một ví dụ về định dạng muốn dùng; mô hình dùng định dạng đó để định hướng thông tin cần và định dạng đầu ra tốt hơn.
  - **Few-shot:** đưa hai ba ví dụ trở lên. Điều thú vị: **ví dụ không nhất thiết đúng nội dung, chỉ cần đúng định dạng.** Bạn có thể đưa vài ví dụ rồi nhờ AI sinh thêm ví dụ cùng định dạng và thêm vào prompt.
- **Chuỗi suy nghĩ (chain of thought):** bảo mô hình lập kế hoạch rồi "nghĩ từng bước" khi thực hiện chuỗi các bước bạn đưa; giúp mô hình đi đúng hướng: nó lập kế hoạch, giữ trong đầu rồi đi qua từng chỉ dẫn và tổng hợp đáp án ở cuối. Với việc rất phức tạp, hãy thử cách này.
- **Điều được nhắc nhiều nhất:** bảo mô hình **nhập vai** hoặc đưa cho nó một kiểu người cụ thể (chuyên gia JavaScript, quản lý sản phẩm, CEO doanh nghiệp nhỏ); càng cho ví dụ như thế thì kết quả càng tốt. "Hỏi sai câu thì nhận câu trả lời sai", đúng với cả con người.
- **Tham số** khi tương tác với mô hình: nêu rõ tác vụ, đưa ngữ cảnh, đôi khi đưa ví dụ (học few-shot), phản hồi lặp. Có các tham số như **temperature, top-k, top-p** để điều khiển độ "sáng tạo" của mô hình.
- Ví dụ thực tế: muốn mô tả một quy trình làm việc cho mô hình, chuyên gia hỏi luôn "định dạng nào tốt nhất để đưa quy trình này cho bạn?"; mô hình đề xuất cấu trúc; khi làm đúng cấu trúc đó, mô hình khớp từng trường một và làm được nhiều việc thú vị.
- Một số mô hình có cú pháp riêng cần theo; nếu không vẫn có đầu ra nhưng ta muốn **đạt kết quả mong muốn với ít thử sai, ít lãng phí thời gian, tiền và tài nguyên nhất.**
- Kết luận: prompt engineering rất đáng giá hiện nay, dễ học, nên **đầu tư thời gian ngay từ đầu.**

---

## Tổng kết Bài học 1: Khái niệm prompt engineering

- **Prompt** là đầu vào hoặc chuỗi chỉ dẫn bạn đưa cho mô hình sinh nội dung để tạo đầu ra mong muốn; chỉ dẫn định hướng sáng tạo của mô hình và giúp nó tạo phản hồi liên quan, hợp lý.
- Bốn thành phần của prompt có cấu trúc tốt: **chỉ dẫn, ngữ cảnh, dữ liệu đầu vào, chỉ báo đầu ra.**
- **Prompt engineering** là thiết kế prompt hiệu quả để khai thác năng lực của mô hình; tinh chỉnh prompt bao gồm thử nghiệm các yếu tố ảnh hưởng đầu ra. Lợi ích: tối ưu hiệu quả mô hình, tăng hiệu năng cho tác vụ cụ thể, hiểu giới hạn mô hình, tăng an toàn.
- Prompt hiệu quả cho phép kiểm soát phong cách, giọng điệu, nội dung; thực hành tốt nhất theo bốn chiều rõ ràng, ngữ cảnh, chính xác, nhập vai.
- Công cụ prompt engineering có nhiều tính năng: gợi ý prompt, hiểu ngữ cảnh, tinh chỉnh lặp, giảm thiên kiến, hỗ trợ theo lĩnh vực, thư viện prompt dựng sẵn.

**Tự kiểm tra cuối module**

- Giải thích zero-shot, one-shot, few-shot bằng ví dụ viết email.
- Soạn một prompt chain-of-thought cho việc lập kế hoạch một buổi workshop.
