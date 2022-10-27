import React from 'react';
import ManufacturMachine from '../component/ManufacturMachine';
import { Helmet } from 'react-helmet';
import ScrollToTopOnMount from '../component/ScrollToTop';
const Manufacture = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Helmet>
        <title>Manufacture Socks - NK Verma</title>
      </Helmet>

      <div className="banner-manufacture">
        <img src="assets/banner/manufacture-banner.jpg" alt="" />
      </div>
      <ManufacturMachine />
    </>
  );
};

export default Manufacture;
