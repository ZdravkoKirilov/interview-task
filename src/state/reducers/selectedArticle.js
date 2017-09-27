import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';
import { set } from 'dot-prop-immutable';

function itemsById(state = {}, { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_COMMENTS_SUCCESS:
			return {
				...state,
				...payload.data.byId
			};
		default:
			return state;
	}
}

function itemsAllIds(state = [], { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_COMMENTS_SUCCESS:
			return [
				...state,
				...payload.data.allIds
			];
		default:
			return state;
	}
}

function itemsAsTree(state = {}, { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_COMMENTS_SUCCESS:
			let { articleId, nestedPath } = payload.metadata;
			let newState = {};

			if (nestedPath) {
				const newTree = set(state[articleId], nestedPath, payload.data.allIds);
				newState = {
					...state,
					[articleId]: newTree
				};
				debugger;
			} else {
				newState = {
					...state,
					[articleId]: {
						children: {
							...payload.data.asTree
						}
					}
				};
			}
			return newState;
		default:
			return state;
	}
}

export default combineReducers({
	comments: combineReducers({ byId: itemsById, allIds: itemsAllIds, asTree: itemsAsTree })
});