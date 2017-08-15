import React from 'react';
import ReactDOM from 'react-dom';
import CategoriesContainer from './CategoriesContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoriesContainer />, div);
});
