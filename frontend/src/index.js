import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'normalize.css'
import AppContainer from './components/App/AppContainer'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
