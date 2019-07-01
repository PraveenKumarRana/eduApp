import {apiCall} from '../../services/api';
import {GET_NEWS, GET_SINGLE_NEWS} from '../ActionTypes';
import {addError} from './error';

export function getNewsList(news){
    return{
        type: GET_NEWS,
        news
    }
}

export function getSingleNews(news_item){
    return{
        type: GET_SINGLE_NEWS,
        news_item
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

export function getNewsItem(id){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post", `/api/news/${id}/news_item`, id)
            .then(res => {
                dispatch(getSingleNews(res));
                resolve();
            })
            .catch(err => {
                dispatch(addError(err));
                reject();
            })
        })
    }
}