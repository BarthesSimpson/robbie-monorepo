const CANCEL_COMMENT = 'CANCEL_COMMENT'
const COMMENT_ON_POST = 'COMMENT_ON_POST'
const EDIT_NEW_COMMENT = 'EDIT_NEW_COMMENT'


export function cancelComment() {
    return {
        type: CANCEL_COMMENT
    }
}

export function commentOnPost(postId) {
    return {
        type: COMMENT_ON_POST,
        postId
    }
}

export function editNewComment(field, val) {
    return {
        type: EDIT_NEW_COMMENT,
        field,
        val
    }
}
