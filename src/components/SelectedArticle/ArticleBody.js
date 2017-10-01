import React from 'react';
import PropTypes from 'prop-types';
import ImageFallback from 'react-image-fallback';
const defaultImage = require('../../assets/not-available.png');
const loader = require('../../assets/loader.gif');

export default function ArticleBody({ title, text, imageUrl }) {
	return (
		<div className="article-details-body">
			<h2 className="article-details-title">{title}</h2>
			<ImageFallback
				src={imageUrl}
				fallbackImage={defaultImage}
				initialImage={loader}
				alt={title}
				className="article-details-img"
			/>
			<article className="article-details-content">{text}</article>
		</div>
	)
}

ArticleBody.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	imageUrl: PropTypes.string,
};