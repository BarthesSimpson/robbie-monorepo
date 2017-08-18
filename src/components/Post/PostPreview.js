import React from 'react'
import { Link } from 'react-router-dom'

const PostPreview = ({ id, title, body, author, votes }) => {
    console.log({ id })
    const url = `/posts/${id}`
    return (
        <Link to={url} className="post-preview-container">
            <span className="post-preview-title">
                {title}
            </span>
            <span className="post-preview-teaser">
                {body.substring(0, 100) + '...'}
            </span>
        </Link>
    )
}

export default PostPreview
