# Guilred's Portfolio (React)

The portfolio site migrated from plain HTML/CSS/JS to React and Vite, deployed to GitHub Pages at [guilred.github.io](https://guilred.github.io/).

## Stack

- React 19
- Vite
- React Router
- Plain CSS (the original design tokens and styles are preserved in `src/styles/`)

## Structure

```
.
├── .github/workflows/deploy.yml   GitHub Pages deployment
├── public/favicon.png             Site icon
├── scripts/copy-404.mjs           Creates the SPA fallback for GitHub Pages
├── src/
│   ├── assets/images/             Project, blog, and profile images
│   ├── components/                Layout, navbar, hero, cards
│   │   └── blog/                  BlogCard, BlogPost, PostMedia
│   ├── content/
│   │   ├── media.js               Resolves local image paths
│   │   └── blogs/                 Blog data and instructions
│   ├── data/                      Projects, works in progress, social links
│   ├── hooks/usePageMeta.js       Per-page title and description
│   ├── pages/                     Home, Blogs, and Blog pages
│   ├── styles/                    Migrated CSS files
│   ├── utils/                     Age calculation and blog helpers
│   ├── App.jsx                    Routes
│   └── main.jsx                   App entry point
├── index.html
├── vite.config.js
└── package.json
```

## Blogs

Blogs are data-driven. Each blog is one JS file in `src/content/blogs/`, and each post
contains text plus optional videos and images. Post dates are typed manually in each
post, and videos use direct external URLs (for example Internet Archive).

See [`src/content/blogs/README.md`](src/content/blogs/README.md) for:

- Adding a new blog
- Adding posts
- Referencing videos and images
- Post anchors and URL structure

The first blog is Croissant. Copy `_TEMPLATE.js` to get started.

## Local development

```bash
npm install
npm run dev
```

Build and preview the production output:

```bash
npm run build
npm run preview
```

## Routing on GitHub Pages

The site uses clean URLs (`/`, `/blogs`, and `/blogs/:blogSlug`) with `BrowserRouter`.
Since GitHub Pages does not rewrite unknown paths to `index.html`, the build copies
`dist/index.html` to `dist/404.html`. Direct visits and refreshes on blog routes therefore
load the app and render the correct page.

The old `/projects` URL redirects to `/blogs`.

The repository is the GitHub user site `guilred.github.io`, so Vite's `base` is `/`.
If the site is ever moved to a project repository, update `base` in `vite.config.js` to
`/repository-name/`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and
deploys `dist` through GitHub Actions.

One-time setup in the GitHub repository:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

The workflow then publishes the site after each push to `main`.
