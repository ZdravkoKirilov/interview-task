import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import MediaList from 'react-bootstrap/lib/MediaList';

export default function ArticlesGroup({items, selectedArticleId}) {
	return (
		<MediaList>
			{items.map(elem => <ArticleListItem key={elem.id}
												isSelected={elem.id === selectedArticleId}
												{...elem}>

			</ArticleListItem>)}
		</MediaList>
	)
}

ArticlesGroup.propTypes = {
	items: PropTypes
	.arrayOf(PropTypes.object)
		.isRequired,
	selectedArticleId: PropTypes.number
};