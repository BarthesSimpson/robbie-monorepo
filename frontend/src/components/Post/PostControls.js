import React from 'react'

import FontAwesome from 'react-fontawesome'

const PostControls = ({ post, commentOnPost, editPost, likePost, dislikePost, deletePost }) => {
    console.log({post})
    return (
        <div className="PostControls">
            <button className="post-cnt-btn comment-post-cnt-btn" onClick={commentOnPost(post.id)}>
                <FontAwesome
                name="comment-o"
                />
            </button>            
            <button className="post-cnt-btn edit-post-cnt-btn" onClick={editPost(post.id, post.body, post.title)}>
                <FontAwesome
                name="edit"
                />
            </button>
            <button className="post-cnt-btn like-post-cnt-btn" onClick={likePost(post.id)}>
                <FontAwesome
                name="thumbs-up"
                />            
            </button>
            <button className="post-cnt-btn dislike-post-cnt-btn" onClick={dislikePost(post.id)}>
                <FontAwesome
                name="thumbs-down"
                />            
            </button>            
            <button className="post-cnt-btn delete-post-cnt-btn" onClick={deletePost(post.id)}>
                <FontAwesome
                name="trash-o"
                />            
            </button>
        </div>
    )
}

export default PostControls
