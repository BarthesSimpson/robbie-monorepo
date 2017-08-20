const POSTS_ARE_LOADING = 'POSTS_ARE_LOADING'
const POST_IS_UPDATING = 'POST_IS_UPDATING'
const SET_POSTS = 'SET_POSTS'
const SET_COMMENTS = 'SET_COMMENTS'
const DOWNLOAD_POST = 'DOWNLOAD_POST'
const EDIT_POST = 'EDIT_POST'
const DELETED_POST = 'DELETED_POST'
const CANCEL_EDIT = 'CANCEL_EDIT'
const SORT_BY = 'SORT_BY'

export function postsAreLoading(category, bool) {
    return {
        type: POSTS_ARE_LOADING,
        category,
        bool
    }
}

export function postIsUpdating(id, bool) {
    return {
        type: POST_IS_UPDATING,
        id,
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

export function setComments(postId, comments) {
    return {
        type: SET_COMMENTS,
        postId,
        comments
    }
}

export function downloadPost(post) {
    return {
        type: DOWNLOAD_POST,
        post
    }
}

export function editPost(id, content, title) {
    return {
        type: EDIT_POST,
        id,
        content,
        title
    }
}

export function deletedPost(post) {
    return {
        type: DELETED_POST,
        post
    }
}

export function cancelEdit() {
    return {
        type: CANCEL_EDIT
    }
}

export function sortBy(col) {
    return {
        type: SORT_BY,
        col
    }
}
