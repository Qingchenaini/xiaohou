import React, { useEffect } from "react"
import './articlecard.scss'
import { NavLink, Route, Router, Routes } from "react-router-dom"
import './articleall.scss'

// 文章组件

interface Post {
    content: string,
    createdAt: Date,
    viewCount: number,
    comment: number,
    id: number
}

const ArticleCard: React.FC<{ post: Post }> = ({ post }) => {

    return (

        <NavLink to={`/article?id=${post.id}`} className='navlink'>
            <div className="card">
                <div className="article">{post.content}</div>
                <div className="data">
                    <div className="date">{post.createdAt}</div>
                    <div className="reading">
                        <span>阅读:{post.viewCount}</span>
                        <span>评论:{post.comment}</span>
                    </div>
                </div>
            </div>
        </NavLink>

    )
}
export default ArticleCard