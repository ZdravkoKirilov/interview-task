import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import MediaList from 'react-bootstrap/lib/MediaList';

export default function ArticlesGroup({ items }) {
    return (
        <MediaList>{items.map(elem => <ArticleListItem key={elem.id} {...elem}></ArticleListItem>)}</MediaList>
    )
}

ArticlesGroup.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};