import React from 'react';
const image = require('../../assets/loader.gif');

export default function Loader({show}) {
    if (show) {
        return <img alt="loader" role="loader" src={image}/>
    }
    return null;
}