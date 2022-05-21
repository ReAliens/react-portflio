import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import {
  faHome,
  faUser,
  faEnvelope,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faAngellist,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://angel.co/u/ahmed-reda-19"
            className="angellist-link"
          >
            <FontAwesomeIcon icon={faAngellist} color="#fff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/armali/"
            className="linkedin-link"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ReAliens"
            className="github-link"
          >
            <FontAwesomeIcon icon={faGithub} color="#fff" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
