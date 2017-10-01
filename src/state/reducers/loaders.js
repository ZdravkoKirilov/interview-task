import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    loadingArticles: false,
    loadingArticleComments: false
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.SHOW_ARTICLES_LOADER:
            return {
                ...state,
                loadingArticles: true
            }

        case actionTypes.SHOW_COMMENTS_LOADER:
            return {
                ...state,
                loadingArticleComments: true
            }
        case actionTypes.LOAD_ARTICLES_SUCCESS:
        case actionTypes.LOAD_ARTICLES_FAIL:
            return {
                ...state,
                loadingArticles: false
            }
        case actionTypes.LOAD_COMMENTS_SUCCESS:
        case actionTypes.LOAD_COMMENTS_FAIL:
            return {
                ...state,
                loadingArticleComments: false
            }
        case actionTypes.ADD_COMMENT_SUCCESS:
        case actionTypes.ADD_COMMENT_FAIL:
            return {
                ...state,
                loadingArticleComments: false
            }
        default:
            return state;
    }
}