//******** REDUX
import { createStore, applyMiddleware } from 'redux'

//******** MIDDLEWARES
// import createSagaMiddleware from 'redux-saga'

//******** OTHER
import rootReducer from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension'
import persistState from 'redux-localstorage'
// import rootSaga from './sagas/main'


// create the saga and socket middleware

// const sagaMiddleware = createSagaMiddleware()


// put it all together
const middleWares = []
let store
if (process.env.NODE_ENV !== 'test') { //<----- NEED TO DISABLE THE LOCALSTORAGE ENHANCER WHEN TESTING, BECAUSE THERE'S NO BROWSER. COULD USE A LOCALSTORAGE POLYFILL INSTEAD...
  const enhancer = composeWithDevTools(
    applyMiddleware.apply(null, middleWares),
    persistState(null, {
      key: 'readableState'
    })
  )
  store = createStore(
    rootReducer,
    enhancer
  )
} else {
  store = createStore(
    rootReducer,
    applyMiddleware.apply(null, middleWares)
  )
}

// sagaMiddleware.run(rootSaga)

export { store }
