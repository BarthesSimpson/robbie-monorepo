import React from 'react'
import ReactDOM from 'react-dom'
import Post from './Post'
import ShallowRenderer from 'react-test-renderer/shallow'

const renderer = new ShallowRenderer()

xdescribe('Post Tests', () => {
    it('renders without crashing', () => {
        renderer.render(<Post />)
        // const result = renderer.getRenderOutput();
    })
}) 
