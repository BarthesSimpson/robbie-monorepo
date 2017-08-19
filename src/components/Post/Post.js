import React from 'react'
import './Post.css'

const Post = ({ post }) => {
    console.log({ post })
    const commentCount = post.comments ? post.comments.length : '...'
    return (
        <div className="Post">
            <span className="post-stats">
                {'' + commentCount + ' comments ' + post.voteScore + ' votes'}
            </span>
            <h3 className="post-author">By {post.author}</h3> {post.body}
        </div>
    )
}

export default Post
