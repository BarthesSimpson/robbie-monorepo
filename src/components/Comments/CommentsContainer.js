import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import Comments from './'

//------- ACTIONS
import { editItem } from '../../redux/actions/posts'
import { commentOnPost } from '../../redux/actions/comments'

//------- HELPERS
import {
    likeItem,
    dislikeItem,
    deleteItem
} from '../../redux/middlewares/thunks/api'

const mapStateToProps = (state, ownProps) => {
    return {
        post: ownProps.post,
        editing: state.controls.editing,
        commenting: state.controls.commenting === ownProps.post.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editComment: (id, body) => () => dispatch(editItem(id, body)),
        newComment: postId => () => dispatch(commentOnPost(postId)),
        likeComment: id => () => dispatch(likeItem(id, 'comment')),
        dislikeComment: id => () => dispatch(dislikeItem(id, 'comment')),
        deleteComment: id => () => dispatch(deleteItem(id, 'comment'))
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Comments)
)
