---
title: "Nền tảng AI: studio doanh nghiệp, dữ liệu, quản trị và hub mã nguồn mở"
course: "Khoá 8: Generative AI: Foundation Models and Platforms"
module: "Module 2 · Nền tảng cho AI sinh nội dung"
order: 820102
---

## Video 1: Nền tảng AI dành cho doanh nghiệp

**Ý chính (giữ ở mức khái niệm, không nêu tên sản phẩm)**

- Tạo bài thơ, tranh hay bài hát bằng AI thì vui, nhưng **AI trong kinh doanh cần nghĩ lớn hơn:** phải dựa trên yêu cầu và **tiêu chuẩn cao hơn.** Khi đặt AI vào lõi doanh nghiệp, nó cần **đáng tin cậy, an toàn, mở rộng được và thích ứng được.**
- Một nền tảng AI và dữ liệu tích hợp cho người xây dựng AI thường có **ba sản phẩm/lớp:**
  1. **Studio AI:** xưởng làm việc cho mô hình nền, AI sinh nội dung và học máy.
  2. **Kho dữ liệu (data store).**
  3. **Bộ công cụ giám sát và quản trị (governance).**

**Studio AI: huấn luyện, tinh chỉnh, triển khai, quản lý**

- Studio là tập công cụ tích hợp chạy trên mô hình nền, dùng để **huấn luyện, tinh chỉnh, triển khai và quản lý** mô hình nền dễ dàng. Giúp xây ứng dụng AI **nhanh hơn nhiều với ít dữ liệu hơn nhiều.**
- Ba mục tiêu nổi bật: **xây mô hình học máy; thử nghiệm với mô hình nền; quản lý vòng đời AI.** Công cụ trong studio bám theo vòng đời của mô hình: **chuẩn bị dữ liệu → xây thử nghiệm → huấn luyện mô hình và giải pháp → triển khai và xây ứng dụng → quản lý mô hình và các quy trình lặp lại.**
- Studio cung cấp: một số mô hình mã nguồn mở chọn lọc, các **mô hình nền do chính nhà cung cấp huấn luyện** với kích cỡ và kiến trúc khác nhau, và cho phép **mang mô hình và dữ liệu của riêng bạn.**
- **Ba công cụ điển hình:**

| Công cụ | Chức năng |
| --- | --- |
| **Phòng thử prompt (Prompt Lab)** | Thử nghiệm mô hình nền, xây và tinh chỉnh prompt để phục vụ nhiều tác vụ NLP: hỏi đáp, sinh nội dung, tóm tắt, phân loại và trích xuất văn bản |
| **Phòng tinh chỉnh (Tuning Studio)** | Tuỳ biến mô hình theo dữ liệu và use case của bạn; đưa tập dữ liệu vào, tinh chỉnh mô hình **chỉ với khoảng 100 ví dụ** (theo video); có các phương pháp tinh chỉnh prompt và tinh chỉnh mô hình |
| **Công cụ đường ống (Pipeline)** | Tự động hoá các bước: nạp dữ liệu, huấn luyện, triển khai, đánh giá mô hình. Rút ngắn thời gian đưa mô hình vào vận hành và tăng độ chính xác, độ tin cậy |

- Thông điệp: trước đây mô hình phải huấn luyện cho **một tác vụ rất cụ thể;** nay nhờ mô hình nền có thể xây ứng dụng mạnh nhanh hơn với ít dữ liệu hơn. Môi trường cộng tác giúp đơn giản hoá quy trình suốt vòng đời AI.
- **Bảo mật:** dữ liệu và mô hình bạn tạo chỉ truy cập được bởi bạn; dữ liệu lưu dạng mã hoá; mô hình riêng của tài khoản; nhà cung cấp không được dùng nếu không có sự cho phép của bạn.

**Kho dữ liệu và quản trị (từ bài đọc kèm)**

