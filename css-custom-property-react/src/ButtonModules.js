import React from 'react';
import styles from './ButtonModules.module.css';

function ButtonModules(props) {
  const { text , className , ...rest } = props;
  return (
    <div className={`${styles.button} ${className}`} {...rest}>{text}</div>
  );
}

export default ButtonModules;
