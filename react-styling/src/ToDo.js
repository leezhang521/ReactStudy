import React from 'react';

import ListItem from './ListItem';

function ToDo(props) {
  const todoList = props.todoList.map(el => <ListItem key={el.title} title={el.title} isOdd={el.isOdd} />)
  return (
    <ul style={{ margin: 0, padding: '10px', list: 'none outside none' }}>
      { todoList }
    </ul>
  );
}

export default ToDo;
