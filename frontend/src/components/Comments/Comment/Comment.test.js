import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './Comment'
import ShallowRenderer from 'react-test-renderer/shallow'

const renderer = new ShallowRenderer()

xdescribe('Comment Tests', () => {
    it('renders without crashing', () => {
        renderer.render(<Comment />)
        // const result = renderer.getRenderOutput();
    })
})
