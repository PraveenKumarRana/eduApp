import {combineReducers} from 'redux';
import error from './error';
import currentUser from './currentUser';
import courses from './courses';
import news from './news';
import views_count from './viewsCount';

const rootReducer = combineReducers({
    currentUser,
    error,
    courses,
    news,
    views_count
});

export default rootReducer;