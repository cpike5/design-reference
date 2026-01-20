# Design System: home.cpike.ca Personal Dashboard

Comprehensive design tokens and component patterns extracted from the personal dashboard prototype.

## Color System

### Base Colors (Dark Theme)

```css
/* Background hierarchy */
--bg: #0f0f14;              /* Primary background - darkest, main canvas */
--bg-subtle: #1a1a22;       /* Subtle elevation - sidebar, containers */
--bg-elevated: #242430;     /* Elevated surfaces - cards, modals */

/* Text hierarchy */
--ink: #e8e8ec;             /* Primary text - headings, important content */
--ink-secondary: #a0a0aa;   /* Secondary text - descriptions, metadata */
--ink-muted: #6b6b78;       /* Muted text - labels, supporting info */
--ink-faint: #2a2a35;       /* Faint decorative - dividers, subtle borders */
```

### Accent Colors

```css
/* Purple accent system (primary actions, highlights) */
--accent: #7c3aed;          /* Standard accent - buttons, links, active states */
--accent-light: #a78bfa;    /* Light variant - hover states, secondary emphasis */
--accent-dim: #6d28d9;      /* Dim variant - pressed states, subtle accents */
--accent-bg: rgba(124, 58, 237, 0.15);  /* Background tint - badges, highlights */

/* Teal secondary (contrast, complementary actions) */
--secondary: #22d3ee;       /* Secondary accent - alternative actions */
--secondary-bg: rgba(34, 211, 238, 0.12);  /* Secondary background tint */

/* Status colors */
--warning: #fbbf24;         /* Warning/attention states */
--warning-bg: rgba(251, 191, 36, 0.12);  /* Warning background tint */
```

### Semantic Color Usage

| Token | Use Cases |
|-------|-----------|
| `--accent` | Primary CTA buttons, active navigation, links, progress indicators |
| `--accent-light` | Hover states, secondary emphasis, featured badges |
| `--accent-bg` | Badge backgrounds, subtle highlights, selection states |
| `--secondary` | Alternative actions, complementary UI elements |
| `--warning` | Alerts, notifications requiring attention |

### Color Accessibility

- All text colors meet WCAG 2.1 AA contrast ratios against their backgrounds
- `--ink` on `--bg`: High contrast for body text
- `--ink-secondary` on `--bg`: Sufficient contrast for supporting text
- `--ink-muted` on `--bg`: Minimum AA contrast for labels

## Typography System

### Font Family

```css
--sans: 'Google Sans Flex', -apple-system, sans-serif;
```

**Weights available:**
- 300 (Light) - Large headings, display text
- 400 (Regular) - Body text, standard UI
- 500 (Medium) - Emphasis, button text, section titles

### Type Scale

```css
/* Font sizes */
--text-xs: 10px;       /* Tiny labels, timestamps */
--text-sm: 11px;       /* Small supporting text */
--text-base-sm: 12px;  /* Section titles, small headings */
--text-base: 13px;     /* Body text, default UI */
--text-md: 14px;       /* Subtitles, emphasized body */
--text-lg: 16px;       /* Task names, list item titles */
--text-xl: 24px;       /* Featured content, card titles */
--text-2xl: 32px;      /* Page titles */
--text-3xl: 40px;      /* Large stat values, hero numbers */
```

### Typography Patterns

#### Page Title
```css
font-size: 32px;
font-weight: 300;
letter-spacing: -0.02em;
color: var(--ink);
```

#### Section Title
```css
font-size: 12px;
font-weight: 500;
letter-spacing: 0.1em;
text-transform: uppercase;
color: var(--ink-muted);
```

#### Body Text (Default)
```css
font-size: 13px;
font-weight: 400;
line-height: 1.6;
color: var(--ink);
```

#### Featured/Large Value
```css
font-size: 40px;
font-weight: 300;
letter-spacing: -0.02em;
color: var(--ink);
```

#### Small Label
```css
font-size: 11px;
font-weight: 400;
letter-spacing: 0.05em;
text-transform: uppercase;
color: var(--ink-muted);
```

## Spacing System

### Spacing Scale

