import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
