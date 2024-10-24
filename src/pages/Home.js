// // import React from 'react'

// const { useState, useRef } = require("react");

// const { useState, useRef } = require("react");

// // function Home() {
// //   return (
// //     <div>
// //       This is the Home Page
// //     </div>
// //   )
// // }

// // export default Home

// // ---TRIAL
// // import React from 'react'
// // import * as SC from '../style'

// // export default function(){
// //   return(
// //     <SC.a>
// //       <SC.aaa>
// //         This Is Home Page
// //       </SC.aaa>
// //     </SC.a>
// //   )
// // }

// // ---2nd October

// import React, { useState, useRef} from "react";
// import * as SC from "../style";
// // import { Form } from "react-router-dom";

// export default function () {
//   const vicas = useRef();
//   const age = useRef();
//   const pass = useRef();

//   const make = ()=>{
//     console.log(vicas.current.value, age.current.value, pass.current.value)
//   }
//   return (
//     <SC.a>
//       <SC.d>
//         <div>
//           {/* <form> */}
//             <label htmlFor="details">Name</label>
//             <SC.input id = 'details' ref={vicas}/>

//             <label htmlFor="Age">Age</label>
//             <SC.input id = 'Age' ref={age}/>

//             <label htmlFor="pass">Password</label>
//             <SC.input id = 'pass' ref={pass}/>

//             <button onClick={make}>
//               SUBMIT
//             </button>
//           {/* </form> */}
//         </div>
//       </SC.d>
//     </SC.a>
//   );
// }

// ---Trial

// import React, {useState, useRef} from "react";
// import * as SC from '../style'

// export default function(){

//   const email = useRef()

//   const Hello = ()=>{
//     console.log(email)
//   }

//   return(
//     <SC.a>
//       <SC.aa>
//         <SC.aaa>Login Details</SC.aaa>

//           <div>
//             <label htmlFor="email">Email</label>
//             <SC.input
//               id="email"
//               useRef = "email"
//             />

//             <button onClick={Hello}>Submit</button>
//           </div>
//       </SC.aa>
//     </SC.a>
//   )
// }

// ---TRIAL
// import React, {useState, useRef} from "react";
// import * as SC from '../style';

// export default function(){

//   const Name = useRef()
//   const Age = useRef()
//   const Password = useRef()

//   const event = ()=>{
//     console.log(Name.current.value, Age.current.value, Password.current.value)
//   }

//   return(
//     <SC.a>
//       <SC.aa>
//         <SC.aaa>Login Details</SC.aaa>

//         <div style={{display: 'grid', gap: '5px'}}>
//           <label htmlFor="name">Name</label>
//           <SC.input
//             id="name"
//             ref={Name}
//           />
//         </div>

//         <div style={{display: 'grid', gap: '5px'}}>
//           <label htmlFor="Age">Age</label>
//           <SC.input
//             id="Age"
//             ref={Age}
//           />
//         </div>

//         <div style={{display: 'grid', gap: '5px'}}>
//           <label htmlFor="Password">Password</label>
//           <SC.input
//             id="Password"
//             ref={Password}
//           />
//         </div>

//         <button style={{margin: "1vh 0vh", width:'30%', padding: '1vh 2vh'}} onClick={event}>
//           Submit
//         </button>

//       </SC.aa>
//     </SC.a>
//   )
// }

// import React, {useState} from "react";
// import * as SC from "../style";

// function Home() {
//   const [inputState, setInputState] = useState({email: "", password: "", confirmpassword: ""});
// console.log(inputState);

//   return (
//     <SC.a>
//       <SC.aa>
//         <SC.aaa>Login Form</SC.aaa>
//         <form>
//           <div style={{ padding: "10px" }}>
//             <div style={{marginBottom: "12px"}}>
//               <label style={{ marginBottom: "10px" }} htmlFor="email">
//                 Email
//               </label>
//               <SC.input id = "email" onChange={(evt)=>setInputState((prev)=>({...prev, email:(evt.target.value) }))} />
//             </div>

//             <div style={{marginBottom: 12}}>
//               <label style={{marginBottom: "10px"}} htmlFor="password">
//                 Password
//               </label>
//               <SC.input id="password" type="password" onChange={(evt)=> setInputState((prev)=>({...prev, password:(evt.target.value)}))} />
//             </div>