```css
--space-1: 4px;    /* Tight internal spacing */
--space-2: 8px;    /* Small gaps, compact layouts */
--space-3: 12px;   /* Medium-small spacing */
--space-4: 16px;   /* Standard spacing unit */
--space-5: 20px;   /* Medium-large spacing */
--space-6: 24px;   /* Large spacing, section gaps */
--space-8: 32px;   /* Extra large spacing */
--space-12: 48px;  /* Section separators */
--space-16: 64px;  /* Major layout divisions */
```

### Spacing Usage Guidelines

| Scale | Use Cases |
|-------|-----------|
| 4px | Icon-to-text gaps, badge padding |
| 8px | Button padding (vertical), compact list gaps |
| 12px | Card padding, small component internal spacing |
| 16px | Standard padding, list item spacing |
| 20px | Comfortable list spacing, form field gaps |
| 24px | Card padding (larger), section internal spacing |
| 32px | Section headers, major component spacing |
| 48px | Between distinct sections |
| 64px | Major layout divisions, page-level spacing |

## Layout System

### Sidebar Navigation

```css
width: 240px;
background: var(--bg-subtle);
padding: 24px 0;
```

**Navigation items:**
```css
padding: 12px 24px;
font-size: 13px;
color: var(--ink-secondary);
```

**Active state:**
```css
background: var(--accent-bg);
color: var(--accent-light);
border-left: 2px solid var(--accent);
```

### Main Content Area

```css
margin-left: 240px;  /* Sidebar width */
padding: 48px 64px;
max-width: 1400px;   /* Optional content constraint */
```

### Grid Layouts

**Stat cards (3-column):**
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;
```

**Task/list rows:**
```css
display: grid;
grid-template-columns: 24px 1fr auto auto;
gap: 16px;
align-items: center;
```

## Component Patterns

### Stat Cell

```css
.stat-cell {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.stat-value {
    font-size: 40px;
    font-weight: 300;
    letter-spacing: -0.02em;
    color: var(--ink);
}

.stat-label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-muted);
}
```

### Task Row

```css
.task-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: start;
    padding: 20px 0;
    border-bottom: 1px solid var(--ink-faint);
}

.task-name {
    font-size: 16px;
    font-weight: 400;
    color: var(--ink);
}

.task-details {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
}

.task-project {
    font-size: 11px;
    color: var(--ink-muted);
}

.task-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
}
```

### Status Badge

```css
.status {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border-radius: 12px;
}

.status-progress {
    background: var(--secondary-bg);
    color: var(--secondary);
}

.status-review {
    background: var(--accent-bg);
    color: var(--accent-light);
}

.status-todo {
    background: var(--warning-bg);
    color: var(--warning);
}
```

### Featured Card

```css
.featured-card {
    background: var(--bg-elevated);
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.featured-card__title {
    font-size: 24px;
    font-weight: 400;
    color: var(--ink);
}

.featured-card__description {
    font-size: 13px;
    color: var(--ink-secondary);
    line-height: 1.6;
}

.featured-card__badge {
    align-self: flex-start;
}
```

### Quick Action Button

```css
.quick-action {
    background: var(--bg-elevated);
    padding: 16px 24px;
    font-size: 13px;
    font-weight: 500;
    color: var(--ink);
    border: none;
    cursor: pointer;
    transition: background 0.15s ease;
}

.quick-action:hover {
    background: var(--accent-bg);
    color: var(--accent-light);
}

.quick-action--primary {
    background: var(--accent);
    color: white;
}

.quick-action--primary:hover {
    background: var(--accent-dim);
}
```

### User Avatar

```css
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 4px;  /* Minimal rounding */
    object-fit: cover;
}

.avatar--small {
    width: 24px;
    height: 24px;
}

.avatar--large {
    width: 64px;
    height: 64px;
}
```

## Public vs Private Pages

The site has two types of pages with different navigation requirements:

### Private Pages (Dashboard, Finance, Recipes)
- Full sidebar navigation with all nav groups visible
- User profile section at bottom of sidebar
- Search functionality in header

### Public Pages (Blog, Projects, About)
- Simplified sidebar showing only "Public" nav group
- Logo links back to homepage
- Different header patterns per page type

**Shared public page styles** are in `css/public-pages.css`:

```css
/* Hide private nav groups on public pages */
.sidebar .nav-group:not(:first-child) {
    display: none;
}

