import { ADD_TODO, SWITCH_PAGE } from './actionTypes';

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
    console.log("changing page");
    console.log(new_page);
    return {
        type: SWITCH_PAGE,
        payload: new_page,
    }
}