export const getTodosState = (store) => store.todos;

export const getToDoListIds = (store) => getTodosState(store).allIds;

export const getToDoById = (store, id) => getTodosState(store).byIds[id];

export const getToDos = (store) => getTodosState(store).byIds;

export const getToDoListByPage = (store, page) => {
    const page_limit = getTodosState(store).max_page;
    const max_items_per_page = getTodosState(store).max_items_per_page;
    if(page <= page_limit && page >= 1){
        const todo_items = getToDos(store);
        const todo_items_array = getToDoListIds(store).map(id => todo_items[id]);
        const current_page_todo_items = [];
        let i;
        for(i=(page-1)*max_items_per_page; i < todo_items_array.length && i < max_items_per_page*(page); ++i){
            current_page_todo_items.push(todo_items_array[i]);
        }
        return current_page_todo_items;
    }else{
        return [];
    }
};

export const getToDoAppInfo = (store) => ({
    firstname: store.user.firstname,
    lastname: store.user.lastname,
    max_page: store.todos.max_page,
});

export const getMaxItems = (store) => store.todos.max_items_per_page;

export const getCurrentPage = (store) => store.todos.current_page