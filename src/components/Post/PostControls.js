import React from 'react'

import FontAwesome from 'react-fontawesome'

const PostControls = ({ post, commentOnPost, editPost, likePost, dislikePost, deletePost }) => {
    return (
        <div className="PostControls">
            <button className="comment-post-btn" onClick={commentOnPost(post.id)}>
                <FontAwesome
                name="comment-o"
                />
            </button>            
            <button className="edit-post-btn" onClick={editPost(post.id, post.body, post.title)}>
                <FontAwesome
                name="edit"
                />
            </button>
            <button className="like-post-btn" onClick={likePost(post.id)}>
                <FontAwesome
                name="thumbs-up"
                />            
            </button>
            <button className="dislike-post-btn" onClick={dislikePost(post.id)}>
                <FontAwesome
                name="thumbs-down"
                />            
            </button>            
            <button className="delete-post-btn" onClick={deletePost(post.id)}>
                <FontAwesome
                name="trash-o"
                />            
            </button>
        </div>
    )
}

export default PostControls
