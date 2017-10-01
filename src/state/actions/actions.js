import * as actionTypes from './actionTypes';
import API from '../../API/index';
import { normalizeArticles, normalizeComments } from "../reducers/utils";

export function loadArticles(payload) {
	return async (dispatch) => {
		try {
			const results = await API.loadArticles(payload);
			const normalized = normalizeArticles(results.data);
			dispatch(loadArticles_success(normalized));
		} catch (err) {
			dispatch(loadArticles_fail(err));
		}
	}
}

export function loadArticles_success(payload) {
	return {
		type: actionTypes.LOAD_ARTICLES_SUCCESS,
		payload
	}
}

export function loadArticles_fail(payload) {
	return {
		type: actionTypes.LOAD_ARTICLES_FAIL,
		payload
	}
}

export function loadComments(payload) {
	return async (dispatch) => {
		try {
			const results = await API.loadComments(payload.query);
			const normalized = normalizeComments(results.data);
			dispatch(loadComments_success({
				data: normalized,
				metadata: { id: payload.query.articleId }
			}));
		} catch (err) {
			dispatch(loadComments_fail(err));
		}
	}
}

export function loadComments_success(payload) {
	return {
		type: actionTypes.LOAD_COMMENTS_SUCCESS,
		payload
	}
}

export function loadComments_fail(payload) {
	return {
		type: actionTypes.LOAD_COMMENTS_FAIL,
		payload
	}
}

export function addComment(payload) {
	return async (dispatch) => {
		try {
			const results = await API.addComment(payload);
			dispatch(addComment_success(results.data));
		} catch (err) {
			dispatch(addComment_fail(err));
		}
	}
}

export function addComment_success(payload) {
	return {
		type: actionTypes.ADD_COMMENT_SUCCESS,
		payload
	}
}

export function addComment_fail(payload) {
	return {
		type: actionTypes.ADD_COMMENT_FAIL,
		payload
	}
}

export function loadReplies(payload) {
	return async (dispatch) => {
		try {
			const results = await API.loadComments(payload.query);
			const normalized = normalizeComments(results.data);
			dispatch(loadReplies_success({
				data: normalized,
				metadata: { id: payload.query.parentCommentId }
			}));
		} catch (err) {
			dispatch(loadReplies_fail(err));
		}
	}
}

export function loadReplies_success(payload) {
	return {
		type: actionTypes.LOAD_REPLIES_SUCCESS,
		payload
	}
}

export function loadReplies_fail(payload) {
	return {
		type: actionTypes.LOAD_REPLIES_FAIL,
		payload
	}
}

export function addReply(payload) {
	return async (dispatch) => {
		try {
			const results = await API.addComment(payload);
			dispatch(addReply_success(results.data));
		} catch (err) {
			dispatch(addReply_fail(err));
		}
	}
}

export function addReply_success(payload) {
	return {
		type: actionTypes.ADD_REPLY_SUCCESS,
		payload
	}
}

export function addReply_fail(payload) {
	return {
		type: actionTypes.ADD_REPLY_FAIL,
		payload
	}
}

export function changeCurrentPage(payload) {
	return {
		type: actionTypes.CHANGE_PAGINATION,
		payload
	}
}

export function showArticlesLoader(payload) {
	return {
		type: actionTypes.SHOW_ARTICLES_LOADER,
		payload
	}
}
export function showCommentsLoader(payload) {
	return {
		type: actionTypes.SHOW_COMMENTS_LOADER,
		payload
	}
}