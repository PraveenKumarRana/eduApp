import {GET_COURSES} from '../ActionTypes';

export default (state=[], action) => {
    switch(action.type){
        case GET_COURSES: {
            return [...action.courses];
        }
        default:
            return state;
    }
}