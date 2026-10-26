---
title: "Kỹ thuật prompt văn bản: đặc tả, ngữ cảnh, zero-shot, few-shot, vòng phản hồi"
course: "Khoá 7: Generative AI: Prompt Engineering Basics"
module: "Module 2 · Kỹ thuật và cách tiếp cận viết prompt hiệu quả"
order: 720101
---

## Video: Các kỹ thuật prompt văn bản (text-to-text)

**Bối cảnh**

- Mô hình ngôn ngữ lớn (LLM) ngày càng to và phức tạp nên dấy lên câu hỏi về độ tin cậy, bảo mật và thiên kiến. Dùng prompt văn bản hiệu quả là một hướng giải quyết.
- **Prompt văn bản** là chỉ dẫn được soạn cẩn thận để điều hướng hành vi của LLM. Chất lượng đầu ra phụ thuộc vào cả **độ hiệu quả của prompt** lẫn **năng lực của mô hình.**

**Sáu kỹ thuật làm prompt hiệu quả**

| Kỹ thuật | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| **Đặc tả tác vụ (task specification)** | Nêu rõ mục tiêu cho mô hình để câu trả lời chính xác hơn | "Dịch câu tiếng Anh này sang tiếng Pháp" là chỉ dẫn rõ ràng |
| **Hướng dẫn theo ngữ cảnh (contextual guidance)** | Đưa chỉ dẫn cụ thể để đầu ra liên quan | "Viết một đoạn ngắn về New York" cho kết quả chung chung; "...nhấn mạnh các địa danh tiêu biểu" cho kết quả đúng trọng tâm |
| **Chuyên môn lĩnh vực (domain expertise)** | Dùng thuật ngữ chuyên ngành khi cần độ chính xác cao (y, luật, kỹ thuật) | "Giải thích nguyên nhân, triệu chứng, cách điều trị suy giáp, gồm nghiên cứu mới nhất và hướng dẫn y khoa" |
| **Giảm thiên kiến (bias mitigation)** | Ra chỉ dẫn tường minh để phản hồi trung tính | "Viết đoạn 100 từ về phẩm chất lãnh đạo, không thiên vị giới nào, đưa ví dụ cân bằng cho mọi giới" |
| **Đóng khung (framing)** | Giữ phản hồi trong ranh giới yêu cầu | "Tóm tắt bài về biến đổi khí hậu trong 100 từ, tập trung phát hiện chính và khuyến nghị" |
| **Vòng phản hồi người dùng (user feedback loop)** | Người dùng góp ý rồi tinh chỉnh prompt lặp lại | Nhờ viết bài thơ, thấy chưa vui thì bảo "làm hài hước hơn", mô hình sửa, người dùng duyệt |

**Zero-shot và few-shot**

- **Zero-shot:** mô hình trả lời có nghĩa cho prompt mà **không cần ví dụ hay huấn luyện thêm** cho đúng prompt đó. Ví dụ trong video: "chọn tính từ trong câu *Anita nấu những chiếc bánh ngon nhất khu phố*" → "ngon nhất" (best).
- **Few-shot:** khi việc phức tạp mà bạn khó mô tả nhu cầu, đưa vài **minh hoạ** ngay trong prompt để mô hình **học trong ngữ cảnh (in-context learning).** Các minh hoạ đóng vai trò điều kiện cho lần sinh tiếp theo.
  - Ví dụ trong video: cho hai mẫu "gợi ý điểm đến mùa hè nổi tiếng bãi biển đẹp" và "gợi ý điểm đến mùa thu nổi tiếng lá đổi màu". Sau đó yêu cầu "gợi ý một thành phố để khám phá", mô hình trả lời đúng kiểu đã học, ví dụ gợi ý Paris kèm lý do.
- **Gợi ý của tôi (tự đặt):** zero-shot hợp việc đơn giản, chuẩn; few-shot hợp khi cần **đúng định dạng hay giọng điệu** mà khó diễn tả bằng lời. Ví dụ muốn mô tả sản phẩm theo đúng một khuôn nhất định thì đưa hai đến ba mô tả mẫu thay vì viết dài về quy tắc (tự đặt).

**Lợi ích khi dùng prompt văn bản tốt**

- **Tăng khả năng giải thích (explainability):** người dùng hiểu và diễn giải được quá trình ra quyết định cùng lý do của mô hình. Điều này quan trọng để giải quyết vấn đề đạo đức và để các bên liên quan kiểm tra hành vi của mô hình có khớp quy định đạo đức, pháp lý của lĩnh vực.
- **Tăng độ tin cậy** của đầu ra.
- **Xây dựng niềm tin:** thấy được tác động trực tiếp của chỉ dẫn lên hành vi của mô hình thì tương tác minh bạch và có ý nghĩa hơn.

**Tự kiểm tra**

- Chọn một việc bạn hay giao cho AI và áp dụng đủ sáu kỹ thuật vào prompt.
- Khi nào bạn chọn few-shot thay vì zero-shot?
- Vòng phản hồi người dùng khác "hỏi một lần" ở điểm nào?
