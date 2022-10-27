import React from 'react';
import ContactHome from '../component/ContactHome';
import ScrollToTopOnMount from '../component/ScrollToTop';
import { Helmet } from 'react-helmet';
const ContactPage = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Helmet>
        <title>Contact us - NK VERMA HOSIEREY </title>
      </Helmet>
      <div className="banner-manufacture">
        <img src="assets/banner/contact-banner.jpg" alt="" />
      </div>
      <ContactHome />
    </>
  );
};

export default ContactPage;
