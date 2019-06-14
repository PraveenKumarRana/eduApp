import {combineReducers} from 'redux';
import error from './error';
import currentUser from './currentUser';

const rootReducer = combineReducers({
    currentUser,
    error
});

export default rootReducer;