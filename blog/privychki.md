---
layout: default
title: Статьи — Привычки и изменения
---

# Привычки и изменения  
(зависимости, новые привычки, курение, еда, прокрастинация)

{% assign items = site.posts | where_exp: "p", "p.categories contains 'habits'" %}
{% for post in items %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%d.%m.%Y" }}
{% endfor %}
