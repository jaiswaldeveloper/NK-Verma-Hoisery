import React from 'react';
import MultiCard from '../component/MultiCard';
import { Helmet } from 'react-helmet';
import AboutComponent from '../component/AboutComponent';
const About = () => {
  return (
    <>
      <Helmet>
        <title>Aboutus - NK Verma</title>
      </Helmet>

      <div className="banner-manufacture">
        <img src="assets/banner/about-banner.jpg" alt="" />
      </div>
      <AboutComponent />
      <MultiCard />
    </>
  );
};

export default About;
