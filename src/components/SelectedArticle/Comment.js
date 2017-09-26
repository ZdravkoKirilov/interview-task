import React from 'react';
import PropTypes from 'prop-types';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default function Comment({text, author}) {
    return (
        <ListGroupItem>{text}</ListGroupItem>
    )
}

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};