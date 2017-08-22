import React from 'react';
import ReactDOM from 'react-dom';
import TestWrapper from '../../test/components/TestWrapper'
import ControlsContainer from './ControlsContainer';

describe('ControlsTests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TestWrapper>
                <ControlsContainer />
            </TestWrapper>,
            div
        )
    })
})
