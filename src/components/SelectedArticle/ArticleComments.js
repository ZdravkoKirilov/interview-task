import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CommentsContainer from './CommentsContainer';
import TextBox from './TextBox';

export default class ArticleComments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			commentText: ''
		}
	}

	render() {
		const {comments, repliesById, repliesAsChildList, onLoadReplies} = this.props;
		const {handleCommentTextChange, handleCommentTextSubmit} = this;
		const {commentText} = this.state;
		return (
			<div className="article-detail-comments">
				<TextBox
					value={commentText}
					onValueChange={handleCommentTextChange}
					placeholder="Body of comment"
					onEnter={handleCommentTextSubmit}
				/>
				<CommentsContainer
					comments={comments}
					onLoadReplies={onLoadReplies}
					repliesById={repliesById}
					repliesAsChildList={repliesAsChildList}
				/>
			</div>
		);
	}

	handleCommentTextSubmit = (text) => {
		const {articleId, onCommentSubmit} = this.props;
		onCommentSubmit(text, {articleId, parentCommentId: null});
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

ArticleComments.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object),
	articleId: PropTypes.number.isRequired,
	onCommentSubmit: PropTypes.func.isRequired,
	onLoadReplies: PropTypes.func.isRequired,
	repliesById: PropTypes.object,
	repliesAsChildList: PropTypes.object
};