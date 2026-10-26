---
title: "RAG, các bước áp dụng AI và khung áp dụng AI"
course: "Khoá 5: Introduction to Artificial Intelligence (AI)"
module: "Module 3 · Chuyển đổi doanh nghiệp và sự nghiệp nhờ AI"
order: 530104
---

## Bài đọc và video: RAG (sinh nội dung tăng cường truy xuất)

**Vấn đề của mô hình sinh nội dung đơn thuần**
- Có thể **ảo giác:** nói điều nghe hợp lý nhưng sai hoặc bịa.
- Có **mốc cắt tri thức cố định:** không biết thông tin sau lần huấn luyện cuối, nên lỗi thời.
- **Cửa sổ ngữ cảnh hạn chế:** khó giữ ngữ cảnh dài hoặc ghi nhớ chi tiết trong hội thoại hay tài liệu dài.
- Có thể thiếu chiều sâu và độ cụ thể cho câu hỏi cần tri thức chuyên sâu.
- Sinh văn bản chất lượng cao tốn tính toán và chậm.

**Ví dụ trong video:** hỏi hành tinh nào trong hệ Mặt Trời có nhiều vệ tinh nhất. Trả lời "theo trí nhớ" bằng một bài đọc cũ sẽ **vừa không có nguồn vừa lỗi thời.** Nếu đi tra nguồn đáng tin thì có câu trả lời mới và có cơ sở. Mô hình ngôn ngữ cũng vậy: nếu chỉ dựa vào tham số học khi huấn luyện, nó trả lời tự tin nhưng có thể sai.

**RAG hoạt động ba bước**
1. Với một truy vấn, **truy xuất** tài liệu hoặc mẩu thông tin liên quan từ một kho nội dung (có thể mở như Internet hoặc đóng như tập tài liệu, chính sách của công ty).
2. **Bổ sung** đầu vào của mô hình sinh bằng các tài liệu đó để thêm ngữ cảnh.
3. Mô hình sinh **trả lời dựa trên cả câu hỏi gốc lẫn thông tin vừa truy xuất**, nên đầu ra giàu ngữ cảnh và có cơ sở sự thật; prompt gồm ba phần: chỉ dẫn chú ý đến nội dung truy xuất, nội dung truy xuất, câu hỏi của người dùng. Có thể kèm bằng chứng cho câu trả lời.

**RAG giải quyết hạn chế thế nào**
- Giảm ảo giác nhờ neo vào dữ liệu thật.
- Giải quyết lỗi thời: **không cần huấn luyện lại mô hình**, chỉ cần cập nhật kho dữ liệu.
- Mở rộng ngữ cảnh hiệu dụng bằng việc kéo về các đoạn liên quan; tăng độ cụ thể; hiệu quả hơn vì mô hình tập trung tổng hợp thay vì sinh từ đầu.
- Giảm rò rỉ dữ liệu vì mô hình ít dựa riêng vào điều học lúc huấn luyện.
- Mô hình biết nói **"tôi không biết"** nếu kho dữ liệu không đủ để trả lời. Nhược điểm: nếu bộ truy xuất không đủ tốt thì câu hỏi có đáp án vẫn có thể không được trả lời.

**Hai thành phần chính:** **bộ truy xuất** (tìm đoạn hoặc tài liệu liên quan; có thể là phương pháp thống kê hoặc bộ truy xuất dựa mạng nơ-ron) và **bộ sinh** (mô hình sinh văn bản dùng ngữ cảnh đó).

**Ứng dụng:** hỏi đáp, sáng tạo nội dung, chăm sóc khách (lấy chính sách mới nhất từ cơ sở tri thức), công cụ tìm kiếm.

---

## Video: Áp dụng AI vào doanh nghiệp

**Lợi ích:** tăng hiệu quả nhờ tự động hoá việc lặp lại; ra quyết định tốt hơn nhờ phân tích dữ liệu lớn để dự đoán xu hướng thị trường, hành vi khách; cá nhân hoá dịch vụ; đẩy nhanh đổi mới. Theo một nghiên cứu được trích, 86% lãnh đạo doanh nghiệp cấp cao toàn cầu đã áp dụng AI để tăng hoặc tạo nguồn doanh thu (số liệu của nguồn).

**Ví dụ:** hệ gợi ý sản phẩm theo lịch sử duyệt và mua; trợ lý giọng nói; dự báo nhu cầu để tối ưu tồn kho, kho bãi, logistics; xe có tính năng hỗ trợ lái dùng thị giác máy tính và học sâu; hệ quản lý pin dự đoán nhu cầu năng lượng để điều chỉnh tăng tốc và điều hoà.

