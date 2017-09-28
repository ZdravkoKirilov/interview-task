import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Transition from 'react-addons-css-transition-group'

export default function ArticlesGroup({items, selectedArticleId}) {
	const children =
		items.map(elem => (
			<ArticleListItem key={elem.id}
							 isSelected={elem.id === selectedArticleId}
							 {...elem}>
			</ArticleListItem>
		))
	;
	return (
		<ListGroup>
			<Transition
				transitionName="fade"
				transitionEnterTimeout={300}
				transitionLeaveTimeout={300}
				transitionAppear={true}
				transitionAppearTimeout={400}
			>
				{children}
			</Transition>
		</ListGroup>
	)
}

ArticlesGroup.propTypes = {
	items: PropTypes
	.arrayOf(PropTypes.object)
		.isRequired,
	selectedArticleId: PropTypes.number
};