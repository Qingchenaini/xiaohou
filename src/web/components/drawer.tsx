import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { DatabaseTwoTone } from '@ant-design/icons'
import './drawer.scss'


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
      <Button type="primary" onClick={showDrawer}>
        <DatabaseTwoTone />
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default DRAWER;