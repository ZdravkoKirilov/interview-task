import React from 'react';
import { render } from 'react-dom';
import Loader from './Loader';

let div;

beforeEach(function () {
  div = document.createElement('div');
});

it('renders without crashing', () => {
  render(<Loader />, div);
});

it('does not render when "show" prop is not true', () => {
  render(<Loader />, div);
  expect(div.querySelectorAll('img').length).toBe(0);
});

it('renders when "show" prop is true', () => {
  render(<Loader show={true}/>, div);
  expect(div.querySelectorAll('img').length).toBe(1);
});
