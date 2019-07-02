import {GET_NEWS, GET_SINGLE_NEWS} from '../ActionTypes';

export default (state=[], action) => {
    // debugger;
    switch(action.type){
        case GET_NEWS:
            return [...action.news];
        case GET_SINGLE_NEWS:
            // console.log(state);
            // debugger;
            return [action.news_item];
        default:
            return state
    }
}