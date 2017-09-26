import * as actionTypes from '../actions/actionTypes';

export default function (state = {
    loadingArticles: false
}, { type, payload }) {
    switch (type) {
        case actionTypes.TOGGLE_ARTICLES_LOADER:
            return {
                ...state,
                loadingArticles: payload
            }
        case actionTypes.LOAD_ARTICLES_SUCCESS:
        case actionTypes.LOAD_ARTICLES_FAIL:
            return {
                ...state,
                loadingArticles: false
            }
        default:
            return state;
    }
}