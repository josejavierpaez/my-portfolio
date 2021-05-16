import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'jose javier paez', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'jose javier paez website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Javier Paez',
  subtitle: "I'm Fullstack Software Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Software Developer with over 3 + years of experience in the development and implementation of custom apps for different companies and startup ecosystems, one of which is top-ranked in the country.',
  paragraphTwo:
    'I am highly experienced and knowledgeable in the necessary tools and practices required, such as web and agile practices, version control systems, design patterns, and cloud systems.',
  paragraphThree:
    'I am passionate about usability and committed to making a positive impact on modern software.',
  resume: 'https://app.onlinecv.es/share/d8c135a8f4c7450c8b1e3db2b39abe78', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tasktify.png',
    title: 'Tasktify',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/josejavierpaez', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'structifys.png',
    title: 'Structifys',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Structifys', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'josejavierpaez@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/JavierCoding',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/josejavierpaez/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/josejavierpaez',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
