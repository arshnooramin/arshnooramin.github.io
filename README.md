# arshnooramin.github.io

[![Deploy](https://github.com/arshnooramin/arshnooramin.github.io/actions/workflows/jekyll-gh-pages.yml/badge.svg)](https://github.com/arshnooramin/arshnooramin.github.io/actions/workflows/jekyll-gh-pages.yml)

Personal site built with [Jekyll](https://jekyllrb.com/) and a small custom theme (no theme gem, no JavaScript).

## Run locally

```sh
bundle install
bundle exec jekyll serve --livereload
```

Then open http://localhost:4000. Restart the server after editing `_config.yml`.

## Editing content

| What | Where |
| --- | --- |
| Bio, email, social links | `_config.yml` (`bio`, `email`, `social`) |
| Work experience | `_data/experience.yml` |
| Projects | `_projects/*.md` (front matter: `title`, `order`, `excerpt`, `stack`, `demo`, `github`, `image`) |
| Resume PDF | `assets/files/resume.pdf` |
| Colors and fonts | CSS variables at the top of `assets/css/style.css` |

## Deployment

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/jekyll-gh-pages.yml`.
