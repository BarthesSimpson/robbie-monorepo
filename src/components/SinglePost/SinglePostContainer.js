import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import SinglePost from './'

//------- ACTIONS
import { editItem } from '../../redux/actions/posts'

//------- HELPERS
import {
    fetchSinglePost,
    commentOnPost,
    likeItem,
    dislikeItem,
    deleteItem
} from '../../redux/middlewares/thunks/api'

const mapStateToProps = (state, ownProps) => {
    const postId = ownProps.match.params.post
    const post = { ...state.posts[postId], comments: state.comments[postId] }
    const isEditing = state.controls.editing === postId
    const isUpdating = !!state.render.postIsUpdating[postId]

    return {
        postId,
        post,
        isEditing,
        isUpdating
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: id => dispatch(fetchSinglePost(id)),
        commentOnPost: (id, comment) => () =>
            dispatch(commentOnPost(id, comment)),
        editPost: (id, content, title) => () =>
            dispatch(editItem(id, content, title)),
        likePost: id => () => dispatch(likeItem(id, 'post')),
        dislikePost: id => () => dispatch(dislikeItem(id, 'post')),
        deletePost: id => () => dispatch(deleteItem(id, 'post'))
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SinglePost)
)
