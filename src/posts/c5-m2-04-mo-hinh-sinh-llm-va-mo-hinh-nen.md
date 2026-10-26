---
title: "Mô hình AI sinh nội dung, mô hình ngôn ngữ lớn và mô hình nền"
course: "Khoá 5: Introduction to Artificial Intelligence (AI)"
module: "Module 2 · Khái niệm, thuật ngữ và lĩnh vực ứng dụng"
order: 520104
---

## Video 1: Các mô hình AI sinh nội dung

**Ý chính**

- **Mô hình AI sinh nội dung** là lớp hệ thống AI học từ các tập dữ liệu lớn bằng cách nhận ra mẫu hình và xu hướng, dùng thuật toán học máy và học sâu để tạo nội dung mới. Thiết kế mô hình tuỳ vào mục đích và cách dùng.
- **Bốn loại mô hình phổ biến:**

| Loại | Cách hoạt động | Ứng dụng |
| --- | --- | --- |
| **VAE (bộ mã hoá tự động biến phân)** | Ba phần: **bộ mã hoá** (biến đầu vào thành dạng đơn giản gọi là biểu diễn không gian ẩn, giữ đặc trưng chính), **không gian ẩn**, **bộ giải mã** (dùng biểu diễn đó để tạo đầu ra mới) | Sinh ảnh, phát hiện bất thường; ví dụ sinh và tái tạo ảnh quần áo, giày, túi từ tập dữ liệu thời trang |
| **GAN (mạng đối nghịch sinh)** | Hai mạng cùng huấn luyện: **bộ sinh** tạo dữ liệu mẫu, **bộ phân biệt** kiểm tra thật hay giả. Bộ sinh cố làm dữ liệu trông như thật, bộ phân biệt cố phân biệt, đến khi bộ phân biệt không còn phân biệt được | Tổng hợp ảnh, chuyển phong cách, tăng cường dữ liệu; ví dụ sinh ảnh khuôn mặt, động vật, phong cảnh chất lượng cao |
| **Mô hình tự hồi quy (autoregressive)** | Sinh dữ liệu **tuần tự**, xét ngữ cảnh của phần đã sinh, dự đoán phần tử kế tiếp từ các phần trước | Sinh chuỗi như văn bản, âm nhạc; ví dụ mô hình sinh sóng âm thô tạo giọng nói tự nhiên |
| **Transformer** | Có tầng mã hoá và giải mã, dùng nhiều trong NLP; sinh chuỗi văn bản hoặc dịch giữa các ngôn ngữ | Chatbot đa ngôn ngữ; các mô hình ngôn ngữ lớn là transformer |

- **Đơn phương thức và đa phương thức:** **modality** là loại dữ liệu được xử lý. **Mô hình đơn phương thức** nhận đầu vào và sinh đầu ra cùng một dạng (nhận văn bản, trả văn bản: hoàn thành câu, viết truyện, trả lời câu hỏi). **Mô hình đa phương thức** nhận đầu vào một dạng và trả ra dạng khác (sinh ảnh từ mô tả văn bản như "con voi chơi bóng"); một số mô hình mã nguồn mở xử lý cả văn bản, âm thanh, hình ảnh, chuyển động và kết hợp thông tin giữa các dạng (ví dụ ghép âm thanh dòng sông với hình thành phố).

---

## Video 2: Mô hình ngôn ngữ lớn (LLM) và mô hình nền

**Ý chính**

- LLM thuộc một nhóm mô hình rộng hơn gọi là **mô hình nền (foundation models).** Thuật ngữ này do một nhóm nghiên cứu đại học đặt ra khi thấy lĩnh vực AI hội tụ về một mô hình mới.
- **Trước:** mỗi ứng dụng AI được xây bằng một "thư viện" nhiều mô hình, mỗi mô hình huấn luyện trên dữ liệu rất cụ thể cho một tác vụ. **Mô hình mới:** có một **năng lực nền** có thể chuyển sang nhiều tác vụ khác nhau, vì nó đã được huấn luyện trên lượng dữ liệu không cấu trúc rất lớn, theo kiểu không giám sát.
- **Cách huấn luyện ở lĩnh vực ngôn ngữ:** cho vào hàng terabyte câu; với câu "không ích gì khi khóc vì sữa đã đổ..." mô hình học **dự đoán từ cuối** từ các từ phía trước. Chính khả năng "sinh" (dự đoán từ kế tiếp) này khiến mô hình nền thuộc AI sinh nội dung.
- **Thích nghi với tác vụ:**
  - **Tinh chỉnh (tuning):** thêm một lượng nhỏ dữ liệu có nhãn, cập nhật tham số để mô hình làm tác vụ NLP truyền thống như phân loại, nhận diện thực thể.
  - **Prompting (prompt engineering):** khi ít dữ liệu hoặc không có, đưa câu kèm câu hỏi ("câu này tích cực hay tiêu cực?"), mô hình sinh từ kế tiếp chính là đáp án.
