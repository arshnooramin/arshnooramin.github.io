# Arsh Noor Amin - Portfolio Website

A modern portfolio website built with [Jekyll](https://jekyllrb.com/).

## 🚀 Getting Started

### Prerequisites
- Ruby 2.7 or higher
- Bundler

### Installation

1. Clone or navigate to this repository
2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the Jekyll development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and visit `http://localhost:4000`

## 📁 Project Structure

```
.
├── _config.yml              # Jekyll configuration
├── _includes/               # Reusable components (navbar, footer)
├── _layouts/                # Page layouts (default, project)
├── _projects/               # Portfolio project entries
├── assets/                  # Static files (CSS, JS, images)
├── index.md                 # Homepage
├── resume.md                # Resume page
├── Gemfile                  # Ruby dependencies
└── README.md                # This file
```

## ✨ Features

- **Responsive Design** - Mobile-first approach that works on all devices
- **Portfolio Section** - Showcase your projects with descriptions and technologies
- **Resume Page** - Dedicated page for your resume/CV
- **Contact Section** - Easy ways for people to reach you
- **Clean Code** - Well-organized, easy to customize
- **Jekyll Collections** - Organized project management

## 📝 How to Add Projects

1. Create a new markdown file in `_projects/` directory
2. Use this template:

```markdown
---
title: Project Name
excerpt: Brief description of your project
technologies:
  - Technology 1
  - Technology 2
  - Technology 3
link: https://link-to-project.com
date: YYYY-MM-DD
---

## Overview
Describe your project...

## Problem & Solution
Explain the challenge and your approach...

## Key Features
- Feature 1
- Feature 2
```

3. The project will automatically appear on your portfolio page!

## 🎨 Customization

### Update Site Information
Edit `_config.yml`:
```yaml
title: Your Name
email: your-email@example.com
description: Your site description
url: https://yourdomain.com
social:
  linkedin: https://linkedin.com/in/yourprofile
  github: https://github.com/yourprofile
```

### Modify Colors & Styles
Edit `assets/css/style.css` to change:
- Color scheme (CSS variables at the top)
- Typography
- Layout and spacing
- Component styling

### Update Resume Content
Edit `resume.md` to include:
- Your experience
- Skills
- Education
- Projects

## 🚀 Deployment

This site is configured for GitHub Pages. To deploy:

1. Ensure your repository is named `username.github.io`
2. Push your changes to the `main` branch
3. GitHub will automatically build and deploy your site
4. Visit `https://username.github.io` to see your site live

## 📚 Learn More

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Jekyll Collections](https://jekyllrb.com/docs/collections/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages](https://pages.github.com/)

## 💡 Next Steps

1. ✏️ Update `_config.yml` with your information
2. 🎨 Customize `assets/css/style.css` with your preferred colors
3. 📝 Update `resume.md` with your resume content
4. 🖼️ Add your projects in `_projects/` directory
5. 🚀 Deploy to GitHub Pages

## License

This project is open source and available under the MIT License.
