import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import Categories from './'

//------- HELPERS
import { getPostsFromServer } from '../../redux/middlewares/thunks/api'

const mapStateToProps = (state, ownProps) => {
    const allCats = Object.keys(state.categories)
    const categories = ownProps.categories
            ? allCats.filter(c => ownProps.categories.includes(c))
            : allCats
    const posts = state.categories
    const comments = state.comments
    return {
        categories,
        comments,
        posts,
        sortedBy: state.sorting.posts,
        postsLoading: state.render.postsAreLoading,
        single: !!ownProps.categories && ownProps.categories.length === 1
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: category => dispatch(getPostsFromServer(category))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories))
