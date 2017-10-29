import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import NewComment from './'

//------- ACTIONS
import { cancelComment, editNewComment } from '../../redux/actions/comments'

//------- HELPERS
import { createNewComment } from '../../redux/middlewares/thunks/api'

const mapStateToProps = (state, ownProps) => {
    return {
        parentId: state.controls.commenting,
        author: state.newComment.author,
        content: state.newComment.content
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editNewComment: (field, val) => dispatch(editNewComment(field, val)),
        cancelComment: () => dispatch(cancelComment()),
        createNewComment: (author, parentId, content) =>
            dispatch(createNewComment(author, parentId, content))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewComment))
