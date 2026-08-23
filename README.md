# Guilred's Portfolio

Static portfolio site (plain HTML/CSS/JS), hosted via GitHub Pages. No build step required.

## Structure

```
/
├── index.html            Home page (hero, finished projects, works in progress)
├── projects.html         Projects page (deep dives - WIP)
├── assets/
│   ├── css/
│   │   ├── variables.css Design tokens (colors, sizes) - change the theme here
│   │   ├── base.css      Reset, body, scrollbar, .container
│   │   ├── nav.css       Navbar
│   │   ├── components.css Shared components: headings, grid, cards, WIP rows
│   │   ├── home.css      Home page only (hero)
│   │   └── blogs.css     Projects page only (WIP banner)
│   ├── js/
│   │   └── main.js       Dynamic age in the hero bio
│   └── images/           All site images
│       ├── complete-projects/
│       └── work-in-progress/
```

## Conventions

- Pages load only the CSS they need, linked in `variables -> base -> nav -> components -> page` order.
- Colors, radii and glows come from CSS variables in `variables.css`; never hardcode hex values in other files.
- Each page owns its `<head>` and navbar markup (static site, no templating); keep both pages in sync when editing the navbar.
- Responsive breakpoints live next to the styles they adjust: 1100px (grid), 700px (WIP rows), 480px (mobile).

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```
python -m http.server 8000
```
