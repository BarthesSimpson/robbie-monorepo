import { combineReducers } from 'redux'
import initialState from '../initialState'

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default combineReducers({
    main: mainReducer
})
