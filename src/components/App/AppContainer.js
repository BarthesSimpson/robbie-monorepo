import { connect } from 'react-redux'
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
