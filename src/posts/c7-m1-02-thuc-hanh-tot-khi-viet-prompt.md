---
title: "Thực hành tốt nhất khi viết prompt: rõ ràng, ngữ cảnh, chính xác, vai trò"
course: "Khoá 7: Generative AI: Prompt Engineering Basics"
module: "Module 1 · Prompt engineering cho AI sinh nội dung"
order: 710102
---

## Video 1: Bốn chiều của một prompt tốt

Viết prompt hiệu quả giúp bạn kiểm soát **phong cách, giọng điệu và nội dung** đầu ra. Thực hành tốt nhất áp dụng theo bốn chiều: **rõ ràng, ngữ cảnh, chính xác, và nhập vai (persona).**

**1. Rõ ràng (clarity)**
- Dùng ngôn ngữ đơn giản, thẳng thắn; viết prompt không mơ hồ, dễ hiểu. Thuật ngữ chuyên ngành có thể làm mô hình hoặc người dùng bối rối, nên dùng từ phổ thông.
- Prompt mơ hồ dẫn đến phản hồi lệch ý, nên mô tả rõ tác vụ mô hình cần làm.
- **Ví dụ:** "Bàn về các quá trình nấu ăn diễn ra trên các lá kèm của cây nhờ ánh sáng mặt trời, đồng thời nêu chất màu xanh và tầm quan trọng của ánh sáng, không khí và nước với phần trên mặt đất của cây." Prompt này mơ hồ, nhiều thuật ngữ khó và không nêu quá trình muốn bàn. **Viết lại:** "Giải thích quá trình quang hợp ở thực vật, nêu vai trò của chất diệp lục và cách ánh sáng mặt trời, carbon dioxide và nước đóng góp cho chức năng sinh học này."

**2. Ngữ cảnh (context)**
- Ngữ cảnh giúp mô hình hiểu tình huống hoặc chủ đề: giới thiệu ngắn về hoàn cảnh cần phản hồi, thông tin liên quan hoặc chi tiết cụ thể (người, nơi, sự kiện, khái niệm).
- **Ví dụ:** "Viết về điều xảy ra khi Chiến tranh Cách mạng bùng nổ năm 1775" thiếu ngữ cảnh. **Viết lại:** "Mô tả các sự kiện lịch sử dẫn tới Chiến tranh Cách mạng Mỹ, tập trung vào các sự kiện chính như vụ đổ trà ở Boston, trận Saratoga... Làm nổi bật căng thẳng giữa các thuộc địa Mỹ và chính quyền Anh, giải thích các sự kiện này dẫn tới bùng nổ chiến tranh năm 1775 ra sao."

**3. Chính xác (precision)**
- Chính xác giúp phác thảo yêu cầu: nếu bạn tìm kiểu phản hồi cụ thể thì nói rõ. **Đưa ví dụ vào prompt** giúp mô hình hiểu kiểu phản hồi bạn muốn và định hướng cách nghĩ của nó.
- **Ví dụ:** "Nói về cung và cầu và nó bị tác động ra sao trong kinh tế" không nêu kiểu phản hồi hay ví dụ. **Viết lại:** "Giải thích khái niệm cung và cầu trong kinh tế; mô tả việc cầu tăng ảnh hưởng đến giá thế nào bằng ví dụ minh hoạ như thị trường điện thoại thông minh. Tương tự, giải thích hệ quả của cung giảm với giá bằng cách so sánh với tình huống gián đoạn sản xuất dầu."

