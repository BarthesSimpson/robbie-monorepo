import React from 'react'
import FontAwesome from 'react-fontawesome'
import icons from '../../../constants/icons'
import { toTitleCase } from '../../../helpers/text'
import './ListItem.css'

const ListItem = ({ item }) => {
    return (
        <div className="ListItem">
            {toTitleCase(item.title)}
            <FontAwesome className="icon" size="2x" name={icons[item.title]} />
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

export default ListItem
