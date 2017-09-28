import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';
import { set } from 'dot-prop-immutable';

function commentsById(state = {}, { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_COMMENTS_SUCCESS:
			return {
				...state,
				...payload.data.byId
			};
		case actionTypes.ADD_COMMENT_SUCCESS:
			return {
				...state,
				[payload.id]: payload
			};
		default:
			return state;
	}
}

function commentsAllIds(state = [], { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_COMMENTS_SUCCESS:
			const combined = [
				...state,
				...payload.data.allIds
			];
			return [... new Set(combined)];
		case actionTypes.ADD_COMMENT_SUCCESS:
			return [
				...state,
				payload.id
			];
		default:
			return state;
	}
}

function commentsAsChildList(state = {}, { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_COMMENTS_SUCCESS:
			let { id } = payload.metadata;
			return {
				...state,
				[id]: [
					...payload.data.allIds
				]
			};
		case actionTypes.ADD_COMMENT_SUCCESS:
			let { articleId } = payload;
			return {
				...state,
				[articleId]: [
					...state[articleId],
					payload.id
				]
			};
		default:
			return state;
	}
}

function repliesById(state = {}, { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_REPLIES_SUCCESS:
			return {
				...state,
				...payload.data.byId
			};
		default:
			return state;
	}
}

function repliesAllIds(state = [], { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_REPLIES_SUCCESS:
			const combined = [
				...state,
				...payload.data.allIds
			];
			return [... new Set(combined)];
		default:
			return state;
	}
}

function repliesAsChildList(state = {}, { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_REPLIES_SUCCESS:
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
	comments: combineReducers({ byId: commentsById, allIds: commentsAllIds, childList: commentsAsChildList }),
	replies: combineReducers({ byId: repliesById, allIds: repliesAllIds, childList: repliesAsChildList })
});