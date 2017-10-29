import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import EditPost from './'

//------- ACTIONS
import { cancelEdit, editItem } from '../../redux/actions/posts'

//------- HELPERS
import { confirmEditItem } from '../../redux/middlewares/thunks/api'

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
        confirmEdit: (id, content, title) => dispatch(confirmEditItem(id, content, title, 'post')),
        updateContent: (id, content, title) => dispatch(editItem(id, content, title))
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EditPost)
)
