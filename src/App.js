import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <TodoList/>
    <ToastContainer position="top-right" autoClose={3000} />

    </>
  );
}

export default App;
