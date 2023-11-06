import React, { useState, useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // 引入样式文件

const Loading = (props) => {
  useEffect(() => {
    NProgress.start(); // 开始加载时显示进度条

    return () => {
      NProgress.done(); // 组件卸载时隐藏进度条
    };
  }, []);

  useEffect(() => {
    // 监听 isLoading 属性的变化，控制进度条的显示和隐藏
    if (props.isLoading) {
      NProgress.start();
    } else {
      NProgress.done(); // 加载完成时隐藏进度条
    }
  }, [props.isLoading]);

  return null; // 这个组件不渲染任何内容，只用于控制进度条的显示
}

export default Loading;
