import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));