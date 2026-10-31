import guilui from '../assets/images/work-in-progress/guilui.png'
import guiluiPreview from '../assets/images/work-in-progress/guilui-2.png'
import croissant from '../assets/images/work-in-progress/croissant.png'
import croissantPreview from '../assets/images/work-in-progress/croissant-2.png'

export const wipProjects = [
  {
    tag: 'GUI Library',
    title: 'GuilUI',
    description:
      'A GUI library built using C# and MonoGame, featuring a powerful and rich set of UI tools, widgets and their customization and styling. It supports CSS-like flexbox and grid layouts, as well as a Markup Language.',
    images: [
      { src: guilui, alt: 'GuilUI' },
      { src: guiluiPreview, alt: 'GuilUI Preview' },
    ],
  },
  {
    tag: 'Main Game',
    title: 'Croissant',
    description:
      'A game centred around creating maps in a high-performance, engine-like map editor. It uses GuilUI, and both might release simultaneously.',
    images: [
      { src: croissant, alt: 'Croissant' },
      { src: croissantPreview, alt: 'Croissant Preview' },
    ],
  },
]
