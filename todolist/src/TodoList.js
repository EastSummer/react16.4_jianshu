import React, { Component, Fragment } from 'react';
// 一般先引入组件，最后引入样式
import TodoItem from './TodoItem';
import Test from './Test';
import axios from 'axios';
import './style.css'

// import { Component } from "react";
// // 等价于
// import React from "react";
// const Component = React.Component;

class TodoList extends Component {

  constructor(props) {
    super(props)
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          {/* JSX注释写法 */}
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input)=>{this.input = input}}
          />
          <button 
            onClick={this.handleBtnClick}
            ref={(ul)=>{this.ul = ul}}
          >submit</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputValue} />
      </Fragment>
    );
  }

  componentDidMount() {
    axios.get('/api/todolist')
      .then((res)=>{
        this.setState(() => ({
          list: [...res.data]
        }))
      })
      .catch(()=>alert('error'))
  }

  // 代码拆分 防止jsx过于臃肿
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item} 
          index={index} 
          deleteItem={this.handleItemDelete}
        />
        // <li key={index} onClick={this.handleItemDelete.bind(this, index)} dangerouslySetInnerHTML={{__html: item}}>
        //   {/* {item} */}
        // </li>
      )
    })
  }

  handleInputChange(e) {
    // 新版写法 异步的setState
    const value = e.target.value
    // ref用法，但是尽量不要使用 
    // const value = this.input.value
    this.setState(() => ({
      inputValue: value
    }))
    // 旧版的写法
    // this.setState({
    //   inputValue: e.target.value
    // })
  }

  handleBtnClick(e) {
    // prevState指修改数据之前的原数据 这里等价于this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.ul.querySelectorAll('div').length);
    })
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }

}

export default TodoList;
