import './App.css';
import StopWatchRef from './Stop-watch/watchType1';
import StopWatch from './Stop-watch/watchType2';
import Stopwatch3 from './Stop-watch/watchType3';

import ToDoApp1 from './Todo-app/UsingArray/ToDoApp1';
import HooksTodoApp from './Todo-app/HooksTodoApp'
import HooksTodoApp2 from './Todo-app/Crud/HooksTodoCRUDApp'
import ToDoArray from './Todo-app/UsingArray/ToDoArray';
import ToDoObject from './Todo-app/UsingObject/ToDoObject';
import ToDo from './Todo-app/Crud/ClassTodoCRUDApp';
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      {/* <ParentStopWatch/> */}
      {/* <Stopwatch3/>
      <hr/>
      <StopWatch/>
      <hr />
      <StopWatchRef/> */}
      <hr />
      {/* <ToDoApp1/> */}
      <hr/>
      {/* <HooksTodoApp2/> */}
      <hr/>
      {/* <ToDoArray/> */}
      <hr />
      {/* <ToDoObject/> */}
      <hr/>
      {/* <ToDo/> */}
      <hr/>
      <SearchBar/>
    </div>
  );
}

export default App;
