---
layout: layout.njk
title: Ghi chú IBM AI Product Manager
---

Nhật ký học chương trình IBM AI Product Manager trên Coursera (10 khoá). Mỗi video có phần ý chính, ví dụ và câu hỏi tự kiểm tra để ôn lại nhanh. Sau khi học xong, ghi chú được gói thành skill cho Claude dùng trong dự án thực tế.

{% assign groups = collections.posts | groupByModule %}
{% for g in groups %}
<h2>{{ g.course }} · {{ g.module }}</h2>
<ul>
{%- for post in g.posts %}
  <li><a href="{{ post.url | url }}">{{ post.data.title }}</a></li>
{%- endfor %}
</ul>
{% endfor %}
