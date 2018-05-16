import React, { Component } from 'react';

const List = props => {
  return (
    <div>
      <h2>Your list includes:</h2>
      <ul>
        {props.todos.map(todo => (
          <li key={todo}>
            {todo}
            <button onClick={() => props.removeTodo(todo)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
