import React from 'react'
import ReactDOM from 'react-dom'
import TestWrapper from '../../../test/components/TestWrapper'
import SinglePostContainer from './SinglePostContainer'

// import sinon from 'sinon'

describe('SinglePost Tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TestWrapper>
                <SinglePostContainer />
            </TestWrapper>,
            div
        )
    })
})
