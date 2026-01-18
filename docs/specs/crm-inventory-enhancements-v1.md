# CRM Inventory Dashboard - Enhancement Spec v1

**File:** `prototypes/crm-inventory.html`
**Date:** 2026-01-18
**Status:** Ready for Implementation

---

## Overview

This spec defines the polish and UX enhancements for the CRM Inventory dashboard. All changes maintain the Swiss-style minimalist aesthetic while adding subtle sophistication through micro-interactions and visual refinements.

---

## Phase 1: High-Impact Enhancements

### 1.1 Entrance Animations

#### Content Fade-In
Add smooth fade-in to the main content area.

```css
.content {
    animation: contentFadeIn 0.3s ease-out;
}

@keyframes contentFadeIn {
    from {
        opacity: 0;
        transform: translateY(8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

#### Stats Value Animation
Animate stat values on load with subtle scale.

```css
.stat-value {
    animation: statPulse 0.5s ease-out;
}

@keyframes statPulse {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
```

Add staggered delay to each stat:
```css
.stat:nth-child(1) .stat-value { animation-delay: 0.1s; }
.stat:nth-child(2) .stat-value { animation-delay: 0.15s; }
.stat:nth-child(3) .stat-value { animation-delay: 0.2s; }
.stat:nth-child(4) .stat-value { animation-delay: 0.25s; }
```

---

### 1.2 Deal Progress Bar

Add a visual progress indicator to the featured deal card.

#### HTML (add after `.featured-house`):
```html
<div class="deal-progress">
    <div class="progress-bar">
        <div class="progress-fill" style="width: 65%;"></div>
    </div>
    <div class="progress-label">65% to Close</div>
</div>
```

#### CSS:
```css
.deal-progress {
    margin-top: 24px;
    margin-bottom: 16px;
}

.progress-bar {
    width: 100%;
    height: 2px;
    background: var(--gray-200);
    position: relative;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: var(--black);
    transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.progress-label {
    font-size: 10px;
    font-weight: 600;
    color: var(--gray-600);
    margin-top: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
```

---

### 1.3 Table Sorting Indicators

Make table headers interactive with sort indicators.

#### HTML Update:
```html
<div class="table-header">
    <span class="sortable active" data-sort="name">Name</span>
    <span class="sortable" data-sort="company">Company</span>
    <span class="sortable" data-sort="type">Type</span>
    <span class="sortable" data-sort="status">Status</span>
    <span class="sortable" data-sort="value">Value</span>
</div>
```

#### CSS:
```css
.table-header .sortable {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: color 0.15s;
}

.table-header .sortable:hover {
    color: var(--black);
}

.table-header .sortable::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid currentColor;
    opacity: 0;
    transition: opacity 0.15s;
}

.table-header .sortable:hover::after {
    opacity: 0.4;
}

.table-header .sortable.active::after {
    opacity: 1;
}

.table-header .sortable.active.asc::after {
    border-top: none;
    border-bottom: 4px solid currentColor;
}
```

---

## Phase 2: Polish Enhancements

### 2.1 Button Press States

Add tactile feedback to buttons.

```css
.btn-add:active {
    transform: translateY(1px);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.note-chip:active {
    transform: scale(0.98);
}
```

---

### 2.2 Table Row Depth

Add subtle shadow on hover for depth.

```css
.table-row {
    transition: background 0.1s, box-shadow 0.15s;
}

.table-row:hover {
    background: var(--gray-100);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}
```

---

### 2.3 Notification Badge

Add notification badge to navigation items.

#### HTML (example for Contacts):
```html
<a class="nav-item">Contacts <span class="nav-badge">3</span></a>
```

#### CSS:
```css
.nav-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    background: var(--red);
    color: var(--white);
    font-size: 9px;
    font-weight: 700;
    border-radius: 9px;
    margin-left: 8px;
}
```

---

### 2.4 Search Icon Animation

Animate search icon on focus.

```css
.search-box svg {
    transition: transform 0.2s ease, color 0.15s;
    color: var(--gray-600);
}

.search-box:focus-within svg {
    transform: scale(1.1);
    color: var(--black);
}
```

---

### 2.5 Featured Card Accent

Add subtle top accent line to featured card.

```css
.featured-card {
    position: relative;
    overflow: hidden;
}

.featured-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 2px;
    background: var(--black);
}
```

---

## Phase 3: Refinement Enhancements

### 3.1 Section Header Accent Animation

Animated red accent line under section headers.

```css
.section-header {
    position: relative;
}

.section-header::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    background: var(--red);
    animation: expandLine 0.4s ease-out 0.2s forwards;
}

@keyframes expandLine {
    from { width: 0; }
    to { width: 48px; }
}
```

---

### 3.2 Text Truncation

Prevent text overflow in constrained cells.

```css
.cell-name,
.cell-house {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

---

### 3.3 Stats Row Accent

Add animated red accent to stats row.

```css
.stats-row {
    position: relative;
}

.stats-row::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    width: 0;
    background: var(--red);
    animation: statsAccent 0.6s ease-out 0.3s forwards;
}

@keyframes statsAccent {
    from { width: 0; }
    to { width: 48px; }
}
```

---

### 3.4 Tooltip System

Add tooltips for additional context.

```css
[data-tooltip] {
    position: relative;
}

[data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--black);
    color: var(--white);
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
    z-index: 100;
}

[data-tooltip]:hover::after {
    opacity: 1;
}
```

---

## Implementation Checklist

### Phase 1 (Implement Now)
- [ ] Content fade-in animation
- [ ] Stat value animations with stagger
- [ ] Deal progress bar
- [ ] Table sorting indicators

### Phase 2 (Implement Next)
- [ ] Button press states
- [ ] Table row shadow depth
- [ ] Navigation notification badge
- [ ] Search icon animation
- [ ] Featured card accent line

### Phase 3 (Final Polish)
- [ ] Section header accent animation
- [ ] Text truncation
- [ ] Stats row accent
- [ ] Tooltip system

---

## Design Principles

All enhancements follow these principles:

1. **Subtlety** - Animations are quick (0.15s-0.4s) and purposeful
2. **Consistency** - Uses existing color variables and spacing
3. **Performance** - CSS-only, no JavaScript required for core polish
4. **Accessibility** - Respects `prefers-reduced-motion`
5. **Minimalism** - Adds refinement without visual clutter

### Reduced Motion Support

Add at the end of CSS:
```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```
