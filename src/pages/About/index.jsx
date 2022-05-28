import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loading, setLoading] = useState(true);
  const aboutArr = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);
  return (
    <>
      {!loading && (
        <div className="about-page grid grid-rows-2 lg:grid-cols-2 justify-center items-center w-full h-full px-7">
          <div className="flex flex-col lg:h-[100vh] sticky w-full justify-center top-[20%] lg:pl-28">
            <h1 className="text-[30px] lg:text-[55px] text-main font-medium mt-0 mb-[40px] relative left-[10px]">
              <AnimatedLetters
                strArr={aboutArr}
                idx={15}
                letterClass={letterClass}
              />
            </h1>
            <p>
              I'm very ambitious front-end developer looking for a role in
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </p>
            <p>
              I'm quietly confident,naturally curious,and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a family
              person, and tech-obsessed!!!
            </p>
          </div>

          <div className="stage-cube-cont w-full h-full flex text-center lg:items-center lg:sticky lg:top-[40%] justify-center m-auto">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faSass} color="#CD6799" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJs} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4d28" />
              </div>
            </div>
          </div>
        </div>
      )}
      <Loader type="pacman" />
    </>
  );
};

export default About;
