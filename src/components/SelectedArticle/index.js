import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';

import ArticleBody from './ArticleBody';
import ArticleComments from './ArticleComments';
import './index.css';

export default function SelectedArticle(props) {
	return (
		<Col xs={6}>
			<div className="article-details">
				<ArticleBody {...props} />
				<ArticleComments articleId={props.id} comments={props.comments} />
			</div>
		</Col>
	)
}

SelectedArticle.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	commentsCount: PropTypes.number,
	imageUrl: PropTypes.string,
	comments: PropTypes.arrayOf(PropTypes.object)
};