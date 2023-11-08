import React, { useState, useEffect } from 'react';
import ArticleCard from '../components/articliecard';
import { getPost } from '../../api/post';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';



interface postParam {
    data: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        comment: number;
        published: boolean;
        viewCount: number;
        authorId: number;
    }[];
    pagination: {
        page: any;
        pageSize: any;
        total: number;
        totalPages: number;
    }
}



// 主页所有文章,分页查询
const ArticleAll = () => {
    const [p, setP] = useState<postParam>()
    useEffect(() => {
        async () => {
            const post = await getPost({});
            setP(post)
        }
    }, [])

    console.log(p)
    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        console.log(current, pageSize);
    };

    const onChangeSize = async (value) => {
        // console.log(value)
        const post = await getPost({ page: value });
        console.log('change', post)
        setP(post)
    }
    console.log('p', p)
    return (
        <div className='article'>
            {p.data.map((p) => {
                return <ArticleCard post={p} key={p.id} />
            })}
            <Pagination
                // showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={1}
                defaultPageSize={5}
                total={post.pagination.total}
                onChange={onChangeSize}
            />
        </div>

    )
}
export default ArticleAll