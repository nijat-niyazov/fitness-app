import React, { useEffect } from 'react';
import '../../styles/pages/home.scss';
import MY from '../../assets/images/project/welcome-img.png';
import { ScrollTop } from '../../components/exporter';
import { Section2, Section3, Section4 } from './sections/sections';

const Home = () => {
  useEffect(() => window.scrollTo({ top: 0 }), []);

  return (
    <>
      <img src={MY} alt="Coach" />
      <ScrollTop />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default Home;
