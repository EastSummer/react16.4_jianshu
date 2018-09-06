import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST_ACTION } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

// 异步逻辑处理
function* getInitList() {
    try {
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action);
    }catch(e) {
        console.log('list.json网络请求失败');
    }
}

// generator function
function* mySaga() {
    // 通过takeEvery捕获发出的action
    yield takeEvery(GET_INIT_LIST_ACTION, getInitList)
}
  
export default mySaga;