import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import {
  faHome,
  faUser,
  faEnvelope,
  faGithub,
  faGmail,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="logo">
        <img src="../../assets/images/logo-s.png" alt="logo" />
      </Link>
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
            <img src="../../assets/images/angellist.svg" alt="angellist" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/armali/"
            className="linkedin-link"
          >
            <img src="../../assets/images/linkedin.svg" alt="linkedin" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ReAliens"
            className="github-link"
          >
            <img src="../../assets/images/github.svg" alt="github" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
