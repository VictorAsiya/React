// import React, {useReducer} from 'react'

// function CounterManager() {
//   const normal = 0;
//   const path = (key, value) =>{

//     switch(value.type){
//       case 'Increase':
//       key = key + 1
//       return key

//       case 'Reduce':
//       key = key - 1
//       if(key <= 0){
//         alert("Too Low!!!")
//         key = 0

//       }
//       return key
//     }
//   }

//   const [key, rider] = useReducer(path, normal)
//   console.log(key, 'coming from the key')

//   return (
//     <div>
//       <button onClick={()=> rider({type: "Increase"})}>Increase</button>
//       <span>{key}</span>
//       <button onClick={()=> rider({type: "Reduce"})}>Decrease</button>
//     </div>
//   )
// }

// export default CounterManager

// THIS IS A TRIAL ON 16th October

import React, { useState, useReducer} from "react";
import * as SC from "../style";

function Modal({ close }) {
  const [inputState, setInputState] = useState({});

  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.8)",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SC.NewDiv>
        <h1>Enter Monthly Income</h1>
        <SC.CloseButton onClick={() => close(false)}>X</SC.CloseButton>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <SC.InputBox
            style={{ width: "60%", height: "8vh" }}
            type="number"
            onChange={(evt) =>
              setInputState((prev) => ({...prev, value: (evt.target.value)}))
            }
          />
          <SC.SubmitButton
            style={{ width: "20%", height: "8vh" }}
            onClick={() => console.log(inputState.value)}
          >
            Submit
          </SC.SubmitButton>
        </div>
      </SC.NewDiv>
    </div>
  );
}

function Home() {
  const [show, setShow] = useState();

  return (
    <SC.Main>
      {show && <Modal close={() => setShow()}  />}
      <SC.Holder>
        <SC.Contents style={{ gap: "30px", height: "26vh" }}>
          <SC.IncomeBox>
            <SC.IncomeButton onClick={() => setShow(true)}>+</SC.IncomeButton>

            <SC.IncomeContain>
              <h1>Income</h1>
              <h3>$200,000</h3>
            </SC.IncomeContain>
          </SC.IncomeBox>

          <SC.ExpenditureBox>
            <SC.IncomeContain>
              <h1>Expenditure</h1>
              <h3>-$100,000</h3>
            </SC.IncomeContain>
          </SC.ExpenditureBox>
        </SC.Contents>

        <SC.Contents
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "fit-content",
          }}
        >
          <SC.InputBox />
          <SC.Select>
            {" "}
            <option>Selector</option>
            <option>+</option>
            <option>-</option>
          </SC.Select>
          <SC.SubmitButton>Submit</SC.SubmitButton>
        </SC.Contents>

        <SC.Contents>
          <SC.table>
            <tr>
              <th>Details</th>
              <th>Operation</th>
              <th>Amount</th>
            </tr>

            <tr>
              <td>Transport</td>
              <td>Income</td>
              <td>$67</td>
            </tr>

            <tr>
              <td>Bag of Semo</td>
              <td>Expenditure</td>
              <td>$200</td>
            </tr>
          </SC.table>
        </SC.Contents>
      </SC.Holder>
    </SC.Main>
  );
}

export default Home;
