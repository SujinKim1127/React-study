import React from "react";

export const TodoList = ({ todo, idx, deleteTodo }) => {
  return (
    <div>
      <h3>
        <input type="checkbox" onClick={() => deleteTodo(todo.id)}></input>
        <label className="todo">&nbsp;{todo.todoName}</label>
      </h3>
    </div>
  );
};
