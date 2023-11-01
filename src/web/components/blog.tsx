import React from "react"
import {getBookByQuery} from '../../api/book'
import { Query } from "@midwayjs/hooks";


const id= '1';
const response=await getBookByQuery({query:{id}});
const Blog =()=>{
  return(
    <div>
   {response.title}
    </div>
  )
  }
export default Blog