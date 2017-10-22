import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

/* we are setting up redux store so that we can pass data down
 through props into whatever components we want 
 we are using the redux thunkMiddleware to handle all of our
 asynchronous calls to our Cosmic JS API
 we are using createlogger middleware to visually see every
 logged action that we dispatch*/
 
const store = createStore (
	reducer,
	applyMiddleware(
		createLogger(),
		thunkMiddleware
		)
	);

export default store;