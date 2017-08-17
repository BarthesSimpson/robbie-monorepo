import React from 'react'
import './Post.css'

const Post = ({ post }) => {
    return (
        <div className="Post">
            {post.body}
        </div>
    )
}

export default Post
