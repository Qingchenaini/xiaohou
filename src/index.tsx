import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useRequest } from 'ahooks';
import { getDate } from './api/date';
import fetchGithubStars from './api/star';
import { getBookByParams, getBookByQuery } from './api/book';
import './index.scss';
import Header from './web/layout/header';
import Footer from './web/layout/footer';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import SiderCard from './web/layout/siderCard';
import Blog from './web/components/blog';
import ArticleAll from './web/components/articleall';
import ArticleOne from './web/components/articleOne';
import { FloatButton } from 'antd';
import { UpCircleTwoTone } from '@ant-design/icons'



function App() {
  return (
    <Router>
      <div className="app" >
        <Header />
        <div className="middle">
          <SiderCard />
          <Routes>
            {/* <Route path='/Blog' element={<Blog />} /> */}
            <Route path='/' element={<ArticleAll />} />
            <Route path='/article' element={<ArticleOne />} />
          </Routes>
        </div>
        <Footer />
        <FloatButton.BackTop icon={<UpCircleTwoTone />} />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
