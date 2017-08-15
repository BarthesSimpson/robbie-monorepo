import React from 'react'
import FontAwesome from 'react-fontawesome'
import icons from '../../../constants/icons'
import { toTitleCase } from '../../../helpers/text'
import './Category.css'

const Category = ({ category }) => {
    return (
        <div className="Category">
            {toTitleCase(category.name)}
            <FontAwesome className="icon" size="2x" name={icons[category.name]} />
            <span className="teaser">
                Oogly Boogly Oogly BooglyOogly Boogly Oogly BooglyOogly Boogly
                Oogly BooglyOogly Boogly Oogly BooglyOogly Boogly Oogly
                BooglyOogly Boogly Oogly BooglyOogly Boogly Oogly BooglyOogly
                Boogly Oogly BooglyOogly Boogly Oogly BooglyOogly Boogly Oogly
                Boogly
            </span>
        </div>
    )
}

export default Category
