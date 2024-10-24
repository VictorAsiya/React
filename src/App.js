// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// DAY ONE
// import React, {useState} from 'react'
// import './App.css';

// export default function App(){
//   const [ value , setValue] = useState(10)

//   const addValue = ()=>{
//     if(value >= 30){
//       window.alert("too high");
//       return;
//     }
//     setValue(value + 1)
//   }

//   const reduceValue = ()=>{
//     if(value <= 10){
//       window.alert("too low");
//       return;
//     }
//     setValue(value - 1)
//   }

//   return(
//     // <div>Welcome to React</div>
//     <div>
//       <button onClick={()=> addValue()} style={{width: "10%", height: 30,}}>+</button>
//       <span>
//         {value}
//       </span>
//       <button onClick={()=> reduceValue()} style={{width: "10%", height: 30,}}>-</button>
//     </div>
//   )
// }

// MY TRIAL

// import React, { useState } from 'react'

// export default function App(){

//   const [value, def] = useState(10)

//   const increase = ()=>{
//     if(value >=20){
//       window.alert("Too High")
//       return;
//     }
//     def(value + 1)
//   }

//   const decrease = ()=>{
//     if(value <=20){
//       alert("Too Low")
//       return;
//     }
//     def(value - 1)
//   }

//   return(
//     <div>
//       <button onClick={()=> increase()}>+</button>
//       <span>{value}</span>
//       <button onClick={()=> decrease()}>-</button>
//     </div>
//   )
// }

// import React, {useState} from 'react'

// export default function App(){

//   const [value , def] = useState(0)

//   const increase = ()=>{
//     def(value + 1)
//   }

//   const decrease = ()=>{
//     def(value - 1)
//   }

//   return(
//     <div>
//       <button onClick={()=> increase()}>+</button>
//       <span>{value}</span>
//       <button onClick={()=> decrease()}>-</button>

//     </div>
//   )
// }

// DAY TWO

// ----A
// import React from "react"
// import * as SC from './style.js'

// export default function App(){

//   return(
//     <SC.MainContainer>
//       <SC.Card>
//       <SC.CardHeader>
//         To-do List
//       </SC.CardHeader>
//       </SC.Card>
//     </SC.MainContainer>
//   )
// }

// ----B
// import React from 'react'
// import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import PageNotFound from './pages/404'

// function App() {
//   return (
//     <Router>
//       <Routes>

//         <Route path='/' element = {<Home />}  />
//         <Route path='/about' element = {<About />}  />
//         <Route path='*' element = {<PageNotFound />}  />

//       </Routes>
//     </Router>
//   )
// }

// export default App

// Trial
// ----A
// import React from "react";
// import * as SC from './style'

// export default function(){
//   return(
//     <SC.a>
//       <SC.b>
//         <SC.c>
//           Hello There
//         </SC.c>
//       </SC.b>
//     </SC.a>
//   )
// }

// ----B
// import React from "react";
// import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About'
// import PageNotFound from "./pages/404";

// export default function App(){
//   return(
//     <Routers>
//       <Routes>
//         <Route path="/" element = {<Home />} />
//         <Route path="/about" element = {<About />} />
//         <Route path="*" element = {<PageNotFound />} />
//       </Routes>
//     </Routers>
//   )
// }

// ----C
// import React from "react";
// import * as SC from './style'
// import Home from './pages/Home'
// import About from './pages/About'
// import PageNotFound from './pages/404'
// import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

// export default function(){
//   return(
//     <Routers>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element = {<About />} />
//         {/* <Route>
//           <Home />
//         </Route> */}
//         <Route path="*" element = {<PageNotFound />} />
//       </Routes>
//     </Routers>
//   )
// }

// ---9th October
// FIRSTCLASS

// import React from "react";
// import Button from "./FirstClass/Button";
// import Card from "./FirstClass/Card";
// import Section from "./FirstClass/Section";

// export default function App(props) {
//   return (
//     <div className="h-screen w-full items-center justify-center flex flex-col gap-3">
//       {/* <Button title="read me"></Button> */}

//       <Card age={34} name="victor" />
//       <Card age="40" name="chiamaka" />

//       <Button title="Submit"></Button>

//       <h1 className="text-red-400">Hey</h1>

//       {/* <Section>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore
//           quia fugiat velit, voluptates possimus hic similique delectus?
//         </p>
//       </Section>

//       <Section>
//         <h1>Hello world</h1>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, minu
//         </p>
//       </Section> */}
//     </div>
//   );
// }


// ---TRIAL
// import React from 'react'
// import Card from './FirstClass/Card'

// function App(probs) {
//   return (
//     <div style={{display: 'grid', gap: "5vh"}}>
//       <Card name = 'Victor' num = {25}/>

//       <Card name = "Agape" num = "08147563722"/>
//     </div>
//   )
// }

// export default App



// ---10th October

import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/404'
import Todo from "./pages/Todo";
import CounterManager from "./pages/CounterManager";
import Login from "./pages/onboarding/Login";
import Signup from "./pages/onboarding/Signup";
import MainPost from "./pages/post"
import Postdetails from "./pages/post/Postdetails";
import Protection from "./middleware/protection";
import * as SC from './style'
import Project from "./pages/Project";

export default function(){
  return(
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/todo" element = {<Todo />} />
        <Route path="/Count" element = {<CounterManager />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/signup" element = {<Signup />} />
        <Route path = "/Project" element= {<Project/>}/>
 
        <Route element = {<Protection />}>
          <Route path="/post" element = {<MainPost />} />
          <Route path="/post/:id" element = {<Postdetails />} />
        </Route>

        <Route path="*" element = {<PageNotFound />} />
        {/* <Route>
          <Home />
        </Route> */}
      </Routes>
    </Routers>
  )
}