import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import Controls from './'

//------- ACTIONS
import { sortBy } from '../../redux/actions/posts'
import { commentOnPost } from '../../redux/actions/comments'

const mapStateToProps = (state, ownProps) => {
    const sortedBy = state.sorting[ownProps.level]
    const containerClass = 'Controls controls-' + ownProps.level
    const recentClass =
        'sort-btn recent' + (sortedBy === 'timestamp' ? ' active' : '')
    const ratingClass =
        'sort-btn rating' + (sortedBy === 'voteScore' ? ' active' : '')
    const comments =
        ownProps.level === 'comments' &&
        state.comments[ownProps.postId] &&
        state.comments[ownProps.postId].length > 0

    return {
        sortedBy,
        containerClass,
        comments,
        recentClass,
        ratingClass,
        postId: ownProps.level === 'comments' && ownProps.postId
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sortByRecent: () => {
            dispatch(sortBy(ownProps.level, 'timestamp'))
        },
        sortByRating: () => {
            dispatch(sortBy(ownProps.level, 'voteScore'))
        },
        commentOnPost: postId => dispatch(commentOnPost(postId))
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Controls)
)
