import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import CommentsContainer from './CommentsContainer';
import TextBox from './TextBox';

export default class Comment extends Component{
	static propTypes = {
		text: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		onLoadReplies: PropTypes.func.isRequired,
		repliesCount: PropTypes.number.isRequired,
		replies: PropTypes.arrayOf(PropTypes.object),
		repliesById: PropTypes.object,
		repliesAsChildList: PropTypes.object
	};
	constructor(props) {
		super(props);
		this.state = {
			showReplies: false,
			showTextBox: false
		}
	}
	render() {
		const {text, author, id, repliesCount, replies, repliesById, repliesAsChildList, onLoadReplies} = this.props;
		return (
			<ListGroupItem className="article-comment"
						   onClick={() => onLoadReplies(
							   {
								   query: {parentCommentId: id}
							   }
						   )}>
				<p>Text: {text}</p>
				<p>Author: {author}</p>
				<CommentsContainer
					onLoadReplies={onLoadReplies}
					comments={replies}
					repliesById={repliesById}
					repliesAsChildList={repliesAsChildList}
				/>
			</ListGroupItem>
		)
	}
}