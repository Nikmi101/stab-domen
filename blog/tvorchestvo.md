---
layout: blog-category
title: "Раздел — Творчество и саморазвитие"
description: "Все статьи Vnutri Apps про творчество, вдохновение и личностный рост"
categories: [tvorchestvo]
banner:
  image: "/images/blog-images/test-img.jpg"
  alt: "Статьи блог Vnutri Apps"
  title: "Статьи блог Vnutri Apps"
---
## Творчество и саморазвитие  
(творчество, вдохновение, личностный рост)

{% assign items = site.posts | where_exp: "p", "p.categories contains 'tvorchestvo'" %}
{% for post in items %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%d.%m.%Y" }}
{% endfor %}
