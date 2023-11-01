import React from 'react';
import ReactDOM from 'react-dom';
import { useRequest } from 'ahooks';
import { getDate } from './api/date';
import fetchGithubStars from './api/star';
import { getBookByParams, getBookByQuery } from './api/book';
import './index.scss';
import Header from './web/layout/header';
import Footer from './web/layout/footer';
import { Routes, Route } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import SiderCard from './web/layout/siderCard';
import  Content  from './web/layout/content';
import Blog from './web/components/blog';

function App() {
  return (
    <Router>
      <div className="app" >
        <Header/>
        <div className="middle">
          <SiderCard/>
          <Content/>
          <Routes>
              <Route path='/Blog' element={<Blog />}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