//             <div style={{marginBottom: 12}}>
//               <label style={{marginBottom: "10px"}} htmlFor="confirmpassword">
//                 Confirm Password
//               </label>
//               <SC.input id="confirmpassword" type="password" onChange={(evt)=> setInputState((prev)=>({...prev, cpassword:(evt.target.value)}))} />
//             </div>

//             <div style={{marginBottom : 12}}>
//               <button>
//                 SUBMIT
//               </button>
//             </div>

//           </div>
//         </form>
//       </SC.aa>
//     </SC.a>
//   );
// }
// export default Home();

// // -----
// import React, { useState } from "react";
// import * as SC from "../style";

// function Home() {
//   const [inputState, setInputState] = useState({email: "", password: "", confirmpassword: ""});
//   console.log(inputState);

//   return (
//     <SC.a>
//       <SC.aa>
//         <SC.aaa>Login Form</SC.aaa>
//         <form>
//           <div style={{ padding: "10px" }}>

//             <div style={{ marginBotton: "12px", display: 'grid'}}>
//               <label style={{ marginBotton: "10px" }} htmlFor="email">
//                 Email
//               </label>
//               <SC.input
//                 id="email"
//                 onChange={(evt) =>
//                   setInputState((prev) => ({...prev, email: (evt.target.value)}))
//                 }
//               />
//             </div>

//             <div style={{ marginBottom: 12, display: 'grid'}}>
//               <label style={{ marginBotton: "10px" }} htmlFor="password">
//                 Password
//               </label>
//               <SC.input
//                 id="password"
//                 type="password"
//                 onChange={(evt) =>
//                   setInputState((prev) => ({
//                     ...prev,
//                     password: (evt.target.value)
//                   }))
//                 }
//               />
//             </div>

//             <div style={{ marginBottom: 12, display: 'grid'}}>
//               <label style={{ marginBotton: "10px" }} htmlFor="confirmpassword">
//                 Confirm Password
//               </label>

//               <SC.input
//                 id="confirmpassword"
//                 type="password"
//                 onChange={(evt) =>
//                   setInputState((prev) => ({
//                     ...prev,
//                     confirmpassword: (evt.target.value)
//                   }))
//                 }
//               />

//             </div>

//             <div style={{ marginBottom: 12 }}>
//               <button>Submit</button>
//             </div>

//           </div>
//         </form>
//       </SC.aa>
//     </SC.a>
//   );
// }

// export default Home;

// ---TRIAL
// import React, { useState } from "react";
// import * as SC from "../style";

// export default function () {

//   const [input, InputKey] = useState({email: '', phoneNumber: '', password: ''})
//   console.log(input)

//   return (
//     <SC.a>
//       <SC.aa>
//         <SC.aaa>Login Page</SC.aaa>

//         <div style={{display: 'grid', gap: '5px'}}>
//           <label htmlFor="email">Email</label>
//           <SC.input
//             id="email"
//             onChange={(evt)=> InputKey((prev)=> ({...prev, email: (evt.target.value)}))}
//           />
//         </div>

//         <div style={{display: 'grid', gap: '5px'}}>
//           <label htmlFor="phoneNumber">PhoneNumber</label>
//           <SC.input
//             id="phoneNumber"
//             onChange={(evt)=> InputKey((prev)=> ({...prev, phoneNumber: (evt.target.value)}))}
//           />
//         </div>

//         <div style={{display: 'grid', gap: '5px'}}>
//           <label htmlFor="password">Password</label>
//           <SC.input
//             id="password"
//             type="password"
//             onChange={(evt)=> InputKey((prev)=> ({...prev, password: (evt.target.value)}))}
//           />

//         </div>

//       </SC.aa>
//     </SC.a>
//   );
// }



// 16th October
// Budget Tracker

// import React, { useState } from "react";
// import * as SC from "../style";


// function Modal({work}) {
//   return (
//     <SC.ModalContainer>

//       <SC.NewDiv>

//         <h1>Enter Monthly Income</h1>
//         <SC.CloseButton>
//           <button onClick={()=> work() }>X</button>
//         </SC.CloseButton>
//         <div style={{ display: "flex", justifyContent: "space-around" }}>
//           <SC.input
//             style={{ width: "60%", height: "8vh", border: "none" }}
//             />
//           <SC.SubmitButton style={{ width: "20%", height: "8vh" }}>
//             Submit
//           </SC.SubmitButton>
//         </div>