- **Kho dữ liệu** xây trên kiến trúc **"lakehouse" mở,** kết hợp phần tốt của kho dữ liệu thô (data lake) và kho dữ liệu có cấu trúc (data warehouse). Dùng để huấn luyện và tinh chỉnh mô hình AI; kết nối dữ liệu dễ, tăng độ tin cậy nhờ quản trị, bảo mật và tự động hoá có sẵn; xử lý nhanh nhờ **nhiều engine truy vấn;** kết hợp nhiều tầng lưu trữ và engine giúp **giảm chi phí** kho dữ liệu nhờ tối ưu tải công việc. Có thể dùng giao diện hội thoại chạy trên mô hình nền để truy xuất, khám phá, làm giàu dữ liệu và siêu dữ liệu.
- **Quản trị (governance)** giải quyết vấn đề AI như "hộp đen" gây thêm câu hỏi. Bộ công cụ cho phép **chỉ đạo, quản lý, giám sát** hoạt động AI của tổ chức: thiết kế AI dựa trên **trách nhiệm, minh bạch, tin cậy;** truy vết dữ liệu, mô hình, đường ống để luôn giải thích được quyết định của AI; **giám sát công bằng, thiên kiến và trôi dạt (drift)** để kịp thời sửa; **chuyển yêu cầu pháp lý thành chính sách thực thi** để quản lý tuân thủ; có bảng điều khiển, báo cáo, biểu đồ tuỳ chỉnh.
- **Ví dụ ứng dụng quản trị:**
  - **Rủi ro tín dụng:** quy trình duyệt công bằng, không thiên kiến, minh bạch.
  - **Chẩn đoán y tế:** tránh khuyến nghị chẩn đoán và điều trị sai, có hại.
  - **Chuỗi cung ứng:** dự báo nhu cầu chính xác hơn, quy trình hiệu quả hơn.
  - **Tuyển dụng:** quyết định công bằng, phát hiện và giảm thiên kiến, có tài liệu phục vụ kiểm toán.

**Tự kiểm tra**

- Vì sao doanh nghiệp cần cả lớp dữ liệu, lớp mô hình và lớp quản trị chứ không chỉ một mô hình tốt?
- Công ty bạn có thể thử Prompt Lab-kiểu công cụ trước, tinh chỉnh sau; vì sao đó là thứ tự hợp lý (tự đặt)?

---

## Video 2: Nền tảng mã nguồn mở của cộng đồng

**Ý chính**

- Đây là nền tảng AI **mã nguồn mở** nơi nhà khoa học, nhà phát triển và doanh nghiệp cộng tác xây công cụ học máy tuỳ biến. Mục đích: tạo **trung tâm cho cộng đồng AI mã nguồn mở chia sẻ mô hình, tập dữ liệu và ứng dụng,** để AI dễ tiếp cận kể cả với người không đủ ngân sách hay nhân lực tự xây. Vì thế được coi là góp phần **dân chủ hoá AI,** thách thức quan niệm "một mô hình cho tất cả" bằng các mô hình nhỏ hơn, được tuyển chọn.
- Ban đầu cộng đồng tập trung vào mô hình transformer cho NLP; nay có công cụ học máy sinh văn bản, ảnh, âm thanh, video. Nền tảng chứa hàng trăm nghìn mô hình mở, hàng chục nghìn tập dữ liệu và hàng triệu bản demo (các con số này thay đổi liên tục, không nên dựa vào).
- Nhà phát triển có **thư viện transformer mã nguồn mở** chứa rất nhiều mô hình huấn luyện trước, tương thích các khung học sâu phổ biến. Mô hình làm nhiều tác vụ: sinh văn bản, hỏi đáp, tóm tắt, nhận dạng giọng nói tự động, tách vùng ảnh... Có thể tìm mô hình theo tên hoặc chia sẻ mô hình của mình. Có khu vực để **lưu trữ bản demo** ứng dụng AI cho người khác dùng thử và kiểm chứng.

**Lợi ích cho doanh nghiệp**

