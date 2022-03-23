import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import appReducer from './appReducer';

const reducers = combineReducers({
  appReducer,
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;
