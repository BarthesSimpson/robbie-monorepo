import React from 'react'
import PropTypes from 'prop-types'

//------- COMPONENTS
import { Link } from 'react-router-dom'

const PostPreview = ({
    id,
    title,
    body,
    author,
    commentCount,
    voteScore,
    category
}) => {
    const url = `/${category}/${id}`
    return (
        <Link to={url} className="post-preview-container">
            <div className="post-preview-stats">
                <span className="post-preview-comments">
                    {commentCount +
                        (commentCount === 1 ? ' comment' : ' comments')}
                </span>
                <span className="post-preview-votes">
                    {voteScore + ' votes'}
                </span>
            </div>
            <span className="post-preview-title">
                {title}
            </span>
            <div className="post-preview-teaser">
                {body.substring(0, 100) + '...'}
            </div>
        </Link>
    )
}

PostPreview.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
}

export default PostPreview
