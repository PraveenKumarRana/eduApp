import {apiCall} from '../../services/api';
import {addError} from '../action/error';

export function query(data){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post","/api/auth/querymail", data)
            .then(res => {
                dispatch(addError(res));
                resolve();
            })
            .catch(err => {
                dispatch(addError(err));
                reject();
            })
        })
    }
}