import React from 'react';
import './Loader.css';
const image = require('../../assets/loader.gif');

export default function Loader({show}) {
    if (show) {
        return <img className="loader" alt="loader" src={image}/>
    }
    return null;
}