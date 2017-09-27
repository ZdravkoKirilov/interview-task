export function createNestedPath(articleId, parentCommentIds = []) {
	if (parentCommentIds.length > 0) {
		let result = parentCommentIds.reduce((endResult, currentItem) => {
			endResult += `.${currentItem}.children`;
			return endResult;
		}, 'children');
		return result;
	} else {
		return '';
	}
}

export function normalizeArticles(results) {
	return results.reduce(function (endResult, currentItem) {
		endResult['byId'][currentItem.id] = currentItem;
		endResult['allIds'].push(currentItem.id);
		return endResult;
	}, {byId: {}, allIds: []});
}

export function normalizeComments(results, articleId) {
	return results.reduce(function (endResult, currentItem) {
		endResult.byId[currentItem.id] = currentItem;
		endResult.allIds.push(currentItem.id);
		endResult.asTree[currentItem.id] = {id: currentItem.id, children: {}};
		return endResult;
	}, {byId: {}, allIds: [], asTree: {}});
}