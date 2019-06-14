import {apiCall, setTokenHeader} from '../../services/api';
import {SET_CURRENT_USER} from '../ActionTypes';
import {addError, removeError} from './error';

// sets the current user detail on successful login.
export function setCurrentUser(user){
    console.log(user);
    return {
        type: SET_CURRENT_USER,
        user
    }
}

// this is a helper function which will set the auth token
export function setAuthorizationHeader(token){
    setTokenHeader(token);
}

// logout function for logging out user.
export function logout(){
    return dispatch => {
        localStorage.clear();
        setAuthorizationHeader(false);
        dispatch(setCurrentUser({}));
    };
}

// dispatch is used for dispatching some action like flipkart - dispatch step.
export function authUser(type, userData){
    console.log("Printing the user data from the apiCall.");
    console.log(userData);
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post",`/api/auth/${type}`, userData)
            .then(({token, ...user}) => {
                localStorage.setItem("jwtToken", token)
                setAuthorizationHeader(token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
                resolve(); // indicates that the apiCall succeeded
            })
            .catch(err => {
                console.log(err);
                reject();
            });
        });
    }
}