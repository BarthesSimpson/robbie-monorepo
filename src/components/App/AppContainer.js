import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import App from './'

//-------MIDDLEWARES
import { getCategoriesFromServer } from '../../redux/middlewares/thunks/api'

const mapStateToProps = state => {
    return {
        visibleCategories: state.visibleCategories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(getCategoriesFromServer())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
