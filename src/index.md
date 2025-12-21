---
layout: base.njk
title: What's New
description: Ecommerce Homepage
featured_image: favicon.png
---

<div class="carousel">
{% for item in catalog limit:4 %}
<div class="carousel-card">
    <div class="carousel-container">
        <img class="carousel-img" src="{{ item.img }}" alt="{{ image.name}}" />
        <span class="bottom-left">{{item.name}}</span>
        <span class="bottom-right">{{item.price}}</span>
    </div>
</div>
{% endfor %}
<div class="carousel-card ">
    <a href="./catalog/">
        <span class="carousel-button" style="display: block;">
            Full Catalog »
        </span>
    </a>
</div>
</div>