import React from 'react';
import PropTypes from 'prop-types';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import CommentsContainer from './CommentsContainer';

export default function Comment({text, author, id, repliesCount, articleId, parentCommentId, children, onLoadReplies}) {
	parentCommentId = parentCommentId || [];
	return (
		<ListGroupItem className="article-comment"
					   onClick={() => onLoadReplies(
						   {
							   query: {articleId, parentCommentId: id},
							   metadata: {
								   parentCommentIds: [...parentCommentId, id]
							   }
						   }
					   )}>
			<p>Text: {text}</p>
			<p>Author: {author}</p>
			<CommentsContainer
				articleId={articleId}
				parentCommentId={[...parentCommentId, id]}
				comments={[]}
				onLoadReplies={onLoadReplies}
			/>
		</ListGroupItem>
	)
}

Comment.propTypes = {
	text: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	parentCommentId: PropTypes.arrayOf(PropTypes.string),
	articleId: PropTypes.number.isRequired,
	onLoadReplies: PropTypes.func.isRequired,
	repliesCount: PropTypes.number.isRequired,
	children: PropTypes.arrayOf(PropTypes.object)
};
Comment.defaultProps = {
	children: []
};