**Sáu bước áp dụng AI:**
1. **Xác định mục tiêu kinh doanh:** vấn đề cần giải, nỗi đau là gì, AI giúp đạt mục tiêu ra sao; cùng stakeholder đặt mục tiêu rõ.
2. **Xác định use case phù hợp:** phân tích kỹ quy trình để tìm chỗ AI áp dụng hiệu quả; ưu tiên việc lặp lại, tốn thời gian, dựa dữ liệu hoặc cần ra quyết định phức tạp.
3. **Sẵn sàng dữ liệu (một trong các bước quan trọng nhất):** thu thập, làm sạch, tổ chức; bỏ mâu thuẫn, điền khoảng trống, bảo đảm liên quan đến vấn đề.
4. **Xây năng lực AI trong tổ chức:** đào tạo nhân viên về khái niệm, công cụ, kỹ thuật AI.
5. **Triển khai giải pháp AI:** chọn công cụ và công nghệ phù hợp; triển khai **theo giai đoạn**, bắt đầu bằng dự án thí điểm rồi mở rộng; tích hợp trơn tru với hệ thống, quy trình sẵn có.
6. **Giám sát và tối ưu:** theo dõi hiệu suất đều đặn, phát hiện và xử lý vấn đề, cập nhật và tinh chỉnh mô hình.

---

## Video và bài đọc: Khung áp dụng AI

**Khung "thang AI" (bốn bước):** một khung có cấu trúc đưa tổ chức từ thu thập dữ liệu cơ bản đến tích hợp AI toàn diện.
1. **Thu thập (collect):** thu và lưu dữ liệu chất lượng cao từ nhiều nguồn (cơ sở dữ liệu, thiết bị IoT); xác định nguồn, triển khai công cụ thu thập, bảo đảm chất lượng.
2. **Tổ chức (organize):** làm sạch, phân loại, làm dữ liệu dễ truy cập cho phân tích; quản lý dữ liệu, quản trị và bảo mật; chính sách quản trị, lưu trữ tập trung.
3. **Phân tích (analyze):** khai thác tiềm năng AI qua phân tích nâng cao và mô hình học máy: xây, thử, triển khai mô hình; thuật toán thống kê và học máy, mô hình dự đoán, trực quan hoá insight, tinh chỉnh theo hiệu suất.
4. **Tích hợp (infuse):** đưa AI vào vận hành hằng ngày để nâng cao ra quyết định và tự động hoá: nhúng mô hình, tự động hoá quy trình, giám sát mô hình thời gian thực, đào tạo nhân viên. Ví dụ đưa insight AI vào CRM để tự động hoá chiến dịch marketing và tối ưu tồn kho.
- Khung dùng được ở y tế, tài chính, sản xuất, bán lẻ.

**Từ "+AI" sang "AI+":**
- **+AI:** AI là công cụ bổ sung vào quy trình sẵn có, lợi thế nhỏ và tăng dần.
- **AI+:** tích hợp **toàn diện**, AI là một phần cốt lõi của kinh doanh, thiết kế quy trình lấy AI làm thành phần nền tảng ngay từ đầu, không phải thứ thêm vào sau.
- Gồm: tích hợp toàn diện (từ đổi mới sản phẩm đến hiệu quả vận hành và văn hoá ra quyết định dựa AI); **chọn use case giá trị cao**, bắt đầu từ dự án có kết quả đo được rồi nhân rộng; chọn đúng công nghệ và kiến trúc (khả năng mở rộng, linh hoạt); **nền tảng dữ liệu vững** (tin cậy, minh bạch, được quản trị, tuân thủ quy định riêng tư và bảo mật); **đổi mới liên tục** và hiện đại hoá ứng dụng hiện có, có thể dùng nền tảng đám mây lai.

**Bài đọc: ba khung của các hãng lớn.** Dù khác về công cụ, cả ba đều có bốn thành phần chung:

| Thành phần | Nội dung |
| --- | --- |
| **Chuẩn bị dữ liệu** | Thu thập, làm sạch, tổ chức; bảo đảm chất lượng và độ liên quan cho huấn luyện |
| **Phát triển mô hình** | Thiết kế và huấn luyện mô hình bằng thuật toán và khung có sẵn |
| **Triển khai** | Tích hợp vào môi trường vận hành; đảm bảo mở rộng được và đáng tin cậy |
| **Tối ưu / cải tiến liên tục** | Giám sát và cải thiện hiệu suất; cập nhật mô hình theo dữ liệu và phản hồi mới |

**Tự kiểm tra**

- Vẽ pipeline RAG cho một chatbot hỏi đáp chính sách nội bộ.
- Vì sao sẵn sàng dữ liệu là bước dễ bị đánh giá thấp?
