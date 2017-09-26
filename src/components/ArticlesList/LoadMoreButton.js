import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';

export default function LoadMoreButton({ children, onLoadMore }) {
    return (
        <div className="load-more-button">
            <Button bsStyle="primary" onClick={onLoadMore}>{children}</Button>
        </div>
    )
}

LoadMoreButton.propTypes = {
    onLoadMore: PropTypes.func.isRequired
};