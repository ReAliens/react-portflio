import {
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';

const fontAwesomeData = [
  { id: 1, type: 'icon', icon: faHtml5, color: '#e34c26' },
  { id: 2, type: 'icon', icon: faCss3, color: '#264de4' },
  { id: 3, type: 'icon', icon: faJsSquare, color: '#f0db4f' },
  { id: 4, type: 'icon', icon: faReact, color: '#61DBFB' },
  {
    id: 5,
    type: 'image',
    icon: './assets/images/redux.svg',
    style: { width: '100px', height: '100px' },
    alt: 'redux',
  },
  {
    id: 6,
    type: 'image',
    icon: './assets/images/nextjs.svg',
    style: { width: '100px', height: '100px' },
    alt: 'next-js',
  },
  {
    id: 7,
    type: 'image',
    icon: './assets/images/chakra.svg',
    style: { width: '100px', height: '100px' },
    alt: 'chakra-ui',
  },
  {
    id: 8,

    type: 'image',
    icon: './assets/images/tailwind.svg',
    style: { width: '100px', height: '100px' },
    alt: 'tailwind-css',
  },
  {
    id: 9,
    type: 'image',
    icon: './assets/images/jest.svg',
    style: { width: '100px', height: '100px' },
    alt: 'jest',
  },
  { id: 10, type: 'icon', icon: faBootstrap, color: '#563d7c' },
  { id: 11, type: 'icon', icon: faSass, color: '#CD6799' },
  { id: 12, type: 'icon', icon: faGithub, color: '#171515' },
  {
    id: 13,
    type: 'image',
    icon: './assets/images/ruby.svg',
    style: { width: '100px', height: '100px' },
    alt: 'ruby',
  },
  {
    id: 14,
    type: 'image',
    icon: './assets/images/ruby-on-rails.svg',
    style: { width: '100px', height: '100px' },
    alt: 'ruby-on-rails',
  },
  {
    id: 15,
    type: 'image',
    icon: './assets/images/postgresql.svg',
    style: { width: '100px', height: '100px' },
    alt: 'postgresql',
  },
  {
    id: 16,
    type: 'image',
    icon: './assets/images/graphql.svg',
    style: { width: '100px', height: '100px' },
    alt: 'graphql',
  },
];

export default fontAwesomeData;
