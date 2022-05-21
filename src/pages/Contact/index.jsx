import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const contactArr = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  });
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArr={contactArr}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Iam interested in freelance and Remote opportunities especially
            ambitious or large projects and long Contracts. However,if you have
            other request or question, don't hesitate to contact me using below
            form either.
          </p>
        </div>
      </div>
      <Loader type="ball-clip-rotate" />
    </>
  );
};

export default Contact;
