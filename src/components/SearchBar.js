import { React, useState } from "react";
import List from "./List";

function SearchBar() {
  const [inputText, setInputText] = useState("");
  
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <input
          onChange={inputHandler}
          placeholder="Search"
        />
      </div>
      <List input={inputText}/>
    </div>
  );
}

export default SearchBar;