//       </SC.NewDiv>

//     </SC.ModalContainer>
//   );
// }

// function Home() {
//   const [show, setShow] = useState();
//   return (
//     // <Modal  />
//     <SC.Main>
//       {show && <Modal work={()=>setShow()}/>}
//       <SC.Holder>
//         <SC.Contents style={{ gap: "30px", height: "26vh" }}>
//           <SC.IncomeBox>
//             <SC.IncomeButton onClick={()=> setShow(true)}>+</SC.IncomeButton>

//             <SC.IncomeContain>
//               <h1>Income</h1>
//               <h3>$200,000</h3>
//             </SC.IncomeContain>
//           </SC.IncomeBox>

//           <SC.ExpenditureBox>
//             <SC.IncomeContain>
//               <h1>Expenditure</h1>
//               <h3>-$100,000</h3>
//             </SC.IncomeContain>
//           </SC.ExpenditureBox>
//         </SC.Contents>

//         <SC.Contents
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             height: "fit-content",
//           }}
//         >
//           <SC.InputBox />
//           <SC.Select>
//             {" "}
//             <option>Selector</option>
//             <option>+</option>
//             <option>-</option>
//           </SC.Select>
//           <SC.SubmitButton>Submit</SC.SubmitButton>
//         </SC.Contents>

//         <SC.Contents>
//           <SC.table>
//             <tr>
//               <th>Details</th>
//               <th>Operation</th>
//               <th>Amount</th>
//             </tr>

//             <tr>
//               <td>Transport</td>
//               <td>Income</td>
//               <td>$67</td>
//             </tr>

//             <tr>
//               <td>Bag of Semo</td>
//               <td>Expenditure</td>
//               <td>$200</td>
//             </tr>
//           </SC.table>

//         </SC.Contents>
//       </SC.Holder>
//     </SC.Main>
//   );
// }

// export default Home;



// Trial

// import React, { useState } from "react";
// import * as SC from "../style";


// function Modal({close}) {
//   return (
//     <div
//       style={{
//         textAlign: "center",
//         width: "100%",
//         height: "100vh",
//         backgroundColor: "rgba(0,0,0,0.8)",
//         position: "absolute",
//         top: 0,
//         left: 0,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >

//       <SC.NewDiv>

//         <h1>Enter Monthly Income</h1>
//         <SC.CloseButton onClick={()=> close(false) }>
//           X
//         </SC.CloseButton>
//         <div style={{ display: "flex", justifyContent: "space-around" }}>
//           <SC.InputBox
//             style={{ width: "60%", height: "8vh" }}
//             />
//           <SC.SubmitButton style={{ width: "20%", height: "8vh" }}>
//             Submit
//           </SC.SubmitButton>
//         </div>

//         {/* {hide && <Modal />} */}
//       </SC.NewDiv>
      
//     </div>
//   );
// }

// function Home() {
//   const [show, setShow] = useState();
// // const [input, InputKey] = useState({email: '', phoneNumber: '', password: ''})

//   return (
//     // <Modal  />
//     <SC.Main>
//       {show  && <Modal close={()=> setShow()} />}
//       <SC.Holder>
//         <SC.Contents style={{ gap: "30px", height: "26vh" }}>
//           <SC.IncomeBox>
//             <SC.IncomeButton onClick={() => setShow(true)}>+</SC.IncomeButton>

//             <SC.IncomeContain>
//               {/* check styled components line 291 */}
//             {/* <SC.IncomeContain backgroundColor = {'blue'}> */}

//               <h1>Income</h1>
//               <h3>$200,000</h3>
//             </SC.IncomeContain>
//           </SC.IncomeBox>

//           <SC.ExpenditureBox>
//             <SC.IncomeContain>
//               <h1>Expenditure</h1>
//               <h3>-$100,000</h3>
//             </SC.IncomeContain>
//           </SC.ExpenditureBox>
//         </SC.Contents>

