const CANCEL_EDIT = 'CANCEL_EDIT'
const CANCEL_NEW_POST = 'CANCEL_NEW_POST'
const DELETE_COMMENT = 'DELETE_COMMENT'
const DELETE_POST = 'DELETE_POST'
const DOWNLOAD_COMMENT = 'DOWNLOAD_COMMENT'
const DOWNLOAD_POST = 'DOWNLOAD_POST'
const EDIT_ITEM = 'EDIT_ITEM'
const EDIT_NEW_POST = 'EDIT_NEW_POST'
const POSTS_ARE_LOADING = 'POSTS_ARE_LOADING'
const POST_IS_UPDATING = 'POST_IS_UPDATING'
const SET_COMMENTS = 'SET_COMMENTS'
const SET_POSTS = 'SET_POSTS'
const SORT_BY = 'SORT_BY'

export function cancelEdit() {
    return {
        type: CANCEL_EDIT
    }
}

export function cancelNewPost() {
    return {
        type: CANCEL_NEW_POST
    }
}

export function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    }
}

export function deletePost(postId) {
    return {
        type: DELETE_POST,
        postId
    }
}

export function downloadComment(comment) {
    return {
        type: DOWNLOAD_COMMENT,
        comment
    }
}

export function downloadPost(post) {
    return {
        type: DOWNLOAD_POST,
        post
    }
}

export function editItem(id, content, title) {
    return {
        type: EDIT_ITEM,
        id,
        content,
        title
    }
}

export function editNewPost(field, val) {
    return {
        type: EDIT_NEW_POST,
        field,
        val
    }
}

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

export function setComments(postId, comments) {
    return {
        type: SET_COMMENTS,
        postId,
        comments
    }
}

export function setPosts(category, posts) {
    return {
        type: SET_POSTS,
        category,
        posts
    }
}

export function sortBy(col) {
    return {
        type: SORT_BY,
        col
    }
}
