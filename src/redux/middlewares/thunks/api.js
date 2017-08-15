//ACTION CREATORS
import { categoriesAreLoading, setCategories } from '../../actions/categories'
//CONSTANTS
import {apiEndpoint, headers} from '../../../constants/auth'

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
