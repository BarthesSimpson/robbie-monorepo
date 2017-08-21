import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import Controls from './'

//------- ACTIONS
import { sortBy } from '../../redux/actions/posts'

const mapStateToProps = state => {
    return {
        sortedBy: state.render.sortedBy
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sortBy: (col, sortedBy) => () => {
            if (col !== sortedBy) {
                dispatch(sortBy(col))
            }
        }
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Controls)
)