- **Lợi thế:** hiệu năng (đã thấy lượng dữ liệu khổng lồ nên vượt xa mô hình chỉ huấn luyện trên ít dữ liệu); **năng suất** (cần ít dữ liệu có nhãn hơn nhiều để có mô hình cho tác vụ cụ thể).
- **Bất lợi:**
  1. **Chi phí tính toán:** huấn luyện đắt, doanh nghiệp nhỏ khó tự làm; vận hành suy luận cũng đắt, có thể cần nhiều GPU.
  2. **Độ tin cậy:** dữ liệu quét từ Internet quá nhiều để kiểm chứng từng điểm, có thể thiên lệch, độc hại; với nhiều mô hình mã nguồn mở thậm chí không biết chính xác dữ liệu huấn luyện, dẫn đến vấn đề đáng tin cậy.
- Mô hình nền áp dụng cả mảng khác: **thị giác** (sinh ảnh từ văn bản), **mã** (hoàn thành mã khi viết), **hoá học** (khám phá phân tử thuốc), **khí hậu** (dữ liệu không gian địa lý).

---

## Video 3: Học máy, học sâu và mô hình nền: mối quan hệ

**Ý chính**

- Mọi thuật ngữ đều liên quan đến AI, tức mô phỏng trí tuệ người trong máy để làm việc thường cần tư duy. AI đã có nhiều thập niên (một chatbot đối thoại sơ khai từ giữa thập niên 1960).
- **Học máy** là lĩnh vực con của AI, phát triển thuật toán để máy tính học từ dữ liệu và ra quyết định, không cần lập trình tường minh cho một tác vụ; dùng kỹ thuật thống kê. Phạm vi rộng từ phương pháp thống kê truyền thống đến mạng nơ-ron phức tạp. Ba nhóm: có giám sát (dữ liệu có nhãn), không giám sát (tìm mẫu hình, không nhãn), tăng cường (học bằng tương tác với môi trường và phản hồi).
- **Học sâu** là tập con của học máy tập trung vào mạng nơ-ron nhân tạo nhiều lớp. Kỹ thuật học máy truyền thống hiệu quả với phân tách tuyến tính hay mẫu hình đơn giản; học sâu vượt trội khi xử lý lượng lớn dữ liệu phi cấu trúc (ảnh, ngôn ngữ tự nhiên). **Không phải học máy nào cũng là học sâu:** vẫn còn hồi quy tuyến tính, cây quyết định, máy vector hỗ trợ, thuật toán phân cụm; trong vài trường hợp học sâu là quá mức hoặc không phù hợp nhất.
- **Mô hình nền** (phổ biến năm 2021) nằm trong học sâu: các mạng nơ-ron quy mô lớn huấn luyện trên lượng dữ liệu khổng lồ, làm nền cho vô số ứng dụng; thay vì huấn luyện từ đầu cho mỗi tác vụ, lấy mô hình đã huấn luyện và **tinh chỉnh** cho ứng dụng cụ thể, tiết kiệm thời gian và nguồn lực. Hướng tới giải pháp AI tổng quát, thích ứng và mở rộng.
- **LLM** là loại mô hình nền chuyên xử lý và sinh văn bản giống người. "Large" (lớn) chỉ quy mô: hàng tỷ tham số trở lên. "Language" (ngôn ngữ) là hiểu và tương tác bằng ngôn ngữ người, nắm ngữ pháp, ngữ cảnh, thành ngữ, tham chiếu văn hoá. "Model" (mô hình) là tập thuật toán và tham số. LLM làm nhiều tác vụ: trả lời câu hỏi, dịch, viết sáng tạo.
- Mô hình nền khác: **mô hình thị giác** (diễn giải và sinh ảnh), **mô hình khoa học** (ví dụ dự đoán cấu trúc ba chiều của protein), **mô hình âm thanh** (giọng nói hoặc sáng tác nhạc).
- **AI sinh nội dung:** các mô hình và thuật toán tạo ra nội dung mới. Mô hình nền cung cấp cấu trúc và hiểu biết nền; AI sinh nội dung là việc khai thác tri thức đó để tạo ra điều mới.

**Tự kiểm tra**

- Vẽ sơ đồ bao hàm gồm AI, học máy, học sâu, mô hình nền, LLM.
- Khi nào dùng prompting, khi nào dùng tinh chỉnh?
