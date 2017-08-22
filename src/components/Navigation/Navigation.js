import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'

//------- ACTIONS
import { toggleMenu, setCategory } from '../../redux/actions/navigation'

//------- HELPERS
import { toTitleCase } from '../../helpers/text'

//------- STYLING
import './Navigation.css'

const Navigation = ({
    category,
    categories,
    level,
    menuVisible,
    post,
    toggleMenu,
    selectCategory
}) => {
    return (
        <div className="Navigation">
            {level === 'category' ? toTitleCase(category) : post}
            <span className="menu-btn" onClick={toggleMenu}>
                <FontAwesome name="chevron-circle-down" />
            </span>
            <div className="menu-container">
                {menuVisible &&
                    categories.map(c => {
                        return (
                            <Link
                                to={c === 'all' ? '/' : `/${c}`}
                                className="unstyled-link menu-link"
                                onClick={() => selectCategory(c)}
                                key={c}
                            >
                                {toTitleCase(c)}
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}

Navigation.propTypes = {
    category: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    level: PropTypes.string.isRequired,
    menuVisible: PropTypes.bool.isRequired,
    post: PropTypes.string
}

function mapStateToProps(state) {
    return {
        categories: ['all'].concat(Object.keys(state.categories)),
        category: state.render.category,
        level: state.render.level,
        menuVisible: state.render.menuVisible,
        post: state.render.post
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleMenu: () => dispatch(toggleMenu()),
        selectCategory: c => dispatch(setCategory(c))
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Navigation)
)
