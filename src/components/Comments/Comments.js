import React, { Component } from 'react'

//------- COMPONENTS
import Comment from './Comment'
import NewCommentContainer from '../NewComment/NewCommentContainer'

//------- STYLING
import './Comments.css'

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
                {this.props.commenting && <NewCommentContainer />}
                {this.props.post.comments &&
                    this.props.post.comments.map(c => this.generateComment(c))}
                <button
                    className="add-comment"
                    onClick={this.props.newComment(this.props.post.id)}
                >
                    Add a comment
                </button>
            </div>
        )
    }
}

export default Comments
