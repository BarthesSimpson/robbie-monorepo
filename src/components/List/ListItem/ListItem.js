import React from 'react'
import './ListItem.css'

const ListItem = ({ item }) => {
    return (
        <div className="ListItem">
            {item.title}
        </div>
    )
}

export default ListItem
