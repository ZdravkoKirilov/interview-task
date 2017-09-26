import * as actionTypes from '../actions/actionTypes';
import {combineReducers} from 'redux';
import {set} from 'dot-prop-immutable';

function itemsById(state = {}, {type, payload}) {
	switch (type) {
		case actionTypes.LOAD_COMMENTS_SUCCESS:
			return {
				...state,
				...payload.byId
			};
		default:
			return state;
	}
}

function itemsAllIds(state = [], {type, payload}) {
	switch (type) {
		case actionTypes.LOAD_COMMENTS_SUCCESS:
			return [
				...state,
				...payload.allIds
			];
		default:
			return state;
	}
}

function itemsAsTree(state = {}, {type, payload}) {
	switch (type) {
		case actionTypes.LOAD_COMMENTS_SUCCESS:
			const {articleId, parentIds, currentId, newItems} = payload;
			const parentIdsAsPath = parentIds.reduce(function (endResult, currentItem) {
				endResult += `.children.${currentItem}`;
				return endResult;
			}, '');
			const newState = set(state[articleId]['children'], `${parentIdsAsPath}.${currentId}.children`, [...newItems]);
			return newState;
		default:
			return state;
	}
}

function metadata(state = {}, {type, payload}) {
	switch (type) {
		default:
			return state;
	}
}

export default combineReducers({
	items: combineReducers({byId: itemsById, allIds: itemsAllIds, asTree: itemsAsTree})
});