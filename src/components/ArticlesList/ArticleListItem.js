import React from 'react';
import PropTypes from 'prop-types';

import MediaListItem from 'react-bootstrap/lib/MediaListItem';
import MediaLeft from 'react-bootstrap/lib/MediaLeft';
import MediaBody from 'react-bootstrap/lib/MediaBody';
import MediaHeading from 'react-bootstrap/lib/MediaBody';
import ImageFallback from 'react-image-fallback';

const defaultImage = require('../../assets/not-available.png');
const loader = require('../../assets/loader.gif');

export default function ArticleListItem({ commentsCount, title, imageUrl, id, text }) {
    return (
        <MediaListItem>
            <MediaLeft>
                <ImageFallback
                    src={imageUrl}
                    fallbackImage={defaultImage}
                    initialImage={loader}
                    alt={title}
                    className="media-image"
                 />
            </MediaLeft>
            <MediaBody>
                <MediaHeading>{title}</MediaHeading>
            </MediaBody>
        </MediaListItem>
    )
}

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    commentsCount: PropTypes.number,
    imageUrl: PropTypes.string
}

ArticleListItem.defaultProps = {
    commentsCount: 0,
    imageUrl: defaultImage
};