import React from 'react'
import ReactDOM from 'react-dom'
import TestWrapper from '../../../test/components/TestWrapper'
import EditCommentContainer from './EditCommentContainer'

describe('EditComment Tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TestWrapper>
                <EditCommentContainer />
            </TestWrapper>,
            div
        )
    })
})
