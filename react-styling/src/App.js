import React from 'react';
import ToDo from './ToDo';

const todoList = [
  {
      title: 'JavaScript',
      isOdd: true
  },
  {
      title: 'CSS',
      isOdd: false
  },
  {
      title: 'React',
      isOdd: true
  }
]

function App() {
  return (
    <>
      <ToDo todoList={todoList} />
    </>
  );
}

export default App;
