import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const WorkCard = ({ sourceLink, image, liveLink }) => {
  return (
    <div className="history-item">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="content">
        <a target="_blank" href={sourceLink} rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#171515" title="Source" />
        </a>
        <a target="_blank" href={liveLink} rel="noreferrer">
          <FontAwesomeIcon icon={faSignal} color="#171515" title="Live" />
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
