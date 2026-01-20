# Claude Instructions: design-reference

Repository of HTML/CSS/JS prototypes and refined production-ready versions.

## Folder Structure

```
prototypes/          Rough mockups and experiments
refined-prototypes/  Production-ready versions, organized by project
```

## Workflow

1. **Prototypes** (`prototypes/`) - Quick experiments, single-file HTML with inline styles allowed
2. **Refined** (`refined-prototypes/<project>/`) - Clean separation of HTML, CSS, JS

## Refined Prototype Conventions

Each folder in `refined-prototypes/` is a standalone project with:
- `README.md` containing a **Planned Pages** status table
- Shared `css/site.css` and `js/site.js`
- One HTML file per page

### README Status Table

Keep the status table updated when working on pages:

| Status | When to use |
|--------|-------------|
| Not started | Page doesn't exist yet |
| In progress | Actively being built |
| Complete | Ready for production |

**Update the table** when you start or finish a page.

### Adding Features

When the user mentions new features or pages, add them to the project's README Planned Pages table.

## File Naming

- Pages: `<page-name>.html` (e.g., `blog.html`, `about.html`)
- Page-specific styles: `<page-name>-specific.css`
- Main entry: `index.html`
