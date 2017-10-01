import React from 'react';
import { render } from 'react-dom';
import ArticleBody from './ArticleBody';

let div, title, text;

beforeEach(function () {
    div = document.createElement('div');
    title = 'some title';
    text = 'some text';
    render(<ArticleBody title={title} text={text}/>, div);
});

it('renders correct title', () => {
    expect(div.querySelector('.article-details-title').textContent).toBe(title);
});

it('renders correct text', () => {
    expect(div.querySelector('.article-details-content').textContent).toBe(text);
});

it('renders an image', () => {
    expect(div.querySelectorAll('img').length).toBe(1);
});