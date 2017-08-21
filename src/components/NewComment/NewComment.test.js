import React from 'react';
import ReactDOM from 'react-dom';
import NewComment from './NewComment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewComment />, div);
});
