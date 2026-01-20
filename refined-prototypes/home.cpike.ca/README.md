# home.cpike.ca

Personal website with public-facing content and private productivity tools.

## Overview

- **Public**: Blog, Projects, About
- **Private Tools**: Dashboard, CMS, Finances, Recipes
- **Future**: Discord bot integration, DND session tracker, fragrance database

## Current State

Dark-themed dashboard layout with sidebar navigation. Uses a huemint-generated purple/teal palette and Google Sans Flex typography.

## File Structure

```
index.html                   Dashboard page (private)
blog.html                    Blog list page (public)
blog-post.html               Blog post page (public)
blog-editor.html             Blog post editor (private)
recipe-editor.html           Recipe editor (private)
settings.html                Site settings (private)
finances.html                Finance dashboard (private)
projects.html                Projects portfolio (public)
components.html              Basic UI components showcase (private)
components-advanced.html     Advanced UI components showcase (private)
css/
  site.css                   Core design system tokens and components
  public-pages.css           Shared styles for public pages
  blog.css                   Blog list page specific styles
  blog-post.css              Blog post page specific styles
  blog-editor.css            Blog editor specific styles
  recipe-editor.css          Recipe editor specific styles
  settings.css               Settings page specific styles
  finances.css               Finance dashboard specific styles
  projects.css               Projects page specific styles
  components.css             Basic components showcase styles
  components-advanced.css    Advanced components showcase styles
js/
  site.js                    Shared scripts
  blog-editor.js             Blog editor interactions
  recipe-editor.js           Recipe editor interactions
  settings.js                Settings page interactions
  components-advanced.js     Advanced components interactions
DESIGN-SYSTEM.md             Design system documentation
```

## Development Guidelines

- Keep HTML, CSS, and JS in separate files
- Split large files when they become unwieldy
- Original prototype: `../../prototypes/personal-dashboard-dark.html`

## Planned Pages

| Page | Type | Status |
|------|------|--------|
| Dashboard | Private | Complete |
| Blog list | Public | Complete |
| Blog post | Public | Complete |
| Blog editor | Private | Complete |
| Recipe editor | Private | Complete |
| Settings | Private | Complete |
| Finance dashboard | Private | Complete |
| Projects | Public | Complete |
| Basic Components | Private | Complete |
| Advanced Components | Private | Complete |
| About | Public | Not started |
| Recipe view | Private | Not started |