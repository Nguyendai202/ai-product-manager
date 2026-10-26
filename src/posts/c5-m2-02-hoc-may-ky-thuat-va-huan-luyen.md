---
title: "Học máy: ba loại, các kỹ thuật và cách huấn luyện mô hình"
course: "Khoá 5: Introduction to Artificial Intelligence (AI)"
module: "Module 2 · Khái niệm, thuật ngữ và lĩnh vực ứng dụng"
order: 520102
---

## Video 1: Học máy là gì

**Ý chính**

- **Học máy** là tập con của AI dùng thuật toán phân tích dữ liệu và ra quyết định thông minh từ điều đã học. Thay vì làm theo thuật toán dựa trên luật, học máy **xây mô hình** để phân loại và dự đoán từ dữ liệu.
- **Khác biệt với lập trình truyền thống:**
  - Lập trình truyền thống: lấy **dữ liệu và luật** để làm thuật toán, sau đó cho ra câu trả lời. Thuật toán không thay đổi (kiểu if-then-else).
  - Học máy: lấy **dữ liệu và câu trả lời** để tạo ra thuật toán (tập luật). Mô hình xác định tham số và logic, và có thể tiếp tục được huấn luyện để dự đoán về sau.
- Ví dụ trong video: dự đoán suy tim từ nhịp tim mỗi phút, chỉ số BMI, tuổi, giới tính và kết quả đã biết; mô hình học từ dữ liệu để dự đoán với đầu vào mới.
- **Ba loại học máy:**

| Loại | Cách học | Ví dụ |
| --- | --- | --- |
| **Có giám sát (supervised)** | Huấn luyện trên dữ liệu có nhãn do người gắn; càng nhiều mẫu càng chính xác khi phân loại dữ liệu mới | Cho nhiều ảnh chim và mèo có nhãn, mô hình trả về nhãn kèm mức tin cậy khi gặp ảnh mới |
| **Không giám sát (unsupervised)** | Đưa dữ liệu không nhãn để thuật toán tự tìm mẫu hình; hữu ích để **phân cụm** | Cho luồng lưu lượng mạng để mô hình tự học mức "bình thường" và nhận ra hành vi bất thường, có thể độc hại |
| **Tăng cường (reinforcement)** | Cho tập luật và ràng buộc; thuật toán tự tìm cách đạt mục tiêu bằng thử các hành động được phép, được thưởng hoặc phạt tuỳ quyết định tốt hay không, cố tối đa hoá phần thưởng | Dạy máy chơi cờ hoặc vượt chướng ngại vật |

- **Mô hình học máy** là thuật toán tìm mẫu hình trong dữ liệu mà lập trình viên không cần lập trình tường minh các mẫu đó.

---

## Video 2: Kỹ thuật và huấn luyện

**Ý chính**

- Học máy chia ba nhóm (có giám sát, không giám sát, tăng cường); mỗi nhóm giải nhiều loại bài toán.
- **Có giám sát** dùng tập dữ liệu có nhãn lớp định trước để huấn luyện mô hình dự đoán hoặc phân loại điểm dữ liệu mới. **Không giám sát** không có nhãn lớp nên phải tự khám phá từ dữ liệu phi cấu trúc (có thể dùng học sâu nhìn ảnh, diễn giải và gom thành cụm theo đặc trưng). **Tăng cường** dùng hàm thưởng để phạt hành động xấu hoặc thưởng hành động tốt.
- **Học có giám sát chia ba nhóm:**
  - **Hồi quy (regression):** xây mô hình từ quan hệ giữa đặc trưng x và kết quả y, trong đó y là biến **liên tục**; ước lượng giá trị liên tục.
  - **Phân loại (classification):** tập trung vào giá trị **rời rạc**; gán nhãn lớp y theo nhiều đặc trưng đầu vào x. Ví dụ dự đoán suy tim: đúng hoặc sai; hay phân thể loại phim: hành động, hài, chính kịch, kinh dị. Các dạng gồm cây quyết định, máy vector hỗ trợ, hồi quy logistic, rừng ngẫu nhiên.
  - **Mạng nơ-ron:** cấu trúc mô phỏng não để xử lý đầu vào, nhận mẫu hình, ra quyết định hoặc dự đoán.
- **Đặc trưng (feature)** là thuộc tính đặc trưng của mẫu đầu vào giúp xác định lớp đầu ra; mỗi **cột** là một đặc trưng, mỗi **hàng** là một điểm dữ liệu.
- **Huấn luyện (training)** là dùng thuật toán học để xác định các tham số của mô hình. Ví dụ phát hiện thư rác: cho xem thư thật có nhãn "spam" (true) và "không spam" (false); thuật toán chỉnh tham số nội bộ đến khi phân biệt được.
- **Chia tập dữ liệu thành ba phần:**
  1. **Tập huấn luyện:** dạy thuật toán.
  2. **Tập kiểm định (validation):** kiểm tra kết quả và tinh chỉnh tham số.
  3. **Tập kiểm tra (test):** dữ liệu mô hình chưa từng thấy, đánh giá hiệu năng cuối cùng.
- Đo hiệu quả bằng **độ chính xác (accuracy), độ chuẩn (precision), độ phủ (recall).**

**Ví dụ (tự đặt)**

Dự đoán khách có rời dịch vụ không: mỗi hàng là một khách, mỗi cột là một đặc trưng (số tháng dùng, số lần khiếu nại, gói cước); nhãn là "rời" hoặc "ở lại". Đây là bài toán phân loại. Dự đoán số tiền khách sẽ chi là bài toán hồi quy.

**Tự kiểm tra**

- Hồi quy và phân loại khác nhau ở loại kết quả nào?
- Vì sao phải có tập kiểm tra tách biệt?
