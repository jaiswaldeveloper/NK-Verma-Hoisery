import React from 'react';
import { Helmet } from 'react-helmet';
import ProductComponent from '../component/ProductComponent';
const Products = () => {
  return (
    <>
      <Helmet>
        <title>Socks Products - NK VERMA HOSIEREY </title>
      </Helmet>
      <div className="banner-manufacture">
        <img src="assets/banner/product-banner2.jpg" alt="" />
      </div>
      <ProductComponent />
    </>
  );
};

export default Products;
