import './siderCard.scss'
import {Avatar} from 'antd'
import { GithubOutlined,QqCircleFilled ,NotificationOutlined,SendOutlined} from '@ant-design/icons';
import React from 'react';

const SiderCard=()=>{
  return (
    <div className="siderCard">
     <div className="intro">
        <Avatar size={128}></Avatar>
        <span className='autor'></span>
        <div className="verse">
        静坐于万花筒，在绚烂中寻找那唯一的本源
        </div>
        <div className="website">
         <a href="#"><GithubOutlined style={{fontSize:33}}/></a> 
         <a href="#"><QqCircleFilled style={{fontSize:33}}/></a> 
         <a href="#"><QqCircleFilled style={{fontSize:33}}/></a> 
         <a href="#"><QqCircleFilled style={{fontSize:33}}/></a> 
        </div>
     </div>
     <div className="notice">
      <span className="noticetitle"><NotificationOutlined /> 公告</span>
      <p>
      以内容为核心，我打算把这个作为小猴Blog今后的发展理念。所以我打算慢慢删除花里胡哨的UI部分，突出内容与功能
      </p>
     </div>
     <div className="webdata">
      <span><SendOutlined /> 网站数据</span>
      <div className="data">
        <span>本站运行时间 :        6</span>
        <span>本站访问量 :          27</span>
        <span>本站总访客 :           6</span>
      </div>
     </div>
    </div>
  )
  }
  export default SiderCard