/* Logo as clickable link */
.logo-text {
    text-decoration: none;
    color: var(--ink);
}
```

**CSS load order for public pages:**
1. `css/site.css` - Core design tokens
2. `css/public-pages.css` - Public page overrides
3. `css/blog.css` or `css/blog-post.css` - Page-specific styles

## Blog Components

### Featured Post

```css
.post-featured {
    padding: 48px;
    background: var(--bg-subtle);
    border: 1px solid var(--ink-faint);
}

.post-featured-title {
    font-size: 28px;
    font-weight: 400;
    line-height: 1.3;
}

.post-featured-excerpt {
    font-size: 15px;
    line-height: 1.7;
    color: var(--ink-secondary);
}
```

### Post List Item

```css
.post-item {
    display: grid;
    grid-template-columns: 64px 1fr;
    gap: 32px;
    padding: 32px 0;
    border-bottom: 1px solid var(--ink-faint);
}

.post-item-date {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.date-month {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-muted);
}

.date-day {
    font-size: 24px;
    font-weight: 300;
    color: var(--ink);
}
```

### Post Tag

```css
.post-tag {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.05em;
    padding: 6px 12px;
    background: var(--bg-elevated);
    color: var(--ink-muted);
}

.post-tag:hover {
    background: var(--accent-bg);
    color: var(--accent-light);
}
```

### Article Components

```css
.article {
    max-width: 720px;
}

.article-title {
    font-size: 48px;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.02em;
}

.article-body {
    font-size: var(--text-lg);
    line-height: 1.85;
    color: var(--ink-secondary);
}

.article-body h2 {
    font-size: 22px;
    font-weight: 400;
    color: var(--ink);
    margin-top: 56px;
}

.article-body code {
    font-family: 'SF Mono', 'Consolas', 'Monaco', monospace;
    padding: 2px 6px;
    background: var(--bg-elevated);
    color: var(--accent-light);
}

.article-body pre {
    background: var(--bg-subtle);
    border-left: 3px solid var(--accent);
    padding: var(--space-6) 28px;
}

.article-body blockquote {
    border-left: 3px solid var(--accent);
    padding-left: var(--space-6);
    color: var(--ink-secondary);
}
```

### Author Card

```css
.author-card {
    display: flex;
    align-items: center;
    gap: var(--space-5);
}

.author-avatar {
    width: 56px;
    height: 56px;
    background: var(--accent);
    color: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-lg);
    font-weight: 500;
    border-radius: var(--radius-md);
}
```

### Post Navigation

```css
.post-nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
}

.post-nav-link {
    padding: var(--space-6);
    background: var(--bg-subtle);
    border: 1px solid var(--ink-faint);
}

.post-nav-link:hover {
    border-color: var(--accent);
}
```

## Interactive States

### Hover States

```css
/* Subtle background change */
background: var(--bg-elevated);

/* Accent hover */
color: var(--accent-light);

/* Link hover */
text-decoration: underline;
text-decoration-color: var(--accent-light);
```

### Active/Selected States

```css
/* Navigation active */
background: var(--accent-bg);
color: var(--accent-light);
border-left: 2px solid var(--accent);

/* Button active */
background: var(--accent-dim);
transform: translateY(1px);
```

### Focus States (Accessibility)

```css
/* Keyboard focus indicator */
outline: 2px solid var(--accent);
outline-offset: 2px;

/* Alternative focus style */
box-shadow: 0 0 0 3px var(--accent-bg);
```

## Transitions

```css
/* Standard transition */
transition: all 0.15s ease;

/* Background-only transition */
transition: background 0.15s ease;

/* Color-only transition */
transition: color 0.15s ease;
```

## Borders and Dividers

```css
/* Subtle divider */
border-bottom: 1px solid var(--ink-faint);

/* Section divider */
border-top: 1px solid var(--ink-faint);

