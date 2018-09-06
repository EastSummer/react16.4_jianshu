import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

// 使用了redux-thunk后，可以return一个函数
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list.json')
            .then(res=>{
                const data = res.data
                const action = initListAction(data)
                dispatch(action)
            })
            .catch()
    }
}