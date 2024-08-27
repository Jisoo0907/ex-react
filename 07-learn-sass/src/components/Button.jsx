// Button.jsx
import React from 'react';
import './Button.scss';

const Button = ({ children, type = 'primary', onClick }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
