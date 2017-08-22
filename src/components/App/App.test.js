import React from 'react'
import ReactDOM from 'react-dom'
import TestWrapper from '../../test/components/TestWrapper'
import AppContainer from './AppContainer'

describe('App Tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TestWrapper>
                <AppContainer />
            </TestWrapper>,
            div
        )
    })
})
