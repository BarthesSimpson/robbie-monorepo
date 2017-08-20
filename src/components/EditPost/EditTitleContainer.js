import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import EditTitle from './EditTitle'

//------- ACTIONS
import { editItem } from '../../redux/actions/posts'

//------- HELPERS

const mapStateToProps = (state, ownProps) => {
    return {
        postId: state.controls.editing,
        content: state.controls.content,
        title: state.controls.title
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTitle: (id, content, title) => dispatch(editItem(id, content, title))
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EditTitle)
)
