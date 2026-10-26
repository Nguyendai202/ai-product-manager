---
title: "Quy trình AI, vì sao dự án sản phẩm AI thất bại và tổng kết Module 1"
course: "Khoá 9: Product Management: Building AI-Powered Products"
module: "Module 1 · Phương pháp, cơ hội và thách thức của AI"
order: 910104
---

## Video 1: Quy trình AI (The AI Process)

**Bốn bước của quy trình AI**

| Bước | Nội dung |
| --- | --- |
| **1. Đầu vào dữ liệu** | Dữ liệu là "nhiên liệu" chính. Chuyên gia dữ liệu thu thập từ nhiều nguồn, phát triển thuật toán bằng cách phân loại dữ liệu thành định dạng đọc được, thiết lập **đường ống dữ liệu (data pipeline)** để dữ liệu chảy thông suốt |
| **2. Xử lý dữ liệu** | Thuật toán (tập chỉ dẫn để máy thực hiện tác vụ, phân tích dữ liệu, ra quyết định) phân tích dữ liệu vào. **Thuật toán chỉ hữu dụng bằng dữ liệu được cấp** |
| **3. Đầu ra** | Hệ thống phân tích dữ liệu, nhận ra mẫu hình và dự đoán kết quả; đội dùng kết quả để ra quyết định |
| **4. Cập nhật** | AI học từ sai lầm: nếu kết quả không đạt, hệ thống điều chỉnh thuật toán và lặp lại để tăng độ chính xác |

**Đội trong quy trình AI:** nhà khoa học dữ liệu, kỹ sư dữ liệu, chuyên viên xử lý dữ liệu, chuyên gia lĩnh vực, kỹ sư học máy.

**Đội cần cùng đạt những gì**

1. **Thu thập dữ liệu đáng kể** (văn bản, ảnh, cảm biến); xác định dữ liệu cần và cách truy cập.
2. **Xử lý dữ liệu thô** (thiếu sót, sai, thừa): làm sạch, chuyển đổi, chuẩn hoá; xây đường ống đáp ứng nhu cầu cấp dữ liệu.
3. **Phát triển thuật toán và mô hình** xác định tính năng và chức năng sản phẩm cần; thuật toán phải chính xác và phụ thuộc đầu vào đúng.
4. **Thử nghiệm và chọn mô hình** tốt nhất sau khi hiểu nhu cầu kinh doanh và hệ thống.
5. **Cấu hình mô hình** để kết quả chính xác, không thiên kiến, đúng yêu cầu.
6. **Kiểm thử ngoài đời thực:** thứ chạy tốt trong phòng thí nghiệm có thể không chạy tốt ngoài thực tế → kiểm thử alpha, beta và các kiểm thử khác, phân tích phản hồi để xác nhận kết quả.
7. **Lặp:** phát triển mô hình thường "tiến hai bước, lùi một bước"; cần tinh chỉnh khi cần.
8. **Hỗ trợ triển khai,** thu phản hồi, cập nhật; theo dõi để vận hành đáp ứng kỳ vọng khách hàng.

**Kỹ năng AI PM cần trong quy trình này**

- **Kiến thức kỹ thuật** về AI (kết nối với chuyên gia kỹ thuật và quản lý để học thêm).
- **Cộng tác:** hiểu vai trò từng thành viên và hợp tác hiệu quả; **gỡ điểm nghẽn.**
- **Quản lý và lãnh đạo:** quản lý vòng đời sản phẩm từ đầu đến cuối: xác định vấn đề thị trường, xây chiến lược sản phẩm, xác định vai trò, lập đội liên chức năng.
- **Giao tiếp:** xác định yêu cầu dữ liệu, giám sát xử lý dữ liệu, bảo đảm có đường ống dữ liệu, đánh giá hiệu năng AI, giải thích AI cho người không chuyên.
- **Công cụ và kỹ thuật** để cộng tác, bảo đảm đúng thông tin, đúng lượng, đến đúng người kịp thời.
- **Kỹ năng kinh doanh:** tư duy chiến lược, giải quyết vấn đề, ra quyết định, đàm phán, gây ảnh hưởng, xử lý xung đột.

---

## Video 2: Vì sao dự án phát triển sản phẩm AI thất bại

**Bối cảnh**

- Theo một báo cáo mà video trích dẫn, khoảng **95% sản phẩm (kể cả có AI) thất bại.** Video nêu vài ví dụ tiêu biểu (không nêu tên ở đây): hệ thống lái hỗ trợ trên xe gặp nhiều lỗi và tai nạn khiến người tiêu dùng nghi ngờ độ an toàn; hệ thống tuyển dụng tự động bị dừng ngay sau khi ra mắt vì phân biệt đối xử với ứng viên nữ; một tập đoàn đầu tư hàng tỷ đô vào AI vận hành nhưng không đạt mục tiêu; nhiều vụ hệ thống nhận diện khuôn mặt dẫn tới bắt nhầm người vô tội. (Tôi không kiểm chứng độc lập con số 95% và các chi tiết; hãy coi là minh hoạ — tự đặt.)

