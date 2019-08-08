import React from 'react';
import styled from 'styled-components'


function StyledComponentsButton(props) {
  const { text , className , ...rest } = props;

  const Button = styled.div`
    // --backgroundColor: #fff;
    // --borderColor: #ccc;
    // --borderRadius: 5px;
    // --fontSize: 16px;
    // --color: #333;
    // --padding: 5px 10px;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: var(--backgroundColor, #fff);
    border: 1px solid var(--borderColor, #ccc);
    color: var(--color, #333);
    font-size: var(--fontSize, 16px);
    padding: var(--padding, 5px 10px);
    border-radius: var(--borderRadius, 5px);
  `
  return (
    <Button className={`${className}`} {...rest}>{ text }</Button>
  );
}

export default StyledComponentsButton;
