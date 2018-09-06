import React from 'react';
import {connect} from 'react-redux';

const TodoList = (props) => {
    const {inputValue, list, handleInputChange, handleClick} = props
    return (
        <div>
            <div>
                <input 
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

// 把store里的数据映射到组件，变成组件的props
// 固定接受一个state里的数据，state就是redux里的store
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// 将store.dispatch方法挂载到props上
// 固定接受一个store.dispatch
const mapDispatchToProps = (dispatch) => {  // 
    return {
        handleInputChange(e) {
            const action = {
                type: 'chage_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        }
    }
}

// 通过connect方法将TodoList组件和store连接起来
// 第一个参数为连接方式(规则)
// 第二个参数为修改方式(规则)
// TodoList是UI组件，export导出的是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)