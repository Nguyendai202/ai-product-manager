---
title: "Tree-of-Thought, cách chọn kỹ thuật prompt và tổng kết Module 2"
course: "Khoá 7: Generative AI: Prompt Engineering Basics"
module: "Module 2 · Kỹ thuật và cách tiếp cận viết prompt hiệu quả"
order: 720103
---

## Video 1: Tree-of-Thought (cây suy nghĩ)

**Ý chính**

- **Trực giác:** hai người chọn chỗ ăn: trước hết nghĩ đến loại món, rồi thu hẹp theo ngân sách và khoảng cách, cuối cùng chọn quán hợp khẩu vị. Đó là suy nghĩ dạng cây.
- **Tree-of-Thought (ToT)** cấu trúc prompt như **một cái cây với các nhánh phân cấp,** mỗi nhánh là một hướng suy luận. AI đánh giá **nhiều khả năng cùng lúc,** cân nhắc kết quả tiềm năng và tập trung vào lựa chọn hứa hẹn nhất. Hữu ích cho vấn đề phức tạp vì có hướng dẫn tường minh và khám phá nhiều lời giải.

**Ví dụ 1 trong video: doanh số cửa hàng trực tuyến giảm**

- Prompt: cửa hàng online giảm 20% doanh số trong ba tháng dù lượng truy cập ổn định. Nguyên nhân có thể là gì và nên xử lý thế nào? **Hãy nghĩ ba nguyên nhân khả dĩ,** tiếp cận giải pháp từ nhiều hướng và đưa ra **một kế hoạch hành động có cấu trúc.**
- Mô hình: (1) nêu ba nguyên nhân khả dĩ nhất: tỷ lệ chuyển đổi kém, vấn đề sản phẩm hoặc giá, yếu tố thị trường bên ngoài; (2) đề ra chiến lược cho từng nguyên nhân; (3) đưa kế hoạch triển khai theo ngắn hạn, trung hạn, dài hạn.
- Vì sao hiệu quả: thay vì trả lời chung chung, mô hình tách vấn đề thành ba nguyên nhân riêng, đánh giá cách khắc phục từ các góc nhìn (trải nghiệm người dùng, giá, xu hướng thị trường), rồi tổng hợp thành kế hoạch từng bước. Giống cách chuyên gia **thử song song nhiều giả thuyết, loại bớt phương án yếu và dựng lời giải toàn diện.**

**Ví dụ 2 trong video: chuyển nghề**

- Prompt: đang cân nhắc chuyển nghề nhưng chưa chắc; có ba hướng (nâng cấp kỹ năng trong lĩnh vực hiện tại, chuyển sang lĩnh vực liên quan, thay đổi hoàn toàn). Với mỗi hướng, hãy chia thành quyết định con và các bước cần làm, đánh giá rủi ro và lợi ích, giúp tôi xác định yếu tố cần xét để chọn hướng tốt nhất.
- Mô hình duyệt từng nhánh: nâng cấp kỹ năng thì bám xu hướng ngành nhưng tốn thời gian, tiền; sang lĩnh vực liên quan thì mở rộng cơ hội nhưng kỹ năng cũ có thể không khớp; thay đổi hoàn toàn thì thoả mãn cá nhân hơn nhưng rủi ro tài chính và khả năng thất bại. Cuối cùng **để quyết định cho người dùng,** chỉ nêu các điểm cân nhắc như sở thích, khả năng chịu rủi ro, nhu cầu thị trường.

**Thách thức của ToT**

- **Sinh quá mức (overgeneration):** mô hình khám phá quá nhiều nhánh hoặc đi lạc vào hướng ít liên quan, khiến phản hồi dài và loãng.
- Có thể coi **mọi nhánh lập luận đều giá trị như nhau,** điều không đúng, nhất là khi rủi ro cao hay gấp rút cần ưu tiên.
- Rủi ro **tự tin giả:** mô hình dựng chuỗi lập luận chi tiết quanh logic sai hoặc dữ kiện sai, tạo cảm giác đáng tin cho kết luận yếu.

