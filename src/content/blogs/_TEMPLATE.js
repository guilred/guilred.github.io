// Copy this file to add a new blog:
//   1. Rename it to something like "my-blog.js".
//   2. Update slug, title, description, cover, and coverAlt.
//   3. Add posts to the `posts` array (an example is included below).
//   4. Import and register it in index.js.
//
// Media:
//   image('folder/file.png') -> src/assets/images/folder/file.png
//   Videos use a direct URL string, for example an Internet Archive URL.

import { image } from '../media.js'

export const myBlog = {
  slug: 'my-blog',
  title: 'My Blog',
  description: 'A short description shown on the blog card and blog header.',
  cover: image('work-in-progress/croissant.png'),
  coverAlt: 'The Croissant map editor',

  posts: [
    {
      // Optional. If omitted, it is generated from the title.
      slug: 'first-post',
      title: 'First Post',
      // Required. Use YYYY-MM-DD. Posts are sorted newest first.
      date: '2026-10-31',
      // A single string or an array of paragraphs.
      text: [
        'The first paragraph of the post.',
        'The second paragraph of the post.',
      ],
      // One media item or an array. This field is optional.
      media: [
        {
          type: 'video',
          // Use a direct video URL. Encode spaces as %20, not +.
          src: 'https://archive.org/download/scripting_202610/Grid%20and%20Placing.mp4',
          caption: 'Optional caption under the video.',
          // Optional: poster: image('path/to/poster.png'),
        },
        {
          type: 'image',
          src: image('complete-projects/worldspin.png'),
          alt: 'WorldSpin screenshot',
          caption: 'Optional caption under the image.',
        },
      ],
    },
  ],
}
