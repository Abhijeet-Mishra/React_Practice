
import React from "react";
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        id: ""
      },
      value: [],
      isEdit: false,
      editValue: "",
      editId: ""
    };
  }

  //function for input box
  handleChange = e => {
    this.setState(
      {
        name: {
          value: e.target.value,
          id: Math.random()
        }
      },
      () => console.log(this.state.name.value)
    );
  };

  //submit function on value submit
  submit = () => {
    console.log("button");
    if (this.state.name.value === "") {
      alert("please add todo");
      return;
    }
    this.setState(
      {
        name: {
          value: ""
        },
        value: [...this.state.value, this.state.name]
      },
      () => console.log(this.state)
    );
  };

  //remove function to remove items from todo
  remove = id => {
    let value = this.state.value;
    const remove = value.filter(ele => ele.id !== id);
    this.setState({
      value: remove
    });
  };

  //edit function to edit todo item
  edit = (value, id) => {
    this.setState(
      {
        isEdit: true,
        editValue: value,
        editId: id
      },
      () => console.log(id, value)
    );
  };

  //update function after edit to update item
  update = () => {
    let value = this.state.value;
    const item = value.filter(ele =>
      ele.id === this.state.editId
        ? (ele.value = this.state.editValue)
        : ele.value
    );
    console.log("item",item);
    this.setState({ value: item, isEdit: false }, () => {
      console.log(this.state.value);
    });
  };

  render() {
    const { isEdit } = this.state;

    if (!isEdit) {
      return (
        <>Class Todo App :
          <div>
            <div>
              <label>
                <input
                  value={this.state.name.value}
                  onChange={this.handleChange}
                  placeholder="add your todo.."
                />
              </label>

              <button onClick={this.submit}>Add todo</button>
            </div>
          </div>

          <div >
            {this.state.value &&
              this.state.value.map((ele, index) => (
                <div key={ele.id} >
                  <span>{ele.value}</span>
                  <button onClick={e => this.edit(ele.value, ele.id)}>edit</button>
                  <button onClick={() => this.remove(ele.id)}>remove</button>
                </div>
              ))}
          </div>
        </>
      );
    } else {
      return (
        <div>
          <div>Edit todo</div>
          <input
            value={this.state.editValue}
            onChange={e => {this.setState({ editValue: e.target.value })}}
          />
          <button  onClick={this.update}>update</button>
          <button onClick={() => {this.setState({ isEdit: false })}}>cancel</button>
        </div>
      );
    }
  }
}
