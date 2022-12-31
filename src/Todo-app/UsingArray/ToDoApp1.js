import React, { Component } from 'react'

export class ToDoApp1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todostr:"",
         todoArr:[]
      }
    }
  handleInput=(e)=>{
   this.setState({
    todostr:e.target.value
   })
  }
  addTodo=()=>{
    let newTodo=this.state.todoArr.slice();
    newTodo.push(this.state.todostr);
    this.setState({
        todostr:"",
        todoArr:newTodo
    })
  }
  deleteTodo=(i)=>{
    let newTodo=this.state.todoArr.slice();
    newTodo.splice(i,1);
    this.setState({
        todoArr:newTodo
    })
  }
  render() {
    let displayList=this.state.todoArr.map((ele,index)=>{
       return(
        <li key={index} onClick={this.deleteTodo}>{ele} <button onClick={this.deleteTodo}>X</button></li>
       )
    })
    return (
      <div>ToDoApp :
       <input type="text" value={this.state.todostr} onChange={this.handleInput}/>
       <button onClick={this.addTodo}>Click me !</button>
       {this.state.todoArr.length===0?"Nothing to show":<ul>{displayList}</ul>}
      </div>
    )
  }
}

export default ToDoApp1