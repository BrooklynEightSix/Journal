import { createStore, applyMiddleware } from 'redux';
import dummyReducer from './reducers/dummyReducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(dummyReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;