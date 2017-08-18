const POSTS_ARE_LOADING = 'POSTS_ARE_LOADING'
const SET_POSTS = 'SET_POSTS'
const DOWNLOAD_POST = 'DOWNLOAD_POST'
const EDIT_POST = 'EDIT_POST'
const SORT_BY = 'SORT_BY'

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

export function downloadPost(post) {
    return {
        type: DOWNLOAD_POST,
        post
    }
}

export function editPost(id) {
    return {
        type: EDIT_POST,
        id
    }
}

export function sortBy(col) {
    return {
        type: SORT_BY,
        col
    }
}
