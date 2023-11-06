import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { DatabaseTwoTone } from '@ant-design/icons'
import './drawer.scss'
import Intro from './intro';
import NavBar from './navbar';


const DRAWER: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };



  return (
    <div className='drawer'>
      <Button onClick={showDrawer} style={{ display: 'flex', alignItems: 'center' }}>
        {/* <DatabaseTwoTone twoToneColor={'#8f8f8f'} style={{ fontSize: 18 }} /> */}
        <img src="https://pic.imgdb.cn/item/6544dd25c458853aef5eb4c1.png" alt="导航" style={{ width: 18 }} />
      </Button>
      <Drawer title="Lighthouse" placement="right" onClose={onClose} open={open} rootClassName='chuoti'>
        <Intro />
        <div className="navbox">
          <NavBar />
          <NavBar />
          <NavBar />
          <NavBar />
          <NavBar />
          <NavBar />
          <NavBar />
        </div>
      </Drawer>
    </div>
  );
};

export default DRAWER;