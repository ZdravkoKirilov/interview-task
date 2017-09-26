import React from 'react';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import Comment from './Comment';

export default function CommentsContainer({ comments, articleId }) {
    return (
        <ListGroup>
            {comments.map(elem => <Comment key={elem.id} {...elem} />)}
        </ListGroup>
    );
}

CommentsContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    articleId: PropTypes.number.isRequired
};
CommentsContainer.defaultProps = {
    comments: []
}