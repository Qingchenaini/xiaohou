import React, { useState, useEffect } from 'react';
import ArticleCard from '../components/articliecard';
import { getPost } from '../../api/post';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { loginApi, registerApi } from '../../api/user';


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
const post = await getPost({});
// const register = await registerApi({ username: 'chen', password: '291291208' })
// console.log(register)
// 主页所有文章,分页查询,当数据更新时不会发生改变（短轮询解决）
// const test = await Test();
// console.log('test:', test)






const ArticleAll = () => {
    const [p, setP] = useState<postParam>(post)
    useEffect(() => {
        async () => {
            const post = await getPost({});
            setP(post)
        }
    }, [])

    //获取数据并设置
    const fetchData = async () => {
        const post = await getPost({});
        setP(post);
        // console.log('挂载', post)
    }

    //1h秒轮一次
    const pollForUpdates = () => {
        fetchData(); // 立即获取数据
        setTimeout(pollForUpdates, 360000);
    };

    //组件挂载就开始轮询
    useEffect(() => {
        pollForUpdates();
    }, [])


    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        console.log(current, pageSize);
    };

    const onChangeSize = async (value) => {
        const post = await getPost({ page: value });
        console.log('change', post)
        setP(post)
    }
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
                total={p.pagination.total}
                onChange={onChangeSize}
            />
        </div>

    )
}
export default ArticleAll