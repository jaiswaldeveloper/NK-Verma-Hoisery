import React from 'react';

const ProductComponent = () => {
  return (
    <>
      <div className="main-products">
        <div className="container">
          <h2 className="text-center my-5">Best Selling Products</h2>
          <div className="row">
            <div className="col-md-3">
              <div>
                <img src="assets/products/p-1.jpg" alt="" srcset="" />
              </div>
            </div>

            <div className="col-md-3">
              <div>
                <img src="assets/products/p-2.jpg" alt="" srcset="" />
              </div>
            </div>

            <div className="col-md-3">
              <div>
                <img src="assets/products/p-3.jpg" alt="" srcset="" />
              </div>
            </div>

            <div className="col-md-3">
              <div>
                <img src="assets/products/p-4.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
