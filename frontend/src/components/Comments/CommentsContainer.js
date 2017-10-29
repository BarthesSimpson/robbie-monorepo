import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import Comments from './'

//------- ACTIONS
import { editItem } from '../../redux/actions/posts'

//------- HELPERS
import {
    likeItem,
    dislikeItem,
    deleteItem
} from '../../redux/middlewares/thunks/api'
import { sortItems } from '../../helpers/sorting'

const mapStateToProps = (state, ownProps) => {
    const post = ownProps.post
    const comments = post.comments
        ? sortItems(post.comments, state.sorting.comments)
        : []
    return {
        comments,
        post,
        commenting: state.controls.commenting === ownProps.post.id,
        editing: state.controls.editing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editComment: (id, body) => () => dispatch(editItem(id, body)),
        likeComment: id => () => dispatch(likeItem(id, 'comment')),
        dislikeComment: id => () => dispatch(dislikeItem(id, 'comment')),
        deleteComment: id => () => dispatch(deleteItem(id, 'comment'))
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Comments)
)
