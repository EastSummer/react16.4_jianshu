import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoListThunk';
// import TodoList from './TodoListSaga';

// ReactDOM.render(<TodoList />, document.getElementById('root'));

// react-redux
import TodoList from './TodoListRedux';
import {Provider} from 'react-redux';
import store from './store-redux';

const App = (
    // Provider将store提供给他内部所有的组件
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
