---
title: "Công cụ sinh mã, kinh nghiệm dùng công cụ, AI sinh nội dung và AI tác tử, tổng kết"
course: "Khoá 6: Generative AI: Introduction and Applications"
module: "Module 2 · Ứng dụng và công cụ của AI sinh nội dung"
order: 620103
---

## Video 1: Công cụ sinh mã

**Ý chính**

- Mô hình và công cụ sinh mã tạo mã **từ ngôn ngữ tự nhiên**, dựa trên học sâu và NLP để hiểu ngữ cảnh và sinh mã phù hợp.
- **Việc làm được:** tạo đoạn mã hay chương trình từ prompt; dự đoán các dòng mã để hoàn thành đoạn dang dở; tạo phiên bản tối ưu của mã sẵn có; **chuyển mã giữa các ngôn ngữ lập trình**; tạo tóm tắt và chú thích để cải thiện tài liệu; đề xuất cả giải pháp lập trình: mô tả vấn đề, công cụ gợi ý thuật toán, cấu trúc dữ liệu và cách tiếp cận phù hợp.
- **Ví dụ với công cụ trò chuyện:** yêu cầu "viết mã Python để chào một người", công cụ trả mã và hướng dẫn chạy; đưa vào mã lỗi thì nhận mã đúng kèm giải thích những chỗ đã sửa; dịch mã sang ngôn ngữ khác; tạo tài liệu và chú thích; thế hệ mới sinh mã dài và chính xác hơn để làm ứng dụng, website, plugin; thậm chí sinh mã từ **hình ảnh** (ví dụ ảnh đề cương khoá học để ra ứng dụng chạy được).
- **Mẹo viết prompt sinh mã:** đưa prompt rõ ràng, **nêu ngôn ngữ lập trình**, kèm yêu cầu và ràng buộc liên quan.
- Công cụ trò chuyện hợp để **học một ngôn ngữ lập trình mới** vì giải thích chi tiết từng bước. Hạn chế:
  - Giỏi sinh mã có logic và khái niệm cơ bản, nhưng **khó sinh mã lớn hoặc phức tạp từ đầu.**
  - Hiểu cú pháp nhưng có thể chưa hiểu hết ngữ nghĩa nên mã đúng về kỹ thuật nhưng vẫn không chạy như yêu cầu.
  - Kiến thức bị giới hạn bởi dữ liệu huấn luyện, có thể không biết khung hay thư viện ra đời sau. Nếu cần mã mới hơn thì dùng công cụ thiết kế riêng cho sinh mã.
- **Các công cụ chuyên sinh mã:** trợ lý sinh mã tích hợp vào trình soạn mã (huấn luyện trên văn bản tự nhiên và mã nguồn công khai, tạo mã theo thực hành tốt và chuẩn ngành); công cụ mã nguồn mở huấn luyện trên kho mã nhiều ngôn ngữ, đặc biệt chính xác với ngôn ngữ C, có thư viện mẫu dựng sẵn; trợ lý dành cho nhà phát triển đám mây lai viết mã chính xác và hiệu quả với gợi ý thời gian thực, tự động hoàn thành, hỗ trợ tái cấu trúc; có thể đưa mã hoặc tệp dự án để phân tích, tìm mẫu hình, gợi ý cải tiến, tạo đoạn mã hoặc mẫu để tuỳ chỉnh; cùng nhiều công cụ khác cho hoàn thành mã chính xác hoặc nền tảng tương tác để viết mã, học và cộng tác.
- **Lợi ích:** tăng năng suất và chất lượng; tạo mẫu thử nhanh; hỗ trợ tương thích đa nền tảng và di chuyển bằng dịch mã nhiều ngôn ngữ; theo mẫu và chuẩn lập trình nhất quán; gợi ý tái cấu trúc theo thực hành tốt.
- **Thận trọng:** mã do AI sinh ra có thể gây vấn đề đạo đức và **lỗ hổng bảo mật**; công cụ có thể bị dùng để tạo dữ liệu độc hại hoặc phản ánh thiên kiến từ dữ liệu huấn luyện.

---

## Video 2: Chuyên gia nói về việc dùng công cụ AI sinh nội dung

**Ý chính**

