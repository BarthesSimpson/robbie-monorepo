import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import Categories from './'

//------- HELPERS
import { getPostsFromServer } from '../../redux/middlewares/thunks/api'

const mapStateToProps = (state, ownProps) => {
    // console.log({ ownProps })
    return {
        categories: ownProps.categories
            ? state.categories.filter(c => ownProps.categories.includes(c.name))
            : state.categories,
        postsLoading: state.render.postsAreLoading,
        posts: state.posts,
        single: ownProps.categories && ownProps.categories.length === 1
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: category => dispatch(getPostsFromServer(category))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories))
