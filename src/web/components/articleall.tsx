import React from 'react';
import ArticleCard from '../components/articliecard';
import { getPost, addPostOne, deletePostOne, updatePost } from '../../api/post';

const post = await getPost();

// 主页所有文章
const ArticleAll = () => {

    // const addpost = updatePost(7, { title: '7', content: '7更改' });
    // console.log(addpost)
    return (
        <div className='article'>
            {post.map((p) => {
                return <ArticleCard post={p} key={p.id} />
            })}
        </div>
    )
}
export default ArticleAll