---
title: "NLP, giọng nói, thị giác máy tính, xe tự lái và AI với cloud, edge, IoT"
course: "Khoá 5: Introduction to Artificial Intelligence (AI)"
module: "Module 2 · Khái niệm, thuật ngữ và lĩnh vực ứng dụng"
order: 520105
---

## Video 1: NLP, giọng nói và thị giác máy tính

**Ý chính**

- **Xử lý ngôn ngữ tự nhiên (NLP)** là tập con của AI giúp máy hiểu, diễn giải và tạo ngôn ngữ người. Dùng học máy và học sâu để hiểu nghĩa của từ bằng cách phân tích câu về ngữ pháp, quan hệ và cấu trúc, và hiểu ngữ cảnh (ví dụ "cloud" là điện toán đám mây hay đám mây trên trời). NLP còn hiểu ý định và cảm xúc (câu hỏi này xuất phát từ bực bội hay bối rối). Theo một khảo sát được trích, thị trường NLP dự kiến tăng từ khoảng 29,71 tỷ lên 158,04 tỷ USD trong tám năm (CAGR 23,2%).
- **Giọng nói thành văn bản (STT)** dùng mạng nơ-ron phân tích mẫu giọng và văn bản tương ứng để học cách phát âm, rồi chuyển bản ghi mới thành văn bản đúng. Dùng cho chép lời thời gian thực, đọc chính tả, dịch vụ chép lời, tìm kiếm bằng giọng nói, phụ đề tự động, trợ lý ảo.
- **Văn bản thành giọng nói (TTS, tổng hợp giọng):** một mạng học giọng của một người từ nhiều mẫu, mạng thứ hai sinh âm thanh mới và kiểm tra với mạng đầu xem có khớp giọng gốc không; nếu chưa thì điều chỉnh và thử lại cho đến khi tự nhiên.
- STT và TTS cùng cho phép tương tác người máy bằng ngôn ngữ tự nhiên: dịch vụ dịch nghe tiếng nói qua STT, dịch, rồi đọc bản dịch qua TTS; thiết bị nhà thông minh hiểu lệnh qua STT và phản hồi qua TTS; chăm sóc khách (STT chép lời, NLP hiểu và tạo trả lời, TTS đọc); hỗ trợ tiếp cận.
- **Thị giác máy tính** là lĩnh vực AI giúp máy diễn giải và hiểu dữ liệu hình ảnh: phân tích ảnh hoặc video để rút kết luận và ra phán đoán. Mở khoá điện thoại bằng khuôn mặt là một ví dụ. Mạng nơ-ron là then chốt cho:
  - **Phân loại ảnh:** chia ảnh vào các hạng mục định sẵn (xếp loại sản phẩm, phát hiện bệnh trong ảnh y khoa).
  - **Phát hiện đối tượng:** không chỉ nhận ra mà còn định vị vật trong ảnh; quan trọng với giám sát và xe tự lái.
  - **Phân đoạn ảnh:** chia ảnh thành các vùng có nghĩa, gắn nhãn từng điểm ảnh.
- **Ứng dụng theo ngành:** bán lẻ (quản lý tồn kho, cá nhân hoá mua sắm), sản xuất (kiểm soát chất lượng và tự động hoá dây chuyền), nông nghiệp (nông nghiệp chính xác, theo dõi sức khoẻ cây trồng).

---

## Video 2: NLP hoạt động thế nào

**Ý chính**

- NLP biến **văn bản không cấu trúc** (cách ta nói, như "thêm trứng và sữa vào danh sách mua sắm") thành **biểu diễn có cấu trúc** mà máy xử lý được (một danh sách mua sắm có các mục trứng và sữa). Chiều từ không cấu trúc sang có cấu trúc gọi là **hiểu ngôn ngữ tự nhiên (NLU)**; chiều ngược lại là **sinh ngôn ngữ tự nhiên (NLG).**
- **Use case:** dịch máy (cần hiểu ngữ cảnh; câu dịch qua lại hai lần có thể thành nghĩa khác hẳn); trợ lý ảo và chatbot (hiểu lệnh, đi theo cây quyết định để thực hiện); **phân tích cảm xúc** (đánh giá sản phẩm tích cực hay tiêu cực, nghiêm túc hay mỉa mai); **phát hiện thư rác** (từ dùng quá mức, ngữ pháp kém, tuyên bố khẩn cấp không đúng chỗ).
- NLP không phải một thuật toán mà là một "bộ công cụ". Các bước chính:
  1. **Tách token (tokenization):** chia chuỗi thành các mảnh nhỏ (câu 8 từ thành 8 token).
  2. **Rút gốc từ (stemming):** lấy gốc của từ, ví dụ running, runs, ran về "run"; không phải lúc nào cũng tốt (universal và university không về cùng gốc "universe").
  3. **Quy về nguyên mẫu (lemmatization):** dùng định nghĩa từ điển để tìm gốc ngữ nghĩa, ví dụ "better" về "good".
  4. **Gán nhãn từ loại (part-of-speech tagging):** xác định từ là động từ hay danh từ theo vị trí trong câu ("make" trong "make dinner" so với "what make is your laptop").
  5. **Nhận diện thực thể có tên (named entity recognition):** token có gắn với thực thể không, ví dụ một bang hay một tên người.
