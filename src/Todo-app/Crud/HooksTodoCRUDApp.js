import { useState } from "react";

function HooksTodoApp2() {
  const [todoStr, setTodoStr] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue,setEditValue] = useState("");
  const [editId,setEditId] = useState("")

  const handleChangeInput = (e) => {
    setTodoStr(e.target.value);
  };
  const addTodo = () => {
    let newArr = todoArr.slice();
    newArr.push(todoStr);
    setTodoArr(newArr);
    setTodoStr("");
  };
  const deleteTodoStr = (i) => {
    console.log(i);
    let newArr = todoArr.slice();
    newArr.splice(i, 1);
    setTodoArr(newArr);
  };
  const editBtn = (value,index) => {
    console.log(index,value);
    setIsEditing(true);
    setEditValue(value)
    setEditId(index);
  }
  const update = (i) => {
    console.log(i);
    let value=todoArr;
    console.log("editValue is ",editValue);
    console.log("editId is ",editId);
    const item= value.map((ele,index)=>{
        console.log(ele);
        console.log("index is ",index);
       return (
         (index===editId)?(ele=editValue):ele
       )
    })
    console.log("item",item);
    setTodoArr(item);
    setIsEditing(false);
  }
  if(!isEditing){
    return (
        <div>
          HooksTodoApp
          <input
            type="text"
            placeholder="Enter Title"
            value={todoStr}
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
          
          <button onClick={() => { addTodo()}}>Add</button>
          {todoArr.length === 0 ? ("You add nothing dear") : 
            <ul>
              {todoArr.map((element, index) => {
                return (
                  <li key={index}>
                    {element}
                    <button onClick={()=>editBtn(element,index)}>Edit</button>
                    <button onClick={(index) => {deleteTodoStr(index)}}>Delete</button>
                  </li>
                );
              })}
            </ul>
          }
        </div>
      );
  }
  else {
    return(
        <div>
            Edit Todo:
            <input type="text" value={editValue} onChange={(e)=>setEditValue(e.target.value)}/>
            <button onClick={()=>update()}>Update</button>
            <button onClick={()=>setIsEditing(false)}>Cancel</button>
        </div>
    )
  }
}

export default HooksTodoApp2;
