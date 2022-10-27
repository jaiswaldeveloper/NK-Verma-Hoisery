import React from 'react';

const SingleCard = ({
  title = "Men's Socks",
  images = './assets/cards/How-to-combine-socks-with-clothes.jpg',
  para = 'NK Verma Hoisery',
}) => {
  return (
    <>
    
      <div className="categories-card">
        <div>
          <img src={images} alt="" />
        </div>
        <div>
          <h5>{title}</h5>
        </div>
        <div>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
