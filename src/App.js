//memo与PureComponent类似 优化组件渲染 子组件数据无变化不运行rander函数,配合useCallback
import React, { memo } from 'react';
//Provider可以使所有组件链接redux
import { Provider } from 'react-redux';
//使用哈希路由
import { HashRouter } from 'react-router-dom';
import store from './store';
import { BackTop } from 'antd';
//顶部组件
import JMAppHeader from 'components/app-header';
//中间内容组件
import AppWrapper from './pages/app';
import JMAppFooter from 'components/app-footer';
import JMAppPlayerBar from './pages/player/app-player-bar';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <JMAppHeader />
        {/* Router路由映射 */}
        <AppWrapper />
        <JMAppFooter />
        <JMAppPlayerBar />
        {/* 返回顶部 */}
        <BackTop />
      </HashRouter>
    </Provider>
  );
});
