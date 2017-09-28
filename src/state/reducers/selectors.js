export const selectLoadedArticles = state => Object.values(state.articlesList.items.byId);
export const selectLoadedArticlesById = state => state.articlesList.items.byId;
export const selectLoadedArticleById = (state, id) => state.articlesList.items.byId[id];

export const selectCurrentPage = state => state.articlesList.pagination.current;
export const selectArticlesPerLoad = state => state.articlesList.pagination.loadQuantity;
export const selectArticlesLoadingState = state => state.loaders.loadingArticles;

export const selectCommentsById = state => state.selectedArticle.comments.byId;
export const selectCommentsAsChildList = state => state.selectedArticle.comments.childList;

export const selectComments = (byId, comments, id) => {
    const mapped = comments[id] ? comments[id].map(childId => byId[childId]) : [];
    return mapped;
};