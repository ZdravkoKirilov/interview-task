import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

export default function (initialState) {
	const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
	store.subscribe(() => {
		console.log(store.getState());
	});
	return store;
}