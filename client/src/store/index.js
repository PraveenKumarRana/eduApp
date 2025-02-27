import reducer from './reducer';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export function configureStore() {
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    return store;
}
