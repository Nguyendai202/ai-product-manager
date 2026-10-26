---
title: "Giới thiệu khoá 7, prompt là gì và prompt engineering là gì"
course: "Khoá 7: Generative AI: Prompt Engineering Basics"
module: "Module 1 · Prompt engineering cho AI sinh nội dung"
order: 710101
---

## Video 1: Giới thiệu khoá 7

**Ý chính**

- Nguyên tắc nền: **chuyên gia biết mọi câu trả lời nếu bạn hỏi đúng câu hỏi.** Cũng là nguyên tắc để thiết kế prompt cho mô hình AI sinh nội dung (chatbot, công cụ sinh ảnh, âm thanh, video, thế giới ảo). Prompt tối ưu phản hồi của mô hình; biết viết prompt hiệu quả và trực tiếp giúp tạo nội dung chính xác và liên quan hơn.
- Dành cho người mới: chuyên gia, người đam mê, người thực hành, sinh viên, không đòi hỏi nền tảng. Sau khoá bạn có thể:
  - Giải thích khái niệm và vai trò của prompt engineering với mô hình AI sinh nội dung.
  - Áp dụng thực hành tốt nhất khi tạo prompt.
  - Đánh giá các công cụ prompt engineering thường dùng.
  - Áp dụng các kỹ thuật và cách tiếp cận phổ biến để viết prompt hiệu quả.
- Ba module, mỗi module một đến hai giờ:
  1. **Khái niệm prompt engineering:** định nghĩa prompt và các thành phần; thực hành tốt nhất; đánh giá công cụ.
  2. **Kỹ thuật và cách tiếp cận:** mẫu phỏng vấn (interview pattern), chuỗi suy nghĩ (chain-of-thought), cây suy nghĩ (tree-of-thought); kỹ thuật zero-shot và few-shot.
  3. **Bài kiểm tra, dự án và tổng kết:** dự án cuối khoá, bài kiểm tra, bảng thuật ngữ và gợi ý bước học tiếp; có thêm nội dung tuỳ chọn về prompt chuyển văn bản thành ảnh và tính năng prompt engineering trên nền tảng.
- Cách học: video và bài đọc, lab thực hành và dự án cuối khoá để tối ưu kết quả bằng prompt hiệu quả, bài kiểm tra nhỏ, diễn đàn, video quan điểm chuyên gia.

---

## Video 2: Prompt là gì?

**Ý chính**

- Một năng lực quan trọng của mô hình sinh nội dung là đầu ra gần giống thứ con người tạo ra: liên quan, đúng ngữ cảnh, giàu trí tưởng tượng, tinh tế và chính xác về ngôn ngữ. Một yếu tố then chốt tạo ra đầu ra đó là **prompt.**
- **Prompt** là bất kỳ đầu vào nào bạn đưa cho mô hình sinh nội dung để tạo đầu ra mong muốn; có thể coi là **chỉ dẫn** bạn đưa cho mô hình. Ví dụ: "Viết một đoạn văn ngắn mô tả điểm nghỉ dưỡng yêu thích của bạn", "Viết mã HTML tạo danh sách chọn thành phố trong biểu mẫu trực tuyến." Prompt cũng có thể là **chuỗi chỉ dẫn** làm tinh chỉnh đầu ra từng bước (ví dụ viết truyện ngắn về một nhà khoa học nghiên cứu sự sống trên sao Hoả, rồi hỏi tiếp ông đã gặp những thách thức gì).
- Prompt có thể chứa câu hỏi, văn bản ngữ cảnh, mẫu hoặc ví dụ dẫn hướng, đầu vào một phần. Dựa trên yêu cầu bằng ngôn ngữ tự nhiên này, mô hình thu thập thông tin, suy luận và đưa ra giải pháp sáng tạo.
- **Prompt ngây thơ (naive prompting)** là hỏi mô hình theo cách đơn giản nhất và cho đầu ra chung chung. Ví dụ muốn truyện về một nông dân thành doanh nhân giàu có và có ảnh hưởng trong mười năm: viết "câu chuyện người giàu từ thị trấn nhỏ, khó khăn và thành tựu" thì ra kết quả chung chung. Chỉ cần chỉnh nhỏ như thêm ngữ cảnh và cấu trúc rõ ràng là kết quả khác hẳn.
- Ví dụ ảnh: "ảnh hoàng hôn giữa núi" quá ngắn, thiếu mô tả chi tiết; viết lại "tạo một hình ảnh mô tả hoàng hôn yên bình trên thung lũng sông nằm giữa núi."
- **Bốn thành phần của một prompt tốt:**

