import React from 'react';
import PropTypes from 'prop-types';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import CommentsContainer from './CommentsContainer';

export default function Comment({ text, author, id, repliesCount, articleId, parentCommentId, children }) {
    parentCommentId = parentCommentId || [];
    return (
        <ListGroupItem>
            <p>Text: {text}</p>
            <p>Author: {author}</p>
            <CommentsContainer
                articleId={articleId}
                parentCommentId={[...parentCommentId, id]}
                comments={[]}
            />
        </ListGroupItem>
    )
}

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    parentCommentId: PropTypes.number,
    articleId: PropTypes.number.isRequired,
    repliesCount: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.object)
};
Comment.defaultProps = {
    children: []
}