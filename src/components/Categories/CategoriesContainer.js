import { connect } from 'react-redux'

//------- COMPONENTS
import Categories from './'

//------- HELPERS
import { getPostsFromServer } from '../../redux/middlewares/thunks/api'

const mapStateToProps = state => {
    return {
        categories: state.categories,
        postsLoading: state.render.postsAreLoading,
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: (category) => dispatch(getPostsFromServer(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
