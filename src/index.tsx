import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Header from './web/layout/header';
import Footer from './web/layout/footer';
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import SiderCard from './web/layout/siderCard';
import ArticleAll from './web/components/articleall';
import ArticleOne from './web/components/articleOne';
import { FloatButton } from 'antd';
import { UpCircleTwoTone } from '@ant-design/icons'
import Blog from './web/components/blog';
import Test from './web/layout/test';
import Login from './web/components/login';


function App() {

  return (
    // <Router>
    //   <div className="app" >
    //     <Header />
    //     <div className="middle">
    //       <SiderCard />
    //       <Routes>
    //         <Route path='/Blog' Component={Blog} />
    //         <Route path='/' Component={ArticleAll} />
    //         <Route path='/article' Component={ArticleOne} />
    //       </Routes>
    //     </div>
    //     <Footer />
    //     <FloatButton.BackTop icon={<UpCircleTwoTone twoToneColor={'#8f8f8f'} />} />
    //   </div>
    // </Router>
    <Router>
      <div className="app" >
        <Routes>
          <Route path='*' Component={Test} ></Route>
          <Route path='/Blog' Component={Blog} ></Route>
          <Route path='/Login' Component={Login} />
        </Routes>
      </div>
    </Router>
  );
}

const root = createRoot(document.getElementById('root')); // TypeScript 使用 createRoot(container!)
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));
