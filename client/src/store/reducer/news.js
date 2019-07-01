import {GET_NEWS, GET_SINGLE_NEWS} from '../ActionTypes';

export default (state=[], action) => {
    switch(action.type){
        case GET_NEWS:
            return [...action.news];
        case GET_SINGLE_NEWS:
            return [...action.news_item];
        default:
            return state
    }
}