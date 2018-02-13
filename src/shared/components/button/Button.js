import React from 'react';
import './Button.css';

export default ({ title, onClick, className }) => (
  <button className={'button ' + className} onClick={onClick}>
    {title}
  </button>
);
