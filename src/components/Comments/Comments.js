import React, { Component } from 'react'
import './Comments.css'

import Comment from './Comment'

class Comments extends Component {
    generateComment(c) {
        const commentProps = {
            comment: c,
            isEditing: this.props.editing === c.id,
            editComment: () => this.props.editComment(c.id, c.body),
            deleteComment: () => this.props.deleteComment(c.id),
            likeComment: () => this.props.likeComment(c.id),
            dislikeComment: () => this.props.dislikeComment(c.id),
            key: c.id
        }
        return <Comment {...commentProps} />
    }

    render() {
        console.log(this.props)
        return (
            <div className="Comments">
                {this.props.post.comments && this.props.post.comments.map(c => this.generateComment(c))}
                <div className="add-comment">Add a comment</div>
            </div>
        )
    }
}

export default Comments
