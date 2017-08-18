import React from 'react'
import './Controls.css'

const Controls = ({ sortedBy, sortByRecent, sortByRating, newPost }) => {
    const recentClass =
        'sort-btn recent' + (sortedBy === 'recent' ? ' active' : '')
    const ratingClass =
        'sort-btn rating' + (sortedBy === 'rating' ? ' active' : '')
    return (
        <div className="Controls">
            <label className="sort-label">Sort by:</label>
            <button className={recentClass} onClick={sortByRecent}>
                Most Recent
            </button>
            <button className={ratingClass} onClick={sortByRating}>
                Highest Rated
            </button>
            <button className="post-btn" onClick={newPost}>
                New Post
            </button>
        </div>
    )
}

export default Controls
