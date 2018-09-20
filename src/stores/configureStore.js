import { createStore, combineReducers, compose } from 'redux';
import placeReducer from './reducers/place';

const rootReducer = combineReducers({
    places: placeReducer
});

let composeEnhancer = compose;

if(__DEV__) {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancer;
}

const store = () => {
    return createStore(rootReducer, composeEnhancer());
};

export default store;