import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { mount } from 'enzyme'
import sinon from 'sinon'

import YesNoDialog from './YesNoDialog'

const DialogMethods = {
    _onConfirm: sinon.spy(),
    _onCancel: sinon.spy()
}
const testProps = {
    message: 'Are you sure you want to do that?',
    confirmText: 'Yes',
    cancelText: 'No',
    ...DialogMethods
}

describe('YesNoDialog Tests', () => {
    let component

    beforeEach(() => {
        component = mount(<YesNoDialog {...testProps} />)
    })
    it('renders without crashing', () => {
        expect(component).toBeTruthy()
    })

    it('confirms when confirm button is clicked', () => {
        const btn = component.find('.btn-yes')
        btn.simulate('click')
        expect(testProps._onConfirm.callCount).toBe(1)
    })

    it('message renders above buttons', () => {
        const h3 = component.find('h3')
        expect(h3.html()).toBe('<h3>'+testProps.message+'</h3>')
    })

    it('confirmText renders on confirm button', () => {
        const btn = component.find('.btn-yes')
        expect(btn.text()).toBe(testProps.confirmText)
    })

    it('cancels when cancel button is clicked', () => {
        const btn = component.find('.btn-no')
        btn.simulate('click')
        expect(testProps._onCancel.callCount).toBe(1)
    })

    it('cancelText renders on cancel button', () => {
        const btn = component.find('.btn-no')
        expect(btn.text()).toBe(testProps.cancelText)
    })
})
