---
layout: page
title: projects
permalink: /projects/
description: 
nav: true
nav_order: 3
horizontal: true
---

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}

  <div class="container">
    <div class="row row-cols-1">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
    
    <hr style="border-top: 1px solid #e0e0e0; margin-top: 0; margin-bottom: 2rem;">
  </div>
</div>