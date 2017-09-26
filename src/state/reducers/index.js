import {combineReducers} from 'redux';

import articlesListReducer from './aritlcesList';
import selectedArticleReducer from './selectedArticle';
import loadersReducer from './loaders';

const rootReducer = combineReducers({
    articlesList: articlesListReducer,
    selectedArticle: selectedArticleReducer,
    loaders: loadersReducer
});

export default rootReducer;