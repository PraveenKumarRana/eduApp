import {combineReducers} from 'redux';
import error from './error';
import currentUser from './currentUser';
import courses from './courses';

const rootReducer = combineReducers({
    currentUser,
    error,
    courses
});

export default rootReducer;