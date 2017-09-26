import React from 'react';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import Comment from './Comment';

export default function ArticleComments({ comments, articleId }) {
    return (
        <ListGroup className="article-detail-comments">
            {comments.map(elem => <Comment key={elem.id} {...elem} />)}
        </ListGroup>
    );
}

ArticleComments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    articleId: PropTypes.number.isRequired
};
ArticleComments.defaultProps = {
    comments: []
}