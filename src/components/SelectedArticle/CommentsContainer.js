import React from 'react';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import Comment from './Comment';

export default function CommentsContainer({comments, articleId, onLoadReplies}) {
	return (
		<ListGroup>
			{comments.map(elem => <Comment
				key={elem.id}
				articleId={articleId}
				onLoadReplies={onLoadReplies}
				{...elem}
			/>)}
		</ListGroup>
	);
}

CommentsContainer.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object),
	articleId: PropTypes.number.isRequired,
	onLoadReplies: PropTypes.func.isRequired,
};
CommentsContainer.defaultProps = {
	comments: []
};