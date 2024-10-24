// import styled from 'styled-components'

// export const MainContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* background-color: brown; */
//   `
// export const Card = styled.div`
//   width: 50%;
//   min-height: 300px;
//   border: 0 2px solid silver;
//   border-radius: 5px;
//   /* background-color: aquamarine; */
// `
// export const CardHeader = styled.div`
//   width: 100%;
//   height: 50px;
//   font-size: 24px;
//   font-weight: bold;
//   display: flex;
//   justify-content: center;
//   border-bottom: 0.2px solid silver;
//   padding-top: 5px;
//   align-items:center ;
//   background-color: silver;
//   font-family: sans-serif;
// `

// Trial
// import styled from 'styled-components'

// export const a = styled.div`
//   height: 100vh;
//   width: 100%;
//   background-color: aqua;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// export const b = styled.div`
//   min-height: 40vh;
//   min-width: 70%;
//   background-color: black;
//   display: grid;
//   justify-content: center;
// `

// export const c = styled.h1`
//   color: white;
//   font-weight: 900;
//   font-size: 5vh;
//   font-family: cursive;
// `

// ---TRIAL
import styled from "styled-components";

export const a = styled.div`
  height: 100vh;
  width: 100%;
  /* background-color: orange; */
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const aaa = styled.h1`
  font-weight: 900;
  color: black;
  font-size: 4vh;
  font-family: cursive;
  /* background-color: blueviolet; */
  text-align: center;
`;
export const aa = styled.div`
  height: 50%;
  width: 100%;
  background-color: cadetblue;
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 5vh 5vh;
  overflow-y: hidden;
  /* padding-top: 5vh; */
`;
export const ab = styled.h1`
  font-weight: 900;
  color: white;
  font-size: 4vh;
  font-family: cursive;
`;
export const b = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
export const c = styled.h1`
  font-weight: 900;
  color: white;
  font-size: 4vh;
  font-family: cursive;
`;

export const d = styled.div`
  height: fit-content;
  width: 70%;
  background-color: silver;
  display: flex;
  justify-content: center;
  padding-left: 3vh;
  padding-bottom: 3vh;
`;
export const input = styled.input`
  /* margin-top: 5vh; */
  width: 75vh;
  height: 5vh;
  border: 2px solid black;
  background-color: white;
  padding: 4px 8px;
`;

// export const btn = styled.button`

// `

export const ContainerHolderBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

export const Button = styled.button`
  width: auto;
  border: 0.2px solid silver;
  height: 3rem;
  border-radius: 5px;
  padding: 0px 10px;
  font-size: 15px;
  font-family: sans-serif;
  border: none;
  background-color: #000000;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: sans-serif;
  margin-top: 12px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background-color: white;
    border: 0.3px solid #000000;
    color: #000000;
    transition: all 0.2s linear;
  }
`;

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: chartreuse; */
`;

export const Holder = styled.div`
  height: 85%;
  width: 35%;
  /* background-color: chocolate; */
  border-radius: 3vh;
  border: 2px solid black;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 10px;
`;

export const Contents = styled.div`
  width: 90%;
  height: 30vh;
  /* background-color: aquamarine; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IncomeBox = styled.div`
  width: 40%;
  height: 80%;
  /* background-color: black; */
  border: 2px solid chocolate;
  border-radius: 1.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vh;
`;

export const ExpenditureBox = styled.div`
  width: 40%;
  height: 80%;
  /* background-color: black; */
  border: 2px solid chocolate;
  border-radius: 1.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IncomeButton = styled.button`
  /* position: absolute; */
  height: 8vh;
  font-size: 20px;
  font-weight: 500;
  width: fit-content;
  /* border: 2px solid chocolate; */
  padding: 0 2vh;
  border-radius: 1vh;
  background-color: black;
  color: white;
`;

export const IncomeContain = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 3vh;
`;

export const InputBox = styled.input`
  height: 7vh;
  width: 35vh;
  padding: 0 5px;
  border-radius: 1vh;
  border: 1px solid silver;
  outline: none;
  &:hover {
    border: 2px solid chocolate;
  }
`;

export const Select = styled.select`
  height: 7vh;
  width: fit-content;
  padding: 0 2vh;
  border-radius: 1vh;
  border: 1px solid silver;
