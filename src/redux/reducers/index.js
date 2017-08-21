import { combineReducers } from 'redux'
import initialState from '../initialState'
import { dummyPost } from '../../constants/dummy'

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
        case 'DELETE_POST':
            //THIS IS A GROSS WAY TO DO IT, BUT IT'S THE LEAST OF THREE EVILS
            return Object.keys(state).reduce((l, r) => {
                l[r] = state[r].filter(p => p.id !== action.postId)
                return l
            }, {})
        case 'ADD_POST_TO_CATEGORY':
            console.log({ action })
            return {
                ...state,
                [action.category]: state[action.category].concat([action.post])
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
        case 'DOWNLOAD_COMMENT':
            return {
                ...state,
                [action.comment.parentId]: state[action.comment.parentId]
                    .filter(c => c.id !== action.comment.id)
                    .concat([action.comment])
            }
        case 'DELETE_COMMENT':
            return {
                ...state,
                [action.comment.parentId]: state[
                    action.comment.parentId
                ].filter(c => c.id !== action.comment.id)
            }
        case 'DELETE_POST':
            return {
                ...state,
                [action.postId]: []
            }
        default:
            return state
    }
}

function controls(state = initialState.controls, action) {
    switch (action.type) {
        case 'EDIT_ITEM':
            return {
                ...state,
                editing: action.id,
                content: action.content,
                title: action.title
            }
        case 'CANCEL_EDIT':
            return initialState.controls
        case 'COMMENT_ON_POST':
            return { ...state, commenting: action.postId }
        case 'CANCEL_COMMENT':
            return { ...state, commenting: null }
        default:
            return state
    }
}

function newComment(state = initialState.newComment, action) {
    switch (action.type) {
        case 'EDIT_NEW_COMMENT':
            return {
                ...state,
                [action.field]: action.val
            }
        case 'CANCEL_COMMENT':
            return initialState.newComment
        default:
            return state
    }
}

function newPost(state = initialState.newPost, action) {
    switch (action.type) {
        case 'EDIT_NEW_POST':
            return {
                ...state,
                [action.field]: action.val
            }
        case 'CANCEL_NEW_POST':
            return initialState.newPost
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
        case 'DELETE_POST':
            return {
                ...state,
                [action.postId]: dummyPost
            }
        default:
            return state
    }
}

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

export default combineReducers({
    categories,
    comments,
    controls,
    newComment,
    newPost,
    posts,
    render
})
