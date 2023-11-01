import React from 'react';
import './content.scss'
import { Card} from 'antd';

const Content=()=>{
  return (
    <div className='content'>
      {/*
      根据数据库拉取的数据来生成,
      id决定文章数量
      字段分别为:
      title wordage(字数) date(时间) RCount(阅读数量) 评论功能暂时不加
      */}
        <Card title="Card title"  style={{boxShadow:'0 0 3px #000'}}>
          {/* 内容由后端决定 */}
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        {/* 分页,避免请求数据过大 */}
        {/* <Pagination defaultCurrent={1} total={50} /> */}
    </div>
  )
  }
  export default Content