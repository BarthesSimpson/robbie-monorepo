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
        case 'POST_IS_UPDATING':
            return {
                ...state,
                postIsUpdating: {
                    ...state.postIsUpdating,
                    [action.id]: action.bool
                }
            }
        case 'SORT_BY':
            return {
                ...state,
                sortedBy: action.col
            }
        default:
            return state
    }
}

function categories(state = initialState.categories, action) {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return action.categories.reduce((l, r) => {
                l[r.name] = l[r.name] || []
                return l
            }, state)
        case 'SET_POSTS':
            return {
                ...state,
                [action.category]: action.posts
            }
        default:
            return state
    }
}

function posts(state = initialState.posts, action) {
    switch (action.type) {
        case 'DOWNLOAD_POST':
            return {
                ...state,
                [action.post.id]: action.post
            }
        default:
            return state
    }
}

function comments(state = initialState.comments, action) {
    switch (action.type) {
        case 'SET_COMMENTS':
            return {
                ...state,
                [action.postId]: action.comments
            }
        // case 'DOWNLOAD_COMMENT':
        //     return {
        //         ...state,
        //         [action.comment.id]: action.comment
        //     }
        default:
            return state
    }
}

function controls(state = initialState.controls, action) {
    switch (action.type) {
        case 'EDIT_POST':
            return {
                ...state,
                editing: action.id,
                content: action.content,
                title: action.title
            }
        case 'CANCEL_EDIT':
            return {
                ...state,
                editing: null,
                content: null,
                title: null
            }
        default:
            return state
    }
}

export default combineReducers({
    categories,
    posts,
    comments,
    controls,
    render
})
