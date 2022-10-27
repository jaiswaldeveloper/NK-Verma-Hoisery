import React from 'react';
import SwipperSlide from './SwipperSlide';

const Testimonial = () => {
  return (
    <>
      <section className="testimonial-section">
        <div className="container">
          <h2 className="text-center">Customer Review</h2>
          <div className="row">
            <div className="col-md-12 ">
              <SwipperSlide />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
