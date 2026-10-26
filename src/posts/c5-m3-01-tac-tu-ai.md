---
title: "Tác tử AI (AI agents): đặc điểm, hệ nhiều tác tử và hệ AI hợp thành"
course: "Khoá 5: Introduction to Artificial Intelligence (AI)"
module: "Module 3 · Chuyển đổi doanh nghiệp và sự nghiệp nhờ AI"
order: 530101
---

## Video 1: Tác tử AI là gì

**Ý chính**

- Theo số liệu được trích trong video, thị trường AI toàn cầu dự kiến tăng lên khoảng 1,8 nghìn tỷ USD trong bảy năm tới (CAGR 36,6%), và dùng tác tử AI trong chăm sóc khách có thể tiết kiệm cho doanh nghiệp khoảng 80 tỷ USD chi phí nhân công. Đây là số liệu của nguồn được trích.
- **Tác tử AI (AI agent)** là chương trình phần mềm tương tác với môi trường, thu thập và xử lý dữ liệu, tự thực hiện tác vụ để đạt mục tiêu do con người đặt ra. Nó có thể ra quyết định, giải quyết vấn đề và thích nghi với thông tin mới mà không cần người giúp liên tục.
- **Bốn giai đoạn hoạt động** (ví dụ xe tự lái):
  1. **Nhận biết:** dùng cảm biến (camera, radar) thu dữ liệu môi trường, nhìn thấy xe, người đi bộ, biển báo.
  2. **Hiểu và ra quyết định:** thuật toán xử lý dữ liệu để nhận diện vật thể, tốc độ và chuyển động; dùng cơ sở tri thức và logic để quyết định tăng tốc, phanh hay rẽ.
  3. **Hành động:** cơ cấu chấp hành điều khiển lái và phanh.
  4. **Học:** cải thiện theo thời gian bằng học máy, phân tích kinh nghiệm quá khứ.
- **Bốn đặc điểm chính:**

| Đặc điểm | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| **Khả năng xã hội** | Giao tiếp và cộng tác với tác tử khác và thực thể xung quanh | Chatbot y tế tư vấn, kiểm tra triệu chứng, đặt lịch và nhắc nhở |
| **Tự chủ** | Hoạt động độc lập, tự ra quyết định | Xe tự lái |
| **Phản ứng** | Đáp ứng ngay khi môi trường thay đổi | Bộ điều nhiệt chỉnh nhiệt độ theo dữ liệu thời gian thực; hệ bảo trì dự đoán |
| **Chủ động** | Tự khởi xướng, ra quyết định để đạt mục tiêu | Hệ thống tự lập kế hoạch đạt mục tiêu |

- **Hệ nhiều tác tử (multi-agent system):** nhiều tác tử cùng làm để đạt mục tiêu riêng và chung, cho phép giải quyết vấn đề phân tán, ra quyết định cộng tác và hành vi "nảy sinh" từ tương tác. Dùng ở: chợ trực tuyến (tác tử người mua và người bán thương lượng giá, quản lý giao dịch), phối hợp robot (kho vận, tìm kiếm cứu nạn), quản lý giao thông (tác tử đại diện xe tự lái trao đổi để tối ưu dòng xe).
- Nhiều hãng lớn dùng tác tử trong gợi ý và kiểm duyệt nội dung, soạn và trả lời thư, lọc thư rác, dẫn đường thời gian thực, trợ lý giọng nói, gợi ý sản phẩm và quản lý tồn kho. Tác tử đang trở thành **đối tác** trong ra quyết định chiến lược và tương tác khách, không chỉ là công cụ.

---

## Video 2: Từ mô hình đơn khối đến hệ AI hợp thành và tác tử

**Ý chính**

