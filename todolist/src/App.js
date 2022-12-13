import "./App.css";
import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { TodoList } from "./Components/TodoList";
import axios from "axios";

function App() {
  const baseUrl = "http://localhost:3001";

  const todo = ["React 강의듣기", "청소하기"];
  const [todos, setTodos] = useState(todo);
  const [input, setInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    axios
      .get(baseUrl + "/todos") 
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => console.error(err));
  }

  const insertTodo = (e) => {
    e.preventDefault();

    axios
      .post(baseUrl + "/todos", {
        todoName : input,
      })
      .then((res) => {
        console.log(res.data);
        setInput("");
        getTodos();
      })
  }

  const deleteTodo = (id) => {
    axios
      .delete(baseUrl + "/todos/" + id, {})
      .then((res) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.error(err));
}

  function changeText(e) {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <label className="todo">
        Todo &nbsp;
        <input id="todo" type="text" value={input} onChange={changeText} />
      </label>
      <button onClick={insertTodo}>Create</button>
      <div className="todolist">
        {todos.map((todo) => {
          return <TodoList todo={todo} deleteTodo={deleteTodo}/>
        })}
      </div>
    </div>
  );
}

export default App;
