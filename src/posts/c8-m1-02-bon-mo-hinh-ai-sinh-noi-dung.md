---
title: "Bốn mô hình cốt lõi của AI sinh nội dung: VAE, GAN, transformer, khuếch tán"
course: "Khoá 8: Generative AI: Foundation Models and Platforms"
module: "Module 1 · Các mô hình cho AI sinh nội dung"
order: 810102
---

## Video: Các mô hình AI sinh nội dung

Bốn mô hình đã tạo tác động lớn: **bộ tự mã hoá biến phân (VAE), mạng đối kháng sinh (GAN), mô hình dựa trên transformer và mô hình khuếch tán.** Mỗi mô hình dùng một kiến trúc deep learning khác nhau và áp dụng kỹ thuật xác suất.

**1. VAE (Variational Autoencoder)**

- Phổ biến vì (a) làm việc được với nhiều loại dữ liệu huấn luyện như ảnh, văn bản, âm thanh; (b) **giảm chiều nhanh** để tạo phiên bản mới, tốt hơn.
- **Bộ mã hoá (encoder)** là một mạng nơ-ron độc lập, học phân phối xác suất của dữ liệu vào, tức tách ra các biến hữu ích nhất, rồi tạo **biểu diễn nén** lưu trong **không gian ẩn (latent space).** Có thể hình dung không gian ẩn là không gian toán học trong mô hình, nơi dữ liệu nhiều chiều được biểu diễn ở dạng nén.
- **Bộ giải mã (decoder)** cũng là một mạng độc lập, giải nén biểu diễn trong không gian ẩn để tạo đầu ra mong muốn. Huấn luyện theo nguyên lý khả năng cực đại: giảm sai khác giữa dữ liệu gốc và dữ liệu tái tạo.
- Không gian ẩn **liên tục** nên có thể tạo mẫu mới bằng cách lấy mẫu ngẫu nhiên từ phân phối dữ liệu. Tạo được ảnh thực và đa dạng với ít dữ liệu huấn luyện.
- **Ứng dụng:** tổng hợp ảnh, nén dữ liệu, phát hiện bất thường. Giải trí: tạo bản đồ trò chơi, hoạt hoạ nhân vật; tài chính: dự báo độ biến động; y tế: phát hiện bệnh từ tín hiệu điện tâm đồ.

**2. GAN (Generative Adversarial Network)**

- Dùng dữ liệu ảnh và văn bản. **Hai mạng CNN cạnh tranh trong một trò chơi đối kháng:**
  - **Bộ sinh (generator):** huấn luyện trên tập dữ liệu lớn để tạo mẫu dữ liệu.
  - **Bộ phân biệt (discriminator):** cố gắng phân biệt mẫu thật và mẫu giả.
  - Dựa trên phản hồi của bộ phân biệt, bộ sinh tạo mẫu ngày càng thực.
- Làm được: tạo ảnh trông thực, **chuyển phong cách,** dịch ảnh sang ảnh, và cả tạo deepfake. Tài chính dùng để huấn luyện mô hình định giá khoản vay hoặc sinh chuỗi thời gian.
- **Hạn chế:** khó huấn luyện hơn VAE vì cần nhiều dữ liệu và sức mạnh tính toán lớn; có thể tạo nội dung giả, gây lo ngại **đạo đức.**

**3. Mô hình dựa trên transformer**

- Ra đời khi RNN gặp vấn đề **suy giảm gradient (vanishing gradients),** khó xử lý chuỗi văn bản dài. Transformer có **cơ chế chú ý (attention)** tập trung vào phần quan trọng của văn bản và bỏ phần không cần thiết, nên mô hình hoá được **phụ thuộc xa** trong văn bản.
- Với prompt đơn giản, kiến trúc mã hoá-giải mã tạo văn bản mạch lạc, đúng ngữ cảnh. Từ đó tạo ra LLM thực hiện các tác vụ NLP, và còn mở rộng tới tạo hình ảnh, tổng hợp nhạc, thậm chí video. Là bước đột phá lớn trong sáng tạo nội dung.

**4. Mô hình khuếch tán (diffusion)**

- Bổ sung gần đây. Giải quyết việc **dữ liệu xuống cấp có hệ thống do nhiễu** trong không gian ẩn, cố ngăn mất thông tin. Mượn ý tưởng khuếch tán: phân tử đi từ nơi đậm đặc sang nơi loãng.
- Quy trình hai bước:
  1. **Khuếch tán thuận:** thêm dần nhiễu ngẫu nhiên vào dữ liệu huấn luyện.
  2. **Khuếch tán ngược:** đảo quá trình, khử nhiễu để khôi phục dữ liệu và tạo đầu ra mong muốn.
- Giống VAE ở chỗ đưa dữ liệu vào không gian ẩn rồi khôi phục; khác ở chỗ huấn luyện theo dòng động nên **mất nhiều thời gian hơn.** Nhưng cho kết quả vượt trội trong tạo ảnh chất lượng cao và tạo video, do có thể huấn luyện rất nhiều tầng.

**So sánh nhanh (tóm tắt của tôi, tự đặt)**

| Mô hình | Ý tưởng cốt lõi | Điểm mạnh | Điểm yếu |
| --- | --- | --- | --- |
| VAE | Nén dữ liệu rồi giải nén | Ít dữ liệu, dễ huấn luyện | Ảnh thường kém sắc nét hơn hai loại sau (tự đặt) |
| GAN | Hai mạng đối đầu | Ảnh rất thực | Khó huấn luyện, rủi ro tạo nội dung giả |
| Transformer | Cơ chế chú ý trên chuỗi | Văn bản dài, đa tác vụ | Cần dữ liệu và tính toán lớn |
| Khuếch tán | Thêm rồi khử nhiễu | Ảnh và video chất lượng cao | Huấn luyện lâu |

**Tự kiểm tra**

- Giải thích bằng ví dụ đời thường vì sao GAN gọi là "trò chơi đối kháng".
- Vì sao khuếch tán thường huấn luyện lâu hơn VAE?
- Bạn làm sản phẩm cần tạo ảnh quảng cáo, mô hình nào là lựa chọn đầu tiên và vì sao?
