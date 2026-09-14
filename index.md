---
layout: default
---

<section id="hero" class="hero">
  <div class="hero-content">
    <h1>Arsh Noor Amin</h1>
    <p class="hero-subtitle">Software Engineer | Full Stack Developer | UI/UX Enthusiast</p>
    <p class="hero-description">
      Passionate about building beautiful, functional applications with a focus on user experience
      and clean code.
    </p>
    <div class="hero-cta">
      <a href="#portfolio" class="btn btn-primary">View My Work</a>
      <a href="#contact" class="btn btn-secondary">Get In Touch</a>
    </div>
  </div>
</section>

<section id="portfolio" class="portfolio">
  <h2>Portfolio</h2>
  <p class="section-subtitle">Recent projects and work samples</p>
  
  <div class="portfolio-grid">
    {% for project in site.projects %}
      <article class="portfolio-card">
        <div class="card-header">
          <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
        </div>
        <div class="card-body">
          <p>{{ project.excerpt | strip_html | truncatewords: 20 }}</p>
        </div>
        <div class="card-footer">
          {% if project.technologies %}
            <div class="tech-tags">
              {% for tech in project.technologies %}
                <span class="tag">{{ tech }}</span>
              {% endfor %}
            </div>
          {% endif %}
          <a href="{{ project.url }}" class="read-more">Learn More →</a>
        </div>
      </article>
    {% endfor %}
  </div>
  
  {% if site.projects.size == 0 %}
    <div class="empty-state">
      <p>No projects yet. Check back soon!</p>
    </div>
  {% endif %}
</section>

<section id="contact" class="contact">
  <h2>Let's Connect</h2>
  <p>I'm always interested in interesting projects and opportunities. Feel free to reach out!</p>
  
  <div class="contact-links">
    <a href="mailto:{{ site.email }}" class="contact-link">
      <i class="fas fa-envelope"></i> Email Me
    </a>
    <a href="{{ site.social.linkedin }}" target="_blank" rel="noopener" class="contact-link">
      <i class="fab fa-linkedin"></i> LinkedIn
    </a>
    <a href="{{ site.social.github }}" target="_blank" rel="noopener" class="contact-link">
      <i class="fab fa-github"></i> GitHub
    </a>
  </div>
</section>
