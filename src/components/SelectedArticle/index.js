import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';

import ArticleBody from './ArticleBody';
import './index.css';

export default function SelectedArticle(props) {
    return (
        <Col xs={6}>
			<ArticleBody {...props}/>
		</Col>
    )
}

SelectedArticle.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	commentsCount: PropTypes.number,
	imageUrl: PropTypes.string,
};