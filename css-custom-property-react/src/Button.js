import React from 'react';
import './Button.css';

function Button(props) {
  const { text , className , ...rest } = props;
  return (
    <div className={`button ${className}`} {...rest}>{text}</div>
  );
}

export default Button;
