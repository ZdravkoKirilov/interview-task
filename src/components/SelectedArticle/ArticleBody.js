import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleBody({title, text, imageUrl, commentsCount}) {
	return (
		<div className="article-details">
			<h2>{title}</h2>
			<img className="article-details-img" src={imageUrl}/>
			<article>{text}</article>
		</div>
	)
}