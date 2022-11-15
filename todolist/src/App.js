import './App.css';
import { useState } from 'react';
import styled, { useTheme } from "styled-components"
import { TodoList } from './Components/TodoList';

function App() {
  const todo = ['React 강의듣기', '청소하기']
  const [todos, setTodos] = useState(todo);
  const [input, setInput] = useState("");
  const [state, setState] = useState(false);

  function insertTodo(e) {
    const text = document.getElementById('todo').value
    console.log(text)
    setTodos([...todos, input])
    console.log(todo)
  }

  function deleteTodo(indexToDelete) {
    todos.splice(indexToDelete, 1)
    setTodos([...todos])
    setState(false)
  }

  function changeText(e){
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
        <label className="todo">
          Todo &nbsp;
          <input id='todo' type="text" value={input} onChange={changeText}/>
        </label>
        <button onClick={insertTodo}>Create</button>
        <div className='todolist'>
          {todos.map((todo, idx) =>{
            return <TodoList todo={todo} idx={idx} deleteTodo={deleteTodo}/>
          })}
        </div>
    </div>
  );
}

export default App;
