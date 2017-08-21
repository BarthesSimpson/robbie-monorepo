import React from 'react';
import ReactDOM from 'react-dom';
import NewPost from './NewPost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewPost />, div);
});
