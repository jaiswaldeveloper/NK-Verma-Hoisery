import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const CarouselHeader = () => {
  return (
    <>
      <div className="carausel-parent">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/banner/banner4.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/banner/banner-two.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/banner/banner3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/banner/banner3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselHeader;
