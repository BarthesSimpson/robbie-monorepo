import React from 'react';
import ReactDOM from 'react-dom';
import EditComment from './EditComment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditComment />, div);
});
