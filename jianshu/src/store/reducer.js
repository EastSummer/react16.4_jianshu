import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';

// 合并各个小的reducer
const reducer = combineReducers({
    header: headerReducer
})

export default reducer