`;

export const SubmitButton = styled.button`
  height: 7vh;
  width: fit-content;
  /* border: 2px solid chocolate; */
  padding: 0 2vh;
  border-radius: 1vh;
  background-color: black;
  background-color: rgba(0 0 0 0.4);
  color: white;
  &:hover {
    background-color: chocolate;
    color: #000000;
    transition: all 0.2s linear;
    font-weight: 500;
  }
`;

export const table = styled.table`
  text-align: left;
  width: 80%;
`;

export const ModalContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Check Home line 487 */
  /* background-color: ${(props) => props.backgroundColor} ; */
`;

export const NewDiv = styled.div`
  height: 30vh;
  width: 30%;
  background-color: cadetblue;
  border-radius: 2vh;
  display: grid;
  align-items: center;
  gap: 2vh;
`;

export const CloseButton = styled.button`
  padding: 0px 10px;
  background-color: rgba(295, 0, 0, 0.7);
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: -20vh 0 0 25%;
  border-radius: 2px;
`;

// 18th October
export const MainContainer = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  //    background-color:gray;
  // align-items: center;
`;

export const Card = styled.div`
  width: 50%;
  min-height: 50%;
  border: 0.2px solid silver;
  border-radius: 5px;
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  border-bottom: 0.2px solid silver;
  padding-top: 5px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.04);
  font-family: sans-serif;
  letter-spacing: 1px;
`;

export const CardBody = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 0.5rem;
  padding: 0.5rem 0.6rem;
`;

export const CardInput = styled.input`
  width: calc(70% - ${(props) => props.widthVariant});
  margin: 3px auto;
  height: 1.8rem;
  border: none;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  padding: 2px 10px;
  font-size: 14;
  font-weight: bold;
  letter-spacing: 1.5px;

  &:focus {
    outline: 0px;
  }
`;

/* export const Button = styled.button`
  width:auto;
  border:0.2px solid silver;
  height:2.3rem;
  border-radius:5px;
  padding:0px 10px;
  font-size:15px;
  font-family:sans-serif;
  border:none;
  background-color:#000000;
  color:#ffffff;
  font-size:14px;
  font-weight:bold;
  letter-spacing:2px;
  font-family:sans-serif;
  // margin-top:12px;
  cursor:pointer;
  transition:all 0.2s linear;
  &:hover{
      background-color:white;
      border:0.3px solid #000000;
      color:#000000;
      transition:all 0.2s linear;

  }

` */

/* export const ContainerHolderBody = styled.div`  
   display:flex;
   justify-content:center;
   align-items:center;
   flex:1;
   flex-direction:column;
   position:relative;


` */

export const PanelMain = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border: 0.1rem solid silver;
  width: 40%;
  min-height: 300px;
`;

export const SmallPanel = styled.div`
  padding-top: 4px;
  width: 30%;
  min-height: 75px !important;
  border: 0.5px solid blue;
  border-radius: 5px;
  position: relative;
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: sans-serif;
  text-align: center;
  width: 100%;
`;

export const FloatingBtn = styled.button`
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 5px;
  border: 0.5px solid silver;
  top: 3px;
  left: 1px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    background-color: blue;
    transition: all 0.5s linear;
    color: #ffffff;
  }
`;

// export const ModalContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.8);
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   position: absolute;
//   z-index: 30;
//   top: 0;
//   left: 0;
//   transition: all 0.5s linear;
// `;

export const ModalPanel = styled.div`
  width: 30%;
  min-height: 100px;
  background: #ffffff;
  margin-top: 80px !important;
  border-radius: 5px;
  position: relative;
`;

export const HeaderSmall = styled.div`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: sans-serif;
  text-align: center;
  width: 100%;
`;

export const CloseBtn = styled.div`
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 50px;
  border: 0.5px solid red;
  color: red;
  top: 3px;
  rignt: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s linear;
  font-size: 12px;
  font-weight: bold;
`;

// export const Select = styled.select`
//   height: 2.2rem;
//   width: 100px;
//   border: 0.2px solid silver;
//   font-size: 12px;
//   border-radius: 5px;
//   &:focus {
//     outline: 0px;
//   }
// `;
