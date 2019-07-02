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
            return apiCall("get", `/api/news/news_item/${id}`)
            .then(res => {
                console.log("Printing the News data from Get News Item.");
                console.log(res);
                console.log("The above is the data.")
                dispatch(getSingleNews(res));
                resolve();
            })
            .catch(err => {
                console.log("Get news item is not working properly");
                dispatch(addError(err));
                reject();
            })
        })
    }
}