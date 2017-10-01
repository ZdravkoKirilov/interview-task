import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';

export function commentsById(state = {}, { type, payload }) {
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

export function commentsAllIds(state = [], { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_COMMENTS_SUCCESS:
			const combined = [
				...state,
				...payload.data.allIds
			];
			return [...new Set(combined)];
		case actionTypes.ADD_COMMENT_SUCCESS:
			return [
				...state,
				payload.id
			];
		default:
			return state;
	}
}

export function commentsAsChildList(state = {}, { type, payload }) {
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

export function repliesById(state = {}, { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_REPLIES_SUCCESS:
			return {
				...state,
				...payload.data.byId
			};
		case actionTypes.ADD_REPLY_SUCCESS:
			return {
				...state,
				[payload.id]: payload
			};
		default:
			return state;
	}
}

export function repliesAllIds(state = [], { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_REPLIES_SUCCESS:
			const combined = [
				...state,
				...payload.data.allIds
			];
			return [...new Set(combined)];
		case actionTypes.ADD_REPLY_SUCCESS:
			return [
				...state,
				payload.id
			];
		default:
			return state;
	}
}

export function repliesAsChildList(state = {}, { type, payload }) {
	switch (type) {
		case actionTypes.LOAD_REPLIES_SUCCESS:
			let { id } = payload.metadata;
			return {
				...state,
				[id]: [
					...payload.data.allIds
				]
			};
		case actionTypes.ADD_REPLY_SUCCESS:
			let { parentCommentId } = payload;
			const current = state[parentCommentId] || [];
			return {
				...state,
				[parentCommentId]: [
					...current,
					payload.id
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