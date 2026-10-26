---
title: "Những điều cần cân nhắc với AI sinh nội dung và vì sao LLM bị ảo giác"
course: "Khoá 5: Introduction to Artificial Intelligence (AI)"
module: "Module 4 · Vấn đề, mối lo và đạo đức"
order: 540102
---

## Video 1: Cân nhắc với AI sinh nội dung

**Ý chính**

- AI sinh nội dung mở rộng giới hạn sáng tạo và đổi mới, nhưng đi kèm thách thức. Bốn mảng cần cân nhắc: **bản quyền và quyền sở hữu**, **riêng tư và bảo mật**, **độ chính xác và ảo giác**, và **đạo đức** (thiên kiến, lạm dụng).
- **Bản quyền và quyền sở hữu:** một tác phẩm nghệ thuật do thuật toán GAN tạo ra từng được bán đấu giá hơn 400.000 USD vào năm 2018, đặt câu hỏi ai sở hữu quyền: nhóm lập trình AI hay người mua tác phẩm. Ai sở hữu nội dung hoặc phát minh do AI tạo ra sẽ ngày càng quan trọng khi AI sáng tạo hơn. Nên có hướng dẫn và chính sách rõ để cân bằng lợi ích của nhà phát triển, người dùng và xã hội; quy định nên thúc đẩy đổi mới. Cần bảo đảm hệ AI tuân thủ luật hiện hành về bảo vệ dữ liệu và quyền người tiêu dùng; nhà phát triển và người dùng nên nắm khung pháp lý và theo dõi luật thay đổi.
- **Riêng tư và bảo mật:** mô hình sinh nội dung cần lượng dữ liệu lớn, đôi khi gồm thông tin nhạy cảm hoặc cá nhân. Cần biện pháp bảo vệ dữ liệu mạnh. Nhiều tổ chức chuyển sang **AI riêng (private AI)**: môi trường AI tạo riêng cho một tổ chức và chỉ tổ chức đó dùng, thiết kế để giữ dữ liệu bí mật và an toàn, ngăn truy cập và lạm dụng trái phép. Kết hợp biện pháp kỹ thuật và pháp lý.
- **Độ chính xác và ảo giác:** AI có thể đưa ra đầu ra không chính xác hoặc bịa đặt. Ví dụ một luật sư dùng công cụ trò chuyện AI soạn một văn bản pháp lý chứa **ý kiến toà án và trích dẫn pháp lý không có thật**; ông không biết công cụ có thể bịa ca, và bị xử phạt khi nộp tài liệu. Bài học: **tư duy phản biện, luôn kiểm chứng và đối chiếu thông tin do AI tạo ra** để tránh lan truyền thông tin sai.
  - Cách giảm rủi ro: cải thiện chất lượng dữ liệu huấn luyện, tinh chỉnh thuật toán, xây quy trình kiểm chứng chắc chắn; dùng **mô hình riêng** xây từ nội dung của chính doanh nghiệp để câu trả lời chính xác, đáng tin và không bịa.
  - Chất lượng và đa dạng của dữ liệu quyết định hiệu năng; mô hình phức tạp hơn thường tốt hơn nhưng cần nhiều tài nguyên tính toán và khó diễn giải hơn; mô hình cần **bền vững** với nhiều đầu vào và xử lý tình huống bất ngờ một cách khéo léo; khả năng **mở rộng** quan trọng để áp dụng rộng rãi.
- **Đạo đức:** thiên kiến trong dữ liệu huấn luyện có thể kéo dài và dẫn tới kết quả bất công; nhà phát triển nên ưu tiên công bằng, trách nhiệm giải trình, minh bạch: chủ động tìm và sửa thiên kiến, dùng AI có trách nhiệm.
  - **Deepfake:** video, hình ảnh hoặc âm thanh bị chỉnh sửa bằng mô hình sinh nội dung để trông như thật; có thể rất thuyết phục và dùng cho mục đích xấu: tin giả và tuyên truyền, thông tin sai lệch, quấy rối hay tống tiền, gian lận; có thể giả giấy tờ nhận dạng hoặc ảnh để mở tài khoản ngân hàng, vay tiền, vào nơi an ninh, dẫn đến gian lận tài chính và vi phạm an ninh.
  - Đạo đức không chỉ là ngăn tác hại mà còn **thúc đẩy kết quả tích cực:** dùng AI giải quyết thách thức xã hội, cải thiện tiếp cận nguồn lực, nâng chất lượng sống; hỗ trợ công bằng xã hội, bền vững môi trường, phúc lợi con người.

