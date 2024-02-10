import React from 'react';

import './HomePage.scss';

import { BannerCarusel } from './BannerCarusel';
import { ProductsDiscount } from './ProductsDiscount';
import { Categories } from './Categories';
import { NewProduct } from './NewProducts';

export const HomePage:React.FC = React.memo(() => {
  return (
    <div className="container">
      <h1 className="home-page_title">Product Catalog</h1>
      <BannerCarusel />
      <ProductsDiscount />
      <Categories />
      <NewProduct />
    </div>
  );
});
