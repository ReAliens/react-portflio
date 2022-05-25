// import { useEffect, useState } from 'react';
// import AnimatedLetters from '../../components/AnimatedLetters';
import WorkCard from '../../components/WorkCard';
import workHistory from '../../constants/history';
import './index.scss';

const History = () => {
  return (
    <div className="history-page">
      <div className="history-cont">
        <ul>
          {workHistory.map((item) => (
            <WorkCard
              key={item.id}
              image={item.image}
              sourceLink={item?.sourceLink}
              liveLink={item.liveLink}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default History;
