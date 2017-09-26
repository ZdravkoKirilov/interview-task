import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';

function itemsById(state = {}, { type, payload }) {
    switch (type) {
        case actionTypes.LOAD_ARTICLES_SUCCESS:
            return {
                ...state,
                ...payload.byId
            }
        default:
            return state;
    }
}

function itemsAllIds(state = [], { type, payload }) {
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

function pagination(state = {
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