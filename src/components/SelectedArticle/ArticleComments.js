import React from 'react';
import PropTypes from 'prop-types';

import CommentsContainer from './CommentsContainer';

export default function ArticleComments({ comments, articleId }) {
    return (
        <div className="article-detail-comments">
            <CommentsContainer articleId={articleId} comments={comments}/>
        </div>
    );
}

ArticleComments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    articleId: PropTypes.number.isRequired
};
ArticleComments.defaultProps = {
    comments: []
}