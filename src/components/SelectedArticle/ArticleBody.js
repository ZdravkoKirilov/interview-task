import React from 'react';
import PropTypes from 'prop-types';
import ImageFallback from 'react-image-fallback';
const defaultImage = require('../../assets/not-available.png');
const loader = require('../../assets/loader.gif');


export default function ArticleBody({title, text, imageUrl, commentsCount}) {
	return (
		<div className="article-details">
			<h2>{title}</h2>
			<ImageFallback
				src={imageUrl}
				fallbackImage={defaultImage}
				initialImage={loader}
				alt={title}
				className="article-details-img"
			/>
			<article>{text}</article>
		</div>
	)
}