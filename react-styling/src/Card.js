import React from 'react';
import logo from './logo.svg';
import styles from './Card.css.js';

function Card(props) {
  return (
    <div style={styles.card}>
        <img src={logo} style={styles.cardImgTop} alt={props.title} />
        <div style={styles.cardBody}>
            <h5 style={styles.cardTitle}>{props.title}</h5>
            <p style={styles.cardText}>{props.text}</p>
            <a href={props.linkUrl} style={styles.button}>{props.linkText}</a>
        </div>
    </div>
  );
}

export default Card;
