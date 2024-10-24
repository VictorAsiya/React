// import React from "react";
// import * as SC from '../style'
// import {Link, link} from 'react-router-dom'

// function PageNotFound(){
//   return(
//     <SC.MainContainer>
//       <div>
//         <div>Sorry!!! You are Lost</div>
//         <div>Return back to <Link to={"/"}>Homepage</Link></div>
//       </div>
//     </SC.MainContainer>
//   )
// }
// export default PageNotFound


// ---Trial
// import React from "react";
// import { Link, link } from "react-router-dom";

// export default function(){
//   return(
//     <div>
//       An error occured
//       click to retun to <Link to={'/'}>Homepage</Link>
//     </div>
//   )
// }


// ---TRIAL
import React from "react";
import * as SC from '../style'
import { Link } from "react-router-dom";

export default function(){
  return(
    <SC.b>
      <SC.c>
        Error 404
        Click to return to <Link to={'/'}>HomePage</Link>
      </SC.c>
    </SC.b>
  )
}