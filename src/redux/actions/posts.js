const POSTS_ARE_LOADING = 'POSTS_ARE_LOADING'
const SET_POSTS = 'SET_POSTS'
const ADD_SINGLE_POST = 'ADD_SINGLE_POST'

export function postsAreLoading(category, bool) {
    return {
        type: POSTS_ARE_LOADING,
        category,
        bool
    }
}

export function setPosts(category, posts) {
    return {
        type: SET_POSTS,
        category,
        posts
    }
}

export function addSinglePost(post) {
    return {
        type: ADD_SINGLE_POST,
        post
    }
}