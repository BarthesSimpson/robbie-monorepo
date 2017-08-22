import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {}
const store = mockStore(initialState)

const TestWrapper = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
            </BrowserRouter>
        </Provider>
    )
}

export default TestWrapper