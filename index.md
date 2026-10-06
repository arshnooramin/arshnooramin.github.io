---
layout: default
---

<section class="intro" aria-label="About">
<p class="prompt"><span class="prompt-sign">$</span> whoami</p>
<h1>Arsh Noor Amin</h1>
<p>{{ site.bio | markdownify | remove: "<p>" | remove: "</p>" | strip }}&#8288;<span class="cursor" aria-hidden="true"></span></p>
<p><a class="button" href="{{ site.resume | relative_url }}" download="Arsh Noor Amin - Resume.pdf">resume ↓</a></p>
</section>

<section id="experience">
<h2>experience</h2>
{% for job in site.data.experience %}
<div class="job">
{% capture company %}{% if job.logo %}<span class="logo" style="--logo: url('{{ job.logo | relative_url }}');{% if job.logo_height %} --logo-height: {{ job.logo_height }};{% endif %}{% if job.logo_color %} --logo-color: {{ job.logo_color }};{% endif %}"><img src="{{ job.logo | relative_url }}" alt="{{ job.company }}"></span>{% else %}{{ job.company }}{% endif %}{% endcapture %}
<div class="row"><strong class="company">{% if job.url %}<a href="{{ job.url }}" rel="noopener">{{ company }}</a>{% else %}{{ company }}{% endif %}</strong><span class="dim">{{ job.location }}</span></div>
{% for role in job.roles %}
<div class="role">
<div class="row"><span>{{ role.title }}{% if role.team %} <span class="dim team"><span class="sep">· </span>{{ role.team }}</span>{% endif %}</span><span class="dim">{{ role.dates }}</span></div>
{% if role.summary %}<div class="summary">{{ role.summary | markdownify }}</div>{% endif %}
{% if role.stack %}<p class="meta">{% for tech in role.stack %}<span class="tag">{{ tech }}</span>{% endfor %}</p>{% endif %}
</div>
{% endfor %}
</div>
{% endfor %}
</section>

<section id="projects">
<h2>projects</h2>
{% assign projects = site.projects | sort: "order" %}
<ul class="projects">
{% for project in projects %}
<li{% if project.image %} class="has-image"{% endif %}>
{% if project.image %}{% assign shot_url = project.demo | default: project.github %}<a class="shot" href="{{ shot_url }}" rel="noopener" tabindex="-1" aria-hidden="true"><img src="{{ project.image | relative_url }}" alt="" loading="lazy"></a>{% endif %}
<div class="project-body">
<div class="row">
<strong>{% if project.demo %}<a href="{{ project.demo }}" rel="noopener">{{ project.title }}</a>{% else %}{{ project.title }}{% endif %}</strong>
<span class="links">
{%- if project.demo %}<a href="{{ project.demo }}" rel="noopener">live ↗</a>{% endif -%}
{%- if project.github %}<a href="{{ project.github }}" rel="noopener" aria-label="{{ project.title }} source code" title="Source code">{% include icons/code.svg %}</a>{% endif -%}
</span>
</div>
<p class="dim">{{ project.excerpt | markdownify | remove: "<p>" | remove: "</p>" | strip }}</p>
{% if project.stack %}<p class="meta">{% for tech in project.stack %}<span class="tag">{{ tech }}</span>{% endfor %}</p>{% endif %}
</div>
</li>
{% endfor %}
</ul>
</section>

