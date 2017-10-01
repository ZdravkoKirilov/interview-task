import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentsContainer from './CommentsContainer';
import TextBox from './Comment/TextBox';
import Loader from '../shared/Loader';

export default class ArticleComments extends Component {
	static propTypes = {
		comments: PropTypes.arrayOf(PropTypes.object),
		isLoadingComments: PropTypes.bool.isRequired,
		articleId: PropTypes.number.isRequired,
		onCommentSubmit: PropTypes.func.isRequired,
		onLoadReplies: PropTypes.func.isRequired,
		onReplySubmit: PropTypes.func.isRequired,
		repliesById: PropTypes.object,
		repliesAsChildList: PropTypes.object
	}
	constructor(props) {
		super(props);
		this.state = {
			commentText: '',
			isLoadingComments: false
		}
	}

	render() {
		const { articleId, comments, repliesById, repliesAsChildList, onLoadReplies, onReplySubmit, isLoadingComments } = this.props;
		const { handleCommentTextChange, handleCommentTextSubmit } = this;
		const { commentText } = this.state;
		return (
			<div className="article-detail-comments">
				<TextBox
					value={commentText}
					onValueChange={handleCommentTextChange}
					placeholder="Body of comment"
					onEnter={handleCommentTextSubmit}
					visible={true}
				/>
				<Loader show={isLoadingComments}/>
				<CommentsContainer
					articleId={articleId}
					comments={comments}
					onLoadReplies={onLoadReplies}
					onReplySubmit={onReplySubmit}
					repliesById={repliesById}
					repliesAsChildList={repliesAsChildList}
					visible={true}
				/>
			</div>
		);
	}
	handleCommentTextSubmit = (text) => {
		const { articleId, onCommentSubmit } = this.props;
		onCommentSubmit(text, { articleId, parentCommentId: null });
		this.setState(prevState => {
			return {
				...prevState,
				commentText: ''
			}
		});
	};
	handleCommentTextChange = (text) => {
		this.setState(prevState => {
			return {
				...prevState,
				commentText: text
			}
		});
	}
}