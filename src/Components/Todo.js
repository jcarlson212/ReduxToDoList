import '../App.css';
import Checkbox from '@material-ui/core/Checkbox';
import ToDoApp from '../ToDoApp';

function Todo({data}) {
    const handle_check = () => {
        console.log("clicked checkbox")
    }
    return (
        <div class="todo">
            <div>Name: {data.name}</div>
            <div>Is Complete: 
                <Checkbox
                    checked={data.is_complete}
                    onChange={handle_check}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
            <div>Description: {data.description}</div>
            <button>Remove</button>
        </div>
    );
}

export default Todo;