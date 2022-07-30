import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk'
import weatherReducer from './reducers/weatherReducer';

const composedEnhancers = compose(applyMiddleware(thunkMiddleware));

const store = configureStore({
    reducer: {
        weatherReducer
    },
    composedEnhancers
})

export default store;

