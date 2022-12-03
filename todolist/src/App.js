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

  async function getTodos() {
    await axios
      .get(baseUrl + "/todos") // axios를 호출해서 응답을 받을때까지 기다림
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => console.error(err));
  }

  function insertTodo(e) {
    e.preventDefault();

    const insertTodo = async () => {
      await axios
        .post(baseUrl + "/todos", {
          todoName: input,
        })
        .then((res) => {
          console.log(res.data);
          setInput("");
          getTodos();
        })
        .catch((err) => console.error(err));
    };

    insertTodo();
  }

  function deleteTodo(id) {
    const deleteTodo = async () => {
      await axios
        .delete(baseUrl + "/todos/" + id, {})
        .then((res) => {
          setTodos(todos.filter((todo) => todo.id !== id));
        })
        .catch((err) => console.error(err));
    };

    deleteTodo();
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
