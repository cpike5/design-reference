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
index.html              Dashboard page (private)
blog.html               Blog list page (public)
blog-post.html          Blog post page (public)
css/
  site.css              Core design system tokens and components
  public-pages.css      Shared styles for public pages
  blog.css              Blog list page specific styles
  blog-post.css         Blog post page specific styles
js/
  site.js               Shared scripts
DESIGN-SYSTEM.md        Design system documentation
```

## Development Guidelines

- Keep HTML, CSS, and JS in separate files
- Split large files when they become unwieldy
- Original prototype: `../../prototypes/personal-dashboard-dark.html`

## Planned Pages

| Page | Type | Status |
|------|------|--------|
| Dashboard | Private | In progress |
| Blog list | Public | Complete |
| Blog post | Public | Complete |
| Projects | Public | Not started |
| About | Public | Not started |
| Finance dashboard | Private | Not started |
| Recipe view | Private | Not started |