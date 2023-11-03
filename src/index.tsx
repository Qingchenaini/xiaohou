import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Header from './web/layout/header';
import Footer from './web/layout/footer';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import SiderCard from './web/layout/siderCard';
import ArticleAll from './web/components/articleall';
import ArticleOne from './web/components/articleOne';
import { FloatButton } from 'antd';
import { UpCircleTwoTone } from '@ant-design/icons'
import { ThemeProvider } from 'antd-style';


function App() {
  return (
    <Router>
      <ThemeProvider appearance={'dark'}>
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
      </ThemeProvider>
    </Router>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); // TypeScript 使用 createRoot(container!)
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));
