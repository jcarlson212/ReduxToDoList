import './App.css';
import { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import ToDoList from './Components/ToDoList';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { getToDoAppInfo } from './Redux/selectors';
import TextField from '@material-ui/core/TextField';
import { addToDo, changePage } from './Redux/actions';

function ToDoApp({ firstname, lastname, max_page, addToDo, changePage }) {
    const [add_todo_name, set_add_todo_name] = useState("");
    const [add_todo_description, set_add_todo_description] = useState("");
    console.log(max_page);


    return (
        <div class="todo-list-app">
            <h1 class="title">
                {firstname + " " + lastname}'s To Do List
            </h1>
            <div>
                <ToDoList />
            </div>
            <div>
                <Pagination count={max_page} variant="outlined" size="large" onChange={(event, value) => changePage(value)} />
            </div>
            <div>
                <form class="add-todo-form" noValidate autoComplete="off">
                    <TextField id="name" label="Name" variant="outlined" onChange={(new_name) => set_add_todo_name(new_name.target.value)} />
                    <TextField id="description" label="Description" variant="outlined" onChange={(new_des) => set_add_todo_description(new_des.target.value)} />
                    <Button onClick={() => addToDo(add_todo_name, add_todo_description)} variant="contained">Add Todo</Button>
                </form>
            </div>
            
            
        </div>
    );
}

const mapStateToProps = state => getToDoAppInfo(state);

export default connect(mapStateToProps, { addToDo, changePage })(ToDoApp);