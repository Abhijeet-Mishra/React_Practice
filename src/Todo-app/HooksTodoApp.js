import { useState } from "react";

function HooksTodoApp() {
  const [todoStr, setTodoStr] = useState("");
  const [todoArr, setTodoArr] = useState([]);
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
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add
      </button>
      {todoArr.length === 0 ? (
        "You add nothing dear"
      ) : (
        <ul>
          {todoArr.map((element, index) => {
            return (
              <li key={index}>
                {element}{" "}
                <button
                  onClick={() => {
                    deleteTodoStr();
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default HooksTodoApp;
