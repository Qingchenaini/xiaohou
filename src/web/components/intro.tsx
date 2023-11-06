import { Avatar } from "antd";
import React from "react";
import { GithubOutlined, QqCircleFilled } from '@ant-design/icons';
import './intro.scss'

const Intro: React.FC = () => {
    return (
        <div className="intro">
            <Avatar size={128} src='https://pic.imgdb.cn/item/6544b2f6c458853aefea4276.png'></Avatar>
            <span className='autor'></span>
            <div className="verse">
                静坐于万花筒，在绚烂中寻找那唯一的本源
            </div>
            <div className="website">
                <a href="#"><GithubOutlined style={{ fontSize: 33 }} /></a>
                <a href="#"><QqCircleFilled style={{ fontSize: 33 }} /></a>
                <a href="#"><QqCircleFilled style={{ fontSize: 33 }} /></a>
                <a href="#"><QqCircleFilled style={{ fontSize: 33 }} /></a>
            </div>
        </div>
    )
}
export default Intro

