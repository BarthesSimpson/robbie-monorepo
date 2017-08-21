import React from 'react';
import ReactDOM from 'react-dom';
import TestWrapper from '../../../test/components/TestWrapper'
import NewPostContainer from './NewPostContainer';

describe('New Post Tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TestWrapper>
                <NewPostContainer />
            </TestWrapper>,
            div
        )
    })
})
