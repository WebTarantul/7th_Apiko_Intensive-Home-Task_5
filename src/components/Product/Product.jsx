import React from 'react';
import s from './Product.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../pages/router';

const Product = () => (
  <div className={s.ProductWrapper}>
     <div className={s.ProductPage}>
          <h3>There is no products now</h3>
          <Link to={routes.HOME}>OK</Link>
        </div>
  </div>
);



export default Product;
