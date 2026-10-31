import { image } from '../media.js'

export const croissant = {
  slug: 'croissant',
  title: 'Croissant',
  description:
    'Development diary for Croissant, my game\'s Map Editor',
  cover: image('work-in-progress/croissant.png'),
  coverAlt: 'The Croissant map editor',
  posts: [
    {
      slug: 'lorem-ipsum-dolor-sit-amet',
      title: 'Lorem Ipsum Dolor Sit Amet',
      date: '2026-05-19',
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.',
        'Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.',
      ],
      media: [
        {
          type: 'video',
          src: 'https://archive.org/download/scripting_202610/Grid%20and%20Placing.mp4',
        },
      ],
    },
  ],
}
