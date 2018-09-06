import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';    // 默认去找文件夹下的index.js
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList} from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(porps){
        super(porps)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        // 异步操作移除至action
        // axios.get('/list.json')
        //     .then(res=>{
        //         const data = res.data
        //         const action = initListAction(data)
        //         store.dispatch(action)
        //     })
        //     .catch()
        const action = getTodoList()    // action为返回的函数
        store.dispatch(action)  // 调用时action(返回的函数)会自动执行
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList