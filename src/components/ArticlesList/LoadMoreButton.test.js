import React from 'react';
import { render } from 'react-dom';
import Button from './LoadMoreButton';
import { Simulate } from 'react-dom/test-utils';

let div;
let onLoadMore = jest.fn();

beforeEach(function () {
    div = document.createElement('div');
});

it('renders without crashing', () => {
    render(<Button onLoadMore={onLoadMore} />, div);
});

it('renders correct button text', () => {
    let text = 'Press this';
    render(<Button onLoadMore={onLoadMore}>{text}</Button>, div);
    expect(div.querySelector('button').textContent).toBe(text);
});

it('fires a callback on click', () => {
    render(<Button onLoadMore={onLoadMore}>Click me</Button>, div);
    const DOMButton = div.querySelector('button');
    Simulate.click(DOMButton);
    expect(onLoadMore).toHaveBeenCalled();
});