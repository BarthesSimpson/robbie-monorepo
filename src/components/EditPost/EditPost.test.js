import React from 'react';
import ReactDOM from 'react-dom';
import EditPost from './EditPost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditPost />, div);
});
