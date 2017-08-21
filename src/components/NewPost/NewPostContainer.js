import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import NewPost from './'

//------- ACTIONS
import { cancelNewPost, editNewPost } from '../../redux/actions/posts'

//------- HELPERS
import { createNewPost } from '../../redux/middlewares/thunks/api'

const mapStateToProps = (state, ownProps) => {
    return {
        categories: Object.keys(state.categories),
        category: state.newPost.category,
        author: state.newPost.author,
        title: state.newPost.title,
        content: state.newPost.content
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editNewPost: (field, val) => dispatch(editNewPost(field, val)),
        cancelNewPost: () => dispatch(cancelNewPost()),
        createNewPost: (category, author, title, content) => () =>
            dispatch(createNewPost(category, author, title, content))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPost))
