import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    item: '',
  };
  handleInputChange = event => {
    const item = event.target.value;
    this.setState({ item });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getTodo(this.state.item);
    this.setState({ item: '' });
  };
  render() {
    return (
      <div>
        <h4>Add Todo</h4>
        {console.log(this.props)}
        <form>
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
