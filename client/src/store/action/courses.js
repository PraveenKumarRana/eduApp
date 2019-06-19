import {apiCall} from '../../services/api';
import {GET_COURSES} from '../ActionTypes';
import { addError } from './error';

export function getCourseList(courses){
    console.log(courses);
    // debugger;
    return {
        type: GET_COURSES,
        courses
    }
}

export function getCourses(){
    return dispatch => {
        return new Promise ((resolve, reject) => {
            return apiCall("get", "/api/courses")
            .then(res => {
                // console.log("Printing from the getCourses");
                console.log(res);
                dispatch(getCourseList(res))
                resolve();
            })
            .catch(err => {
                dispatch(addError(err));
                reject();
            })
        })
    }
}