import React from 'react'
import PropTypes from 'react-proptypes'
//COMPONENTS
import ListItem from './ListItem'
//STYLING
import './List.css'

const List = ({ items }) => {
    return (
        <div className="List">
            {items.map(i => <ListItem key={i.title} item={i} />)}
        </div>
    )
}

List.PropTypes = {
    items: PropTypes.array.isRequired
}

export default List