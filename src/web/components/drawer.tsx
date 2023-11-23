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

  const navbarData = [
    {
      src: 'https://iconfont.alicdn.com/p/avatar/iconfont/avatar5.png',
      alt: '博客',
      link: 'Blog'
    },
    {
      src: 'https://iconfont.alicdn.com/p/avatar/iconfont/avatar5.png',
      alt: '说说',
      link: 'Blog'
    },
    {
      src: 'https://iconfont.alicdn.com/p/avatar/iconfont/avatar5.png',
      alt: '娱乐',
      link: 'Blog'
    },
    {
      src: 'https://iconfont.alicdn.com/p/avatar/iconfont/avatar5.png',
      alt: '暂定',
      link: 'publish'
    },
    {
      src: 'https://iconfont.alicdn.com/p/avatar/iconfont/avatar5.png',
      alt: '发布',
      link: 'publish'
    },
  ]

  return (
    <div className='drawer'>
      <Button onClick={showDrawer} style={{ display: 'flex', alignItems: 'center' }}>
        {/* <DatabaseTwoTone twoToneColor={'#8f8f8f'} style={{ fontSize: 18 }} /> */}
        <img src="https://pic.imgdb.cn/item/6544dd25c458853aef5eb4c1.png" alt="导航" style={{ width: 18 }} />
      </Button>
      <Drawer title="Lighthouse" placement="right" onClose={onClose} open={open} rootClassName='chuoti'>
        <Intro />
        <div className="navbox">
          {navbarData.map((ndata, index) => {
            return (
              <NavBar ndata={ndata} key={index} />
            )
          })}
          {/* <NavBar /> */}
          {/* <a href="https://htapk.wmupd.com/webops/ht/HT_1.1.0.0830.exe" download>点击下载</a> */}
        </div>
      </Drawer>
    </div>
  );
};

export default DRAWER;