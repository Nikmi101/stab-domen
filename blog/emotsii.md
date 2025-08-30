---
layout: default
title: Статьи — Эмоции и состояние
---

# Эмоции и состояние  
(тревога, стресс, настроение, поддержка, психологические практики)

{% assign items = site.posts | where_exp: "p", "p.categories contains 'emotsii'" %}
{% for post in items %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%d.%m.%Y" }}
{% endfor %}

