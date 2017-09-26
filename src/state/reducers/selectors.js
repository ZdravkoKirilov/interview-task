export const selectLoadedArticles = (state) => Object.values(state.articlesList.items.byId);
export const selectCurrentPage = (state) => state.articlesList.pagination.current;
export const selectArticlesPerLoad = (state) => state.articlesList.pagination.loadQuantity;
export const selectArticlesLoadingState = (state) => state.loaders.loadingArticles;