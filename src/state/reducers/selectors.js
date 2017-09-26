export const selectLoadedArticles = state => Object.values(state.articlesList.items.byId);
export const selectLoadedArticlesById = state => state.articlesList.items.byId;
export const selectLoadedArticleById = (state, id) => state.articlesList.items.byId[id];

export const selectCurrentPage = state => state.articlesList.pagination.current;
export const selectArticlesPerLoad = state => state.articlesList.pagination.loadQuantity;
export const selectArticlesLoadingState = state => state.loaders.loadingArticles;

export const selectCommentsAsTree = (state, articleId) => {
    const comments = state.selectedArticle.comments.asTree[articleId] || {children: {}};
    return Object.values(comments.children);
}