import React from 'react';
import { render } from 'react-dom';
import ArticleListItem from './ArticleListItem';
import { BrowserRouter } from 'react-router-dom';

let div, id, title, text, commentsCount;

beforeEach(function () {
    div = document.createElement('div');
    id = 1;
    title = 'some title';
    text = 'some text';
    commentsCount = 2;
    render(<BrowserRouter><ArticleListItem id={id} title={title} text={text} commentsCount={commentsCount}/></BrowserRouter>, div);
});

it('renders correct article link', () => {
    expect(div.querySelector('a').href.endsWith(`/articles/${id}`)).toBe(true);
});

it('renders correct title', () => {
    expect(div.querySelector('.article-header').textContent).toBe(title);
});

it('renders correct text', () => {
    expect(div.querySelector('.content-preview').textContent).toBe(text);
});

it('renders correct text', () => {
    expect(div.querySelector('.comments-count').textContent).toBe(`${commentsCount} comments`);
});

it('renders article image', () => {
    expect(div.querySelectorAll('img').length).toBe(1);
});