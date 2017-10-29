import React from 'react'
import ReactDOM from 'react-dom'
import TestWrapper from '../../test/components/TestWrapper'
import NewCommentContainer from './NewCommentContainer'

describe('NewCommentTests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TestWrapper>
                <NewCommentContainer />
            </TestWrapper>,
            div
        )
    })
})
