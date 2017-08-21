import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import NewPost from './'

//------- ACTIONS
import { editNewPost } from '../../redux/actions/posts'

//------- HELPERS
import { createNewPost, cancelPost } from '../../redux/middlewares/thunks/api'

const mapStateToProps = (state, ownProps) => {
    const allCats = Object.keys(state.categories)
    return {
        categories: allCats,
        category: state.newPost.category || allCats[0],
        author: state.newPost.author,
        title: state.newPost.title,
        content: state.newPost.content
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editNewPost: (field, val) => dispatch(editNewPost(field, val)),
        cancelPost: (history) => dispatch(cancelPost(history)),
        createNewPost: (category, author, title, content, history) =>
            dispatch(createNewPost(category, author, title, content, history))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPost))