/* Card border (minimal, only when needed) */
border: 1px solid var(--ink-faint);
```

## Border Radius

This design system uses minimal border radius for a clean, modern aesthetic:

```css
--radius-sm: 3px;   /* Small elements like checkboxes */
--radius-md: 4px;   /* Avatars, small cards */
--radius-lg: 12px;  /* Badges, pills */
```

**Usage:**
- Avatars: 4px
- Checkboxes: 3px
- Badges: 12px (pill shape)
- Cards/containers: None (sharp corners)

## Complete CSS Custom Properties

```css
:root {
    /* Colors - Base */
    --bg: #0f0f14;
    --bg-subtle: #1a1a22;
    --bg-elevated: #242430;
    --ink: #e8e8ec;
    --ink-secondary: #a0a0aa;
    --ink-muted: #6b6b78;
    --ink-faint: #2a2a35;

    /* Colors - Accent */
    --accent: #7c3aed;
    --accent-light: #a78bfa;
    --accent-dim: #6d28d9;
    --accent-bg: rgba(124, 58, 237, 0.15);

    /* Colors - Secondary */
    --secondary: #22d3ee;
    --secondary-bg: rgba(34, 211, 238, 0.12);

    /* Colors - Status */
    --warning: #fbbf24;
    --warning-bg: rgba(251, 191, 36, 0.12);

    /* Typography */
    --sans: 'Google Sans Flex', -apple-system, sans-serif;
    --text-xs: 10px;
    --text-sm: 11px;
    --text-base-sm: 12px;
    --text-base: 13px;
    --text-md: 14px;
    --text-lg: 16px;
    --text-xl: 24px;
    --text-2xl: 32px;
    --text-3xl: 40px;

    /* Spacing */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-8: 32px;
    --space-12: 48px;
    --space-16: 64px;

    /* Border Radius */
    --radius-sm: 3px;
    --radius-md: 4px;
    --radius-lg: 12px;

    /* Layout */
    --sidebar-width: 240px;
    --content-max-width: 1400px;

    /* Transitions */
    --transition-fast: 0.15s ease;
}
```

## Design Principles

1. **Minimalist Aesthetic** - Clean lines, minimal decoration, sharp corners
2. **Dark Theme First** - Optimized for dark environments with careful contrast
3. **Subtle Hierarchy** - Three levels of background elevation create depth without shadows
4. **Typography-Driven** - Clear type hierarchy with Google Sans Flex weights
5. **Purposeful Color** - Accent colors used sparingly for emphasis
6. **Consistent Spacing** - 4px base unit, predictable rhythm
7. **Accessibility** - High contrast text, keyboard focus states, semantic HTML

## Responsive Considerations

While the prototype demonstrates desktop layout, consider these breakpoints:

```css
/* Mobile first approach */
@media (max-width: 768px) {
    /* Stack sidebar, adjust spacing */
}

@media (max-width: 1024px) {
    /* Adjust grid columns, reduce padding */
}

@media (min-width: 1440px) {
    /* Enforce max-width for content */
}
```

## Implementation Notes

1. **Font Loading** - Import Google Sans Flex with weights 300, 400, 500
2. **Base Styles** - Apply `font-family: var(--sans)` and `font-size: var(--text-base)` to body
3. **Color Scheme** - All colors optimized for dark theme; light theme would require new palette
4. **Spacing** - Use spacing scale consistently; avoid arbitrary values
5. **Component Classes** - Prefer BEM-style naming for clarity and maintainability

## Date/Time Display Requirements

When designing date/time displays for this dashboard:

- **Format pattern**: "MMM d, yyyy h:mm a" (e.g., "Jan 20, 2026 3:45 PM")
- **Timezone**: Always display in user's local timezone
- **Relative time**: For recent items (< 24 hours), consider relative display: "2 hours ago"
- **Styling**: Use `--text-sm` (11px) with `--ink-muted` color for timestamps
- **Placement**: Typically right-aligned in list rows, or below content in cards

## Navigation Integration

This design system assumes:

- **Persistent sidebar navigation** on all pages
- **Active state indicator** via left border accent and background tint
- **Icon + label pattern** for navigation items (24px icons recommended: Hero Icons outline)
- **User profile section** at bottom of sidebar with avatar and name

---

**Version**: 1.0
**Last Updated**: January 2026
**Based on**: home.cpike.ca personal dashboard prototype
