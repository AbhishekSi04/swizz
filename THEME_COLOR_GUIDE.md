# Theme Color Guide - Dark/Light Mode Support

This guide explains how to use theme-aware text colors across your application to ensure readability in both dark and light modes.

## Available Theme-Aware Classes

### Primary Text Colors

1. **`.text-dark-mode-white`**
   - Light mode: Dark text (#212529)
   - Dark mode: White text (#ffffff)
   - **Use for**: Main headings, important text, primary content

2. **`.text-theme-body`**
   - Light mode: Dark text (#212529)
   - Dark mode: Light gray (#dee2e6)
   - **Use for**: Body text, paragraphs, general content

3. **`.text-theme-muted`**
   - Light mode: Muted gray (#6c757d)
   - Dark mode: Light muted (#adb5bd)
   - **Use for**: Secondary text, descriptions, less important content

4. **`.text-theme-secondary`**
   - Light mode: Gray (#6c757d)
   - Dark mode: Light gray (#ced4da)
   - **Use for**: Tertiary text, metadata, timestamps

## Usage Examples

### Headings
```jsx
<h1 className="text-dark-mode-white">Main Heading</h1>
<h2 className="text-dark-mode-white">Section Title</h2>
```

### Body Text
```jsx
<p className="text-theme-body">
  This is regular body text that adapts to the theme.
</p>
```

### Muted/Secondary Text
```jsx
<p className="text-theme-muted">
  This is less important text or descriptions.
</p>
<small className="text-theme-secondary">Last updated: 2 hours ago</small>
```

### Card Components
```jsx
<Card>
  <Card.Body>
    <Card.Title className="text-dark-mode-white">Card Title</Card.Title>
    <Card.Text className="text-theme-body">Card content goes here</Card.Text>
    <small className="text-theme-muted">Additional info</small>
  </Card.Body>
</Card>
```

### List Items
```jsx
<ul>
  <li className="text-theme-body">List item 1</li>
  <li className="text-theme-body">List item 2</li>
</ul>
```

### Form Labels
```jsx
<label className="text-dark-mode-white">Email Address</label>
<input type="email" />
<small className="text-theme-muted">We'll never share your email</small>
```

## Automatic Theme Support

The following elements automatically adapt to the theme without needing special classes:

- All `<h1>` through `<h6>` tags
- All `.card-title` elements
- All `.card-text` elements
- All `<p>` tags (basic support)
- All `<label>` and `.form-label` elements
- Table text
- List group items
- Navbar links
- Footer text
- Breadcrumb items
- Alert text
- Modal text
- Dropdown items
- Pagination links
- Tab navigation
- Accordion content

## Best Practices

1. **Always use theme-aware classes** for custom text elements
2. **Test in both modes** - Toggle between light and dark mode to verify readability
3. **Avoid hardcoded colors** - Don't use `text-white` or `text-dark` unless absolutely necessary
4. **Use semantic classes** - Choose the class that best represents the content's importance
5. **Maintain contrast** - Ensure sufficient contrast ratio for accessibility

## Component-Specific Guidelines

### Hero Section
```jsx
<h1 className="text-dark-mode-white">Main Headline</h1>
<p className="lead text-body-secondary">Subtitle or description</p>
<span className="text-dark-mode-white">Feature text</span>
```

### Course Cards
```jsx
<Card.Title className="text-dark-mode-white">Course Name</Card.Title>
<ul className="text-theme-muted">
  <li><span className="text-theme-body">Course detail</span></li>
</ul>
```

### Footer
```jsx
<h5 className="text-dark-mode-white">Section Title</h5>
<p className="text-theme-body">Description text</p>
<Link className="text-theme-body">Link text</Link>
```

## Troubleshooting

### Text not changing in dark mode?
1. Check if you're using the correct class name
2. Ensure the SCSS file is imported in `style.scss`
3. Clear browser cache and rebuild

### Text too light/dark?
1. Use a different semantic class (e.g., `text-theme-muted` instead of `text-theme-body`)
2. Check if parent elements have conflicting color styles

### Custom components not working?
1. Add the theme-aware class directly to the text element
2. Avoid inline styles that override theme colors
3. Use Bootstrap's utility classes when possible

## Migration Checklist

When updating existing components:

- [ ] Replace `text-white` with `text-dark-mode-white`
- [ ] Replace `text-dark` with `text-theme-body`
- [ ] Replace `text-muted` with `text-theme-muted`
- [ ] Replace `text-secondary` with `text-theme-secondary`
- [ ] Test in both light and dark modes
- [ ] Check all headings have proper classes
- [ ] Verify form labels are readable
- [ ] Ensure card content is visible
- [ ] Test navigation elements
- [ ] Verify footer readability

## File Locations

- Theme color definitions: `src/assets/scss/custom/_theme-colors.scss`
- Main stylesheet: `src/assets/scss/style.scss`
- Theme context: `src/context/useLayoutContext.jsx`

## Support

If you encounter any issues with theme colors:
1. Check this guide first
2. Verify the SCSS file is properly imported
3. Test with browser dev tools to inspect computed styles
4. Ensure you're using the latest version of the theme system
