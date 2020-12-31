import './App.css';
import Container from '@material-ui/core/Container';
import { Provider } from 'react-redux';
import store from './Redux/store';
import ToDoApp from './ToDoApp';

function App() {

  return (
    <div id="root">
      <Container maxWidth="sm">
        <Provider store={store}>
          <ToDoApp />
        </Provider>
      </Container>
    </div>
  );
}

export default App;
