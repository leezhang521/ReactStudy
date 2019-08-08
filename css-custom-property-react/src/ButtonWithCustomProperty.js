import React from 'react';
import './ButtonWithCustomProperty.css';

function ButtonWithCustomProperty(props) {
  const { text , className , ...rest } = props;
  return (
    <div className={`button__coustom ${className}`} {...rest}>{text}</div>
  );
}

export default ButtonWithCustomProperty;
