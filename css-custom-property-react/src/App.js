import React from 'react';
import styled from 'styled-components'

import CustomProperties from 'react-custom-properties';
import logo from './logo.svg';
import Button from './Button';
import ButtonCustomProperty from './ButtonWithCustomProperty';
import ModulesDemo from './ModulesDemo';
import ButtonModules from './ButtonModules';
import StyledComponentsButton from './StyledComponentsButton';
import Tooltips from './Tooltips';
import './App.css';

function App() {
  const buttonThemes = {
    danger: {
      '--color': '#fff',
      '--backgroundColor': '#dc3545',
      '--borderColor': '#dc3545',
    },
    info: {
      '--color': '#fff',
      '--backgroundColor': '#17a2b8',
      '--borderColor': '#17a2b8'
    },
    success: {
      '--color': '#fff',
      '--backgroundColor': '#28a745',
      '--borderColor': '#28a745',
      '--borderRadius': '4px',
      '--padding': '.25em .5em'
    },
    warning: {
      '--color': '#212529',
      '--backgroundColor': '#ffc107',
      '--borderColor': '#ffc107',
      '--borderRadius': '10rem',
      '--padding': '1em 3em'
    }
  } 

  const SuccessButton = styled(StyledComponentsButton)`
      --color: #fff;
      --backgroundColor: #28a745;
      --borderColor: #28a745;
  `
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="wrapper">
          <Button text="Default" className="" />
          <Button text="Primary" className="primary" />
          <Button text="Danger" style={buttonThemes.danger} className="" />
          <Button text="Info" style={buttonThemes.info} className="" />

          <CustomProperties properties={buttonThemes.success}>
            <Button text="Success" />
          </CustomProperties>

          <CustomProperties properties={buttonThemes.success}>
            <ButtonCustomProperty text="Success" />
          </CustomProperties>

          {/* <CustomProperties global properties={buttonThemes.warning}>
            <ButtonCustomProperty text="Warning" />
          </CustomProperties> */}

          <div style={{backgroundColor: 'var(--backgroundColor)'}}>Test</div>
        </div>

        <ModulesDemo />

        <ButtonModules text="Danger" style={buttonThemes.danger} />
        <ButtonModules text="Primary" className="primary" /> 

        <StyledComponentsButton text="Default" />
        <StyledComponentsButton text="Primary" className="primary" />
        <StyledComponentsButton text="Danger" style={buttonThemes.danger} />

        <SuccessButton text="Success" />

        <Tooltips text="This is Tooltips" className="tooltips__home"/>
        <Tooltips direction="top" text="This is Tooltips" className="tooltips__primary" />
        <Tooltips direction="left" text="This is Tooltips" className="tooltips__danger" style={buttonThemes.danger}/>
        <Tooltips direction="right" text="This is Tooltips" className="tooltips__success" style={buttonThemes.success} />

      </header>
    </div>
  );
}

export default App;