- **Chuyển dịch thứ nhất:** từ **mô hình đơn khối (monolithic)** sang **hệ AI hợp thành (compound AI systems).** Mô hình bị giới hạn bởi dữ liệu huấn luyện: không biết bạn là ai, không có quyền vào thông tin nhạy cảm; khó thích nghi vì tinh chỉnh tốn dữ liệu và nguồn lực.
- Ví dụ trong video: hỏi "tôi còn bao nhiêu ngày phép?" thì mô hình đơn thuần trả lời sai. Muốn đúng, **xây hệ thống quanh mô hình:** mô hình được nhắc tạo câu truy vấn, câu truy vấn đi vào cơ sở dữ liệu ngày phép, kết quả quay lại mô hình để viết câu trả lời ("bạn còn 10 ngày"). Đây là hệ AI hợp thành.
- **Hệ thống mang tính mô-đun:** có thể chọn mô hình (đã tinh chỉnh, LLM, mô hình tạo ảnh) và các **thành phần lập trình** xung quanh (bộ kiểm tra đầu ra, bộ chia nhỏ truy vấn, tìm cơ sở dữ liệu, công cụ). Cách này dễ giải hơn tinh chỉnh mô hình nên **nhanh thích nghi hơn.** **RAG** là một hệ hợp thành phổ biến.
- **Hạn chế của hệ hợp thành thuần lập trình:** đường đi cố định (luôn tra cơ sở dữ liệu ngày phép), hỏi về thời tiết sẽ thất bại. Đường đi để trả lời truy vấn gọi là **logic điều khiển (control logic)** và ở đây do người định nghĩa.
- **Chuyển dịch thứ hai: giao logic điều khiển cho LLM,** gọi là **cách tiếp cận tác tử (agentic).** Điều này khả thi nhờ khả năng suy luận của LLM ngày càng tốt: đưa bài toán phức tạp, nhắc nó chia nhỏ và lập kế hoạch. Có thể hình dung một trục: một đầu "nghĩ nhanh, làm đúng lập trình, đừng lệch"; đầu kia "nghĩ chậm: lập kế hoạch, làm từng phần, xem chỗ nào kẹt, điều chỉnh."
- **Ba khả năng của tác tử LLM:**
  1. **Suy luận:** mô hình ở lõi, được nhắc lập kế hoạch và suy luận từng bước.
  2. **Hành động qua "công cụ (tools)":** chương trình bên ngoài mà mô hình quyết định khi nào và cách gọi: tìm kiếm web hoặc cơ sở dữ liệu, máy tính, đoạn mã thao tác dữ liệu, một mô hình ngôn ngữ khác, bất kỳ API nào.
  3. **Truy cập bộ nhớ:** nhật ký suy nghĩ bên trong và lịch sử hội thoại với người dùng giúp cá nhân hoá trải nghiệm.
- Một cách cấu hình phổ biến là **ReAct** (kết hợp **Re**asoning và **Act**ing): nhận câu hỏi, LLM được nhắc "đừng đưa câu trả lời đầu tiên, hãy nghĩ chậm, lập kế hoạch, thử hành động"; gọi công cụ, **quan sát** kết quả (có thể sai hoặc lỗi), quyết định đã trả lời được chưa hay phải lặp lại với kế hoạch khác, đến khi có đáp án cuối.
- **Ví dụ trong video:** hỏi cần mang bao nhiêu chai kem chống nắng 2 ounce cho kỳ nghỉ ở Florida tháng sau. Tác tử phải lấy số ngày nghỉ từ bộ nhớ, tra dự báo thời tiết để biết số giờ nắng, tra trang y tế công cộng để biết liều dùng mỗi giờ, rồi tính toán số chai. Nhiều đường đi có thể khám phá nên hệ thống linh hoạt hơn.
- **Chọn mức tự chủ:** hệ hợp thành sẽ ngày càng "tác tử hoá". Với bài toán **hẹp và rõ**, đường lập trình hiệu quả hơn vì mọi truy vấn trả lời cùng một cách, cách tác tử có thể lặp thừa. Với tác vụ rất phức tạp và đa dạng (ví dụ tự giải các vấn đề lập trình), tiếp cận tác tử có lợi vì cấu hình mọi đường đi tốn quá nhiều công. Hiện vẫn là giai đoạn đầu và hầu hết trường hợp vẫn có **con người trong vòng lặp.**

**Tự kiểm tra**

- Phân biệt "logic điều khiển do người lập trình" với "logic điều khiển do LLM."
- Cho một tác vụ nên dùng hệ lập trình cố định và một tác vụ nên dùng tác tử, giải thích.
