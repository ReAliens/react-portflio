import './index.scss';
import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AnimatedSkillSIcons = ({ data }) => {
  return (
    <li className="tips-logo">
      <Tilt tiltMaxAngleX="40">
        {data?.type === 'icon' ? (
          <FontAwesomeIcon icon={data?.icon} color={data?.color} />
        ) : (
          <img src={data?.icon} alt={data?.alt} />
        )}
      </Tilt>
    </li>
  );
};

export default AnimatedSkillSIcons;
