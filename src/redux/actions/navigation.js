const TOGGLE_MENU = 'TOGGLE_MENU'
const SET_CATEGORY = 'SET_CATEGORY'

export function toggleMenu() {
    return {
        type: TOGGLE_MENU
    }
}

export function setCategory(category) {
    return {
        type: SET_CATEGORY,
        category
    }
}