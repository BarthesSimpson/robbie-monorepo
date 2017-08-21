import React, { Component } from 'react'

//------- COMPONENTS
import Comment from './Comment'
import ControlsContainer from '../Controls/ControlsContainer'
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
        const controlProps = { postId: this.props.post.id, level: 'comments' }
        return (
            <div className="Comments">
                {this.props.commenting
                    ? <NewCommentContainer />
                    : <ControlsContainer {...controlProps} />}
                {this.props.comments.map(c => this.generateComment(c))}
            </div>
        )
    }
}

export default Comments
