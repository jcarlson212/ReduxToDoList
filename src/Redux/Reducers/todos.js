import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SWITCH_PAGE, INITIALIZE_TODOLIST } from "../actionTypes";

const initialState = {
    current_page: 1,
    max_page: 1,
    max_items_per_page: 5,
    allIds: [],
    byIds: {

    },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
        const { id, content } = action.payload;
        const new_max_page = (state.allIds.length % state.max_items_per_page === 0 && state.allIds.length > 0) ? (state.max_page + 1) : state.max_page;
        return {
            ...state,
            max_page: new_max_page,
            allIds: [...state.allIds, id],
            byIds: {
                ...state.byIds,
                [id]: content,
            }
        };
    }
    case TOGGLE_TODO: {
        const { id } = action.payload;
        return {
            ...state,
            byIds: {
                ...state.byIds,
                [id]: {
                    ...state.byIds[id],
                    is_complete: !state.byIds[id].is_complete,
                },
            }
        };
    }
    case REMOVE_TODO:{
        const { id } = action.payload;
        return {
            ...state,
            allIds: state.allIds.filter(val => val !== id),
            byIds: {
                ...state.byIds,
                [id]: undefined,
            }
        };
    }
    case SWITCH_PAGE:{
        const page = action.payload;
        console.log("page is now: ");
        console.log(page);
        return {
            ...state,
            current_page: page,
        };
    }
    case INITIALIZE_TODOLIST:{
        return action.payload;
    }
    default:
      return state;
  }
}
