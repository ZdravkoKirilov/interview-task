import { commentsById, commentsAllIds, commentsAsChildList, repliesById, repliesAllIds, repliesAsChildList } from './selectedArticle';
import * as types from '../actions/actionTypes';

let result;
let action;

it('[commentsBId] should return the initial state', () => {
    expect(commentsById(undefined, {})).toEqual({});
});

it('[commentsById] should handle [LOAD_COMMENTS_SUCCESS]', () => {
    action = {
        type: types.LOAD_COMMENTS_SUCCESS,
        payload: {
            data: {
                byId: {
                    1: [{ id: 1 }]
                }
            }
        }
    }
    expect(commentsById(undefined, action)).toEqual(action.payload.data.byId);
});

it('[commentsById] should handle [ADD_COMMENT_SUCCESS]', () => {
    action = {
        type: types.ADD_COMMENT_SUCCESS,
        payload: {
            id: 1
        }
    }
    expect(commentsById(undefined, action)).toEqual({
        1: action.payload
    });
});

it('[commentsAllIds] should handle [LOAD_COMMENTS_SUCCESS]', () => {
    action = {
        type: types.LOAD_COMMENTS_SUCCESS,
        payload: {
            data: {
                allIds: [1, 2]
            }
        }
    }
    expect(commentsAllIds(undefined, action)).toEqual(action.payload.data.allIds);
});

it('[commentsAllIds] should handle [ADD_COMMENT_SUCCESS]', () => {
    action = {
        type: types.ADD_COMMENT_SUCCESS,
        payload: {
            id: 2
        }
    }
    expect(commentsAllIds([1], action)).toEqual([1, 2]);
});

it('[commentsAsChildList] should handle [LOAD_COMMENTS_SUCCESS]', () => {
    action = {
        type: types.LOAD_COMMENTS_SUCCESS,
        payload: {
            data: {
                allIds: [2, 3]
            },
            metadata: {
                id: 1
            }
        }
    }
    expect(commentsAsChildList(undefined, action)).toEqual({
        1: [2, 3]
    });
});

it('[commentsAsChildList] should handle [ADD_COMMENT_SUCCESS]', () => {
    action = {
        type: types.ADD_COMMENT_SUCCESS,
        payload: {
            id: 1,
            articleId: 3
        }
    }
    expect(commentsAsChildList({3: [2]}, action)).toEqual({
        3: [2, 1]
    });
});



it('[repliesBId] should return the initial state', () => {
    expect(repliesById(undefined, {})).toEqual({});
});

it('[repliesById] should handle [LOAD_REPLIES_SUCCESS]', () => {
    action = {
        type: types.LOAD_REPLIES_SUCCESS,
        payload: {
            data: {
                byId: {
                    1: [{ id: 1 }]
                }
            }
        }
    }
    expect(repliesById(undefined, action)).toEqual(action.payload.data.byId);
});

it('[repliesById] should handle [ADD_REPLY_SUCCESS]', () => {
    action = {
        type: types.ADD_REPLY_SUCCESS,
        payload: {
            id: 1
        }
    }
    expect(repliesById(undefined, action)).toEqual({
        1: action.payload
    });
});

it('[repliesAllIds] should handle [LOAD_REPLIES_SUCCESS]', () => {
    action = {
        type: types.LOAD_REPLIES_SUCCESS,
        payload: {
            data: {
                allIds: [1, 2]
            }
        }
    }
    expect(repliesAllIds(undefined, action)).toEqual(action.payload.data.allIds);
});

it('[repliesAllIds] should handle [ADD_REPLY_SUCCESS]', () => {
    action = {
        type: types.ADD_REPLY_SUCCESS,
        payload: {
            id: 2
        }
    }
    expect(repliesAllIds([1], action)).toEqual([1, 2]);
});

it('[repliesAsChildList] should handle [LOAD_REPLIES_SUCCESS]', () => {
    action = {
        type: types.LOAD_REPLIES_SUCCESS,
        payload: {
            data: {
                allIds: [2, 3]
            },
            metadata: {
                id: 1
            }
        }
    }
    expect(repliesAsChildList(undefined, action)).toEqual({
        1: [2, 3]
    });
});

it('[repliesAsChildList] should handle [ADD_REPLY_SUCCESS]', () => {
    action = {
        type: types.ADD_REPLY_SUCCESS,
        payload: {
            id: 1,
            parentCommentId: 3
        }
    }
    expect(repliesAsChildList({3: [2]}, action)).toEqual({
        3: [2, 1]
    });
});

