import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import CommentsContainer from '../CommentsContainer';
import TextBox from './TextBox';
import Content from './Content';
import Loader from '../../shared/Loader';

export default class Comment extends Component {
	static propTypes = {
		articleId: PropTypes.number.isRequired,
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
			showTextBox: false,
			textBoxValue: '',
			isLoadingReplies: false
		}
	}
	render() {
		const { articleId, text, author, createdAt, repliesCount, replies, repliesById, repliesAsChildList, onLoadReplies, onReplySubmit } = this.props;
		const { textBoxValue, showTextBox, showReplies, isLoadingReplies } = this.state;
		const { handleReplySubmit, handleTextBoxChange, handleToggleReplies, handleToggleTextBox } = this;

		return (
			<ListGroupItem className="comment">
				<Content
					text={text}
					author={author}
					createdAt={createdAt}
					repliesCount={repliesCount}
					expandedReplies={showReplies}
					visibleTextBox={showTextBox}
					onToggleReplies={handleToggleReplies}
					onToggleTextBox={handleToggleTextBox}
				/>
				{showTextBox ? <TextBox
					placeholder="Body of reply"
					value={textBoxValue}
					onEnter={handleReplySubmit}
					onValueChange={handleTextBoxChange}
					autofocus={true}
				/> : null}
				<Loader show={isLoadingReplies} />
				<CommentsContainer
					articleId={articleId}
					onLoadReplies={onLoadReplies}
					onReplySubmit={onReplySubmit}
					comments={replies}
					repliesById={repliesById}
					repliesAsChildList={repliesAsChildList}
					visible={showReplies}
				/>
			</ListGroupItem>
		)
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.replies !== nextProps.replies) {
			this.setState(prevState => ({ ...prevState, isLoadingReplies: false }));
		}
	}
	handleToggleReplies = () => {
		const { showReplies } = this.state;
		const { id, onLoadReplies } = this.props;
		this.setState(prevState => ({
			...prevState,
			showReplies: !showReplies,
			isLoadingReplies: !showReplies
		}));
		!showReplies && onLoadReplies({ query: { parentCommentId: id } });
	}
	handleToggleTextBox = () => {
		const { showReplies } = this.state;
		const { id, onLoadReplies } = this.props;
		!showReplies && onLoadReplies({ query: { parentCommentId: id } });
		this.setState(prevState => ({
			...prevState,
			showTextBox: !prevState.showTextBox,
			textBoxValue: ''
		}));
	}
	handleTextBoxChange = (text) => {
		this.setState(prevState => ({ ...prevState, textBoxValue: text }));
	}
	handleReplySubmit = (text) => {
		const { articleId, id, onReplySubmit } = this.props;
		this.setState(prevState => ({
			...prevState,
			textBoxValue: '',
			showTextBox: false,
			showReplies: true,
			isLoadingReplies: true
		}));
		onReplySubmit(text, { parentCommentId: id, articleId });
	}
}