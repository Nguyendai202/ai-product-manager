---
title: "Đạo đức AI, dùng AI có trách nhiệm và cách triển khai đạo đức AI"
course: "Khoá 5: Introduction to Artificial Intelligence (AI)"
module: "Module 4 · Vấn đề, mối lo và đạo đức"
order: 540101
---

## Video 1: Cân nhắc đạo đức và sử dụng AI có trách nhiệm

**Ý chính**

- **Ca nghiên cứu:** một công ty xây công cụ AI tự động lọc danh sách ứng viên nhưng hệ thống bộc lộ **thiên kiến giới tính**: phạt các từ gắn với nữ vì dữ liệu huấn luyện chủ yếu là ứng viên nam. Dù đã cố sửa, công ty ngừng dùng công cụ để giữ cam kết về đa dạng và bình đẳng. Bài học: cần cân nhắc đạo đức trong phát triển AI để lợi ích xã hội lớn hơn tác hại.
- AI nâng cao hiệu quả, đổi mới và ra quyết định ở y tế, giáo dục, tài chính, giải trí: phân tích lượng dữ liệu lớn, nhận mẫu hình, dự đoán để cứu mạng, cải thiện dịch vụ, thúc đẩy kinh tế. "Quyền lực lớn đi kèm trách nhiệm lớn."
- **Năm khía cạnh đạo đức chính:**

| Khía cạnh | Nội dung và cách xử lý |
| --- | --- |
| **Riêng tư và bảo mật dữ liệu** | AI dựa nhiều vào dữ liệu, thường gồm thông tin cá nhân nhạy cảm. Cần biện pháp bảo vệ mạnh để ngăn truy cập và rò rỉ trái phép; tuân thủ quy định bảo vệ dữ liệu (như GDPR, CCPA), có sự đồng ý của người dùng, ẩn danh hoá khi có thể. Ví dụ một công ty nhận diện khuôn mặt thu hàng tỷ ảnh từ mạng xã hội mà không có sự đồng ý của người dùng, gây tranh luận lớn về đạo đức và nhu cầu bảo vệ riêng tư mạnh hơn |
| **Thiên kiến và công bằng** | AI có thể khuếch đại thiên kiến có sẵn trong dữ liệu huấn luyện, dẫn đến đối xử bất công trong tuyển dụng, cho vay, thực thi pháp luật. Giải pháp: dùng **tập dữ liệu đa dạng**, thuật toán có xét công bằng, **kiểm toán liên tục** kết quả thiên lệch. Công bằng không chỉ là vấn đề kỹ thuật mà là đòi hỏi của xã hội |
| **Minh bạch và trách nhiệm giải trình** | Người dùng cần biết AI ra quyết định thế nào, dùng dữ liệu gì, thông tin cá nhân được xử lý ra sao. Khi AI gây hại hoặc quyết định sai phải rõ **ai chịu trách nhiệm** và sửa thế nào |
| **Hệ tự chủ và giám sát của con người** | Hệ tự chủ ở lĩnh vực trọng yếu (y tế, giao thông, quân sự) nên có cơ chế **người trong vòng lặp (human-in-the-loop)** để phán đoán và cân nhắc đạo đức của người luôn là một phần của quyết định |
| **Tiếp cận và công bằng** | Nếu chỉ một nhóm đặc quyền tiếp cận AI, nó sẽ làm trầm trọng thêm bất bình đẳng. Cần dân chủ hoá AI, kể cả cộng đồng thiếu điều kiện, và đầu tư giáo dục, hạ tầng để thu hẹp khoảng cách số |

- **Theo từng lĩnh vực** có thách thức riêng: y tế (ưu tiên phúc lợi và bảo mật bệnh nhân), thực thi pháp luật (giám sát và dự đoán tội phạm đặt ra lo ngại lớn về riêng tư và quyền tự do công dân). Mỗi lĩnh vực cần hướng dẫn đạo đức riêng.
- **Tác động môi trường:** huấn luyện và chạy mô hình lớn tiêu tốn nhiều năng lượng, góp phần phát thải. Giải pháp: thuật toán tiết kiệm năng lượng, phần cứng tiến bộ, tối ưu thuật toán, dùng năng lượng tái tạo cho trung tâm dữ liệu.
- Đạo đức AI **là quá trình liên tục, không phải thành tựu một lần:** giám sát hệ thống và tác động đều đặn, có cơ chế phản hồi từ người dùng và các bên liên quan, cải tiến liên tục theo hiểu biết đạo đức mới, công nghệ và nhu cầu xã hội.
- **Dùng AI có trách nhiệm:** dùng tập dữ liệu đa dạng; thiết kế hệ tự chủ có người trong vòng lặp; bảo đảm AI dễ tiếp cận và lợi ích đến mọi nhóm xã hội; tối ưu thuật toán cho tiết kiệm năng lượng; dùng năng lượng tái tạo cho trung tâm dữ liệu.

---

## Video 2: Cách triển khai đạo đức AI

**Ý chính**

- Làm sao doanh nghiệp biết giải pháp AI có nguy cơ vượt ranh giới đạo đức? Bước đầu: **đặt bộ nguyên tắc** để theo khi tạo hoặc tương tác với hệ AI. Ví dụ ba nguyên tắc:
  1. **AI nhằm tăng cường trí tuệ con người, không thay thế chúng ta.**
  2. **Dữ liệu và insight thuộc về người tạo ra chúng:** dữ liệu của khách vẫn là của khách, không phải của ta.
  3. **Giải pháp phải minh bạch và giải thích được:** cần thấy ai huấn luyện hệ thống, dùng dữ liệu gì, và nó ảnh hưởng thế nào đến khuyến nghị của thuật toán cho người dùng cuối.
- **Kiểm tra mình có tuân thủ không:** dùng hoạt động tư duy thiết kế như **lập bản đồ lưỡng phân (dichotomy mapping)**: liệt kê mọi tính năng của giải pháp và lợi ích cùng mục đích sử dụng; rồi xem từng tính năng **có thể gây hại không**.
  - Ví dụ khách sạn có hệ gợi ý phòng và quà trong phòng theo sở thích (người thích nhảy dù có phòng tầng cao). Lợi ích rõ cho khách, nhưng phải hỏi: dữ liệu có bị bán cho nhà quảng cáo không? Có an toàn không? Người dùng khuyết tật có dùng được giao diện và có nằm trong thuật toán không?
- **Sửa vấn đề:**
  - Đặt **rào chắn (guard rails)**: luật hệ AI phải theo (ví dụ "không bán dữ liệu cho nhà quảng cáo").
  - **Dữ liệu huấn luyện đa dạng**, nếu không sẽ không phục vụ được mọi người dùng.
  - Dùng **công cụ mã nguồn mở** để phát hiện và giảm thiên kiến trong mô hình học máy, hoặc công cụ hỗ trợ tuân thủ quy định riêng tư và phát hiện độ bất định của mô hình.
- AI là trách nhiệm của tất cả chúng ta: bảo đảm AI do chúng ta tạo và dùng an toàn, bảo mật và được con người xây dựng vì con người.

**Tự kiểm tra**

- Dùng lập bản đồ lưỡng phân cho một tính năng AI trong sản phẩm bạn quen: liệt kê tính năng, lợi ích, rủi ro gây hại.
- "Người trong vòng lặp" nên có mặt ở những quyết định nào?
