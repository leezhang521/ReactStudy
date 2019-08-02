import React from 'react';
import './App.css';

import Card from './Card';

function App(props) {
  return (
    <div className="App">
      <Card title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." linkText="Go W3cplus" linkUrl="//www.w3cplus.com"/>
    </div>
  );
}

export default App;