- Sau các bước này, dữ liệu có cấu trúc dùng được cho mọi ứng dụng AI.

---

## Video 3: Xe tự lái

**Ý chính**

- Trong nghiên cứu xe tự lái, một thách thức chính là **phát hiện đối tượng 3D:** nhận diện từng xe, người đi bộ, biển báo trong môi trường lái xe để xe ra quyết định di chuyển đúng. Cần **hợp nhất dữ liệu laser, hình ảnh và radar** thành bức tranh đầy đủ xung quanh xe.
- Vì sao nghĩ đến thị giác máy tính là nghĩ đến xe tự lái? Vì khó giữ chú ý khi lái; con người chỉ để ý được một số thứ trong một lúc (hạn chế của thị giác người là sự chú ý), còn camera hay thị giác máy tính có thể theo dõi toàn bộ trường nhìn cùng lúc, giúp phát hiện và ngăn tai nạn.
- Xe tự lái có tiềm năng thay đổi cách xã hội vận hành, nhưng vẫn còn nhiều thách thức để xe đủ vững chắc và an toàn lái hoàn toàn tự động mọi lúc.

---

## Video 4: AI với điện toán đám mây, điện toán biên và IoT

**Ý chính**

- **IoT (Internet vạn vật):** mạng các thiết bị vật lý nối Internet, thu thập và chia sẻ dữ liệu để xử lý và phân tích (cảm biến, camera, thiết bị đeo, máy giặt điều khiển từ xa, bộ điều nhiệt học thói quen). Chúng gửi dữ liệu qua Internet lên đám mây để lưu và phân tích.
- **Điện toán đám mây (cloud):** lưu và dùng dữ liệu, dịch vụ qua Internet thay vì trên máy mình; truy cập tài nguyên tính toán mạnh từ trung tâm dữ liệu từ xa. Đám mây cho không gian phân tích dữ liệu, còn **thuật toán AI cho khả năng tìm thông tin chi tiết, làm việc tự động và ra quyết định.** Ví dụ dịch vụ thư trên đám mây dùng AI phân biệt thư rác và thư thật, và học thêm từ hành động của người dùng.
- **Điện toán biên (edge):** xử lý dữ liệu **gần nơi sinh ra** thay vì dựa vào trung tâm dữ liệu tập trung; thiết bị tự xử lý và quyết định cục bộ trước khi gửi lên đám mây, nên ra quyết định nhanh hơn. **Edge AI** là AI chạy ngay trên thiết bị (ví dụ camera an ninh nhận diện khuôn mặt cảnh báo người lạ).
- **Ví dụ vòng đeo theo dõi sức khoẻ:** là thiết bị IoT; với điện toán biên, nó đếm bước, theo dõi nhịp tim, phân tích thời gian thực không cần Internet và cảnh báo ngay khi nhịp tim quá cao; kết hợp edge AI nhận biết đang chạy hay đi bộ và hướng dẫn tức thì. Khi kết nối điện thoại, dữ liệu lên đám mây để lưu lâu dài, phân tích, và AI trên đám mây đưa tính năng nâng cao như gợi ý cải thiện giấc ngủ hoặc tạo bài tập cá nhân hoá.
- Ứng dụng khác: đèn giao thông dùng AI, giao thông công cộng thông minh, nông nghiệp thông minh, toà nhà thông minh.

---

## Tổng kết Module 2 (khoá 5)

- **Điện toán nhận thức** mô phỏng tư duy qua ba yếu tố nhận biết, học, suy luận.
- **Học máy** có ba loại: có giám sát, không giám sát, tăng cường; huấn luyện chia tập huấn luyện, kiểm định, kiểm tra.
- **Học sâu** dùng mạng nơ-ron nhiều lớp, học từ dữ liệu phi cấu trúc và tiếp tục cải thiện khi có thêm dữ liệu; mạng học qua lan truyền xuôi và ngược.
- **Mô hình sinh nội dung:** VAE, GAN, tự hồi quy, transformer; đơn phương thức và đa phương thức; **LLM** thuộc **mô hình nền**, thích nghi bằng tinh chỉnh hoặc prompting; bất lợi gồm chi phí tính toán và độ tin cậy.
- **NLP, STT, TTS, thị giác máy tính** là các lĩnh vực ứng dụng; xe tự lái dùng hợp nhất cảm biến.
- **IoT, cloud, edge** kết hợp với AI cho ứng dụng thông minh thời gian thực.

**Tự kiểm tra cuối module**

- Giải thích bằng ví dụ của bạn vì sao một chatbot cần cả NLP và học máy.
- Với thiết bị đeo theo dõi nhịp tim, phần nào nên chạy trên thiết bị (edge) và phần nào nên chạy trên đám mây?
