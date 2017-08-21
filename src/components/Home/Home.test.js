import React from 'react';
import ReactDOM from 'react-dom';
import TestWrapper from '../../../test/components/TestWrapper'
import Home from './Home';

describe('Home Tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TestWrapper>
                <Home />
            </TestWrapper>,
            div
        )
    })
})
