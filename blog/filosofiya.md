---
layout: default
title: Статьи — Философия и глубина
---

# Философия и глубина  
(юнгианство, культурология, психология как наука, философские статьи)

{% assign items = site.posts | where_exp: "p", "p.categories contains 'philosophy'" %}
{% for post in items %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%d.%m.%Y" }}
{% endfor %}
