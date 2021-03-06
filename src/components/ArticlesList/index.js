import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import LoadMoreButton from './LoadMoreButton';
import ArticlesGroup from './ArticlesGroup';
import Loader from '../shared/Loader';
import './index.css';

export default function ArticlesList({ items, isLoading, onLoadMore, selectedArticleId }) {
    return (
        <Col xs={5}>
            <Panel className="articles-list">
                <ArticlesGroup items={items} selectedArticleId={selectedArticleId}/>
                <Loader show={isLoading}/>
                <LoadMoreButton onLoadMore={onLoadMore}>Load Next</LoadMoreButton>
            </Panel>
        </Col>
    )
}

ArticlesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool,
    onLoadMore: PropTypes.func.isRequired,
	selectedArticleId: PropTypes.number
};