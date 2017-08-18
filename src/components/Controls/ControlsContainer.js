import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import Controls from './'

//------- ACTIONS
import { sortBy } from '../../redux/actions/posts'

//------- HELPERS

const mapStateToProps = state => {
    return {
        sortedBy: state.render.sortedBy
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sortBy: col => () => dispatch(sortBy(col))
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    const sortedBy = stateProps.sortedBy
    const sortBy = dispatchProps.sortBy
    const dummyFunc = () => {}
    return {
        sortedBy,
        sortByRecent: (sortedBy === 'recent') ? dummyFunc : sortBy('recent'),
        sortByRating: (sortedBy === 'rating') ? dummyFunc : sortBy('rating')
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(Controls)
)
