import React from 'react';

function ListItem({ title, isOdd }) {
  console.log(isOdd)
  const StyleObj = {
      padding: '.75rem 1.25rem',
      margin: '0 0 10px',
      border: '1px solid transparent',
      borderRadius: '.25rem',
      backgroundColor: isOdd ? '#b8daff' : '#d4edda',
      color: isOdd ? '#004085' : '#155724',
      borderColor: isOdd ? '#b8daff' : '#c3e6cb',
  }
  return (
    <li style={ StyleObj }>{title}</li>
  );
}

export default ListItem;
