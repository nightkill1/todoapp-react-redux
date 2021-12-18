
// import './css/main.css';
import DisplayTodos from './components/DisplayTodos';
// import TodoForm from './component/TodoForm';
// import TodoApp from './component/TodoApp';
// import TodoApp from './binding/TodoApp'
import Todos from './components/Todos'
function App() {
  return (
    <div className="todo-app">
      <h1>
        Todo App
      </h1>
      <Todos />
      <DisplayTodos />
      {/* <Todolist /> */}
      {/* <TodoForm></TodoForm> */}
    </div>
  );
}

export default App;
