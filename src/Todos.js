import React, { Component } from 'react';
import AddTodo from './AddTodo';
import List from './List';

class Todos extends Component {
  state = {
    todos: ['Mess around with unstated', 'Start dance class'],
  };
  handleAddTodo = data => {
    this.setState(({ todos }) => ({
      todos: todos.concat(data),
    }));
    //this.setState({ todo: '' });
  };
  handleDeleteTodo = todo => {
    this.setState({
      todos: this.state.todos.filter(c => c !== todo),
    });
  };

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <div>
          <AddTodo getTodo={this.handleAddTodo} />
        </div>
        <List todos={this.state.todos} removeTodo={this.handleDeleteTodo} />
      </div>
    );
  }
}

export default Todos;
