---
layout: blog-category
title: "Раздел — Философия и глубина"
description: "Все статьи Vnutri Apps про философию, размышления и психологические концепции"
categories: [filosofiya]
banner:
  image: "/images/blog-images/test-img.jpg"
  alt: "Статьи блог Vnutri Apps"
  title: "Статьи блог Vnutri Apps"
---
## Философия и глубина  
(философия, размышления, психологические концепции)

{% assign items = site.posts | where_exp: "p", "p.categories contains 'filosofiya'" %}
{% for post in items %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%d.%m.%Y" }}
{% endfor %}
