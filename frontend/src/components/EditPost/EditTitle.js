import React from 'react'
import PropTypes from 'prop-types'

import './EditPost.css'

const EditTitle = ({ postId, title, content, updateTitle }) => {
    return (
        <div className="EditTitle">
            <input
                type="text"
                className="edit-title"
                value={title}
                onChange={e => updateTitle(postId, content, e.target.value)}
            />
        </div>
    )
}

EditTitle.propTypes = {
    title: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
    updateTitle: PropTypes.func.isRequired
}

export default EditTitle
