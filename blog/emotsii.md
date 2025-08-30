---
title: Статьи — Эмоции и состояние
description: "Практическое руководство о том, как постепенно отказаться от курения, снизить тревогу и выработать новые привычки."
author: "yes"
date: 2025-08-29
categories: [privychki]
banner:
  image: "/images/blog-images/test-img.jpg"
  alt: "Бросаем курить легко"
  title: "Бросить курить без стресса"
recommended_app:
  name: "Курил-Бросил: бросить курить"
  icon: "/images/icons/ic_kurilbrosil.png"
  description: "Приложение поможет вам постепенно отказаться от курения и следить за прогрессом."
  rustore_link: "https://rustore.ru/app/kuril-brosil"
  landing_link: "https://vnutriapps.ru/brosit-kurit.html"
---
# Эмоции и состояние  
(тревога, стресс, настроение, поддержка, психологические практики)

{% assign items = site.posts | where_exp: "p", "p.categories contains 'emotsii'" %}
{% for post in items %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%d.%m.%Y" }}
{% endfor %}



