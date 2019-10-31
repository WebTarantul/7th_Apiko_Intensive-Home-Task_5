import React from 'react';
import s from './Logo.module.scss';

const Logo = (props) => (
  <span className={s.logo}>
    <span className={s.visuallyHidden}>Logo of Apiko</span>
  </span>
);


export default Logo;
