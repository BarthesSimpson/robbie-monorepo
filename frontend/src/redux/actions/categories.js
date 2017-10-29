const CATEGORIES_ARE_LOADING = 'CATEGORIES_ARE_LOADING'
const SET_CATEGORIES = 'SET_CATEGORIES'

export function categoriesAreLoading(bool) {
    return {
        type: CATEGORIES_ARE_LOADING,
        bool
    }
}

export function setCategories(categories) {
    return {
        type: SET_CATEGORIES,
        categories
    }
}