import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

export class ToDoObject extends Component {
    constructor() {
        super();
        this.state = {
          todos: [
            { id: 1, content: "Hello Bro" },
            { id: 2, content: "Hello Dear" },
            { id: 3, content: "Hello Sis" }
          ]
        };
      }
      deleteTodo = id => {
        console.log(id);
        const todos = this.state.todos.filter(todos => {
          return todos.id !== id;
        });
        this.setState({ todos: todos }); //or ,this.setState({todos})
      };
      addTodo = todo => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({ todos });
      };
  render() {
    return (
      <div>ToDo App using Object :
         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
         <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default ToDoObject