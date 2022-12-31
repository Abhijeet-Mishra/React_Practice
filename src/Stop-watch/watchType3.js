import React, { useReducer } from 'react'

const initialState={
    active:false,
    pause:true,
    time:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case "START":
            return{
                active:action.payload,
                pause:false,
                time: setInterval((time) => time + 10, 10)
            }
        case "STOP":
            return{
                active:false,
                pause:action.payload,
                time:""
            }
        case "RESET":
            return{
                active:false,
                pause:false,
                time:0
            }
        default :
            return state;
        
    }
}
function Stopwatch3() {
    const [watch,dispatch]=useReducer(reducer,initialState);
  return (
    <div>Google StopWatch :
          {watch.time}
          <button onClick={() => dispatch({type:"START",payload:true})}>Start</button>
        
          <button onClick={() => dispatch({type:"STOP",payload:true})}>Stop</button>
        
        <button onClick={() => dispatch({type:"RESET",payload:true})}>Reset</button>
    </div>
  )
}

export default Stopwatch3;