import React from "react"
import hello from '../../api/hello'

const response=await hello('chenjianfeng');
const Blog =()=>{
  return(
    <div>
   {response}
    </div>
  )
  }
export default Blog