**4. Nhập vai (role play, persona pattern)**
- Prompt viết từ góc nhìn của một nhân vật hay vai cụ thể giúp mô hình tạo phản hồi phù hợp góc nhìn đó. Cần cung cấp chi tiết ngữ cảnh để mô hình nhập vai hiệu quả (nhân vật lịch sử, hư cấu hoặc một nghề).
- **Ví dụ:** "Viết nhật ký mô tả hệ động thực vật lạ của một hành tinh người ngoài hành tinh chưa khám phá" chỉ cho mô tả khoa học. **Viết lại:** "Hãy đóng vai một phi hành gia vừa hạ cánh xuống hành tinh chưa được khám phá. Viết nhật ký mô tả hệ động thực vật lạ bạn gặp, như màu bầu trời và những âm thanh lạ vang trong cảnh quan. Hãy thể hiện cảm xúc háo hức, tò mò và chút lo lắng khi ghi lại chuyến đi phi thường này."

**Tóm lại:** rõ ràng = ngôn ngữ đơn giản, súc tích; ngữ cảnh = nền và chi tiết cần thiết; chính xác = cụ thể và có ví dụ; nhập vai = nhận một persona kèm ngữ cảnh. Hãy điều chỉnh theo nhu cầu để có kết quả tối ưu.

---

## Video 2: Chuyên gia nói về thực hành tốt nhất khi viết prompt

**Ý chính**

- Prompt engineering là bước rất quan trọng vì đó là cách ta tương tác với mô hình và yêu cầu kết quả mong muốn.
- **Rõ ràng và cụ thể** trong yêu cầu. Khi huấn luyện con người ta thường hỏi mở để họ khám phá, nhưng với mô hình AI nên **cụ thể và có định hướng hơn.**
- **Ba điểm chung nhất của một prompt tốt:** nêu rõ yêu cầu; cung cấp ngữ cảnh thật rõ (bạn nhắm ứng dụng nào); liệt kê tất cả đặc điểm bạn muốn ở phản hồi.
- Hình dung đang hướng dẫn một "robot siêu sáng tạo": rõ và súc tích nhưng **đừng quá ra lệnh,** chừa chỗ cho ý tưởng riêng của nó. **Thử độ dài:** đôi khi một câu là đủ, đôi khi cần thêm chi tiết.
- Cung cấp **bối cảnh nền**; dùng ngôn ngữ tự nhiên, tránh từ khó và mơ hồ; **đưa ví dụ** (cặp hỏi-đáp, cấu trúc hoặc phong cách phản hồi) để mô hình dùng làm mẫu.
- Dùng ngôn ngữ cụ thể và nhắc tới **chuyên gia** (chuyên gia y tế, quản lý sản phẩm...): vai trò hoặc lĩnh vực cụ thể giúp mô hình tinh chỉnh và tập trung. Ví dụ: "Với tư cách một quản lý sản phẩm, giúp tôi viết tuyên bố vấn đề theo định dạng chuẩn" cho kết quả nhất quán.
- **Lặp lại:** hỏi, đánh giá, chỉnh. Có thể đặt **ràng buộc** (giới hạn nội dung, tránh một cấu trúc, đưa hướng dẫn), giới hạn số token hoặc cửa sổ ngữ cảnh. Cân bằng giữa **sáng tạo hay ngẫu nhiên** của mô hình và việc bám ngữ cảnh liên quan.
- Mô hình mới có nhiều bộ nhớ hơn nên nhớ nội dung đang nói; nếu thiếu thông tin thì bảo nó bổ sung, viết lại.
- **Nếu không biết cách hỏi, cứ hỏi:** "cách tốt nhất để tôi nhắc bạn tạo sơ đồ luồng là gì?" và nó sẽ tự chỉ loại prompt phù hợp.
- Thực hành làm nên hoàn hảo: thử nhiều cách diễn đạt; mỗi mô hình có thế mạnh riêng nên **điều chỉnh prompt theo thế mạnh đó**; thêm bối cảnh như câu chuyện hoặc tâm trạng để mô hình hiểu bạn nhắm tới điều gì.

**Tự kiểm tra**

- Lấy một prompt bạn hay dùng và chấm nó theo bốn chiều rõ ràng, ngữ cảnh, chính xác, nhập vai.
- Vì sao nên nhờ chính mô hình gợi ý cách viết prompt?