**CoT so với ToT (tóm tắt của tôi, tự đặt)**

| | Chain-of-Thought | Tree-of-Thought |
| --- | --- | --- |
| Hình dạng | Một chuỗi các bước nối tiếp | Nhiều nhánh song song rồi hội tụ |
| Hợp với | Bài toán có đường đi rõ, cần tính đúng từng bước | Vấn đề mơ hồ, nhiều hướng, cần so sánh phương án |
| Rủi ro chính | Lỗi đầu chuỗi lan ra | Lan man, tự tin giả |

---

## Video 2: Chuyên gia nói về cách chọn kỹ thuật prompt

**Các yếu tố cần cân nhắc khi chọn cách tiếp cận**

1. **Mục tiêu tác vụ:** sinh và tóm tắt văn bản, sinh mã, dịch mã, sinh ảnh... nên xác định bạn đang giải quyết việc gì trước.
2. **Năng lực mô hình:** mỗi mô hình nhắm đến các use case khác nhau. Cần rõ cách sắp xếp và liên kết nội dung muốn có, tức quay về **ngữ cảnh phân tích.**
3. **Sự rõ ràng trong tư duy:** nêu tác vụ càng chi tiết, rõ ràng càng tốt; nếu không đầu ra sẽ chung chung hoặc tệ hơn là dính **ảo giác (hallucination).**
4. **Cân bằng:** giữa cụ thể và mở; thử nhiều góc nhìn; chỉnh prompt theo thế mạnh của mô hình và cung cấp đủ ngữ cảnh.
5. **Ba yếu tố của prompt tốt:** rõ ràng, ngữ cảnh và các đặc điểm (features) mong muốn, sắp xếp đúng thứ tự. Ví dụ sinh mã thì liệt kê các tính năng cần có theo trình tự, mô tả cụ thể, nếu không sẽ nhận câu trả lời chung chung.
6. **Yêu cầu về dữ liệu:** có việc cần nhiều dữ liệu, có việc cần ít.
7. **Độ nhạy ngữ cảnh:** cần cung cấp bao nhiêu nền tảng để mô hình trả lời đúng ý.
8. **Cơ chế phản hồi:** để biết prompt nào ra phản hồi ra sao, từ đó cải thiện cách tương tác và nâng chất lượng đầu ra.

---

## Tổng kết Bài học 2: Các kỹ thuật prompt engineering

- Prompt văn bản cải thiện độ tin cậy và chất lượng của LLM bằng sáu kỹ thuật: đặc tả tác vụ, hướng dẫn theo ngữ cảnh, chuyên môn lĩnh vực, giảm thiên kiến, đóng khung, vòng phản hồi người dùng.
- **Zero-shot** là trả lời có nghĩa mà không cần huấn luyện trước cho prompt đó; **few-shot** dựa vào học trong ngữ cảnh, đưa minh hoạ ngay trong prompt.
- Dùng prompt văn bản hiệu quả mang lại lợi ích: tăng khả năng giải thích, xử lý khía cạnh đạo đức và xây niềm tin.
- **Interview pattern** hơn cách hỏi thông thường vì là cuộc trao đổi động, lặp.
- **Chain-of-Thought** khơi gợi suy nghĩ từng bước, tăng khả năng nhận thức của mô hình.
- **Tree-of-Thought** xây trên CoT, cấu trúc prompt phân cấp như cây để dẫn dắt suy luận và đầu ra.

**Tự kiểm tra cuối module**

- Với bài toán "nên ưu tiên tính năng nào cho quý tới", bạn chọn CoT hay ToT? Vì sao?
- Viết một prompt ToT cho quyết định "tự xây hay mua giải pháp" (tự đặt).
- Liệt kê ba yếu tố bạn cân nhắc trước khi chọn kỹ thuật prompt.
