import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './index.scss';
import Blog from './web/components/blog';
import Login from './web/components/login';
import Test from './web/layout/test';
import Footer from './web/layout/footer';
import { FloatButton } from 'antd';
import { UpCircleTwoTone } from '@ant-design/icons';
import Loading from './web/components/loading';
import Publish from './web/components/publish';
import { Toaster } from 'react-hot-toast';
import Register from './web/components/register';

const App = () => {
  return (
    <Router>

      <div className="app" >
        <Toaster />
        <Loading />
        <Routes>
          <Route path='*' Component={Test} ></Route>
          <Route path='/Blog' Component={Blog} ></Route>
          <Route path='/Login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/publish' Component={Publish} />
        </Routes>
        <FloatButton.BackTop icon={<UpCircleTwoTone twoToneColor={'#8f8f8f'} />} />
        <Footer />
      </div>

    </Router>
  );
}

const root = createRoot(document.getElementById('root')); // TypeScript 使用 createRoot(container!)
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));
