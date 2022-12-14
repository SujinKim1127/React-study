import React, { useState } from "react";
import axios from "axios";
import { TodoListEdit } from "./TodoListEdit";

export const TodoList = ({ todo, deleteTodo, getTodos }) => {
  const [check, setCheck] = useState(false);

  const lineCheck = () => {
    setCheck(!check);
  }

  return (
    <>
      <div className="all">
        <h3 className="list">
          <input className="input" type="checkbox" onClick={lineCheck} checked={check ? true:false}></input>
          <label className={`todo ${check ? "inline" : ""}`} onClick={lineCheck}
          onContextMenu={(e) => {deleteTodo(todo.id); e.preventDefault();}}>&nbsp;{todo.todoName}</label>
        </h3>
        
        <TodoListEdit todo={todo} id={todo.id} getTodos={getTodos}/>
      </div>
    </>

  );
};
