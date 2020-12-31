import { ADD_TODO, SWITCH_PAGE, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

export const addToDo = (name, description) => ({
    type: ADD_TODO,
    payload: {
        id: Date.now(),
        content: {
            name,
            description,
            is_complete: false,
        },
    }
})

export const changePage = (new_page) => {
    return {
        type: SWITCH_PAGE,
        payload: new_page,
    }
}

export const toggleToDo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

export const removeToDo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: {
            id
        }
    }
}