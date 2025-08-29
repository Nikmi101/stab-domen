---
layout: default
title: Статьи — Творчество и развитие
---

# Творчество и развитие  
(самореализация, поток, креативность, внутренняя энергия)

{% assign items = site.posts | where_exp: "p", "p.categories contains 'creativity'" %}
{% for post in items %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%d.%m.%Y" }}
{% endfor %}
