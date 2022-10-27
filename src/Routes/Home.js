import React from 'react';

import CarouselHeader from '../component/CarouselHeader';
import ContactHome from '../component/ContactHome';
import ManufacturMachine from '../component/ManufacturMachine';
import MultiCard from '../component/MultiCard';
import { Helmet } from 'react-helmet';
import AboutComponent from '../component/AboutComponent';
import ScrollToTopOnMount from '../component/ScrollToTop';
import Testimonial from '../component/Testimonial';
import ProductComponent from '../component/ProductComponent';

const Home = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Helmet>
        <title>Deal In Socks - NK HOSIEREY </title>
      </Helmet>
      <CarouselHeader />
      <AboutComponent />
      <MultiCard />
      <ProductComponent />
      <ManufacturMachine />
      <Testimonial />
      <ContactHome />
    </>
  );
};

export default Home;
