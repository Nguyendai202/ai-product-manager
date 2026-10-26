---
title: "Mô hình huấn luyện trước: sinh văn bản, sinh ảnh, sinh mã"
course: "Khoá 8: Generative AI: Foundation Models and Platforms"
module: "Module 2 · Nền tảng cho AI sinh nội dung"
order: 820101
---

## Video 1: Mô hình huấn luyện trước sinh văn bản (text-to-text)

**Ý chính**

- **Mô hình sinh văn bản từ văn bản** là mô hình học máy tạo văn bản mới từ một đầu vào cho trước. Huấn luyện trên kho văn bản lớn để học **mẫu hình, ngữ pháp và quan hệ nhân quả**, rồi sinh nhiều định dạng: mã, kịch bản, bản nhạc, email, thư...
- **Hai nhóm chính:**
  - **Mô hình thống kê:** dùng kỹ thuật thống kê. Ví dụ **chuỗi Markov:** bắt đầu từ trạng thái hạt giống, sinh trạng thái tiếp theo dựa trên trạng thái trước (ví dụ dự đoán ký tự kế tiếp theo mẫu ngôn ngữ đã quan sát). Dùng cho nhận dạng giọng nói, báo chí.
  - **Mô hình mạng nơ-ron:** biểu diễn được quan hệ phức tạp giữa dữ liệu; huấn luyện trên kho văn bản lớn rồi sinh văn bản giống dữ liệu đã học.
- **Hai kiểu kiến trúc của mô hình nơ-ron:**
  - **Chuỗi-sang-chuỗi (seq2seq):** mã hoá văn bản vào thành một dãy số, giải mã dãy đó thành dãy mới là văn bản sinh ra. Dùng cho tóm tắt, nhận dạng giọng nói, dịch máy.
  - **Transformer:** ánh xạ trực tiếp văn bản vào sang văn bản sinh ra, nên cho văn bản **trôi chảy và tự nhiên hơn** seq2seq. Điểm then chốt là **cơ chế chú ý (attention)** để nhấn mạnh trọng số của các từ liên quan.

**Ba hướng thiết kế tiêu biểu (mô tả theo kiến trúc, không nêu tên)**

| Hướng | Ý tưởng | Dùng cho |
| --- | --- | --- |
| **Mô hình sinh đa dụng quy mô lớn** (kiểu giải mã) | Huấn luyện trên kho văn bản và mã khổng lồ; sinh văn bản, dịch, nội dung sáng tạo, trả lời câu hỏi | Chatbot, soạn nội dung |
| **Mô hình "mọi việc đều là văn bản"** (mã hoá-giải mã) | Quy **mọi đầu vào và đầu ra về dạng văn bản**, nên một mô hình làm được nhiều tác vụ thay vì mỗi việc một mô hình (dịch, tự hoàn thành...). Có **học chuyển giao (transfer learning):** huấn luyện cho một tác vụ có thể tinh chỉnh cho tác vụ khác cùng lĩnh vực | Tóm tắt, dịch, hỏi đáp |
| **Mô hình hai chiều + tự hồi quy** | Ghép bộ mã hoá **hai chiều** (đọc văn bản xuôi và ngược) với bộ giải mã **trái sang phải;** tự hồi quy nên mỗi token mới dựa trên các token đã sinh | Phân tích cảm xúc, hỏi đáp, dịch, sinh văn bản; cả một số tác vụ thị giác máy tính |

**Ứng dụng và lợi ích**

- **Tóm tắt văn bản** mà vẫn giữ nguyên ý gốc; **hội thoại thông minh** (hỗ trợ cá nhân hoá qua truy vấn bằng văn bản); **tạo văn bản số** như mô tả sản phẩm, email, hồ sơ xin việc.
- **Tăng năng suất nhờ tự động hoá** (ví dụ tạo nội dung quảng bá, bài đăng mạng xã hội); **tăng độ chính xác** cho tác vụ dễ sai do con người (ví dụ dịch tài liệu đúng ngữ cảnh).

**Tự kiểm tra**

- Vì sao một mô hình thống nhất "mọi việc là văn bản" hiệu quả hơn mỗi việc một mô hình?
- Khác biệt giữa chuỗi Markov và mạng nơ-ron khi sinh văn bản?

---

## Video 2: Mô hình huấn luyện trước sinh ảnh (text-to-image)

**Ý chính**

- Là mô hình học máy **tạo ảnh từ mô tả bằng văn bản:** dùng AI sinh nội dung để hiểu lời bạn và biến thành ảnh độc nhất. Huấn luyện trên tập dữ liệu lớn gồm cặp văn bản-hình ảnh; tạo ảnh thực, trừu tượng, hay cả ảnh không tồn tại ngoài đời.
- **Hai loại:** **GAN** và **mô hình khuếch tán.**
  - **GAN:** hai mô hình đối đầu: bộ sinh tạo ảnh, bộ phân biệt phân biệt ảnh thật/giả; bộ sinh được cải thiện dần đến khi ảnh không phân biệt được với ảnh thật.
  - **Mô hình khuếch tán:** bắt đầu từ ảnh ngẫu nhiên rồi **thêm chi tiết dần** đến khi khớp mô tả. Theo video, thường hiệu quả hơn GAN và tạo được ảnh sáng tạo, trừu tượng hơn.

**Hai ví dụ tiêu biểu của khuếch tán (mô tả, không nêu tên)**

