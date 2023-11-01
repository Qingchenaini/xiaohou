import { Routes, Route, NavLink } from "react-router-dom";
import Blog from "../components/blog";
import './header.scss';
import { Dropdown,Space,Avatar } from 'antd';
import { GlobalOutlined,UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React from "react";

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

const Header=()=>{



  return (
    <header className="header"> 
      <NavLink to={'/'} className="webName">小猴</NavLink>
      <div className="navlink">
        <NavLink to={'/Blog'}><GlobalOutlined /> 博客</NavLink>
        <NavLink to={'/Blog'}><GlobalOutlined /> 说说</NavLink>
        <NavLink to={'/Blog'}><GlobalOutlined /> 娱乐</NavLink>
        <Dropdown menu={{items}} placement="bottom">
          <a onClick={(e) => e.preventDefault()}>
            <Space>
            <GlobalOutlined /> 暂定
            </Space>
          </a>
        </Dropdown>
        <Dropdown menu={{items}} placement="bottom">
          <a onClick={(e) => e.preventDefault()}>
            <Space>
            <GlobalOutlined /> 其他
            </Space>
          </a>
        </Dropdown>
        <Avatar size="small" icon={<UserOutlined />} />
      </div>
    </header>
  )
  }
  export default Header