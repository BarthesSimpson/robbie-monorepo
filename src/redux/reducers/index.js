import { combineReducers } from 'redux'
import initialState from '../initialState'

function render(state = initialState.render, action) {
    switch (action.type) {
        case 'CATEGORIES_ARE_LOADING':
            return {
                ...state,
                categoriesAreLoading: action.categoriesAreLoading
            }
        default:
            return state
    }
}

function categories(state = initialState.categories, action) {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return action.categories
        default:
            return state
    }
}

export default combineReducers({
    categories,
    render
})
