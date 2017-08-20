import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import EditComment from './'

//------- ACTIONS
import { cancelEdit, editItem } from '../../redux/actions/posts'

//------- HELPERS
import { confirmEditItem } from '../../redux/middlewares/thunks/api'

const mapStateToProps = (state, ownProps) => {
    return {
        commentId: ownProps.comment.id,
        content: state.controls.content,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cancelEdit: () => dispatch(cancelEdit()),
        confirmEdit: (id, content) => dispatch(confirmEditItem(id, content, null, 'comment')),
        updateContent: (id, content) => dispatch(editItem(id, content))
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EditComment)
)
