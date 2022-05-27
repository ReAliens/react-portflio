import './index.scss';

import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import fontAwesomeData from '../../constants/skillsIconFA';
import AnimatedSkillSIcons from '../../components/AnimatedSkills';
import Loader from 'react-loaders';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loading, setLoading] = useState(true);
  const skillsArr = ['Skills', ' ', ' & ', ' ', 'Experience'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);
  return (
    <div className="stage">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {!loading && (
        <>
          <div className="skills-page grid grid-rows-2 lg:grid-cols-2 justify-center w-full h-[100%] px-7">
            <div className="flex flex-col top-[20%] lg:static lg:justify-center fixed h-[100%] lg:pl-28  lg:h-[100vh] w-full ">
              <h1 className="text-[30px] lg:text-[55px] text-main font-medium mt-0 mb-[40px] relative left-[10px] ">
                <AnimatedLetters
                  strArr={skillsArr}
                  idx={15}
                  letterClass={letterClass}
                />
              </h1>
              <p>
                Expert in front-end development including technologies like
                <span className="tech-tag"> HTML5 </span>,
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
                <span className="tech-tag"> Ruby </span>,
                <span className="tech-tag">Ruby on Rails </span>,
                <span className="tech-tag">Postgresql </span>.
              </p>
              <p>
                I’m not a designer but I have a good sense of aesthetics, and
                experience in responsive, mobile-first web design. I put special
                effort into optimizing my code and providing the best user
                experience. and best database and back-end flow for your data I
                would love to give you any kind of support also after the
                project's completion. I guarantee a commitment during work on
                your project.
              </p>
            </div>
            <div className="tips-logo-cont w-full flex fixed top-[50%] lg:static justify-center lg:items-center lg:h-full lg:ml-[20px]">
              <ul>
                {fontAwesomeData.map((item) => (
                  <AnimatedSkillSIcons key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
      <Loader type="pacman" />
    </div>
  );
};

export default Skills;
