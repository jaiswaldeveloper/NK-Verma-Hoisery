import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 ">
              <div className="footer-logo">
                <img src="assets/banner/Nk-logo.png" alt="" />
                <p>
                  {' '}
                  N.K Verma Hosiery Works established in the year 2005, is a
                  leading manufacturer and supplier of Socks, Elastic & Hosiery
                  Items.
                </p>
              </div>
            </div>

            <div className="col-md-2">
              <h5>Mens's Socks</h5>
            </div>
            <div className="col-md-2">
              <h5>Ladies Socks</h5>
            </div>
            <div className="col-md-2">
              <h5>Kids Socks</h5>
            </div>
            <div className="col-md-2">
              <h5>School Socks</h5>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
