import './index.scss';

import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import Loader from 'react-loaders';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const skillsArr = ['Skills', ' ', ' & ', 'Experience'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  });
  return (
    <div className="stage">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArr={skillsArr}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Expert in front-end development including technologies like
            <span className="tech-tag">HTML5 </span>,
            <span className="tech-tag">CSS3 </span>,
            <span className="tech-tag">JavaScript </span>,
            <span className="tech-tag">React </span>,
            <span className="tech-tag">Redux </span>,
            <span className="tech-tag">Next.js </span>,
            <span className="tech-tag">Chakra UI </span>,
            <span className="tech-tag">Tailwind Css </span>,
            <span className="tech-tag">Jest </span>,
            <span className="tech-tag">Bootstrap </span>,
            <span className="tech-tag">Sass </span>,
            <span className="tech-tag">Git </span>
            .
            <br />
            Also have learned some of back-end techs such as
            <span className="tech-tag">Ruby </span>,
            <span className="tech-tag">Ruby on Rails </span>,
            <span className="tech-tag">Postgresql </span>.
          </p>
          <p>
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. and best database and back-end flow for your data I
            would love to give you any kind of support also after the project's
            completion. I guarantee a commitment during work on your project.
          </p>
        </div>
      </div>

      <Loader type="pacman" />
    </div>
  );
};

export default Skills;
