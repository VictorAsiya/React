import React from 'react'
import Button from './Button';

export default function Card(props) {
  // console.log(props);
  const {name} = props
  const {age} = props
  
  return (
    <div className='flex flex-col   w-[400px] border-2 p-2 border-gray-400  '>
       <h1>{name} = {age}</h1>
       
       <p>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ad atque doloremque molestiae! Tempora perferendis iste quis nemo, eos harum ullam in. Dolorem quibusdam eum temporibus aperiam porro corrupti a.
       </p>
       <Button title="login"></Button>
    </div>
  )
}


// ---TRIAL
// import React from 'react'

// function Card(props) {

//   const {name} = props;
//   const {num} = props;

//   return (
//     <div>
//       <div style={{display: 'flex', gap: '2vh'}}>
//       <h1>{name} =</h1>
//       <p>{num}</p>
//       </div>
//       <p>
//         Lorem ipdihi fhuhu dhubjbfd uudufb <br/> jbhd uis ufbjbjf hjbjd huyhbx bjxnsduuh jhbx
//       </p>
//     </div>
//   )
// }

// export default Card
