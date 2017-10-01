import React from 'react';
import { render } from 'react-dom';
import TextBox from './TextBox';
import { Simulate } from 'react-dom/test-utils';

let div, value, placeholder, onEnter, onValueChange;

beforeEach(function () {
    value = 'some value';
    placeholder = 'some placeholder';
    div = document.createElement('div');
    onEnter = jest.fn();
    onValueChange = jest.fn();
    render(<TextBox value={value} onEnter={onEnter} onValueChange={onValueChange} placeholder={placeholder}/>, div);
});

it('renders correct value', () => {
    expect(div.querySelector('textarea').value).toBe(value);
});

it('renders correct placeholder', () => {
    expect(div.querySelector('textarea').placeholder).toBe(placeholder);
});

it('fires a callback on value change with correct parameters', () => {
    const textarea = div.querySelector('textarea');
    Simulate.change(textarea);
    expect(onValueChange).toHaveBeenCalled();
    expect(onValueChange.mock.calls.length).toBe(1);
    expect(onValueChange.mock.calls[0][0]).toBe(value);
});

it('fires a callback on submit[enter press] with correct parameters', () => {
    const textarea = div.querySelector('textarea');
    Simulate.keyUp(textarea, {keyCode: 13});
    expect(onEnter).toHaveBeenCalled();
    expect(onEnter.mock.calls.length).toBe(1);
    expect(onEnter.mock.calls[0][0]).toBe(value);
});

it('fires a callback on submit[button press] with correct parameters', () => {
    const button = div.querySelector('button');
    Simulate.click(button);
    expect(onEnter).toHaveBeenCalled();
    expect(onEnter.mock.calls.length).toBe(1);
    expect(onEnter.mock.calls[0][0]).toBe(value);
});
