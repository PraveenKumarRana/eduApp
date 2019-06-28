import {apiCall} from '../../services/api';
import {addError} from '../action/error';
import {GET_VIEWS_COUNT} from '../ActionTypes';

export function pageViews(data){
    console.log("Printing from the Get Page Count.");
    console.log(data);
    return{
        type: GET_VIEWS_COUNT,
        data
    }
}

export function getPageCount(){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("get","/pageViews/get")
            .then(res => {
                console.log("Printing from the Get Page Count.");
                console.log(res);
                dispatch(pageViews(res));
                resolve();
            })
            .catch(err => {
                dispatch(addError(err));
                // reject();
            })
        })
    }
}