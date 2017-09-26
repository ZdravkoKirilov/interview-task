import * as actionTypes from './actionTypes';
import API from '../../API/index';

export function loadArticles(payload) {
    return async (dispatch) => {
        try {
            const results = await API.loadArticles(payload);
            const normalized = results.data.reduce(function(endResult, currentItem) {
                endResult['byId'][currentItem.id] = currentItem;
                endResult['allIds'].push(currentItem.id);
                return endResult;
            }, {byId: {}, allIds: []});
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
            const results = await API.loadComments(payload);
            const normalized = results.data.reduce(function(endResult, currentItem) {
                endResult['byId'][currentItem.id] = currentItem;
                endResult['allIds'].push(currentItem.id);
                return endResult;
            }, {byId: {}, allIds: []});
            dispatch(loadComments_success({
                data: normalized,
                metadata: payload
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