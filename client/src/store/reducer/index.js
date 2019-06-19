import {combineReducers} from 'redux';
import error from './error';
import currentUser from './currentUser';
import courses from './courses';
import news from './news';

const rootReducer = combineReducers({
    currentUser,
    error,
    courses,
    news
});

export default rootReducer;