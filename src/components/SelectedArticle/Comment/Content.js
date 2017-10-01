import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function CommentContent({ text, author, createdAt, repliesCount, expandedReplies, visibleTextBox, onToggleReplies, onToggleTextBox }) {
    return (
        <div className="content-body">
            <div className="header">
                <div className="header-left">
                    <span className="author">{author}</span>
                    <span className="created-time">{moment(createdAt).format('DD/MM/YYYY hh:mm')}</span>
                </div>

                <div className="header-right">
                    <a className="reply-control toggle-replies"
                        onClick={onToggleReplies}>
                        {expandedReplies ? 'hide replies' : `${repliesCount} replies`}
                    </a>

                    <a className="reply-control toggle-textbox"
                        onClick={onToggleTextBox}
                    >
                        {visibleTextBox ? 'discard reply' : 'reply'}
                    </a>
                </div>

            </div>
            <p className="content">{text}</p>
        </div>
    )
}

CommentContent.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
    repliesCount: PropTypes.number.isRequired,
    expandedReplies: PropTypes.bool.isRequired,
    visibleTextBox: PropTypes.bool.isRequired,
    onToggleReplies: PropTypes.func.isRequired,
    onToggleTextBox: PropTypes.func.isRequired
}