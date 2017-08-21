import React from 'react'
import ReactDOM from 'react-dom'
import TestWrapper from '../../../test/components/TestWrapper'
import EditPostContainer from './EditPostContainer'

describe('EditPost Tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TestWrapper>
                <EditPostContainer />
            </TestWrapper>,
            div
        )
    })
})
