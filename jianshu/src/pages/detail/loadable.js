import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),   // 此处import为异步加载的语法
  loading() {
  	return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/>
