//ACTION CREATORS
import { categoriesAreLoading, setCategories } from '../../actions/categories'
import { postsAreLoading, setPosts } from '../../actions/posts'

//CONSTANTS
import { apiEndpoint, headers } from '../../../constants/auth'

export function getCategoriesFromServer() {
    return dispatch => {
        dispatch(categoriesAreLoading(true))
        fetch(apiEndpoint + '/categories', headers)
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
        fetch(apiEndpoint + '/' + category + '/posts', headers)
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
