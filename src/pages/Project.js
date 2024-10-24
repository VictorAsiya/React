import React, {useState} from 'react'

function Project() {
  const title = "Todo List"
  const [show, setShow] = useState(true)
  const [userInput, setUserInput] = useState("")
  const [textLength, setTextLength] = useState()
  const [database, setDatabase] = useState([])
    console.log(textLength, "show text length")
    const addToDB = ()=>{
      setDatabase((prev)=>[...prev, userInput])
      console.log(database)
      
    }
  
  return (
    <div>
      <div>
        {show? title: "Form is Closed"}
        {show && <input value={userInput} onChange={(e)=> setUserInput(e.target.value)} />}
        {false && <span>Word Length: {textLength.length}</span>}

        <button onClick={()=>addToDB()}>add Content</button>
      </div>
    </div>
  )
}

export default Project
