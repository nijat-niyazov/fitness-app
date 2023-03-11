import React, { useState, useEffect } from 'react';
import '../../styles/components/scroll.scss';
import { BsBoxArrowUp } from 'react-icons/bs';

const ScrollTop = () => {
  const [topButton, setTopButton] = useState(false);

  const handleScroll = () => {
    window.scrollY > window.innerHeight / 2
      ? setTopButton(true)
      : setTopButton(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {topButton ? (
        <button onClick={scrollToTop} className="scroll-div">
          <span>
            <BsBoxArrowUp />
          </span>
        </button>
      ) : null}
    </>
  );
};

export default ScrollTop;
