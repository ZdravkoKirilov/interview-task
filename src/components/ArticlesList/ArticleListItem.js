import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ImageFallback from 'react-image-fallback';
import {Link} from 'react-router-dom';

const defaultImage = require('../../assets/not-available.png');
const loader = require('../../assets/loader.gif');

export default function ArticleListItem({commentsCount, title, imageUrl, id, text, isSelected}) {

	return (
		<ListGroupItem className={classNames('article-list-item', {isSelected})}>
			<Link  className="link-wrapper" to={`/articles/${id}`}>
				<div className="left-image">
					<ImageFallback
						src={imageUrl}
						fallbackImage={defaultImage}
						initialImage={loader}
						alt={title}
						className="media-image"
					/>
				</div>
				<div className="list-item-body">
					<h1 className="article-header">{title}</h1>
					<p className="content-preview">{text.length > 30 ? (text.substring(0, 30) + '...') : text}</p>
					<p className="comments-count">{commentsCount} comments</p>
				</div>
			</Link>
		</ListGroupItem>
	)
}

ArticleListItem.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	commentsCount: PropTypes.number,
	imageUrl: PropTypes.string,
	isSelected: PropTypes.bool
};