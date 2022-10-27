import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="testimonial-cards">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div>
              <p>
                They have superb mock test series which were exclusively
                beneficial practising before board exams. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Exercitationem ex ducimus a
                mollitia atque nesciunt minima quia voluptate alias consectetur.
              </p>
            </div>
            <hr />

            <div class="test-content">
              <div>
                <h6>priyanka sharma</h6>
                <h5>greater noida</h5>
              </div>

              <div>
                <img src="assets/images/testimony-3.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="testimonial-cards">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div>
              <p>
                They have superb mock test series which were exclusively
                beneficial practising before board exams. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Exercitationem ex ducimus a
                mollitia atque nesciunt minima quia voluptate alias consectetur.
              </p>
            </div>
            <hr />

            <div class="test-content">
              <div>
                <h6>priyanka sharma</h6>
                <h5>greater noida</h5>
              </div>

              <div>
                <img src="assets/images/testimony-3.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="testimonial-cards">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div>
              <p>
                They have superb mock test series which were exclusively
                beneficial practising before board exams. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Exercitationem ex ducimus a
                mollitia atque nesciunt minima quia voluptate alias consectetur.
              </p>
            </div>
            <hr />

            <div class="test-content">
              <div>
                <h6>priyanka sharma</h6>
                <h5>greater noida</h5>
              </div>

              <div>
                <img src="assets/images/testimony-3.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="testimonial-cards">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div>
              <p>
                They have superb mock test series which were exclusively
                beneficial practising before board exams. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Exercitationem ex ducimus a
                mollitia atque nesciunt minima quia voluptate alias consectetur.
              </p>
            </div>
            <hr />

            <div class="test-content">
              <div>
                <h6>priyanka sharma</h6>
                <h5>greater noida</h5>
              </div>

              <div>
                <img src="assets/images/testimony-3.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="testimonial-cards">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div>
              <p>
                They have superb mock test series which were exclusively
                beneficial practising before board exams. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Exercitationem ex ducimus a
                mollitia atque nesciunt minima quia voluptate alias consectetur.
              </p>
            </div>
            <hr />

            <div class="test-content">
              <div>
                <h6>priyanka sharma</h6>
                <h5>greater noida</h5>
              </div>

              <div>
                <img src="assets/images/testimony-3.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