---

## Video 2: Vì sao mô hình ngôn ngữ lớn bị ảo giác

**Ý chính**

- Ví dụ ba "sự thật" nghe hợp lý đều là ảo giác của LLM: khoảng cách Trái Đất đến Mặt Trăng là 54 triệu km (thực ra là khoảng cách đến Sao Hoả); một thông tin về nơi làm việc của người nói (thực ra là người anh em); và việc một kính viễn vọng chụp ảnh ngoại hành tinh đầu tiên (thực ra ảnh đầu tiên được chụp từ năm 2004). LLM tạo văn bản trôi chảy, mạch lạc về nhiều chủ đề nhưng dễ **bịa ra những điều nghe hợp lý nhưng vô nghĩa.**
- **Ảo giác** là đầu ra lệch khỏi sự thật hoặc logic ngữ cảnh, từ mâu thuẫn nhỏ đến phát biểu hoàn toàn bịa hoặc tự mâu thuẫn. Phân loại theo mức độ chi tiết:
  - **Mâu thuẫn câu:** câu sinh ra mâu thuẫn với câu trước ("trời hôm nay xanh" rồi "trời hôm nay xanh lá").
  - **Mâu thuẫn với prompt:** yêu cầu viết đánh giá tích cực nhà hàng nhưng nhận "đồ ăn tệ và phục vụ thô lỗ".
  - **Mâu thuẫn sự thật:** sai thẳng về sự kiện (ví dụ nói một nhân vật là tổng thống đầu tiên).
  - **Thông tin vô nghĩa hoặc không liên quan:** chèn thứ không có chỗ đứng.
- **Vì sao xảy ra** (không dễ trả lời vì cách mô hình tạo đầu ra là "hộp đen" ngay cả với kỹ sư; nhưng có một số nguyên nhân thường gặp):
  1. **Chất lượng dữ liệu:** huấn luyện trên kho văn bản lớn có thể có nhiễu, lỗi, thiên kiến, mâu thuẫn. Kể cả dữ liệu hoàn toàn đáng tin cũng không phủ mọi chủ đề, nên mô hình **khái quát hoá mà không kiểm chứng được độ chính xác hay liên quan.** Khi khả năng suy luận của LLM cải thiện, ảo giác có xu hướng giảm.
  2. **Phương pháp sinh:** LLM dùng nhiều phương pháp và mục tiêu sinh văn bản (tìm kiếm chùm tia, lấy mẫu, ước lượng hợp lý cực đại, học tăng cường) vốn có đánh đổi giữa trôi chảy và đa dạng, mạch lạc và sáng tạo, chính xác và mới mẻ.
  3. **Ngữ cảnh đầu vào:** ngữ cảnh giúp dẫn mô hình nhưng cũng có thể làm mô hình bối rối nếu không rõ, không nhất quán hoặc mâu thuẫn. Ví dụ hỏi "mèo có nói tiếng Anh được không?" thì đáp "không" là hợp lý, nhưng nếu cuộc trò chuyện đang nói về một bộ truyện tranh có mèo nói được thì đáp "có" mới đúng; ngữ cảnh quan trọng.
- **Cách giảm ảo giác khi tự dùng LLM:**
  - **Prompt rõ và cụ thể:** thay vì "chuyện gì xảy ra trong Thế chiến II?", hãy hỏi "tóm tắt các sự kiện chính của Thế chiến II, gồm các nước chính và nguyên nhân chính của cuộc xung đột."
  - **Chiến lược giảm chủ động:** dùng các thiết lập của LLM, ví dụ tham số **nhiệt độ (temperature)** điều khiển độ ngẫu nhiên; **nhiệt độ thấp** cho phản hồi thận trọng và tập trung; **nhiệt độ cao** cho phản hồi đa dạng và sáng tạo nhưng nhiều cơ hội ảo giác hơn.
  - **Prompt nhiều ví dụ (multi-shot prompting):** cho nhiều ví dụ về định dạng hoặc ngữ cảnh đầu ra mong muốn, nên mô hình hiểu rõ kỳ vọng; hữu ích với tác vụ cần định dạng cụ thể như mã, thơ, trả lời theo phong cách nhất định.

**Tự kiểm tra**

- Viết lại câu hỏi "kể về chiến tranh lạnh" thành prompt rõ, cụ thể hơn.
- Vì sao nhiệt độ cao làm tăng nguy cơ ảo giác?
