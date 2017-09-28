import React from 'react';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import Comment from './Comment';
import { selectReplies } from "../../state/reducers/selectors";

export default function CommentsContainer({comments, repliesById, repliesAsChildList, onLoadReplies}) {
	const children = comments.map(elem => (
		<Comment
			key={elem.id}
			replies={selectReplies(repliesById, repliesAsChildList, elem.id)}
			repliesById={repliesById}
			repliesAsChildList={repliesAsChildList}
			onLoadReplies={onLoadReplies}
			{...elem}
		/>
	));
	return (
		<ListGroup>
			{children}
		</ListGroup>
	);
}

CommentsContainer.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object),
	onLoadReplies: PropTypes.func.isRequired,
	repliesById: PropTypes.object,
	repliesAsChildList: PropTypes.object
};