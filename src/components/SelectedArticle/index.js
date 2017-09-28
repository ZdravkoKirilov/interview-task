import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';

import ArticleBody from './ArticleBody';
import ArticleComments from './ArticleComments';
import './index.css';

export default function SelectedArticle(props) {
	return (
		<Col xs={7}>
			<div className="article-details">
				<ArticleBody {...props} />
				<ArticleComments
					articleId={props.id}
					comments={props.comments}
					onCommentSubmit={props.onCommentSubmit}
					repliesById={props.repliesById}
					repliesAsChildList={props.repliesAsChildList}
					onLoadReplies={props.onLoadReplies}/>
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
	comments: PropTypes.arrayOf(PropTypes.object),
	onLoadReplies: PropTypes.func.isRequired,
	onCommentSubmit: PropTypes.func.isRequired,
	repliesById: PropTypes.object,
	repliesAsChildList: PropTypes.object
};