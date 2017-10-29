import React from 'react';
import ReactDOM from 'react-dom';
import TestWrapper from '../../test/components/TestWrapper'
import CommentsContainer from './CommentsContainer';

describe('CommentsTests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TestWrapper>
                <CommentsContainer />
            </TestWrapper>,
            div
        )
    })
})