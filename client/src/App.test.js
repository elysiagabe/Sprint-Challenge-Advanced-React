import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders app header', () => {
  const { getByText } = render(<App />);
  getByText(/100 most searched women's world cup players/i)
  getByText(/data collected by google trends from June-July 2019/i)
})