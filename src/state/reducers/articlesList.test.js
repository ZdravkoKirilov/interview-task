import { itemsById, itemsAllIds, pagination } from './articlesList';
import * as types from '../actions/actionTypes';

let result;
let action;

it('[itemsbyId] should return the initial state', () => {
    expect(itemsById(undefined, {})).toEqual({});
});

it('[itemsbyId] should handle [LOAD_ARTICLES_SUCCESS]', () => {
    const articles = {
        1: ['test']
    }
    expect(itemsById(undefined, {
        type: types.LOAD_ARTICLES_SUCCESS,
        payload: {
            byId: articles
        }
    })).toEqual(articles);
});

it('[itemsbyId] should handle [ADD_COMMENT_SUCCESS]', () => {
    const articles = {
        '1': {
            commentsCount: 1
        }
    }
    expect(itemsById(articles, {
        type: types.ADD_COMMENT_SUCCESS,
        payload: {
            articleId: 1
        }
    })).toEqual({
        '1': {
            commentsCount: 2
        }
    });
});

it('[itemsbyId] should handle [ADD_REPLY_SUCCESS]', () => {
    const articles = {
        '1': {
            commentsCount: 1
        }
    }
    expect(itemsById(articles, {
        type: types.ADD_REPLY_SUCCESS,
        payload: {
            articleId: 1
        }
    })).toEqual({
        '1': {
            commentsCount: 2
        }
    });
});

it('[itemsAllIds] should return the initial state', () => {
    expect(itemsAllIds([], {})).toEqual([]);
});

it('[itemsAllIds] should handle [LOAD_ARTICLES_SUCCESS]', () => {
    const payload = {
        allIds: [1, 2]
    }
    expect(itemsAllIds([], { type: types.LOAD_ARTICLES_SUCCESS, payload })).toEqual(payload.allIds);
});

it('[pagination] should return the initial state', () => {
    expect(pagination(undefined, {})).toEqual({
        current: 0,
        loadQuantity: 5
    });
});

it('[pagination] should handle [CHANGE_PAGINATION]', () => {
    action = {
        type: types.CHANGE_PAGINATION,
        payload: 2
    }
    expect(pagination(undefined, action)).toEqual({
        current: action.payload,
        loadQuantity: 5
    });
});