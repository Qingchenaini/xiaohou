import React from 'react';
import Header from './header';
import Footer from './footer';
import { Routes, Route } from "react-router-dom";

import SiderCard from './siderCard';
import ArticleAll from '../components/articleall';
import ArticleOne from '../components/articleOne';
import { FloatButton } from 'antd';
import { UpCircleTwoTone } from '@ant-design/icons'



const Test: React.FC = () => {
    return (
        <div className="app" >
            <Header />
            <div className="middle">
                <SiderCard />
                <Routes>
                    <Route path='/' Component={ArticleAll}></Route>
                    <Route path='article' Component={ArticleOne}></Route>
                </Routes>
                {/* <ArticleAll /> */}
            </div>
            {/* <Footer /> */}
            {/* <FloatButton.BackTop icon={<UpCircleTwoTone twoToneColor={'#8f8f8f'} />} /> */}
        </div>
    )
}
export default Test;