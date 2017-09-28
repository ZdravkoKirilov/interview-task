export function normalizeArticles(results) {
	return results.reduce(function (endResult, currentItem) {
		endResult['byId'][currentItem.id] = currentItem;
		endResult['allIds'].push(currentItem.id);
		return endResult;
	}, {byId: {}, allIds: []});
}

export function normalizeComments(results) {
	return results.reduce(function (endResult, currentItem) {
		endResult.byId[currentItem.id] = currentItem;
		endResult.allIds.push(currentItem.id);
		return endResult;
	}, {byId: {}, allIds: []});
}