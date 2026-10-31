# Adding blog content

All blog content lives in `src/content/blogs/`. Each blog is one JavaScript file.

## Add a new blog

1. Upload videos to external hosting (for example Internet Archive) and copy their direct URLs.
2. Add any images to `src/assets/images/` (or a subfolder).
3. Copy `_TEMPLATE.js` to a new file, for example `my-blog.js`.
4. Edit `slug`, `title`, `description`, `cover`, and `coverAlt`.
5. Register it in `index.js`:

```js
import { croissant } from './croissant.js'
import { myBlog } from './my-blog.js'

export const blogs = [croissant, myBlog]
```

The order of the `blogs` array controls the order on the Blogs page. The blog URL becomes
`/blogs/<slug>`.

## Add a post

Add an object to the blog's `posts` array:

```js
{
  slug: 'visual-warp',
  title: 'Visual Warp',
  date: '2026-06-08',
  text: [
    'The first paragraph.',
    'The second paragraph.',
  ],
  media: [
    {
      type: 'video',
      src: 'https://archive.org/download/scripting_202610/Visual%20Warp.mp4',
    },
    {
      type: 'image',
      src: image('work-in-progress/croissant.png'),
      alt: 'The Croissant map editor',
    },
  ],
}
```

- `date` is required and uses `YYYY-MM-DD`. Posts are sorted newest first.
- `slug` is optional for posts; it is generated from the title when omitted.
- `text` can be one string or an array of paragraphs.
- `media` is optional, and can be one item or an array of items.
- Each post is rendered at `/blogs/<blog-slug>#<post-slug>`.

## Post dates

Every post has a manually typed date:

```js
date: '2026-06-08',
```

Dates are never derived from media files or upload metadata, so the dev server,
production build, and GitHub Pages all show the same date. Posts are sorted newest
first using this value.

## Media helpers

Only local images need a helper. Import it at the top of the blog file:

```js
import { image } from '../media.js'
```

| Helper | File location | Example |
| --- | --- | --- |
| `image('...')` | `src/assets/images/` | `image('complete-projects/worldspin.png')` |

Supported image extensions are `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, and `.avif`.
A missing image throws a clear error in the browser during development. Use forward
slashes in paths.

Videos are plain URL strings, so no helper is needed. Use a direct file URL, for
example an Internet Archive download URL:

```js
src: 'https://archive.org/download/scripting_202610/Grid%20and%20Placing.mp4'
```

Spaces in a URL path must be encoded as `%20`. A `+` is not interchangeable in the
path and can return a 404.

## Video options

Videos render with `controls`, `preload="metadata"`, and `playsInline`, so the full file
is only downloaded when the visitor presses play. You can add an optional poster image:

```js
{
  type: 'video',
  src: 'https://archive.org/download/scripting_202610/Visual%20Warp.mp4',
  poster: image('path/to/poster.png'),
}
```

## Reusable components

If you want to build a custom page instead of using the data-driven blog pages:

```jsx
import { BlogPost, PostMedia } from '../components/blog/index.js'
```

- `BlogPost` renders a complete post, including its anchor ID.
- `PostMedia` renders a video or image. Images use their `alt` text.
