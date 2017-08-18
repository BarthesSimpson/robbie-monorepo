//ACTION CREATORS
import { categoriesAreLoading, setCategories } from '../../actions/categories'
import { postsAreLoading, setPosts, downloadPost } from '../../actions/posts'

//CONSTANTS
import { apiEndpoint, headers, postHeaders } from '../../../constants/auth'

//HELPERS
import { goHome } from '../../../helpers/navigation'

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
            .then(arr => dispatch(setPosts(category, arr)))
            .catch(console.error)
    }
}

export function fetchSinglePost(id) {
    console.log({ id })
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
            // .catch(err => {
            //     console.error(err)
            // })
            .catch(goHome)
    }
}

/*I have separate functions for likePost and dislikePost because 
  in a production app we would probably handle these quite differently
  e.g. on StackOverflow where you lose reputation for downvoting, and 
  there is a counter that warns you if you're downvoting too much.
*/

export function likePost(id) {
    return voteOnPost(id, 'upVote')
}

export function dislikePost(id) {
    return voteOnPost(id, 'downVote')
}

export function voteOnPost(id, option) {
    return dispatch => {
        fetch(apiEndpoint + '/posts/' + id, {
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
            .then(post => dispatch(downloadPost(post)))
            .catch(console.error)
    }
}

export function deletePost(id) {
    return dispatch => {
        fetch(apiEndpoint + '/posts/' + id, {
            headers,
            method: 'delete'
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res
            })
            .then(res => res.json())
            .then(post => dispatch(downloadPost(post)))
            .catch(console.error)
    }
}