- Có gói doanh nghiệp truy cập mô hình và tập dữ liệu huấn luyện trước: tận dụng hạ tầng sẵn có thay vì **xây từ đầu,** giảm **dấu chân carbon, thời gian và chi phí mở rộng,** đồng thời huấn luyện thêm trên **dữ liệu độc quyền** và use case riêng.
- Còn giúp: thêm hoặc bớt tính năng để mô hình hiệu quả hơn; **đánh giá mô hình để lọc dữ liệu thiên kiến;** tạo ứng dụng đa phương thức (văn bản, ảnh, âm thanh, video).
- Hàng chục nghìn công ty lớn nhỏ dùng; cả trường đại học và tổ chức phi lợi nhuận. Có chương trình **tăng tốc chuyên gia** hướng dẫn người không phải nhà phát triển về mô hình học máy, và bản trò chuyện mã nguồn mở thay thế. Tuân thủ chuẩn kiểm soát tổ chức dịch vụ loại 2 (an ninh, sẵn sàng, toàn vẹn xử lý, bảo mật, riêng tư dữ liệu).
- **Hợp tác giữa nền tảng mở và studio doanh nghiệp:** studio đưa một số mô hình mở vào môi trường của mình để cộng đồng người xây dựng huấn luyện, thử và triển khai; nền tảng mở tạo bản mở của một số LLM doanh nghiệp và đưa lên hub. Cả hai tin vào công nghệ mở và cộng đồng.
- **Lập luận trong video:** mô hình độc quyền có thể nhanh lỗi thời; nền tảng mở được cộng đồng không ngừng đổi mới ủng hộ nên có thể tạo lợi thế trước các hãng lớn. Ý chính: **không cần là doanh nghiệp lớn mới hưởng lợi từ AI sinh nội dung.**

---

## Video 3: Chuyên gia nói về đổi mới nhờ nền tảng mở

**Ý chính**

- Nền tảng mở có vai trò lớn trong **phát triển, triển khai và áp dụng** AI sinh nội dung nhờ cách tiếp cận **do cộng đồng dẫn dắt.** Khung cho phép mọi người truy cập kho mô hình ngôn ngữ lớn huấn luyện trước, **không cần nhiều thời gian hay sức tính toán,** rồi tinh chỉnh trên tập dữ liệu riêng cho use case riêng.
- Có nhiều tài liệu học tập; có nhiều **tuỳ chọn triển khai,** tích hợp với nền tảng đám mây và API phổ biến.
- Thư viện mã nguồn mở đơn giản hoá việc dùng mô hình phức tạp, giúp nhà phát triển đưa năng lực AI nâng cao vào ứng dụng dễ dàng. **Kho mô hình (Model Hub)** để dùng mô hình và tập dữ liệu huấn luyện trước, thúc đẩy cộng tác và đổi mới.
- **Lợi thế lớn nhất là cộng đồng:** nhiều mô hình nền cho nhiều tác vụ như nhận diện khuôn mặt, phát hiện vật thể. Các mô hình AI sinh nội dung dựa vào những mô hình huấn luyện trước và đoạn mã đó; bản thân một mô hình ngôn ngữ lớn không tự làm được mọi tác vụ.
- **Lợi ích khi tham gia cộng đồng:** truy cập nhiều tài nguyên và chuyên môn; chia sẻ kiến thức, học hỏi nhau, cập nhật tiến bộ mới; giao diện thân thiện và tài liệu đầy đủ giúp cả người mới lẫn chuyên gia thử nghiệm và triển khai nhanh hơn, rút ngắn thời gian phát triển. Ai bị kẹt thì thường có sẵn nhiều lời giải từ cộng đồng.
- Kết luận: AI sinh nội dung hưởng lợi rõ rệt nhờ các mô hình huấn luyện trước tốt và cộng đồng này, nhất là trong ứng dụng khoa học dữ liệu.

---

## Tổng kết Bài học 2: Mô hình huấn luyện trước và nền tảng AI

- **Sinh văn bản:** gồm hai nhóm thống kê và mạng nơ-ron; mạng nơ-ron dùng seq2seq hoặc transformer. Tăng hiệu quả công việc viết kịch bản, nhạc, email, thư...
- **Sinh ảnh:** từ mô tả thành ảnh, thuộc hai loại GAN và khuếch tán; tạo ảnh thực hoặc trừu tượng.
- **Sinh mã:** từ mô tả tự nhiên, hai kiểu seq2seq và transformer; mã tự động hiệu quả, chính xác, nhất quán hơn viết tay.
- **Nền tảng doanh nghiệp** gồm studio AI, kho dữ liệu và quản trị, giúp tạo AI có trách nhiệm và minh bạch. **Nền tảng mở** là nơi cộng tác tạo công cụ học máy tuỳ biến, chi phí thấp hơn, thời gian ngắn hơn, ít carbon hơn.

**Tự kiểm tra cuối module**

- Với một tính năng sản phẩm của bạn, hãy chọn: dùng studio doanh nghiệp hay mô hình mở từ hub cộng đồng? Nêu ba tiêu chí quyết định (tự đặt).
- Vì sao quản trị (giám sát thiên kiến, trôi dạt) cần có ngay từ khi đưa AI vào sản xuất?
