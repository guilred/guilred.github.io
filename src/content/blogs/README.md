# Adding blog content

All blog content lives in `src/content/blogs/`. Each blog is one JavaScript file.

## Add a new blog

1. Add your videos to `src/assets/diary-videos/<your-blog>/`.
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
  text: [
    'The first paragraph.',
    'The second paragraph.',
  ],
  media: [
    {
      type: 'video',
      src: diaryVideo('croissant/Visual Warp.mp4'),
      caption: 'Visual warping in the editor.',
    },
    {
      type: 'image',
      src: image('work-in-progress/croissant.png'),
      alt: 'The Croissant map editor',
      caption: 'The map editor.',
    },
  ],
}
```

- `slug` is optional for posts; it is generated from the title when omitted.
- `text` can be one string or an array of paragraphs.
- `media` is optional, and can be one item or an array of items.
- Each post is rendered at `/blogs/<blog-slug>#<post-slug>`.

## Automatic post dates

When a post has media, its date is taken automatically from the earliest file
timestamp (creation or last-modified) among its linked videos/images. If it links
multiple media files, the earliest one wins. No date field is needed.

For a text-only post, add an optional fallback date:

```js
date: '2026-10-31',
```

Posts are sorted newest first using the resolved date. The dev server and production
build both read media timestamps automatically.

## Media helpers

Import the helpers at the top of the blog file:

```js
import { diaryVideo, image } from '../media.js'
```

| Helper | File location | Example |
| --- | --- | --- |
| `diaryVideo('...')` | `src/assets/diary-videos/` | `diaryVideo('croissant/Visual Warp.mp4')` |
| `image('...')` | `src/assets/images/` | `image('complete-projects/worldspin.png')` |

Supported video extensions are `.mp4`, `.webm`, and `.ogg`. Supported image extensions are
`.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, and `.avif`.

A missing file throws a clear error in the browser during development. Use forward slashes
in paths.

## Video options

Videos render with `controls`, `preload="metadata"`, and `playsInline`, so the full file is
only downloaded when the visitor presses play. You can add an optional poster image:

```js
{
  type: 'video',
  src: diaryVideo('croissant/Visual Warp.mp4'),
  poster: image('path/to/poster.png'),
  caption: 'Optional caption.',
}
```

## Reusable components

If you want to build a custom page instead of using the data-driven blog pages:

```jsx
import { BlogPost, PostMedia } from '../components/blog/index.js'
```

- `BlogPost` renders a complete post, including its anchor ID.
- `PostMedia` renders a video or image with an optional caption.
