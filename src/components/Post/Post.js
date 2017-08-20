import React from 'react'

import EditPostContainer from '../EditPost/EditPostContainer'
import Spinner from '../Spinner'

import './Post.css'

const Post = ({ post, editing, updating }) => {
    const commentCount = post.comments ? post.comments.length : '...'
    return (
        <div className="Post">
            {post.deleted ||
                <span className="post-stats">
                    {'' +
                        commentCount +
                        ' comments ' +
                        post.voteScore +
                        ' votes'}
                </span>}
            {post.deleted ||
                <h3 className="post-author">
                    By {post.author}
                </h3>}
            {editing
                ? <EditPostContainer post={post} />
                : updating ? <Spinner /> : post.body}
        </div>
    )
}

export default Post
