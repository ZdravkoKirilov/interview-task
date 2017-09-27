import * as actionTypes from './actionTypes';
import API from '../../API/index';
import { createNestedPath, normalizeArticles, normalizeComments } from "../reducers/utils";

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
			payload.metadata = payload.metadata || {};
			const results = await API.loadComments(payload.query);
			const normalized = normalizeComments(results.data, payload.query.articleId);
			const nestedPath = createNestedPath(payload.query.articleId, payload.metadata.parentCommentIds);
			dispatch(loadComments_success({
				data: normalized,
				metadata: {
					articleId: payload.query.articleId,
					nestedPath
				}
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

export function changeCurrentPage(payload) {
	return {
		type: actionTypes.CHANGE_PAGINATION,
		payload
	}
}

export function toggleArticlesLoader(payload) {
	return {
		type: actionTypes.TOGGLE_ARTICLES_LOADER,
		payload
	}
}