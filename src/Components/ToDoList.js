import '../App.css';
import Container from '@material-ui/core/Container';
import Todo from './Todo';
import { connect } from 'react-redux';
import { getToDoListIds, getToDos, getMaxItems, getCurrentPage } from '../Redux/selectors';

function ToDoList({ todos, max_items, current_page }) {
    const current_todos = [];
    let i=0; 
    console.log(todos);
    console.log((i < todos.length) && (i < current_page*max_items))
    for(i=(current_page-1)*max_items; (i < todos.length) && (i < current_page*max_items); ++i){
        current_todos.push(todos[i]);
    }
    console.log(max_items);
    console.log(current_page);
    console.log(current_todos)
    return (
        <div>
            <Container maxWidth="sm">
                {current_todos.map((todo) => <Todo key={todo.id} data={todo}/> )}
            </Container>
        </div>
    );
}

const mapStateToProps = state => {
    const ids = getToDoListIds(state);
    const todos = getToDos(state);
    const todos_array = ids.map(id => todos[id]);
    const max_items = getMaxItems(state);
    const current_page = getCurrentPage(state);

    return {
        todos: todos_array,
        max_items: max_items,
        current_page: current_page,
    }
}

export default connect(mapStateToProps)(ToDoList);