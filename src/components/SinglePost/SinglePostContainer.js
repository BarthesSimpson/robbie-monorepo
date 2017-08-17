import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import SinglePost from './'

//------- HELPERS
import { fetchSinglePost } from '../../redux/middlewares/thunks/api'

const mapStateToProps = (state, ownProps) => {
    const postId = ownProps.match.params.post
    console.log({ postId })
    const post = state.singlePosts.find(sp => sp.id === postId)
    console.log({ post })

    return {
        postId,
        post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSinglePost: id => dispatch(fetchSinglePost(id))
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SinglePost)
)
