import '../App.css';
import Checkbox from '@material-ui/core/Checkbox';
import ToDoApp from '../ToDoApp';
import { connect } from 'react-redux';
import { toggleToDo, removeToDo } from '../Redux/actions';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

function Todo({data, dispatch}) {
    console.log(data)
    const handle_check = () => {
        console.log("clicked checkbox")
    }
    return (
        <div class="todo">
            <Alert icon={false} severity={(data.is_complete) ? "success" : "info"} action={
                <div class='todo-remove-container'>
                    <Button onClick={() => dispatch(removeToDo(data.id))} variant="outlined" color="secondary">Remove</Button>
                </div>
            }>
                <AlertTitle><div style={{height:'30px'}}><h3>{data.name}</h3></div></AlertTitle>
                <div class="todo-content">
                    <div>
                        <Checkbox
                            checked={data.is_complete}
                            onChange={() => dispatch(toggleToDo(data.id))}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                    <div>
                        <textarea readOnly={true} rows="3">{data.description}</textarea>
                    </div>
                </div>
                
            </Alert>
            
        </div>
    );
}

export default connect()(Todo);