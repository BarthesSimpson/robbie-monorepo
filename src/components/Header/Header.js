import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import EditTitleContainer from '../EditPost/EditTitleContainer'
import Navigation from '../Navigation'

//------- STYLING
import logo from '../../img/logo_alt.svg'
import './Header.css'

const Header = ({ categories, category, level, post, msg, editing }) => {
    return (
        <header className="header">
            <a href="/" className="image-link">
                <img src={logo} className="logo-header" alt="logo" />
            </a>
            <h2>
                {editing
                    ? <EditTitleContainer />
                    : <Navigation />
                }
            </h2>
        </header>
    )
}

Header.propTypes = {
    msg: PropTypes.string,
    editing: PropTypes.bool
}

function mapStateToProps(state) {
    return {
        categories: Object.keys(state.categories),
        category: state.render.category,
        level: state.render.level,
        post: state.render.post
    }
}

export default withRouter(connect(mapStateToProps)(Header))
