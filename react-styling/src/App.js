import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ backgroundColor: props.color }}>Hello, {props.name}</p>
      </header>
    </div>
  );
}

export default App;
