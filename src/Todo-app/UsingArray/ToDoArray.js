import React, { Component } from "react";
import Child from "./Child";

export class ToDoArray extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTodo: "",
      todoarray: [],
    };
  }
  addTodo = () => {
    let newTodo = this.state.todoarray.slice();
    newTodo.push(this.state.currentTodo);

    this.setState({ currentTodo: "", todoarray: newTodo });
  };
  onChangeInput = (e) => {
    this.setState({ currentTodo: e.target.value });
  };
  deleteTodo = (i) => {
    let newTodo = this.state.todoarray.slice();
    newTodo.splice(i, 1);

    this.setState({ todoarray: newTodo });
  };
  render() {
    let displayList = this.state.todoarray.map((e, i) => {
      return (
        <Child indexval={i} elementsval={e} deleteList={this.deleteTodo} />
      );
    });
    return (
      <div>
        Todo App using Array :
        <input
          placeholder="Enter your wish dear"
          value={this.state.currentTodo}
          onChange={this.onChangeInput}
        />
        <button className="btn-success" onClick={this.addTodo}>
          Click me !
        </button>
        {this.state.todoarray.length === 0 ? (
          <div>** You Entered Nothing Dear</div>
        ) : (
          <ul>{displayList}</ul>
        )}
      </div>
    );
  }
}

export default ToDoArray;