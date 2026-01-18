# Literary Journal Enhancement Specification

**File:** `prototypes/literary-journal.html`
**Date:** 2026-01-18
**Status:** Ready for Implementation

---

## Overview

This specification details polish and UX refinements to elevate the literary journal prototype from "good" to "refined and polished." All enhancements are CSS-only with minimal semantic HTML adjustments.

---

## Phase 1: Quick Wins (High Impact, Low Effort)

### 1.1 Article Item Hover Enhancements
**Goal:** Make articles feel more interactive and tactile

```css
.article-item {
    transition: background-color 0.2s, border-left 0.2s, transform 0.2s;
    border-left: 3px solid transparent;
}

.article-item:hover {
    background-color: rgba(139, 69, 19, 0.05);
    border-left-color: var(--accent);
}

.article-title {
    transition: color 0.2s ease-out, text-shadow 0.2s ease-out;
}

.article-item:hover .article-title {
    text-shadow: 0 0 12px rgba(139, 69, 19, 0.1);
}
```

### 1.2 Arrow Indicator Animation
**Goal:** Smooth fade-in instead of abrupt appearance

```css
.article-item::after {
    content: '';
    opacity: 0;
    transition: opacity 0.2s ease-out;
}

.article-item:hover::after {
    content: '\2192'; /* → */
    opacity: 1;
    color: var(--accent);
    font-size: 14px;
}
```

### 1.3 Button Enhanced States
**Goal:** More tactile button with lift effect

```css
.btn-add {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-add:hover {
    background: var(--accent);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(139, 69, 19, 0.15);
}

.btn-add:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(139, 69, 19, 0.1);
}
```

### 1.4 Search Box Focus Enhancement
**Goal:** Elegant focus ring with soft glow

```css
.search-box {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 0 0 rgba(139, 69, 19, 0);
}

.search-box:focus-within {
    box-shadow: 0 0 0 3px rgba(139, 69, 19, 0.08);
}
```

---

## Phase 2: Visual Depth & Cards

### 2.1 Featured Card Refinement
**Goal:** Add depth and interactivity to featured card

```css
.featured-card {
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04),
                0 2px 6px rgba(0, 0, 0, 0.02);
    transition: all 0.3s;
}

.featured-card:hover {
    border-color: var(--accent-light);
    box-shadow: 0 2px 8px rgba(139, 69, 19, 0.08);
}

.featured-header {
    border-bottom: 2px dotted var(--accent-light);
}
```

### 2.2 Note Item Hover States
**Goal:** Make note items subtly interactive

```css
.note-item {
    font-size: 14px; /* reduced from 15px */
    padding: 6px 12px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
    transition: all 0.2s;
}

.note-item:hover {
    background: var(--accent-light);
    border-color: var(--accent);
    box-shadow: 0 2px 4px rgba(139, 69, 19, 0.08);
    cursor: default;
}
```

### 2.3 Stats Row Hover Effect
**Goal:** Subtle interactivity for stats

```css
.stat-item {
    position: relative;
    transition: background-color 0.2s;
}

.stat-item:hover {
    background-color: rgba(139, 69, 19, 0.02);
}

.stat-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent-light);
    transform: scaleX(0);
    transition: transform 0.3s;
}

.stat-item:hover::after {
    transform: scaleX(1);
}
```

---

## Phase 3: Editorial Flourishes

### 3.1 Active Navigation Indicator
**Goal:** Clear visual for current page

```css
.nav-item.active {
    position: relative;
    padding-left: 12px;
}

.nav-item.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 16px;
    background: var(--accent);
    border-radius: 2px;
}
```

### 3.2 Enhanced Dividers
**Goal:** Refined gradient divider lines

```css
.divider {
    margin: 28px 0;
    color: var(--accent-light);
}

.divider::before,
.divider::after {
    background: linear-gradient(
        to right,
        transparent,
        var(--rule) 20%,
        var(--rule) 80%,
        transparent
    );
}

.divider-icon {
    opacity: 0.8;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.featured-card:hover .divider-icon {
    opacity: 1;
    transform: scale(1.1);
}
```

### 3.3 Reading Time Ornament
**Goal:** Add editorial flair to reading time

```css
.read-time {
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.read-time::before {
    content: '\25CA'; /* ◊ */
    font-size: 8px;
    opacity: 0.5;
}
```

### 3.4 Tag Hover Effects
**Goal:** Subtle lift on hover

```css
.tag {
    transition: all 0.2s;
    border-radius: 2px;
}

.article-item:hover .tag {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}
```

---

## Phase 4: Typography & Semantic Updates

### 4.1 Typography Refinements
**Goal:** Better readability and consistency

```css
body {
    line-height: 1.6; /* increased from 1.5 */
}

.page-title {
    margin-bottom: 12px;
    line-height: 1.15;
}

.article-excerpt {
    line-height: 1.5;
}

/* Standardize label sizes to 10px */
.nav-section-title,
.featured-label,
.stat-label,
.notes-label,
.page-date {
    font-size: 10px;
}
```

### 4.2 Pagination Indicator Update
**Goal:** Replace pseudo-element with semantic HTML

**HTML Change:**
```html
<div class="pagination-indicator">
    Showing <strong>5</strong> of <strong>89</strong> articles
    <a href="#" class="pagination-link">View all articles</a>
</div>
```

**CSS:**
```css
.article-list::after {
    display: none; /* Remove pseudo-element */
}

.pagination-indicator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid var(--rule);
    font-size: 11px;
    color: var(--ink-muted);
    font-style: italic;
}

.pagination-link {
    color: var(--accent);
    text-decoration: none;
    font-style: normal;
    transition: all 0.2s;
}

.pagination-link:hover {
    text-decoration: underline;
}

.pagination-link:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
}
```

---

## Implementation Checklist

- [ ] Phase 1: Quick wins (article hover, button states, search focus)
- [ ] Phase 2: Visual depth (card shadows, note hovers, stat effects)
- [ ] Phase 3: Editorial flourishes (nav indicator, dividers, ornaments)
- [ ] Phase 4: Typography and pagination semantic update
- [ ] Final review and testing

---

## Notes

- All changes are CSS-only except pagination HTML update
- Maintain existing color palette and typography pairing
- Test focus states with keyboard navigation
- Ensure transitions don't exceed 0.3s for responsiveness
