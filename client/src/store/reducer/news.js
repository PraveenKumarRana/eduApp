import {GET_NEWS} from '../ActionTypes';

export default (state=[], action) => {
    switch(action.type){
        case GET_NEWS:
            return [...action.news];
        default:
            return state
    }
}