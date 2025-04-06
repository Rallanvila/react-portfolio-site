export interface Project {
  title: string;
  image: string;
  type: 'landing' | 'react' | 'javascript' | 'email';
  link: string;
  github: string;
  description: string;
  lessons: string[];
  portfolioVersion: string[];
}

const data: Project[] = [
  {
    title: 'NSI Modernization',
    image: '/img/modernization.png',
    type: 'landing',
    link: 'https://n-s-i.us/',
    github: 'https://github.com/Rallanvila/nsi_modernization',
    description:
      "This is the rebranding of Naval System's company website I built while working there. I created all the designs in Figma, and then built it from the ground up. I also added Google Analytics, Facebook Pixels, and a form database to track all the leads coming in.",
    lessons: [
      'Google Maps API',
      'Project Management',
      'Azure DevOps Sprint Reviews',
      'C-Level mission/vision conversations for website designs',
      'Leading conference calls discussing progress and next steps',
    ],
    portfolioVersion: ['v2'],
  },
  {
    title: 'VilaMortgage App',
    image: '/img/VilaMortgage.png',
    type: 'react',
    link: 'https://rallanvila.github.io/Mortgage-Calculator/',
    github: 'https://github.com/Rallanvila/Mortgage-Calculator',
    description:
      'VilaMortgage is a fluid mortgage calculator app. You can filter your down payment, interest rate, property taxes, home insurance, and HOA. After calculating the total, you can move the values around to suit your budget. 💰',
    lessons: [
      'Pixel Perfect Design Replication',
      'How to set variables and @mixins for brand consistent code',
      'How to set a JS data file to easily change data for email campaigns',
      'Create proper table layouts for image and summary sections',
      'Writing reusable code for minimal editing when changing content',
    ],
    portfolioVersion: ['v1', 'v2'],
  },
  {
    title: 'Vila Travel Companion',
    image: '/img/Vila-travel.png',
    type: 'react',
    link: 'https://vilatravel.netlify.app/',
    github: 'https://github.com/Rallanvila/vila_travel_advisor',
    description:
      'This is a travel companion app. You can use this when looking for restaurants, hotels, or attractions around your area. You can view the ratings, address, phone number, website, and more. This was made possible with the travel advisor API. ',
    lessons: [
      'Rapid API',
      'Material UI',
      'Google Maps API',
      'Travel Advisor API',
      'useEffect and createRef hooks',
    ],
    portfolioVersion: ['v2'],
  },
  {
    title: 'Vila Commerce',
    image: '/img/vilacommerce.png',
    type: 'react',
    link: 'https://vilacommerce.netlify.app/',
    github: 'https://github.com/Rallanvila/e-commerce',
    description:
      'This is an e-commerce store that is pulling from the commmerce.js API. Also, stripe is integrated into the app for the full checkout process. Once you finish checkout, there will be an email sent to you with all order details and payment info.',
    lessons: [
      'Stripe',
      'Material UI',
      'Commerce.js',
      'React-hook-form',
      'Complex useEffect dependencies',
    ],
    portfolioVersion: ['v1', 'v2'],
  },
  // {
  //   title: 'My Original Portfolio',
  //   image: '/img/site_img.png',
  //   type: 'react',
  //   link: '/original-portfolio',
  //   github: 'https://github.com/Rallanvila/react-portfolio-site',
  //   description:
  //     'As a self-taught developer, I managed to get hired within seven months of learning how to code. Within five months, I was able to build this site from scratch, completely custom in React, while building seventeen custom projects as well. This is the original portfolio that got me hired in seven months that I created while learning to code from my first console.log() on Nov 20th, 2020, and getting hired on June 1st, 2021. I made it with React using Next.js.',
  //   lessons: [
  //     'Figma',
  //     'Context Api',
  //     'React-Icons',
  //     'Font-Awesome',
  //     'React with Next.js',
  //     'Absolute and Relative Positioning',
  //   ],
  //   portfolioVersion: ['v2', 'depricated'],
  // },
];

export default data;
