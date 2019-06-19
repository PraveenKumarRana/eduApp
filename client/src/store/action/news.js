import {apiCall} from '../../services/api';
import {GET_NEWS} from '../ActionTypes';
import {addError} from './error';

export function getNewsList(news){
    return{
        type: GET_NEWS,
        news
    }
}

export function getNews(){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("get", "/api/news")
            .then(res => {
                dispatch(getNewsList(res));
                resolve();
            })
            .catch(err => {
                dispatch(addError(err));
                reject();
            })
        })
    }
}