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

function itemsAsChildList(state = {}, { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_COMMENTS_SUCCESS:
			let { id } = payload.metadata;
			return {
				...state,
				[id]: [
					...payload.data.allIds
				]
			};
		default:
			return state;
	}
}

export default combineReducers({
	comments: combineReducers({ byId: itemsById, allIds: itemsAllIds, childList: itemsAsChildList })
});