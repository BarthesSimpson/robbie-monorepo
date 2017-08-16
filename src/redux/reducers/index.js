import { combineReducers } from 'redux'
import initialState from '../initialState'

function render(state = initialState.render, action) {
    switch (action.type) {
        case 'CATEGORIES_ARE_LOADING':
            return {
                ...state,
                categoriesAreLoading: action.bool
            }
        case 'POSTS_ARE_LOADING':
            return {
                ...state,
                postsAreLoading: {
                    ...state.postsAreLoading,
                    [action.category]: action.bool
                }
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

function posts(state = initialState.posts, action) {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                [action.category]: action.posts
            }
        default:
            return state
    }
}

export default combineReducers({
    categories,
    posts,
    render
})
