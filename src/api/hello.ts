import {
    Api,
    Post
  } from '@midwayjs/hooks';
  
  export default Api(
    Post(),
    async (name:string) => {
    return `hello${name}`;
    }
  );