| Thành phần | Vai trò | Ví dụ (đề tài tác động của nóng lên toàn cầu) |
| --- | --- | --- |
| **Chỉ dẫn (instruction)** | Hướng dẫn rõ về tác vụ cần thực hiện, lái hành vi của mô hình | "Viết một bài luận 600 từ phân tích tác động của nóng lên toàn cầu đến sinh vật biển" |
| **Ngữ cảnh (context)** | Thiết lập hoàn cảnh của chỉ dẫn, khung để sinh nội dung liên quan | "Trong vài thập kỷ gần đây, nóng lên toàn cầu làm mực nước biển dâng, bão mạnh hơn, thời tiết thay đổi, tác động nặng lên sinh vật biển..." |
| **Dữ liệu đầu vào (input data)** | Thông tin bạn cung cấp để mô hình tham chiếu | "Bạn được cung cấp bộ dữ liệu nhiệt độ và mực nước biển ở Thái Bình Dương..." |
| **Chỉ báo đầu ra (output indicator)** | Chuẩn để đánh giá đầu ra: giọng điệu, phong cách, độ dài, chất lượng | "bài luận 600 từ", đánh giá theo độ rõ của phân tích và dẫn chứng |

---

## Video 3: Prompt engineering là gì?

**Ý chính**

- **Prompt engineering** là quá trình **thiết kế prompt hiệu quả** để có phản hồi tốt hơn và đúng mong muốn. Mô hình sinh nội dung có tiềm năng bổ trợ sáng tạo của con người, nhưng nếu prompt không chính xác thì có thể ra kết quả kém, thậm chí thông tin sai hoặc gây hiểu lầm.
- Đó là sự pha trộn của **phân tích phản biện, sáng tạo và hiểu biết kỹ thuật.** Không chỉ là hỏi đúng câu hỏi mà là **đặt câu hỏi đúng ngữ cảnh, kèm đúng thông tin và kỳ vọng kết quả.**
- **Ví dụ trong video:** thuyền trưởng một con tàu ở Đại Tây Dương cần dự báo thời tiết chính xác cho một vị trí và thời điểm cụ thể. Prompt "dự báo thời tiết Đại Tây Dương" sẽ không đủ. Anh phải nêu ngữ cảnh (kinh độ và vĩ độ của khu vực, khoảng thời gian dự báo) và nêu rõ cần thông tin nào: gió, chiều cao sóng, xác suất mưa, độ che phủ mây, bão có thể ảnh hưởng hành trình.
- **Quy trình lặp sáu bước:**
  1. **Xác định mục tiêu:** biết chính xác bạn muốn mô hình tạo ra gì (ví dụ tổng quan lợi ích và rủi ro của AI trong ô tô).
  2. **Soạn prompt đầu tiên:** có thể là câu hỏi, chỉ thị hoặc tình huống.
  3. **Thử prompt:** chạy và phân tích phản hồi. Phản hồi có thể liên quan nhưng thiếu góc nhìn bạn muốn (ví dụ không nêu mối lo đạo đức).
  4. **Phân tích phản hồi:** xem có khớp mục tiêu không, ghi chú chỗ thiếu.
  5. **Tinh chỉnh prompt:** cụ thể hơn, thêm ngữ cảnh, đổi cách diễn đạt (ví dụ yêu cầu nêu cả cân nhắc đạo đức, tác động tích cực và tiêu cực, các lĩnh vực như lái tự động, phân tích giao thông thời gian thực, và thách thức như độ phức tạp kỹ thuật, an ninh mạng).
  6. **Lặp lại** ba bước cuối đến khi hài lòng. Sau vài vòng, prompt cuối cùng nhấn mạnh phần cần, yêu cầu phân tích kỹ, có ví dụ và khuyến khích tư duy phản biện.
- **Vì sao quan trọng:**
  - **Tối ưu hiệu quả mô hình:** khai thác tối đa năng lực mà không cần huấn luyện lại rộng rãi.
  - **Tăng hiệu năng cho tác vụ cụ thể:** phản hồi tinh tế, có ngữ cảnh.
  - **Hiểu giới hạn của mô hình:** mỗi lần tinh chỉnh và quan sát phản hồi giúp thấy điểm mạnh yếu, định hướng cải tiến về sau.
  - **Tăng an toàn:** prompt thiết kế tốt tránh sinh nội dung có hại do prompt tệ.

**Tự kiểm tra**

- Viết lại prompt "kể về biến đổi khí hậu" thành prompt có đủ bốn thành phần.
- Quy trình sáu bước khác việc "hỏi một lần rồi dùng luôn" ở điểm nào?
