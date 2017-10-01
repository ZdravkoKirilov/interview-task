import React from 'react';
import { render } from 'react-dom';
import Content from './Content';
import { Simulate } from 'react-dom/test-utils';
import moment from 'moment';

let div, author, text, createdAt, repliesCount, expandedReplies, visibleTextBox, onToggleReplies, onToggleTextBox;

beforeEach(function () {
    div = document.createElement('div');
    author = 'some author';
    text = 'some text';
    createdAt = new Date().getTime();
    repliesCount = 5;
    onToggleReplies = jest.fn();
    onToggleTextBox = jest.fn();
});

function renderIntoDiv(expandedReplies, visibleTextBox) {
    render(<Content
        author={author}
        text={text}
        createdAt={createdAt}
        repliesCount={repliesCount}
        onToggleReplies={onToggleReplies}
        onToggleTextBox={onToggleTextBox}
        expandedReplies={expandedReplies}
        visibleTextBox={visibleTextBox}
    />, div);
}

it('renders without crashing', () => {
    renderIntoDiv(false, false);
});

it('renders correct author', () => {
    renderIntoDiv(false, false);
    expect(div.querySelector('.author').textContent).toBe(author);
});

it('renders correct repliesCount', () => {
    renderIntoDiv(false, false);
    expect(div.querySelector('.toggle-replies').textContent).toBe(`${repliesCount} replies`);
});

it('renders "hide replies" when replies list is visible', () => {
    renderIntoDiv(true, false);
    expect(div.querySelector('.toggle-replies').textContent).toBe(`hide replies`);
});

it('renders "reply" when textbox is hidden', () => {
    renderIntoDiv(false, false);
    expect(div.querySelector('.toggle-textbox').textContent).toBe(`reply`);
});

it('renders "discard reply" when textbox is visible', () => {
    renderIntoDiv(false, true);
    expect(div.querySelector('.toggle-textbox').textContent).toBe(`discard reply`);
});

it('renders correct createdAt date', () => {
    renderIntoDiv(false, false);
    expect(div.querySelector('.created-time').textContent).toBe(moment(createdAt).format('DD/MM/YYYY hh:mm'));
});

it('renders correct text', () => {
    renderIntoDiv(false, false);
    expect(div.querySelector('.content').textContent).toBe(text);
});

it('calls toggleReplies callback', () => {
    renderIntoDiv(false, false);
    Simulate.click(div.querySelector('.toggle-replies'));
    expect(onToggleReplies).toHaveBeenCalled();
});

it('calls toggleTextBox callback', () => {
    renderIntoDiv(false, false);
    Simulate.click(div.querySelector('.toggle-textbox'));
    expect(onToggleTextBox).toHaveBeenCalled();
});