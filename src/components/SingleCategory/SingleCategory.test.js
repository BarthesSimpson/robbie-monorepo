import React from 'react';
import ReactDOM from 'react-dom';
import TestWrapper from '../../../test/components/TestWrapper'
import SingleCategory from './SingleCategory';

describe('SingleCategory Tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TestWrapper>
                <SingleCategory />
            </TestWrapper>,
            div
        )
    })
})
