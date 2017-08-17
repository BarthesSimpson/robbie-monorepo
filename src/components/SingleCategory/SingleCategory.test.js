import React from 'react';
import ReactDOM from 'react-dom';
import SingleCategory from './SingleCategory';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleCategory />, div);
});
