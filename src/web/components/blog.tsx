import React from "react"
import { getBookByQuery } from '../../api/book'
import { Query } from "@midwayjs/hooks";
import { getUser } from "../../api/user";

const id = '1';
const response = await getBookByQuery({ query: { id } });
const user = await getUser();
const Blog = () => {
  return (
    <div>
      {/* {response.title}
      {user.name} */}
      Blog界面
    </div>
  )
}
export default Blog