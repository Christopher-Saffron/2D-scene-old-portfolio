import { portfoliochoose2, portfolioheavy2, portfoliolight2, szafranprojekt2,  } from '../images'

//COMPONENTS
import SzafranProjekt from './WebdevProjectsComponents/SzafranProjekt'

export const webdevProjectsData = [
    {
      imgSrc: szafranprojekt2,
      projectName: 'SZAFRAN PROJEKT',
      description: 'Official website for a road project company',
      images: ['/icons/react.png', '/icons/sass.svg', '/icons/gsap.png',  '/icons/mui.png', '/icons/node.png', '/icons/mongodb.jpg', '/icons/gimp.jpg'],
      tags: ['official', 'landingPage', 'frontEnd', 'backEnd', 'diskManagement', 'gsap', 'mui', 'sass', 'maps', 'react-leaflet', 'server', 'logo', 'design', 'imageEdit', 'video', 'animation',],
      component: <SzafranProjekt />
    },
    {
      imgSrc: portfoliolight2,
      projectName: 'Portfolio 2D',
      description: '2D Part of the portfolio with blender-made images',
      images: ['/icons/react.png', '/icons/sass.svg','/icons/gimp.jpg', '/icons/blender.jpg'],
      tags: ['frontEnd','design', 'imageEdit', 'blender', 'animation',]
    },
    {
      imgSrc: portfoliochoose2,
      projectName: 'Portfolio START',
      description: 'The "in-between" state of my portfolio website',
      images: ['/icons/react.png'],
      tags: ['frontEnd', 'particle', 'animation', 'imageEdit',]
    },
    {
      imgSrc: portfolioheavy2,
      projectName: 'Portfolio 3D',
      description: '3D Portfolio part, which utilizes Three.js with help from React Three Fiber',
      images: ['/icons/react.png', '/icons/sass.svg', '/icons/reacctspring.png', '/icons/gimp.jpg', '/icons/blender.jpg', '/icons/threejs.png'],
      tags: ['frontEnd', 'particle', 'animation', 'imageEdit',]
    },
    {
      imgSrc: '',
      projectName: 'Blog',
      description: 'Simple view into my past and current "activities" visualized on a website.',
      tags: ['frontEnd', 'backEnd']
    },
    {
      imgSrc: '',
      projectName: 'Fullstack Ecommerce Shop Mysql',
      tags: []
    },
    {
      imgSrc: '',
      projectName: 'Fullstack Ecommerce Shop Mongoose',
      tags: []
    },
    {
      imgSrc: '',
      projectName: 'Multiplayer card game',
      tags: []
    },
    {
      imgSrc: '',
      projectName: 'Messenger',
      tags: []
    },
    {
      imgSrc: '',
      projectName: 'Social Media app',
      tags: []
    },
    {
      imgSrc: '',
      projectName: '[OLD] Tic Tac Toe game',
      tags: []
    },
    {
      imgSrc: '',
      projectName: '[OLD] Battleship game',
      tags: []
    },
    {
      imgSrc: '',
      projectName: '[OLD] Restaurant page',
      tags: []
    },
    {
      imgSrc: '',
      projectName: '[OLD] Simon Game',
      tags: []
    },
    {
      imgSrc: '',
      projectName: '[OLD] Calculator',
      tags: []
    },
  ]