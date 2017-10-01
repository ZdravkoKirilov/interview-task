import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-addons-css-transition-group';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import Comment from './Comment/Comment';
import { selectReplies } from "../../state/reducers/selectors";

export default function CommentsContainer({ articleId, comments, repliesById, repliesAsChildList, onLoadReplies, onReplySubmit, visible }) {
	const children = comments.map(elem => {
		const replies = selectReplies(repliesById, repliesAsChildList, elem.id);
		const repliesCount = replies.length || elem.repliesCount;
		return (
			<Comment
				key={elem.id}
				{...elem}
				articleId={articleId}
				replies={replies}
				repliesCount={repliesCount}
				repliesById={repliesById}
				repliesAsChildList={repliesAsChildList}
				onLoadReplies={onLoadReplies}
				onReplySubmit={onReplySubmit}
			/>
		)
	});
	return (
		<Transition
			transitionName="fade"
			transitionEnterTimeout={300}
			transitionLeaveTimeout={300}
			transitionAppear={true}
			transitionAppearTimeout={400}
		>
			{visible ? <ListGroup>
				{children}
			</ListGroup> : null}
		</Transition>
	);
}

CommentsContainer.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object),
	articleId: PropTypes.number.isRequired,
	onLoadReplies: PropTypes.func.isRequired,
	onReplySubmit: PropTypes.func.isRequired,
	repliesById: PropTypes.object,
	repliesAsChildList: PropTypes.object,
	visible: PropTypes.bool.isRequired
};