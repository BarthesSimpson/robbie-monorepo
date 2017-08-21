import React from 'react';
import ReactDOM from 'react-dom';
import TestWrapper from '../../../test/components/TestWrapper'
import CategoriesContainer from './CategoriesContainer';

describe('Categories Tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TestWrapper>
                <CategoriesContainer />
            </TestWrapper>,
            div
        )
    })
})
