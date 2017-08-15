import React from 'react'
import PropTypes from 'react-proptypes'

//-------COMPONENTS
import Category from './Category'

//-------STYLING
import './Categories.css'

const Categories = ({ categories }) => {
    return (
        <div className="Categories">
            {categories.length && categories.map(c => <Category key={c.name} category={c} />)}
        </div>
    )
}

Categories.PropTypes = {
    categories: PropTypes.array.isRequired
}

export default Categories
