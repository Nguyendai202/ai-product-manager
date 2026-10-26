---
title: "Giới thiệu khoá 8, deep learning và mô hình ngôn ngữ lớn"
course: "Khoá 8: Generative AI: Foundation Models and Platforms"
module: "Module 1 · Các mô hình cho AI sinh nội dung"
order: 810101
---

## Video 1: Giới thiệu khoá 8

**Ý chính**

- Câu hỏi dẫn dắt: điều gì ở các mô hình AI sinh nội dung, đặc biệt là **mô hình nền (foundation model)**, đang định hình lại các ngành trên toàn cầu? Khoá này nói về các **nguyên lý cốt lõi** để tạo ra mô hình, nền tảng và ứng dụng AI giải quyết bài toán thực tế khá nhanh.
- Dành cho người mới (chuyên gia, người đam mê, người thực hành, sinh viên). Sau khoá bạn có thể:
  - Nhận diện các khái niệm cốt lõi làm nền cho AI sinh nội dung.
  - Liệt kê năng lực của các mô hình AI sinh nội dung phổ biến.
  - Giải thích cách mô hình nền sinh văn bản, ảnh và mã.
  - Mô tả mục đích của các nền tảng AI năng động dành cho doanh nghiệp và cộng đồng.
- Ba module, mỗi module khoảng một đến hai giờ:
  1. **Mô hình:** kiến trúc deep learning, cách tạo ra LLM; phân biệt năng lực của VAE, GAN, mô hình dựa trên transformer, mô hình khuếch tán và mô hình nền.
  2. **Nền tảng:** cách mô hình nền được huấn luyện trước sinh văn bản, ảnh, mã; cách các nền tảng AI giúp doanh nghiệp tạo giá trị và lợi thế cạnh tranh.
  3. **Dự án cuối khoá và bài kiểm tra có chấm điểm**, bảng thuật ngữ, gợi ý bước học tiếp.

---

## Video 2: Deep learning và mô hình ngôn ngữ lớn

**Deep learning hoạt động thế nào**

- "Sâu" nghĩa là **nhiều tầng**: xử lý càng nhiều tầng thông tin thì hiểu càng sâu, giống bộ não. Nền tảng là **mạng nơ-ron nhân tạo (ANN),** gồm nhiều **nơ-ron** xếp thành ba loại tầng nối nhau: **tầng đầu vào, một hoặc nhiều tầng ẩn, tầng đầu ra.**
- Khi đưa vào tập dữ liệu lớn: nơ-ron tầng đầu vào thu nhận dữ liệu, các tầng ẩn "nghiên cứu" dữ liệu. Mỗi nơ-ron tầng ẩn có tham số **độ lệch (bias);** kết nối giữa hai nơ-ron có tham số **trọng số (weight).** Tham số là giá trị nội bộ được tối ưu dần khi mạng huấn luyện lặp đi lặp lại trên dữ liệu lớn. **Càng nhiều tham số, sức mạnh tính toán càng lớn, độ chính xác dự đoán càng cao.**

**Học có giám sát và không giám sát**

| | Học có giám sát | Học không giám sát |
| --- | --- | --- |
| Dữ liệu | Có nhãn: mỗi điểm dữ liệu có đáp án đã biết | Không nhãn: chỉ có đầu vào, không có đầu ra mục tiêu rõ |
| Dùng cho | Lọc email, chấm điểm tín dụng, phát hiện gian lận, nhận dạng ảnh và giọng nói | Phân cụm (nhóm các mẫu giống nhau), giảm chiều (giữ đặc trưng quan trọng, bỏ phần dư thừa) |
| Hạn chế | Chỉ đưa ra phản hồi định sẵn; dữ liệu nhãn tốn thời gian và chi phí | Tự do tìm mẫu và phân cấp trong dữ liệu nên thường hiệu quả, chính xác hơn |

- Chất lượng phản hồi phụ thuộc nhiều vào **chất lượng tập dữ liệu** và vào **kiến trúc mạng nơ-ron** được dùng.

**Ba kiến trúc deep learning**

| Kiến trúc | Điểm mạnh | Ứng dụng |
| --- | --- | --- |
| **CNN (mạng tích chập)** | Dữ liệu dạng lưới như ảnh: trích đặc trưng, nhận dạng mẫu, phân loại, tách vùng ảnh | Xử lý ảnh, nhận dạng video, NLP |
| **RNN (mạng hồi quy)** | Dữ liệu tuần tự (văn bản, giọng nói); có thành phần "bộ nhớ" giữ quan hệ theo thời gian | Dịch máy, phân tích cảm xúc, nhận dạng giọng nói |
| **Transformer** | Không dùng tích chập hay hồi quy; có cấu trúc hai khối bộ mã hoá và giải mã xử lý số lượng tham số rất lớn, nắm bắt ngữ cảnh và ý nghĩa của từ theo thứ bậc rồi dự đoán từ tiếp theo | Nền tảng của LLM |

**Mô hình ngôn ngữ lớn (LLM)**

- Thuật toán deep learning trong transformer phân tích ngữ cảnh và ý nghĩa từ, dự đoán từ kế tiếp. Kết quả là **LLM,** thực hiện được các tác vụ NLP như sinh nội dung, phân tích dự đoán, dịch ngôn ngữ, tự động hoá quy trình. **LLM là cơ chế nền của các ứng dụng AI sinh nội dung.**
- Được huấn luyện trên khối văn bản khổng lồ (sách, bài báo, website). Cá nhân dùng để viết bài luận, dịch máy, tóm tắt; doanh nghiệp dùng để chạy chatbot, trợ lý ảo, dịch thông tin kinh doanh và nội dung web sang ngôn ngữ địa phương.
- Ý chính cuối video: LLM dùng sức mạnh mạng transformer để **huấn luyện trước** thuật toán deep learning trên tập dữ liệu lớn, nắm mẫu hình và phân cấp trong dữ liệu để sinh phản hồi giống con người. Nhờ đó AI sinh nội dung **mở rộng được quy mô.**

**Lưu ý khi đọc (ghi chú của tôi)**

- Video nêu số tham số của một số mô hình cụ thể (tính bằng hàng trăm nghìn tỷ). Những con số này **không đáng tin** vì nhà phát triển thường không công bố số tham số thật; đừng lấy làm dữ kiện. Điều cần nhớ là xu hướng: nhiều tham số hơn thường đi kèm năng lực lớn hơn, nhưng đổi lại chi phí tính toán cao hơn (tự đặt).
- Cấu trúc "hai khối mã hoá và giải mã" là mô tả gốc của transformer; nhiều LLM hiện nay chỉ dùng phần giải mã. Đó là chi tiết kỹ thuật, không ảnh hưởng ý chính (tự đặt).

**Tự kiểm tra**

- Giải thích bằng lời của bạn: tham số, trọng số và bias là gì và vì sao nhiều tham số hơn lại mạnh hơn?
- Khi nào bạn chọn học có giám sát, khi nào không giám sát? Cho ví dụ cho một sản phẩm bạn biết.
- Vì sao transformer phù hợp với văn bản hơn RNN?
