import './App.css';
import { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components"
import { TodoList } from './Components/TodoList';

function App() {
  const baseUrl = "http://localhost:3001/"

  const todo = ['React 강의듣기', '청소하기']
  const [todos, setTodos] = useState(todo);
  const [input, setInput] = useState("");
  const [state, setState] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    setTimeout(() => {
      fetch(baseUrl)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log("data", data)
          setTodos(data)
        })
        .catch((err) => {
          setError(err.message);
        });
    }, 1000);
  }, []);


  function insertTodo(e) {
    e.preventDefault();
    const text = document.getElementById('todo').value

    fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(text)  
    })
    .then((data) => {
      
    })


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
