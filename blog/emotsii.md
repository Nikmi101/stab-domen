---
layout: default
title: Раздел — Эмоции и состояние
description: "Все статьи Vnutri Apps про тревогу, стресс, настроение, поддержку, психологические практики "
categories: [privychki]
banner:
  image: "/images/blog-images/test-img.jpg"
  alt: "Статьи блог Vnutri Apps"
  title: "Статьи блог Vnutri Apps"
---
## Эмоции и состояние  
(тревога, стресс, настроение, поддержка, психологические практики)

{% assign items = site.posts | where_exp: "p", "p.categories contains 'emotsii'" %}
{% for post in items %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%d.%m.%Y" }}
{% endfor %}