- **Hệ thứ nhất:** huấn luyện trên tập dữ liệu lớn gồm văn bản và ảnh; kết hợp NLP, học máy và thị giác máy tính; có cơ chế **đánh giá** xem ảnh cuối có chính xác không. Từ mô tả đơn giản như "một con gấu trúc tung hứng quả bóng" tạo ra ảnh chân thực chưa từng có. Chỉnh sửa ảnh theo mô tả sao cho hoà hợp ảnh gốc, gọi là **inpainting.** Giá trị: ảnh sinh ra cho ta thấy hệ thống thực sự **hiểu** điều ta nói hay chỉ lặp lại điều đã học; giúp hiểu cách AI diễn giải thế giới, góp phần phát triển AI hữu ích và an toàn. Phiên bản mới cho độ phân giải gấp 4 lần dù mô hình nhỏ hơn bản trước.
- **Hệ thứ hai:** dùng mô hình transformer lớn và hiểu ngôn ngữ sâu để sinh ảnh độ trung thực cao. **Phát hiện quan trọng:** LLM huấn luyện trước trên văn bản **mã hoá văn bản rất tốt để sinh ảnh;** tăng cỡ mô hình ngôn ngữ giúp nâng độ trung thực ảnh hơn là tăng cỡ mô hình khuếch tán ảnh. Ưu điểm chính: độ chân thực rất cao. Ví dụ mô tả "hai chiếc ô trắng bay lên trời, mây trôi, trời mưa" thành đúng cảnh đó (chân thực hoặc theo hướng nghệ thuật).

**Tự kiểm tra**

- Vì sao khả năng "hiểu mô tả" quan trọng hơn chuyện ảnh đẹp?
- Inpainting là gì và dùng khi nào?

---

## Video 3: Mô hình huấn luyện trước sinh mã (text-to-code)

**Ý chính**

- Mô hình **sinh mã từ mô tả bằng ngôn ngữ tự nhiên.** Dùng **sinh mã nơ-ron (neural code generation):** mạng nơ-ron được huấn luyện trên tập lớn các ví dụ mã rồi tinh chỉnh để tạo **đoạn mã, hàm, thậm chí ứng dụng hoàn chỉnh;** mã sinh ra giống cấu trúc và chức năng với mẫu đã học.
- **Hai kiểu:** **seq2seq** (dịch từ miền này sang miền khác, ở đây từ mô tả sang chuỗi mã) và **transformer** (học phụ thuộc xa giữa các từ, ở đây quan hệ giữa từ trong mô tả và mã tương ứng).
- **Ba hướng tiêu biểu (mô tả theo đặc điểm):**
  - Mô hình mã hoá-giải mã **nhận biết mã (code-aware)** được huấn luyện trước, hỗ trợ cả **hiểu mã và sinh mã:** tóm tắt, hỏi đáp, dịch ngôn ngữ lập trình.
  - Mô hình tận dụng **cấu trúc cú pháp** của ngôn ngữ lập trình để mã hoá mã nguồn tốt hơn; dùng cho tóm tắt mã, tài liệu, truy xuất; ví dụ "gắn chú thích bằng ngôn ngữ tự nhiên cho đoạn mã."
  - Mô hình transformer **chỉ giải mã,** huấn luyện trước, sinh mã từ mô tả cho việc như định nghĩa hàm, định nghĩa lớp, tổng hợp chương trình giải bài toán.
- Ngoài ra, mô hình nền đa dụng cũng sinh mã tốt, và có công cụ trợ lý lập trình đưa **gợi ý thời gian thực, tự hoàn thành, hỗ trợ tái cấu trúc mã.**

**Các công dụng và lợi ích**

| Công dụng | Mô tả |
| --- | --- |
| **Tự hoàn thành** | Gợi ý từ khoá, tên biến, tên hàm theo ngữ cảnh khi bạn gõ; ví dụ gõ chú thích thì công cụ gợi ý mã tương ứng, cải thiện tài liệu và khả năng đọc |
| **Sinh mã từ mô tả** | Ví dụ: "tạo hàm Python tính giai thừa của một số nguyên" ra đúng hàm |
| **Gỡ lỗi** | Nêu vấn đề (chatbot trả lời không liên quan) → công cụ đề xuất đoạn mã tinh chỉnh mô hình bằng dữ liệu phản hồi người dùng |
| **Dịch mã giữa ngôn ngữ** | Hỗ trợ tương thích đa nền tảng và di chuyển hệ thống |
| **Tái cấu trúc, hiện đại hoá ứng dụng** | Nhận diện đoạn mã lỗi thời hoặc kém hiệu quả và gợi ý thay thế tối ưu |
| **Gợi ý thư viện, khung phát triển** | Theo yêu cầu dự án |
| **Sinh dữ liệu thử nghiệm** | Tạo mã điền dữ liệu thử đa dạng, thực tế cho CSDL, cấu trúc dữ liệu |
| **Sinh tài liệu mã** | Tạo chú thích, mô tả hàm, tài liệu theo chức năng mã |

**Gợi ý của tôi (tự đặt):** người làm sản phẩm không cần viết mã vẫn nên nắm danh sách trên, để đặt kỳ vọng đúng khi làm việc với kỹ sư: sinh mã giúp tăng tốc, nhưng vẫn cần người xem lại về đúng/sai và bảo mật (tự đặt).

**Tự kiểm tra**

- Nếu đội bạn dùng công cụ sinh mã, bạn kỳ vọng nó tiết kiệm thời gian ở khâu nào nhất?
- Vì sao sinh dữ liệu thử nghiệm hợp với mô hình sinh mã?
