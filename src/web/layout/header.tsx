import { Routes, Route, NavLink, Router } from "react-router-dom";
import Blog from "../components/blog";
import './header.scss';
import { Dropdown, Space, Avatar } from 'antd';
import { GlobalOutlined, UserOutlined, SmileTwoTone, MehTwoTone } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React from "react";
import DRAWER from "../components/drawer";
import Login from "../components/login";

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        关于
      </a>
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
            <Avatar size="default" icon={<UserOutlined />} className="avatar" src='https://pic.imgdb.cn/item/6544b2f6c458853aefea4276.png' />
          </NavLink>
        </div>
      </div>
    </header>

  )
}
export default Header