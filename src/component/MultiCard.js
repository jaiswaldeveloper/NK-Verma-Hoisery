import React from 'react';
import SingleCard from './SingleCard';

const MultiCard = () => {
  return (
    <>
      <h1 className="card-heading">
        We Are Deal In <br /> Different categories
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <SingleCard />
              </div>
              <div className="col-md-6">
                <SingleCard
                  title="Ladies Socks"
                  images="assets/cards/Ladies-Gentle-Grip-Socks-2.jpg"
                />
              </div>
              <div className="col-md-6">
                <SingleCard
                  title="School Socks"
                  images="assets/cards/Ladies-Gentle-Grip-Socks-2.jpg"
                />
              </div>
              <div className="col-md-6">
                <SingleCard title="Kids Socks" images="assets/cards/kids.jpg" />
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 dis-sec">
            <div className="step-dis">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiCard;
