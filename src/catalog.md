---
layout: base.njk
permalink: "{{ page.fileSlug }}.html"
title: Catalog
description: Artwork Catalog
featured_image: favicon.png
---

<div class="grid">
{% for item in catalog %}
<div class="card">
    <img src="{{ item.img }}" alt="{{ item.name}}" />
    <div class="card-body">
        <h2 class="card-title">{{ item.name}}</h2>
        <p class="card-text">
            Price: {{ item.price}}<br>
            Description: {{ item.desc}}</p>
        <p>
            <a class="card-button" href="{{ item.link}}">Buy Now</a>
        </p>
    </div>
</div>
{% endfor %}
</div>