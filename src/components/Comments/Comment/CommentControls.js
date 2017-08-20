import React from 'react'
import PropTypes from 'prop-types'

import FontAwesome from 'react-fontawesome'

const CommentControls = ({
    comment,
    editComment,
    likeComment,
    dislikeComment,
    deleteComment
}) => {
    return (
        <div className="CommentControls">
            <button
                className="comment-cnt-btn edit-comment-btn"
                onClick={editComment(comment.id, comment.body)}
            >
                <FontAwesome name="edit" />
            </button>
            <button
                className="comment-cnt-btn like-comment-btn"
                onClick={likeComment(comment.id)}
            >
                <FontAwesome name="thumbs-up" />
            </button>
            <button
                className="comment-cnt-btn dislike-comment-btn"
                onClick={dislikeComment(comment.id)}
            >
                <FontAwesome name="thumbs-down" />
            </button>
            <button
                className="comment-cnt-btn delete-comment-btn"
                onClick={deleteComment(comment.id)}
            >
                <FontAwesome name="trash-o" />
            </button>
        </div>
    )
}

CommentControls.propTypes = {
    comment: PropTypes.object.isRequired,
    editComment: PropTypes.func.isRequired,
    likeComment: PropTypes.func.isRequired,
    dislikeComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired
}
export default CommentControls
