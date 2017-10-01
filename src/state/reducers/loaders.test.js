import reducer, { initialState } from './loaders';
import * as types from '../actions/actionTypes';

let result;

it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
});

it('should handle [SHOW_ARTICLES_LOADER]', () => {
    expect(reducer(undefined, {
        type: types.SHOW_ARTICLES_LOADER
    })).toEqual({
        loadingArticles: true,
        loadingArticleComments: false
    });
});

it('should handle [SHOW_ARTICLES_LOADER]', () => {
    expect(reducer(undefined, {
        type: types.SHOW_COMMENTS_LOADER
    })).toEqual({
        loadingArticles: false,
        loadingArticleComments: true
    });
});

it('should handle [LOAD_ARTICLES_SUCCESS]', () => {
    expect(reducer({
        loadingArticles: true,
        loadingArticleComments: false
    }, {
            type: types.LOAD_ARTICLES_SUCCESS
        })).toEqual({
            loadingArticles: false,
            loadingArticleComments: false
        });
});

it('should handle [LOAD_ARTICLES_FAIL]', () => {
    expect(reducer({
        loadingArticles: true,
        loadingArticleComments: false
    }, {
            type: types.LOAD_ARTICLES_FAIL
        })).toEqual({
            loadingArticles: false,
            loadingArticleComments: false
        });
});

it('should handle [LOAD_COMMENTS_SUCCESS]', () => {
    expect(reducer({
        loadingArticles: false,
        loadingArticleComments: true
    }, {
            type: types.LOAD_COMMENTS_SUCCESS
        })).toEqual({
            loadingArticles: false,
            loadingArticleComments: false
        });
});

it('should handle [LOAD_COMMENTS_FAIL]', () => {
    expect(reducer({
        loadingArticles: false,
        loadingArticleComments: true
    }, {
            type: types.LOAD_COMMENTS_FAIL
        })).toEqual({
            loadingArticles: false,
            loadingArticleComments: false
        });
});

it('should handle [ADD_COMMENT_SUCCESS]', () => {
    result = reducer({
        loadingArticles: false,
        loadingArticleComments: true
    }, { type: types.ADD_COMMENT_SUCCESS });
    expect(result).toEqual({
        loadingArticles: false,
        loadingArticleComments: false
    });
});

it('should handle [ADD_COMMENT_FAIL]', () => {
    result = reducer({
        loadingArticles: false,
        loadingArticleComments: true
    }, { type: types.ADD_COMMENT_FAIL });
    expect(result).toEqual({
        loadingArticles: false,
        loadingArticleComments: false
    });
});