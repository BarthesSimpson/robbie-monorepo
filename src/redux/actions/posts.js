const POSTS_ARE_LOADING = 'POSTS_ARE_LOADING'
const SET_POSTS = 'SET_POSTS'

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