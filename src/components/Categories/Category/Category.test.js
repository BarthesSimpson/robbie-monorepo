import React from 'react'
import ReactDOM from 'react-dom'
import Category from './Category'
import ShallowRenderer from 'react-test-renderer/shallow'

const renderer = new ShallowRenderer()

xdescribe('Category Tests', () => {
    it('renders without crashing', () => {
        renderer.render(<Category />)
        // const result = renderer.getRenderOutput();
    })
})

