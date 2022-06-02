import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const WorkCard = ({ title, sourceLink, image, liveLink }) => {
  return (
    <div className="history-item">
      <img src={image} className="background-image" alt="cover" />
      <p className="title">{title}</p>
      <div className="overlay"></div>
      <div className="link-container">
        {sourceLink !== '' && (
          <a target="_blank" href={sourceLink} rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#ffd700" title="Source" />
          </a>
        )}
        {liveLink !== '' && (
          <a target="_blank" href={liveLink} rel="noreferrer">
            <FontAwesomeIcon icon={faSignal} color="#ffd700" title="Live" />
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
