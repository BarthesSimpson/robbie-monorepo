import React from 'react'
import PropTypes from 'prop-types'

//------- COMPONENTS
import EditTitleContainer from '../EditPost/EditTitleContainer'

//------- STYLING
import logo from '../../img/logo_alt.svg'
import './Header.css'

const Header = ({ msg, editing }) => {
    return (
        <header className="header">
            <a href="/" className="image-link">
                <img src={logo} className="logo-header" alt="logo" />
            </a>
            <h2>
                {editing ? <EditTitleContainer /> : msg}
            </h2>
        </header>
    )
}

Header.propTypes = {
    msg: PropTypes.string,
    editing: PropTypes.bool
}
export default Header
