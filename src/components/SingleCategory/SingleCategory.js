import React from 'react'

import Header from '../Header'
import CategoriesContainer from '../Categories/CategoriesContainer'

import messages from '../../constants/messages'

import './SingleCategory.css'

const SingleCategory = ({ match }) => {
    const category = match.params.category
    return (
        <div className="SingleCategory">
            <Header msg={messages.header[category]}/>
            <CategoriesContainer categories={[category]} />
        </div>
    )
}

export default SingleCategory
