//ACTION CREATORS
import { categoriesAreLoading, setCategories } from '../../actions/categories'
import {
    addPostToCategory,
    cancelEdit,
    cancelNewPost,
    downloadComment,
    downloadPost,
    deleteComment,
    deletePost,
    postsAreLoading,
    postIsUpdating,
    setComments,
    setPosts
} from '../../actions/posts'

import { cancelComment } from '../../actions/comments'

//CONSTANTS
import { apiEndpoint, headers, postHeaders } from '../../../constants/auth'

//HELPERS
import { goHome } from '../../../helpers/navigation'
import { newPost, newComment } from '../../../helpers/posts'

export function getCategoriesFromServer() {
    return dispatch => {
        dispatch(categoriesAreLoading(true))
        fetch(apiEndpoint + '/categories', { headers })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                dispatch(categoriesAreLoading(false))
                return res
            })
            .then(res => res.json())
            .then(obj => dispatch(setCategories(obj.categories)))
            .catch(console.error)
    }
}

export function getPostsFromServer(category) {
    return dispatch => {
        dispatch(postsAreLoading(category, true))
        fetch(apiEndpoint + '/' + category + '/posts', { headers })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                dispatch(postsAreLoading(category, false))
                return res
            })
            .then(res => res.json())
            .then(arr => {
                arr.forEach(p => {
                    dispatch(getCommentsFromServer(p.id))
                })
                dispatch(setPosts(category, arr))
            })
            .catch(console.error)
    }
}

export function getCommentsFromServer(postId) {
    return dispatch => {
        fetch(apiEndpoint + '/posts/' + postId + '/comments', { headers })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res
            })
            .then(res => res.json())
            .then(arr => dispatch(setComments(postId, arr)))
            .catch(console.error)
    }
}

export function fetchSinglePost(id) {
    return dispatch => {
        fetch(apiEndpoint + '/posts/' + id, { headers })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res
            })
            .then(res => res.json())
            // .then(console.log)
            .then(post => dispatch(downloadPost(post)))
            .catch(goHome)
    }
}

/*I have separate functions for likePost and dislikePost because 
  in a production app we would probably handle these quite differently
  e.g. on StackOverflow where you lose reputation for downvoting, and 
  there is a counter that warns you if you're downvoting too much.
*/

export function likeItem(id, type) {
    return voteOnItem(id, 'upVote', type)
}

export function dislikeItem(id, type) {
    return voteOnItem(id, 'downVote', type)
}

export function voteOnItem(id, option, type) {
    return dispatch => {
        fetch(apiEndpoint + '/' + type + 's/' + id, {
            headers: postHeaders,
            method: 'post',
            body: JSON.stringify({ option })
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res
            })
            .then(res => res.json())
            .then(updated => {
                // console.log({ updated })
                type === 'post'
                    ? dispatch(downloadPost(updated))
                    : dispatch(downloadComment(updated))
            })
            .catch(console.error)
    }
}

export function cancelPost(history) {
    return dispatch => {
        dispatch(cancelNewPost())
        history.push('/')
    }
}

export function confirmEditItem(id, body, title, type) {
    return dispatch => {
        dispatch(postIsUpdating(id, true))
        dispatch(cancelEdit())
        fetch(apiEndpoint + '/' + type + 's/' + id, {
            headers: postHeaders,
            method: 'put',
            body: JSON.stringify({ body, title })
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res
            })
            .then(res => res.json())
            .then(updated => {
                type === 'post'
                    ? dispatch(downloadPost(updated))
                    : dispatch(downloadComment(updated))
                dispatch(postIsUpdating(id, false))
            })
            .catch(console.error)
    }
}

export function createNewPost(author, category, title, body, history) {
    return dispatch => {
        fetch(apiEndpoint + '/posts', {
            headers: postHeaders,
            method: 'post',
            body: JSON.stringify(newPost(author, category, title, body))
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res
            })
            .then(res => res.json())
            .then(updated => {
                dispatch(addPostToCategory(category, updated))
                dispatch(downloadPost(updated))
                dispatch(setComments(updated.id, []))
                dispatch(cancelNewPost(updated))
                history.push(`/${category}/${updated.id}`)
            })
            .catch(console.error)
    }
}

export function createNewComment(author, parentId, body) {
    return dispatch => {
        console.log({ author }, { parentId }, { body })
        fetch(apiEndpoint + '/comments', {
            headers: postHeaders,
            method: 'post',
            body: JSON.stringify(newComment(author, parentId, body))
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res
            })
            .then(res => res.json())
            .then(updated => {
                dispatch(downloadComment(updated))
                dispatch(cancelComment())
            })
            .catch(console.error)
    }
}

export function deleteItem(id, type) {
    return dispatch => {
        fetch(apiEndpoint + '/' + type + 's/' + id, {
            headers,
            method: 'delete'
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res
            })
            .then(res => {
                if (type === 'post') {
                    goHome()
                    dispatch(deletePost(id))
                } else {
                    return res
                        .json()
                        .then(comment => dispatch(deleteComment(comment)))
                }
            })
            .catch(console.error)
    }
}
