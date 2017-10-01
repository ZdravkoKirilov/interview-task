import * as actions from './actions';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import API from '../../API/index';
import { normalizeArticles, normalizeComments } from "../reducers/utils";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
let payload;
let query;

beforeEach(() => {
    payload = 'some payload';
    store = mockStore({});
});

it('should call action[loadArticles_success] after loading the articles', async () => {
    query = {offset: 0, limit: 5};
    const expectedActions = [
        types.LOAD_ARTICLES_SUCCESS
    ];
    await store.dispatch(actions.loadArticles(query));
    expect(store.getActions().map(elem => elem.type)).toEqual(expectedActions);
});

it('should create action[loadArticles_success]', () => {
    const expectedAction = {
        type: types.LOAD_ARTICLES_SUCCESS,
        payload
    };
    expect(actions.loadArticles_success(payload)).toEqual(expectedAction);
});

it('should create action[loadArticles_fail]', () => {
    const expectedAction = {
        type: types.LOAD_ARTICLES_FAIL,
        payload
    };
    expect(actions.loadArticles_fail(payload)).toEqual(expectedAction);
});

it('should call action[loadComments_success] after loading the comments', async () => {
    query = {articleId: 0};
    const expectedActions = [
        types.LOAD_COMMENTS_SUCCESS
    ];
    await store.dispatch(actions.loadComments({query}));
    expect(store.getActions().map(elem => elem.type)).toEqual(expectedActions);
});

it('should create action[loadComments_success]', () => {
    const expectedAction = {
        type: types.LOAD_COMMENTS_SUCCESS,
        payload
    };
    expect(actions.loadComments_success(payload)).toEqual(expectedAction);
});

it('should create action[loadComments_fail]', () => {
    const expectedAction = {
        type: types.LOAD_COMMENTS_FAIL,
        payload
    };
    expect(actions.loadComments_fail(payload)).toEqual(expectedAction);
});

it('should call action[addComment_success] after adding a comment', async () => {
    query = {articleId: 0};
    const expectedActions = [
        types.ADD_COMMENT_SUCCESS
    ];
    await store.dispatch(actions.addComment({query}));
    expect(store.getActions().map(elem => elem.type)).toEqual(expectedActions);
});

it('should create action[addComment_success]', () => {
    const expectedAction = {
        type: types.ADD_COMMENT_SUCCESS,
        payload
    };
    expect(actions.addComment_success(payload)).toEqual(expectedAction);
});

it('should create action[addComment_fail]', () => {
    const expectedAction = {
        type: types.ADD_COMMENT_FAIL,
        payload
    };
    expect(actions.addComment_fail(payload)).toEqual(expectedAction);
});

it('should call action[loadReplies_success] after adding a comment', async () => {
    query = {articleId: 0};
    const expectedActions = [
        types.LOAD_REPLIES_SUCCESS
    ];
    await store.dispatch(actions.loadReplies({query}));
    expect(store.getActions().map(elem => elem.type)).toEqual(expectedActions);
});

it('should create action[loadReplies_success]', () => {
    const expectedAction = {
        type: types.LOAD_REPLIES_SUCCESS,
        payload
    };
    expect(actions.loadReplies_success(payload)).toEqual(expectedAction);
});

it('should create action[loadReplies_fail]', () => {
    const expectedAction = {
        type: types.LOAD_REPLIES_FAIL,
        payload
    };
    expect(actions.loadReplies_fail(payload)).toEqual(expectedAction);
});

it('should call action[loadReplies_success] after adding a comment', async () => {
    query = {articleId: 0};
    const expectedActions = [
        types.ADD_REPLY_SUCCESS
    ];
    await store.dispatch(actions.addReply({query}));
    expect(store.getActions().map(elem => elem.type)).toEqual(expectedActions);
});

it('should create action[loadReplies_success]', () => {
    const expectedAction = {
        type: types.ADD_REPLY_SUCCESS,
        payload
    };
    expect(actions.addReply_success(payload)).toEqual(expectedAction);
});

it('should create action[loadReplies_fail]', () => {
    const expectedAction = {
        type: types.ADD_REPLY_FAIL,
        payload
    };
    expect(actions.addReply_fail(payload)).toEqual(expectedAction);
});

it('should create action[changeCurrentPage]', () => {
    const expectedAction = {
        type: types.CHANGE_PAGINATION,
        payload: 2
    };
    expect(actions.changeCurrentPage(2)).toEqual(expectedAction);
});

it('should create action[showArticlesLoader]', () => {
    const expectedAction = {
        type: types.SHOW_ARTICLES_LOADER,
        payload
    };
    expect(actions.showArticlesLoader(payload)).toEqual(expectedAction);
});

it('should create action[showCommentsLoader]', () => {
    const expectedAction = {
        type: types.SHOW_COMMENTS_LOADER,
        payload
    };
    expect(actions.showCommentsLoader(payload)).toEqual(expectedAction);
});