import React from 'react';
import withNavBar from '../../hocs/withNavBar';
//import { Test } from './HomePage.styles';

const HomePage = () => (
  <div className="HomePageWrapper">
    <h2>
      Welcome to Home Page
    </h2>
  </div>
);


export default withNavBar(HomePage);