- Qua thử nhiều loại (văn bản, mã, ảnh, video, nhạc, tệp 3D), **sinh văn bản và sinh mã là loại cho kết quả ưng ý ngay lần đầu nhất.** Mô hình đã được tinh chỉnh nhiều hơn và có nhiều hướng dẫn cách soạn prompt.
- **Không có một LLM làm hết mọi use case.** Với mỗi tác vụ có nhiều LLM để cân nhắc (mã nguồn mở hoặc của tổ chức đủ sức huấn luyện). Có thể **tinh chỉnh** một LLM cho bộ dữ liệu của bạn mà không cần tài nguyên tính toán hay dữ liệu quá lớn.
- Công cụ trò chuyện phổ biến cũng sinh mã được, nhưng **công cụ chuyên sinh mã tốt hơn.** Với văn bản, hay dùng công cụ trò chuyện và các công cụ viết nội dung; với hình ảnh có ba nhóm: **sinh ảnh, sinh video, sinh thiết kế**; công cụ sinh ảnh nâng cao có thể tích hợp với công cụ trò chuyện.
- **Lợi ích:** tạo một **nền móng** tốt để phát triển nội dung. **Hạn chế:** không nên chỉ dựa vào chúng; nội dung tạo ra có giới hạn. Ở mảng ngách như **nhạc hoặc mô hình 3D**, khó đạt đúng ý, mất nhiều thời gian và cần thử sai hơn (tại thời điểm này). Dự kiến sẽ dễ hơn, tốt hơn và **đa phương thức** hơn, tức một giao diện duy nhất làm mọi dạng.
- Lời khuyên: **thử mọi thứ có thể, kể cả thứ chưa thấy hứng thú**, vì sau này có thể hữu ích.

---

## Video 3: AI sinh nội dung và AI tác tử

**Ý chính**

- **AI sinh nội dung** là hệ **phản ứng (reactive):** chờ bạn đưa prompt rồi tạo nội dung theo mẫu hình học khi huấn luyện (văn bản, ảnh, mã, âm thanh). Về bản chất là "cỗ máy khớp mẫu" tinh vi, học được quan hệ thống kê giữa từ, điểm ảnh, sóng âm từ tập dữ liệu khổng lồ và dự đoán điều tiếp theo. **Công việc của nó dừng ở bước sinh,** không tự làm thêm khi chưa có đầu vào của bạn.
- **AI tác tử (agentic AI)** là hệ **chủ động (proactive).** Thường cũng bắt đầu bằng prompt, nhưng prompt dùng để **theo đuổi mục tiêu qua một chuỗi hành động.** Vòng đời: **nhận biết** môi trường, **quyết định** hành động, **thực hiện** hành động, **học** từ kết quả, rồi lặp lại, với ít can thiệp của người.
- Hai loại thường có nền chung là **LLM:** LLM là xương sống của chatbot (mô hình khuếch tán thường dùng cho ảnh và âm thanh); LLM cũng là **bộ máy suy luận** cho hệ tác tử.
- **Ví dụ:** nhà sáng tạo nội dung video dùng AI sinh nội dung để xem kịch bản, gợi ý ý tưởng ảnh bìa, tạo nhạc nền; ở mỗi bước có **con người** xem xét, chỉnh và định hướng: "AI sinh khả năng, con người chọn lọc." Với **tác tử mua sắm cá nhân:** nhận món cần mua, tự tìm khả năng còn hàng trên các nền tảng, theo dõi biến động giá, xử lý thanh toán, phối hợp giao hàng, chỉ hỏi bạn khi cần.
- **Suy luận theo chuỗi suy nghĩ (chain of thought):** tác tử chia nhiệm vụ phức tạp thành các bước logic nhỏ. Ví dụ tác tử lập kế hoạch tổ chức một hội nghị sẽ tự "nói chuyện nội bộ": trước hết hiểu yêu cầu (quy mô, thời lượng, ngân sách), rồi nghiên cứu địa điểm phù hợp, rồi kiểm tra tình trạng trống của các địa điểm đạt yêu cầu... AI sinh nội dung thành **động cơ nhận thức** dẫn dắt ra quyết định của tác tử.
- Tương lai: hệ AI mạnh nhất có lẽ không thuần sinh nội dung cũng không thuần tác tử mà là **cộng sự thông minh,** biết lúc nào nên khám phá bằng cách sinh và lúc nào nên quyết định đi theo hành động.

---

## Tổng kết Module 2 (khoá 6)

- AI sinh nội dung ứng dụng ở CNTT và DevOps, giải trí, giáo dục, tài chính, y tế, nhân sự; thay đổi cách ta làm việc; có ba loại cơ hội kinh doanh: doanh thu, chi phí và năng suất, giảm rủi ro.
- Công cụ sinh văn bản dựa LLM (trò chuyện, viết nội dung, tóm tắt, phân loại, cảm xúc, dịch); công cụ sinh hình ảnh (chuyển ảnh sang ảnh, chuyển phong cách, inpainting, outpainting); công cụ âm thanh (giọng nói, nhạc, nâng chất lượng), video và thế giới ảo; công cụ sinh mã (sinh, sửa lỗi, dịch mã, tạo tài liệu).
- Cần lưu ý riêng tư dữ liệu, giới hạn của công cụ, bảo mật mã sinh ra, và luôn có con người xem xét.
- AI sinh nội dung là hệ phản ứng; AI tác tử là hệ chủ động theo đuổi mục tiêu bằng vòng nhận biết, quyết định, hành động, học.

**Tự kiểm tra cuối module**

- Chọn một quy trình công việc của bạn và đề xuất chỗ nào dùng AI sinh nội dung, chỗ nào cần tác tử, chỗ nào luôn cần người.
- Vì sao mã do AI sinh ra vẫn cần được rà soát về bảo mật?
