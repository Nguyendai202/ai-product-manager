---
title: "Học sâu, mạng nơ-ron và phân biệt học máy với học sâu"
course: "Khoá 5: Introduction to Artificial Intelligence (AI)"
module: "Module 2 · Khái niệm, thuật ngữ và lĩnh vực ứng dụng"
order: 520103
---

## Video 1: Học sâu (deep learning)

**Ý chính**

- Học máy là tập con của AI; **học sâu là tập con chuyên biệt của học máy**: xếp lớp các thuật toán thành một **mạng nơ-ron** (bản sao nhân tạo của cấu trúc và chức năng não). Nhờ đó hệ thống có thể học liên tục khi làm việc và cải thiện chất lượng, độ chính xác của kết quả; đồng thời học từ **dữ liệu không cấu trúc** như ảnh, video, tệp âm thanh.
- Ví dụ: học sâu giúp hệ AI hiểu ngôn ngữ tự nhiên và nắm ngữ cảnh, ý định của điều được truyền đạt.
- Thuật toán học sâu không ánh xạ trực tiếp đầu vào sang đầu ra mà dựa vào **nhiều lớp đơn vị xử lý**: mỗi lớp truyền đầu ra cho lớp kế tiếp. Nhiều lớp nên gọi là "sâu."
- Khi tạo thuật toán, kỹ sư cấu hình **số lớp** và **loại hàm nối đầu ra lớp này với đầu vào lớp kia**, rồi huấn luyện bằng nhiều ví dụ có chú thích. Ví dụ cho hàng nghìn ảnh và nhãn theo ngữ cảnh; thuật toán đẩy ví dụ qua các lớp và điều chỉnh **trọng số** của biến ở mỗi lớp để nhận ra mẫu hình chung của các ảnh cùng nhãn.
- **Lợi thế so với thuật toán học thế hệ cũ:** hiệu quả của học máy truyền thống đi ngang khi dữ liệu tăng, còn học sâu **tiếp tục cải thiện khi được cho thêm dữ liệu.**
- Hiệu quả cao ở: chú thích ảnh, nhận dạng giọng nói và chép lời, nhận diện khuôn mặt, ảnh y khoa, dịch ngôn ngữ; và là thành phần chính của xe tự lái.

---

## Video 2: Mạng nơ-ron

**Ý chính**

- **Mạng nơ-ron nhân tạo** là mô hình tính toán lấy cảm hứng từ cấu trúc nơ-ron của não: các **nút (nơ-ron)** kết nối với nhau, nhận dữ liệu vào và học ra quyết định theo thời gian. Cho mạng xem ảnh chó và mèo, nó học nhận ra mẫu hình và tạo kết nối; càng nhiều dữ liệu càng học tốt.
- **Cấu trúc:** một lớp đầu vào, một lớp đầu ra, và một hoặc nhiều **lớp ẩn.**
  - Lớp đầu vào nhận dữ liệu (ví dụ giá trị điểm ảnh của ảnh).
  - Lớp ẩn xử lý dữ liệu bằng **hàm kích hoạt**, là hàm toán cho phép mạng học mẫu hình phức tạp.
  - Lớp đầu ra tạo kết quả cuối.
  - Càng nhiều lớp ẩn thì mạng càng **sâu**, nên có tên học sâu.
- **Cách mạng học (huấn luyện):**
  1. **Lan truyền xuôi (forward propagation):** dữ liệu đi qua các lớp, mạng tính ra đầu ra; so với đáp án thật để tính chênh lệch gọi là **sai số (loss).**
  2. **Lan truyền ngược (backpropagation):** sai số được gửi ngược qua mạng để điều chỉnh tham số bên trong như **trọng số và độ lệch (bias)** nhằm giảm sai số lần dự đoán sau.
  3. Lặp lại nhiều lần với nhiều bộ dữ liệu cho đến khi mạng dự đoán chính xác ổn định.
- **Một số loại mạng nơ-ron:**

| Loại | Đặc điểm |
| --- | --- |
| Perceptron | Đơn giản nhất, chỉ có lớp đầu vào và đầu ra |
| Truyền thẳng (feed-forward) | Thông tin chạy một chiều; mỗi nơ-ron nhận đầu vào từ lớp trước và truyền kết quả lớp sau |
| Truyền thẳng sâu | Giống truyền thẳng nhưng có hơn một lớp ẩn |
| Mô-đun | Kết hợp hai hay nhiều mạng để ra kết quả |
| Tích chập (CNN) | Rất hợp để phân tích dữ liệu hình ảnh; các lớp thực hiện phép tích chập trên đầu ra lớp trước |
| Hồi quy (RNN) | Nơ-ron lớp ẩn nhận đầu vào với độ trễ thời gian, cho phép xét ngữ cảnh; hợp để dự đoán từ kế tiếp trong câu |

---

## Video 3: Học máy so với học sâu (ví dụ chiếc bánh pizza)

**Ý chính**

- Hệ phân cấp: **AI** ⊃ **học máy (ML)** ⊃ **mạng nơ-ron (NN)**, là xương sống của thuật toán **học sâu (DL).**
- **Ví dụ mô hình học máy quyết định có đặt pizza không** với ba đầu vào nhị phân:
  - x1: đặt ngoài có tiết kiệm thời gian không? (có = 1).
  - x2: có giảm cân không? (không = 0).
  - x3: có tiết kiệm tiền không? (có = 1, vì có phiếu giảm giá).
  - **Trọng số** cho biết mức quan trọng: w1 = 5 (coi trọng thời gian), w2 = 3, w3 = 2; ngưỡng là 5.
  - Tính đầu ra: 1×5 + 0×3 + 1×2 - 5 = **+2**; số dương nghĩa là **đặt pizza.**
- **Học sâu khác ở đâu:**
  - Mạng được coi là **mạng nơ-ron sâu khi có hơn ba lớp** (tính cả lớp vào và ra).
  - **Học máy cổ điển phụ thuộc nhiều vào con người:** chuyên gia xác định hệ phân cấp đặc trưng để phân biệt dữ liệu đầu vào (gắn nhãn ảnh pizza, burger, taco và nêu đặc điểm phân biệt, như loại bánh mì). Đây là **học có giám sát.**
  - **Học sâu không nhất thiết cần tập dữ liệu có nhãn:** nạp dữ liệu thô không cấu trúc (văn bản, ảnh) và tự xác định đặc trưng phân biệt; phát hiện nhóm dữ liệu ẩn mà không cần con người can thiệp, tức **học không giám sát.**
- Phần lớn mạng sâu là truyền thẳng, nhưng có thể huấn luyện bằng **lan truyền ngược** để tính và quy sai số cho từng nơ-ron rồi điều chỉnh.
- Tóm lại: cả hai cùng nền tảng mạng nơ-ron; điểm khác chính là **số lớp (hơn ba)** và việc **có cần con người gắn nhãn dữ liệu hay không.**

**Tự kiểm tra**

- Tính lại ví dụ pizza với x2 = 1 và w2 = 3: kết luận đổi thế nào?
- Khi dữ liệu rất lớn và không có nhãn, vì sao học sâu có lợi thế?
