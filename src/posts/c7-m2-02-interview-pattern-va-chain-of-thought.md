---
title: "Interview pattern và Chain-of-Thought"
course: "Khoá 7: Generative AI: Prompt Engineering Basics"
module: "Module 2 · Kỹ thuật và cách tiếp cận viết prompt hiệu quả"
order: 720102
---

## Video 1: Interview pattern (mẫu phỏng vấn)

**Ý chính**

- **Interview pattern** là chiến lược thiết kế prompt bằng cách **mô phỏng một cuộc phỏng vấn:** thay vì đưa một prompt tĩnh, bạn ra chỉ dẫn để **mô hình chủ động hỏi lại bạn** các câu cần thiết.
- **Cách hoạt động:**
  1. Bạn giao vai và mục tiêu cho mô hình, yêu cầu nó **hỏi từng câu một** để thu thập thông tin.
  2. Mô hình đặt các câu hỏi tiếp theo, mỗi câu dựa trên câu trả lời trước.
  3. Dựa trên câu trả lời của bạn, mô hình lấy thông tin liên quan, xử lý và đưa phản hồi đã được tối ưu. **Bạn cung cấp càng nhiều thông tin thì kết quả càng tốt.**
- **Ví dụ trong video:** muốn mô hình làm chuyên gia du lịch lập hành trình. Prompt: "Bạn sẽ đóng vai chuyên gia du lịch dày dạn. Mục tiêu là cùng tôi thực hiện một buổi lập kế hoạch chuyến đi toàn diện. Hãy bắt đầu bằng chuỗi câu hỏi chi tiết, từng câu một, để thu thập mọi thông tin cần thiết nhằm tạo lịch trình phù hợp nhất với sở thích, mối quan tâm và ngân sách của tôi." Mô hình sẽ hỏi: bạn thích loại điểm đến nào, kỳ nghỉ lý tưởng gồm hoạt động gì, bạn thường lên kế hoạch ra sao, có quan tâm yếu tố văn hoá lịch sử không, thích loại chỗ ở nào, cân đối ngân sách với trải nghiệm thế nào.
- **Vì sao tốt hơn prompt thông thường:** là cuộc **trao đổi qua lại, linh hoạt và lặp**, giúp làm rõ yêu cầu và dẫn dắt phản hồi theo thời gian thực. Người dùng tối ưu kết quả tốt hơn.
- **Gợi ý của tôi (tự đặt):** dùng mẫu này khi bạn chưa biết hết mình cần cung cấp thông tin gì, ví dụ nhờ AI giúp viết bản mô tả tính năng: bảo nó phỏng vấn bạn về người dùng, vấn đề, ràng buộc trước khi viết (tự đặt).

---

## Video 2: Chain-of-Thought (chuỗi suy nghĩ)

**Ý chính**

- **Chain-of-Thought (CoT)** chia việc khó hoặc phức tạp thành **các bước nhỏ, dễ quản lý** thông qua một chuỗi prompt hoặc câu hỏi; mỗi prompt xây tiếp trên prompt trước, dẫn mô hình **suy nghĩ từng bước** để ra phản hồi. Mô hình thể hiện được quá trình suy luận, và khả năng giải các bài toán tương tự tốt hơn.
- **Vì sao dùng rộng rãi:**
  - Tăng suy luận logic, đảm bảo mọi bước đều được xét → kết quả chính xác hơn.
  - Tăng khả năng giải thích: truy vết được vì sao AI ra kết luận, gỡ lỗi dễ hơn.
  - Khắc phục hạn chế: mô hình ngôn ngữ vốn **không được thiết kế sẵn cho suy luận nhiều bước** nếu không được nhắc.

**Hai biến thể phổ biến**

| Biến thể | Cách làm |
| --- | --- |
| **Few-shot CoT** | Đưa **ví dụ** minh hoạ cách bẻ nhỏ một bài toán |
| **Zero-shot CoT** | **Không** đưa ví dụ, chỉ khuyến khích mô hình tự nghĩ từng bước, bằng cụm như "Hãy nghĩ từng bước một" |

**Ví dụ trong video (cùng một dạng bài khuyến mãi)**

- **Few-shot:** mẫu: cửa hàng bán cam 3 đô một quả, mua 2 tặng 1. Lời giải: cứ quả thứ ba là miễn phí nên trả tiền cho 3 quả bằng trả cho 2; 6 quả bằng trả cho 4 quả, tức 12 đô. Sau đó đưa bài tương tự: bán hộp bút, mua 1 tặng 1, mỗi hộp 5 đô, 10 hộp giá bao nhiêu? Mô hình hiểu cấu trúc ưu đãi, theo cách lý luận đã cho trong mẫu, ra kết quả **25 đô** (trả tiền 5 trong 10 hộp).
- **Zero-shot:** cùng bài hộp bút nhưng không có mẫu, thêm câu "Hãy nghĩ từng bước." Mô hình tự diễn giải ưu đãi (mỗi cặp chỉ trả một), nhóm 10 hộp thành 5 cặp, tính được 25 đô.

**Thách thức của CoT**

- Chia việc thành nhiều bước có thể **làm mô hình chậm**, không phù hợp ứng dụng cần nhanh như chatbot.
- Có thể **làm vấn đề đơn giản trở nên phức tạp không cần thiết**, khiến AI có vẻ kém hiệu quả.
- **Lỗi ở bước đầu lan sang các bước sau**, dẫn đến đáp án sai.

**Gợi ý của tôi (tự đặt):** khi dùng CoT cho việc quan trọng, hãy xem lại **từng bước** trong lập luận chứ không chỉ đáp án cuối, vì một bước sai đầu chuỗi làm hỏng cả chuỗi (tự đặt).

**Tự kiểm tra**

- Viết prompt interview pattern để AI giúp bạn lập kế hoạch ra mắt một tính năng mới.
- Khác biệt giữa few-shot CoT và zero-shot CoT là gì? Khi nào chọn cái nào?
- Kể ba rủi ro khi dùng CoT.
