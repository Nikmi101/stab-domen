---
layout: blog-category
title: "Раздел — Привычки и изменения"
description: "Все статьи Vnutri Apps про привычки, здоровые изменения и личные ритуалы"
categories: [privychki]
banner:
  image: "/images/blog-images/test-img.jpg"
  alt: "Статьи блог Vnutri Apps"
  title: "Статьи блог Vnutri Apps"
---
## Привычки и изменения  
(здоровые привычки, образ жизни, изменения в жизни)

Статьи от Vnutri Apps:
{% assign items = site.posts | where_exp: "p", "p.categories contains 'privychki'" %}
{% for post in items %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%d.%m.%Y" }}
{% endfor %}



