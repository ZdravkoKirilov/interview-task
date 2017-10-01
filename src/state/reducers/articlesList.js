import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';

export const initialState = {};

export function itemsById(state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.LOAD_ARTICLES_SUCCESS:
            return {
                ...state,
                ...payload.byId
            }
        /**
         * Updates the left-side comments count under each article
         */
        case actionTypes.ADD_COMMENT_SUCCESS:
        case actionTypes.ADD_REPLY_SUCCESS:
            return {
                ...state,
                [payload.articleId]: {
                    ...state[payload.articleId],
                    commentsCount: state[payload.articleId].commentsCount + 1
                }
            }
        default:
            return state;
    }
}

export function itemsAllIds(state = [], { type, payload }) {
    switch (type) {
        case actionTypes.LOAD_ARTICLES_SUCCESS:
            return [
                ...state,
                ...payload.allIds
            ];
        default:
            return state;
    }
}

export function pagination(state = {
    current: 0,
    loadQuantity: 5 // could be a user setting
}, { type, payload }) {
    switch (type) {
        case actionTypes.CHANGE_PAGINATION:
            return {
                ...state,
                current: payload
            }
        default:
            return state;
    }
}

export default combineReducers({
    items: combineReducers({
        byId: itemsById,
        allIds: itemsAllIds
    }),
    pagination
});