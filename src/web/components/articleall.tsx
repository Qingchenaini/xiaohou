import React from 'react';
import ArticleCard from '../components/articliecard';
import { getPost } from '../../api/user';

const post = await getPost();

// 主页所有文章
const ArticleAll = () => {

    return (
        <div className='article'>
            {post.map((p) => {
                return <ArticleCard post={p} key={p.id} />
            })}
        </div>
    )
}
export default ArticleAll