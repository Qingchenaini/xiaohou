import { GlobalOutlined, MehTwoTone, SmileTwoTone, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Space } from 'antd';
import React from "react";
import { NavLink } from "react-router-dom";
import DRAWER from "../components/drawer";
import './header.scss';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <NavLink to={'/publish'}>
        发布文章
      </NavLink>
    ),
  },
];

const Header = () => {



  return (
    // <Router>
    <header className="header">
      <NavLink to={'/'} className="webName">小猴</NavLink>
      <div className="nav">
        <div className="navlink">
          <NavLink to={'/Blog'}><MehTwoTone /> 博客</NavLink>
          <NavLink to={'/Blog'}><SmileTwoTone /> 说说</NavLink>
          <NavLink to={'/Blog'}><GlobalOutlined /> 娱乐</NavLink>
          <Dropdown menu={{ items }} placement="bottom">
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <GlobalOutlined /> 暂定
              </Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items }} placement="bottom">
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <GlobalOutlined /> 其他
              </Space>
            </a>
          </Dropdown>


        </div>
        <div className="h-avatar">
          <DRAWER />
          <NavLink to={'/Login'}>
            {/* 改成登录才有头像 */}
            <Avatar size="default" icon={<UserOutlined />} className="avatar" src='https://pic.imgdb.cn/item/6544b2f6c458853aefea4276.png' />
          </NavLink>
        </div>
      </div>
    </header>

  )
}
export default Header