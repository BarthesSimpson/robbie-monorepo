import React from 'react'
import PropTypes from 'prop-types'

//------- COMPONENTS
import { Link } from 'react-router-dom'

//------- STYLING
import './Controls.css'

const Controls = ({
    containerClass,
    comments,
    recentClass,
    ratingClass,
    postId,
    sortedBy,
    sortByRecent,
    sortByRating,
    commentOnPost,
    level
}) => {
    return (
        <div className={containerClass}>
            {(level !== 'comments' || comments) &&
                <span>
                    <label className="sort-label">Sort by:</label>
                    <button className={recentClass} onClick={sortByRecent}>
                        Most Recent
                    </button>
                    <button className={ratingClass} onClick={sortByRating}>
                        Highest Rated
                    </button>
                </span>}
            {level === 'comments'
                ? <button
                      className="post-btn"
                      onClick={() => commentOnPost(postId)}
                  >
                      Add a comment
                  </button>
                : <Link className="unstyled-link" to="/new">
                      <button className="post-btn">New Post</button>
                  </Link>}
        </div>
    )
}

Controls.propTypes = {
    postId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    comments: PropTypes.bool,
    containerClass: PropTypes.string.isRequired,
    recentClass: PropTypes.string.isRequired,
    ratingClass: PropTypes.string.isRequired,
    sortedBy: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    sortByRecent: PropTypes.func.isRequired,
    sortByRating: PropTypes.func.isRequired,
    commentOnPost: PropTypes.func
}

export default Controls
