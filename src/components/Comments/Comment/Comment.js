import React from 'react'
import PropTypes from 'prop-types'

import CommentControls from './CommentControls'
import EditCommentContainer from '../../EditComment/EditCommentContainer'

import './Comment.css'

class Comment extends React.Component {
    render() {
        const controlProps = {
            ...this.props
        }
        const comment = this.props.comment
        const isEditing = this.props.isEditing
        return (
            <div className="Comment">
                {isEditing || <CommentControls {...controlProps} />}
                <span className="comment-stats">
                    {comment.voteScore + ' votes'}
                </span>
                <h4>
                    {comment.author}
                </h4>
                {isEditing || this.props.comment.body}
                {isEditing && <EditCommentContainer comment={comment} />}
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
    editComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    likeComment: PropTypes.func.isRequired,
    dislikeComment: PropTypes.func.isRequired
}

export default Comment
