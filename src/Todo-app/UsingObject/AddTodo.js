import React, { Component } from "react";
class AddTodo extends Component {
  state = {
    content: ""
  };
  onHandleChange = e => {
    this.setState({ content: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTodo(this.state);
    this.setState({ content: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add new Todo</label>
        <input value={this.state.content} onChange={this.onHandleChange} />
      </form>
    );
  }
}
export default AddTodo;