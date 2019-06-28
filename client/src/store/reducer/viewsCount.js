import {GET_VIEWS_COUNT} from '../ActionTypes';

export default (state=[], action) => {
    switch(action.type){
        case GET_VIEWS_COUNT:
            return [...state,action.data];
        default:
            return state
    }
}