**Bốn nhóm nguyên nhân chính**

1. **Hoạch định chiến lược kém:**
   - **Mục tiêu kinh doanh không rõ:** PM phải xác định nhu cầu hoặc vấn đề thị trường cụ thể, mô tả giải pháp; mọi bên liên quan **đồng thuận** là khả thi trước khi đi tiếp. Xác định điểm rà soát để tầm nhìn ban đầu còn đúng.
   - **Quản lý thay đổi kém.**
   - **ROI kém:** cân nhắc chi phí triển khai AI so với lợi ích tài chính, khuyến nghị dựa trên dữ liệu thay vì cảm xúc. **Công ty sẽ dừng sáng kiến AI nếu không có giá trị kinh tế.**
2. **Quản lý và lãnh đạo kém:**
   - Không hiểu AI → cam kết thấp. PM phải **giáo dục các bên liên quan** về giá trị AI.
   - Phải tập hợp thành viên từ nhiều chức năng/silo (nhà khoa học dữ liệu, kỹ sư, BA) và xây **kế hoạch truyền thông** xuyên các silo để cùng hiểu tầm nhìn, giải pháp, kế hoạch.
   - **Đạo đức:** dữ liệu thiên kiến, riêng tư, vi phạm sở hữu trí tuệ → PM triển khai các biện pháp bảo vệ.
3. **Thách thức công nghệ mới:**
   - **Phòng thí nghiệm khác thực tế:** cần kiểm thử beta kỹ trước khi ra mắt, nhờ chuyên gia **UX**, bảo đảm sản phẩm hiệu quả và ít lỗi.
   - **Dữ liệu** là nền tảng: phải chính xác, không thiên kiến, đầy đủ. Dữ liệu không đáng tin hoặc thiếu → sản phẩm thất bại.
   - **Thuật toán:** quyết định chỉ tốt bằng thuật toán; phải chính xác, đầy đủ, không thiên kiến.
   - **Công cụ:** đội AI đôi khi quan tâm công cụ hơn nhu cầu khách hàng. **Nhu cầu phải dẫn dắt công cụ, không phải ngược lại.**
4. **Vấn đề nhân sự:** dự án cần chuyên gia kỹ thuật cao. PM cần đầu tư đào tạo nội bộ hoặc thuê chuyên gia ngoài. Dù tăng chi phí và làm chậm lịch, không đầu tư sẽ dẫn đến sản phẩm chất lượng thấp và mất lợi thế cạnh tranh dài hạn.

---

## Video 3: Tình huống nghiên cứu "Frownies"

- Sản phẩm AI thất bại: **miếng dán mặt giảm nếp nhăn** khác mọi sản phẩm khác. Nguyên nhân thất bại: **PM thiếu hiểu biết về AI; đội không đầy đủ và quản lý kém; không xét và xử lý các yếu tố quan trọng ảnh hưởng hiệu năng sản phẩm.**
- Mục đích tình huống: để sản phẩm AI của bạn **không trở thành vụ "Frownies" tiếp theo.** (Video khá ngắn, chi tiết nằm ở bài đọc kèm mà tôi không lấy được.)

---

## Tổng kết Bài học 1 và 2 của Module 1

- AI PM dẫn dắt phát triển sản phẩm AI với sự kết hợp kỹ năng kỹ thuật và quản lý; lập và quản lý đội AI để bảo đảm ROI nhờ cộng tác liên chức năng.
- Giá trị AI: quyết định dựa trên dữ liệu, năng suất, cá nhân hoá, phân tích xu hướng, phản hồi khách hàng, đổi mới đột phá. Điều AI không thay được: phán đoán, đạo đức, cộng tác, dữ liệu, niềm tin.
- Đội gồm SME, kỹ sư AI, BA, kỹ sư/nhà khoa học/kiến trúc sư dữ liệu, kiến trúc sư hệ thống, DevOps, product owner. Thang Tuckman: form, storm, norm, perform.
- Truyền thông hiệu quả: có đích, tập trung giá trị, rõ khái niệm, use case, giải toả hiểu lầm, quản lý thay đổi (Lewin), minh bạch.
- Cơ hội: tạo ý tưởng, quản lý tác vụ, ra quyết định, phân khúc, phân tích đối thủ, chuỗi cung ứng, quản lý rủi ro. Thách thức: độ chính xác, phụ thuộc prompt, thiếu hơi ấm con người, thiên kiến, IP, niềm tin.
- Quy trình AI gồm bốn bước: đầu vào dữ liệu, xử lý, đầu ra, cập nhật. Dự án thất bại thường do chiến lược kém, quản lý kém, công nghệ mới, nhân sự.

**Tự kiểm tra cuối module**

- Chọn một dự án AI bạn biết và chẩn đoán rủi ro thất bại theo bốn nhóm nguyên nhân (tự đặt).
- Kể bốn bước quy trình AI và vai trò của PM ở mỗi bước.
- "Nhu cầu phải dẫn dắt công cụ" nghĩa là gì trong lúc chọn mô hình AI cho sản phẩm?
