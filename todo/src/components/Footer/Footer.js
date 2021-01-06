import React from 'react';
import style from './Footer.module.css';

const Footer = ( {count} ) => (<div className={style.wrapper}>Осталось сделать: {count}</div>);

export default Footer;
