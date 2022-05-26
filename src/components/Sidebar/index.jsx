import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import {
  faHome,
  faUser,
  faEnvelope,
  faGear,
  faHistory,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faAngellist,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar bg-navBar flex justify-center w-full  lg:w-[70px] lg:h-full top-0 lg:absolute z-30">
      <nav className="flex px-7 w-full sm:w-1/2 justify-around lg:w-full lg:block lg:text-center lg:absolute lg:h-[210px] top-1/2 lg:mt-[-120px] text-[22px] ">
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          className="lg:block"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link lg:block"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="skills-link lg:block"
          to="/skills"
        >
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="history-link lg:block"
          to="/history"
        >
          <FontAwesomeIcon icon={faHistory} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link lg:block"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul className="flex lg:absolute lg:bottom-[20px] lg:block p-0 text-center my-0 mx-auto list-none">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://angel.co/u/ahmed-reda-19"
            className="angellist-link lg:m-auto lg:block"
          >
            <FontAwesomeIcon icon={faAngellist} color="#fff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/armali/"
            className="linkedin-link lg:m-auto lg:block"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ReAliens"
            className="github-link lg:m-auto lg:block"
          >
            <FontAwesomeIcon icon={faGithub} color="#fff" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
