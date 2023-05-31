// import { portfoliochoose2, portfolioheavy2, portfoliolight2, szafranprojekt2, insta, amazon, mementomori, hulu, facebook, messagingapp, szafranprojektnextjs, airbnb, simpleServer, oldserver, jplearn, battleships, tictactoe, restaurant, pomodoro  } from '../images'

//COMPONENTS

export const webdevProjectsData = [
    
    {
      imgSrc: 'szafranprojektnextjs.jpg',
      projectName: 'SZAFRAN PROJEKT migration to NEXTJS',
      description: 'Official website for a road project company - NEXTJS + TAILWIND',
      images: ['/icons/react.png', '/icons/nextjsLogo.png', '/icons/tailwind.png','/icons/gimp.jpg'],
      tags: ['official', 'landingPage',  'frontEnd', 'logo', 'nextjs', 'tailwind', 'design', 'imageEdit',],
    },
    {
      imgSrc: 'airbnb.jpg',
      projectName: 'Airbnb',
      description: 'AirBnB with 3D models, STRIPE and Paypal, maps, login and reservation.',
      images: ['/icons/react.png', '/icons/nextjsLogo.png',  '/icons/tailwind.png','/icons/blender.jpg', '/icons/threejs.png', '/icons/nextauth.png', '/icons/stripe.png', '/icons/paypal.png','/icons/mongodb.jpg',],
      tags: ['frontEnd', 'nextjs', 'mapbox', 'tailwind', 'date-fns', 'maps', '3dmodels', 'blender', 'mongoose', 'mongodb', 'mongodb-atlas', 'paypal','stripe', 'google-auth', 'payment',]
    },
    {
      imgSrc: 'portfolioheavy2.jpg',
      projectName: 'Portfolio 3D',
      description: '3D Portfolio part, which utilizes Three.js with help from React Three Fiber',
      images: ['/icons/react.png', '/icons/sass.svg', '/icons/reacctspring.png', '/icons/gimp.jpg', '/icons/blender.jpg', '/icons/threejs.png'],
      tags: ['frontEnd', 'particle', 'animation', 'imageEdit',]
    },
    {
      imgSrc: 'insta.jpg',
      projectName: 'Instagram',
      description: 'Instagram utilizing next-auth with firebase for files + users.',
      images: ['/icons/react.png', '/icons/nextjsLogo.png', '/icons/nextauth.png', '/icons/firebase.jpg', '/icons/tailwind.png', '/icons/recoil-js.svg'],
      tags: ['frontEnd', 'backend', 'nextjs', 'firebase', 'recoil-js', 'google-auth', 'next-auth', 'tailwind', 'responsive']
    },
    {
      imgSrc: 'amazon.jpg',
      projectName: 'Amazon',
      description: 'Amazon copy to highlight the STRIPE functionality',
      images: ['/icons/react.png', '/icons/nextjsLogo.png', '/icons/nextauth.png', '/icons/stripe.png', '/icons/firebase.jpg', '/icons/tailwind.png', '/icons/reactredux.png'],
      tags: ['frontEnd', 'backend', 'nextjs', 'next-auth', 'firebase', 'react-redux', 'google-auth', 'stripe', 'tailwind', 'responsive']
    },
    
    {
      imgSrc: 'hulu.jpg',
      projectName: 'Hulu',
      description: 'Works with TMDB\'s API (The Movie Database) and promptly shows the returned data with tailwind',
      images: ['/icons/react.png', '/icons/nextjsLogo.png', '/icons/tailwind.png', ],
      tags: ['frontEnd', 'nextjs', 'tailwind', 'responsive']
    },
    {
      imgSrc: 'facebook.jpg',
      projectName: 'Facebook',
      description: 'Facebook copy. Working Login and feed.',
      images: ['/icons/react.png', '/icons/nextjsLogo.png', '/icons/nextauth.png', '/icons/firebase.jpg', '/icons/tailwind.png',],
      tags: ['frontEnd', 'backEnd', 'nextjs', 'next-auth', 'firebase', 'tailwind', 'responsive']
    },
    // {
    //   imgSrc: 'messagingapp.jpg',
    //   projectName: 'Messaging App',
    //   description: 'Utilizing firebase\'s onSnapshot listen functionality in order to create a live-updating messenger.',
    //   images: ['/icons/react.png', '/icons/nextjsLogo.png', '/icons/mui.png', '/icons/firebase.jpg', ],
    //   tags: ['frontEnd', 'backEnd', 'nextjs',  'firebase', 'mui', 'responsive']
    // },
    {
      imgSrc: 'blog.jpg',
      projectName: 'Blog',
      description: 'Using sanity as a database for my posts. It shows what I\'m currently working on',
      images: ['/icons/react.png', '/icons/nextjsLogo.png', '/icons/typescript.png', '/icons/tailwind.png', ],
      tags: ['frontEnd', 'backEnd', 'nextjs', 'tailwind', 'sanity', 'responsive']
    },
    {
      imgSrc: 'szafranprojekt2.jpg',
      projectName: 'SZAFRAN PROJEKT',
      description: 'Official website for a road project company',
      images: ['/icons/react.png', '/icons/sass.svg', '/icons/gsap.png',  '/icons/mui.png', '/icons/node.png', '/icons/mongodb.jpg', '/icons/gimp.jpg'],
      tags: ['official', 'landingPage', 'frontEnd', 'backEnd', 'diskManagement', 'gsap', 'mui', 'sass', 'maps', 'react-leaflet', 'server', 'logo', 'design', 'imageEdit', 'video', 'animation',],
    },
    {
      imgSrc: 'mementomori.jpg',
      projectName: 'Memento Mori',
      description: 'Shows the remaining time of the year in months, days and hours and minutes',
      images: ['/icons/react.png', '/icons/nextjsLogo.png', '/icons/tailwind.png', ],
      tags: ['frontEnd', 'tailwind', 'nextjs',  'responsive']
    },
    {
      imgSrc: 'simpleserver.jpg',
      projectName: 'File archive for bricscad projects',
      description: 'Allows PCs to share/store/archive FILES (on Local Connection) ',
      images: ['/icons/react.png', '/icons/nextjsLogo.png', '/icons/node.png', '/icons/mongodb.jpg',  '/icons/tailwind.png', ],
      tags: ['frontEnd', 'tailwind', 'mongoose', 'nextjs', 'node', 'disk-info',  'responsive']
    },
    {
      imgSrc: 'oldserver.jpg',
      projectName: 'File archive for bricscad projects - older version; client + server',
      description: 'Allows PCs to share/store/archive FILES (on Local Connection) ',
      images: ['/icons/react.png', '/icons/node.png', '/icons/mongodb.jpg',  '/icons/mui.png', ],
      tags: ['frontEnd',  'backEnd', 'mongoose',  'node', 'disk-info',  'diskManagement', 'fs', 'file-management', 'mui', 'sass', 'maps', 'react-leaflet', 'server', 'imageEdit',]
    },
    {
      imgSrc: 'tictactoe.jpg',
      projectName: '[2019] TIC-TAC-TOE with a (fake) chat',
      description: '',
      images: ['/icons/js.png',  ],
      tags: ['frontEnd', 'github-pages', 'vanilla', 'first websites']
    },
    {
      imgSrc: 'battleships.jpg',
      projectName: '[2019] Classic Battleship game',
      description: 'First time using blender for a website',
      images: ['/icons/js.png', '/icons/blender.jpg',  ],
      tags: ['frontEnd', 'blender', 'github-pages', 'vanilla', 'first websites']
    },
    {
      imgSrc: 'restaurant.jpg',
      projectName: '[2019] Restaurant website',
      description: 'Using blender for website\'s props',
      images: ['/icons/js.png', '/icons/blender.jpg',  ],
      tags: ['frontEnd', 'blender', 'github-pages', 'vanilla', 'first websites']
    },
    {
      imgSrc: 'pomodoro.jpg',
      projectName: '[2019] Pomodoro website',
      description: '25 minutes of work - 5 minutes of break',
      images: ['/icons/js.png',  ],
      tags: ['frontEnd',  'vanilla', 'first websites']
    },
    {
      imgSrc: 'jplearn.jpg',
      projectName: '[2019] Japanese learning website',
      description: '',
      images: ['/icons/js.png',  ],
      tags: ['frontEnd',  'vanilla', 'first websites']
    },
    // {
    //   imgSrc: portfoliolight2,
    //   projectName: 'Portfolio 2D',
    //   description: '2D Part of the portfolio with blender-made images',
    //   images: ['/icons/react.png', '/icons/sass.svg','/icons/gimp.jpg', '/icons/blender.jpg'],
    //   tags: ['frontEnd','design', 'imageEdit', 'blender', 'animation',]
    // },
    // {
    //   imgSrc: portfoliochoose2,
    //   projectName: 'Portfolio START',
    //   description: 'The "in-between" state of my portfolio websites',
    //   images: ['/icons/react.png'],
    //   tags: ['frontEnd', 'particle', 'animation', 'imageEdit',]
    // },
    // {
    //   imgSrc: portfolioheavy2,
    //   projectName: 'Portfolio 3D',
    //   description: '3D Portfolio part, which utilizes Three.js with help from React Three Fiber',
    //   images: ['/icons/react.png', '/icons/sass.svg', '/icons/reacctspring.png', '/icons/gimp.jpg', '/icons/blender.jpg', '/icons/threejs.png'],
    //   tags: ['frontEnd', 'particle', 'animation', 'imageEdit',]
    // },
    // {
    //   imgSrc: '',
    //   projectName: 'Blog',
    //   description: 'Simple view into my past and current "activities" visualized on a website.',
    //   tags: ['frontEnd', 'backEnd']
    // },
    // {
    //   imgSrc: '',
    //   projectName: 'Fullstack Ecommerce Shop Mysql',
    //   tags: []
    // },
    // {
    //   imgSrc: '',
    //   projectName: 'Fullstack Ecommerce Shop Mongoose',
    //   tags: []
    // },
    // {
    //   imgSrc: '',
    //   projectName: 'Multiplayer card game',
    //   tags: []
    // },
    // {
    //   imgSrc: '',
    //   projectName: 'Messenger',
    //   tags: []
    // },
    // {
    //   imgSrc: '',
    //   projectName: 'Social Media app',
    //   tags: []
    // },
    // {
    //   imgSrc: '',
    //   projectName: '[OLD] Tic Tac Toe game',
    //   tags: []
    // },
    // {
    //   imgSrc: '',
    //   projectName: '[OLD] Battleship game',
    //   tags: []
    // },
    // {
    //   imgSrc: '',
    //   projectName: '[OLD] Restaurant page',
    //   tags: []
    // },
    // {
    //   imgSrc: '',
    //   projectName: '[OLD] Simon Game',
    //   tags: []
    // },
    // {
    //   imgSrc: '',
    //   projectName: '[OLD] Calculator',
    //   tags: []
    // },
  ]