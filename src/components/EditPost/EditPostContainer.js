import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import EditPost from './'

//------- ACTIONS
import { cancelEdit, editPost } from '../../redux/actions/posts'

//------- HELPERS
import { confirmEditPost } from '../../redux/middlewares/thunks/api'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.post.id,
        content: state.controls.content,
        title: state.controls.title
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cancelEdit: () => dispatch(cancelEdit()),
        confirmEdit: (id, content, title) => dispatch(confirmEditPost(id, content, title)),
        updateContent: (id, content, title) => dispatch(editPost(id, content, title))
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EditPost)
)
