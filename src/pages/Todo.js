// import React, { useReducer } from 'react'
// import { type } from "@testing-library/user-event/dist/type";
// import * as SC from "../style";

// function Todo() {
//   const initialValue = [];
//   let id = 0;
//   const controlReducer = (state, action)=>{
    
//     switch (action.type){

//       case "SEND":
//       state.push(action.payload);
//       return Array.from(new Set(state));

//       case "FILTER":
//       break;
//       default: return state;
//     }
//   }
//   const [state, dispatch] = useReducer(controlReducer, initialValue)
//   // console.log(state, "Coming from the State")

//   return (
//     <SC.a>
//       <SC.aa>
//         <SC.aaa>Todo List</SC.aaa>
//         <div>
//           <div style={{display: "flex"}}>
//             <SC.input />
//             <button onClick={()=>dispatch({type: "SEND", payload: {id:Math.random(), name: "Mike"}})}>Submit</button>
//           </div>

//           <div style={{width: "100%", minHeight: "200px", overflow: "scroll"}}>
//             {
//               state.map((item, index)=>{
//                 return(
//                   <ul key={index}>
//                     <li style={{fontSize:15}}>{JSON.stringify(item)}</li>
//                   </ul>
//                 )
//               })
//             }
//           </div>
//         </div>
//       </SC.aa>
//     </SC.a>
//   )
// }

// export default Todo



// ---TRIAL

import React, { useReducer } from "react";
import { type } from "@testing-library/user-event/dist/type";
import * as SC from "../style";

function Todo() {
  const initialValue = [];
  const id = 0;

  const controlReducer = (state, action) => {

    switch (action.type) {

      case "SEND":
        state.push(action.payload);
        return Array.from(new Set(state));

      case "FILTER":
      break;
      default: return state;
      
    }
  };

  const [state, dispatch] = useReducer(controlReducer, initialValue);
  // console.log(state, "this is the state");

  return (
    <div>
      <SC.input style={{ border: "2px solid black" }} />
      <button
        onClick={() =>
          dispatch({
            type: "SEND",
            payload: { id: Math.random(), name: "Mike" },
          })
        }
      >
        Submit
      </button>

      <div>
        {state.map((item, index) => {
          return (
            <ul key={index}>
              <li>{JSON.stringify(item)}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
