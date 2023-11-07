import ArticleCard from "./articliecard"
import React, { useEffect, useState } from "react"
import { getPostOne } from "../../api/post";
import './articleone.scss'

//单篇文章组件
const ArticleOne = () => {
    const [post, setPost] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            const queryString = window.location.search;
            const searchParams = new URLSearchParams(queryString);
            const id = searchParams.get('id');
            console.log('id', id);

            const postData = await getPostOne({id:Number(id)});
            console.log('temp', postData);
            setPost(postData);
        };

        fetchData();
    }, []);

    return (
        <div className="articleone">
            {post && <ArticleCard post={post} />}
        </div>
    );
}
export default ArticleOne