//         <SC.Contents
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             height: "fit-content",
//           }}
//         >
//           <SC.InputBox />
//           <SC.Select>
//             {/* {" "} */}
//             <option>Selector</option>
//             <option>+</option>
//             <option>-</option>
//           </SC.Select>
//           <SC.SubmitButton>Submit</SC.SubmitButton>
//         </SC.Contents>

//         <SC.Contents>
//           <SC.table>
//             <tr>
//               <th>Details</th>
//               <th>Operation</th>
//               <th>Amount</th>
//             </tr>

//             <tr>
//               <td>Transport</td>
//               <td>Income</td>
//               <td>$67</td>
//             </tr>

//             <tr>
//               <td>Bag of Semo</td>
//               <td>Expenditure</td>
//               <td>$200</td>
//             </tr>
//           </SC.table>

//         </SC.Contents>
//       </SC.Holder>
//     </SC.Main>
//   );
// }

// export default Home;


// 18th October
import React, { useCallback, useState , useContext , useReducer } from "react";
import * as SC from "../style";
import Container from "../components/modules/Container";
import { contextProvider } from "../lib/mainContext";


function ModalHolder() {
  const    data    =   useContext(contextProvider)
  const [ initData , setInitData] = useState(0)

  const {setShowData , add } = data;
  return (
    <SC.ModalContainer>
      <SC.ModalPanel>
        <SC.CloseBtn onClick={() => setShowData(false)}>X</SC.CloseBtn>
        <SC.HeaderSmall style={{ marginTop: "10px" }}>
          Add Income
        </SC.HeaderSmall>
        <div style={{width:"100%" , display:"flex",justifyContent:'center',padding:"10px  0px"}}>
        <SC.CardInput  onChange={(e)=>setInitData(e.target.value)} type="number" style={{marginRight:"5px"}}  widthVariant={"600px !important"} />
        <SC.Button onClick={()=>add({type:"INCOME" , payload:initData})}>
          Action
        </SC.Button>

        </div>
      </SC.ModalPanel>
    </SC.ModalContainer>
  );
}

 
// const obj = [
//               {
//                 initValue:6000,
//                 data:{
//                   details:"i bought rice from mike today",
//                   op:"sub",
//                   amount:300,
//                   balance:5700
//                 }

//               },
//               {
//                 initValue:5700,
//                 data:{
//                   details:"i bought rice from mike today",
//                   op:"sub",
//                   amount:300,
//                   balance:5400
//                 }

//               }
            
//             ]


function Home() {
  const todoReducer = (state , action )=>{
    switch(action.type){
      case "INCOME":
           state.push({initValue: action.payload , data:{}})
          return  Array.from(new Set(state)) 

      default:
        return null
    }
}

  const [displaying, setDisplaying] = useState(false);

  const [returndata , dispatch ]   = useReducer(todoReducer,[])
    
  console.log(returndata)
  
  const showModal = useCallback(() => {
    setDisplaying(!displaying);
  }, [displaying]);

  return (
    <contextProvider.Provider value={{setShowData:setDisplaying, add:dispatch  }}>
    <div>
      {displaying && <ModalHolder />}
      <Container>
        <SC.PanelMain>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <SC.SmallPanel backgroundColor={"coral"}>
              <SC.Header>Income</SC.Header>
              <SC.FloatingBtn
                onClick={() => showModal()}
                backgroundColor={"green"}
              >
                +
              </SC.FloatingBtn>

              <SC.Header>
                    {
                      !!returndata.length  && returndata[returndata.length - 1]?.initValue 
                    }
              </SC.Header>
            </SC.SmallPanel>

            <SC.SmallPanel backgroundColor={"green"}>
              <SC.Header>Expenses</SC.Header>
            </SC.SmallPanel>
          </div>
          <div style={{display:"flex",height:"", justifyContent:"space-evenly", alignItems:"center",paddingTop:10}}>
            <SC.CardInput  widthVariant={"100px"} placeholder="Enter Details" />
            <SC.Select>
              <option>Select Operator</option>
              <option style={{fontSize:20,fontWeight:'bold'}}>-</option>
              <option style={{fontSize:20,fontWeight:'bold'}}>+</option>

            </SC.Select>
            <SC.Button>Add</SC.Button>
          </div>
        </SC.PanelMain>
      </Container>
    </div>
    </contextProvider.Provider>
  );
}

export default Home;
