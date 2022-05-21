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
  { type: 'icon', icon: faHtml5, color: '#e34c26' },
  { type: 'icon', icon: faCss3, color: '#264de4' },
  { type: 'icon', icon: faJsSquare, color: '#f0db4f' },
  { type: 'icon', icon: faReact, color: '#61DBFB' },
  {
    type: 'image',
    icon: './assets/images/redux.svg',
    style: { width: '100px', height: '100px' },
    alt: 'redux',
  },
  {
    type: 'image',
    icon: './assets/images/nextjs.svg',
    style: { width: '100px', height: '100px' },
    alt: 'next-js',
  },
  {
    type: 'image',
    icon: './assets/images/chakra.svg',
    style: { width: '100px', height: '100px' },
    alt: 'chakra-ui',
  },
  {
    type: 'image',
    icon: './assets/images/tailwind.svg',
    style: { width: '100px', height: '100px' },
    alt: 'tailwind-css',
  },
  {
    type: 'image',
    icon: './assets/images/jest.svg',
    style: { width: '100px', height: '100px' },
    alt: 'jest',
  },
  { type: 'icon', icon: faBootstrap, color: '#563d7c' },
  { type: 'icon', icon: faSass, color: '#CD6799' },
  { type: 'icon', icon: faGithub, color: '#171515' },
  {
    type: 'image',
    icon: './assets/images/ruby.svg',
    style: { width: '100px', height: '100px' },
    alt: 'ruby',
  },
  {
    type: 'image',
    icon: './assets/images/ruby-on-rails.svg',
    style: { width: '100px', height: '100px' },
    alt: 'ruby-on-rails',
  },
  {
    type: 'image',
    icon: './assets/images/postgresql.svg',
    style: { width: '100px', height: '100px' },
    alt: 'postgresql',
  },
  {
    type: 'image',
    icon: './assets/images/graphql.svg',
    style: { width: '100px', height: '100px' },
    alt: 'graphql',
  },
];

export default fontAwesomeData;
