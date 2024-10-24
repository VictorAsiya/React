import React, {} from "react";
import * as SC from "../../style"

function Container({children}){

  return(
    <SC.ContainerHolderBody>
      {children}
    </SC.ContainerHolderBody>
  )
}

export default Container