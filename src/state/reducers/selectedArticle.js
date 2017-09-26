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
			let { articleId, parentIds, currentId } = payload.metadata;
			let newState;
			parentIds = parentIds || [];
			const newItems = payload.data.byId;

			if (parentIds.length > 0) {
				const parentIdsAsPath = parentIds.reduce(function (endResult, currentItem) {
					endResult += `.children.${currentItem}`;
					return endResult;
				}, '');
				newState = set(state[articleId]['children'], `${parentIdsAsPath}.${currentId}.children`, { ...newItems });
			} else {
				newState = {
					...state,
					[articleId]: {
						isArticle: true,
						children: {
							...state.children,
							...newItems
						}
					}
				}
			}

			return newState;
		default:
			return state;
	}
}

function metadata(state = {}, { type, payload }) {
	switch (type) {
		default:
			return state;
	}
}

export default combineReducers({
	comments: combineReducers({ byId: itemsById, allIds: itemsAllIds, asTree: itemsAsTree })
});