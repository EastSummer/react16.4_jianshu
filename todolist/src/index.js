// 使用JSX语法必须引入react
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

// PWA pogressive web application
// 将网页存储在浏览器之内
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

// render将TodoList组件挂载到#root节点上
// 组件必须以大写字母开头
ReactDOM.render(<TodoList />, document.getElementById('root'));
