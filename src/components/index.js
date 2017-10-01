import React from 'react';
import ArticlesList from '../containers/ArticlesList';
import SelectedArticle from '../containers/SelectedArticle';

export default function ContentWrapper(props) {
	return (
		<div>
			<ArticlesList {...props} />
			<SelectedArticle {...props} />
		</div>
	)
}