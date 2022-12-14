import React, { useState, useEffect } from "react";
import axios from "axios";


export const TodoListEdit = ({ todo, id, getTodos }) => {
    const baseUrl = "http://localhost:3001";
  
    const [check, setCheck] = useState(false);
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState("");
  
    const lineCheck = () => {
      setCheck(!check);
    }

    const updateTodo = (id) => {
        console.log(text)
        axios
            .delete(baseUrl + "/todos/" + id, {
                todoName : text
            })
        axios
            .post(baseUrl + "/todos", {
                todoName : text
            })
            .then((res) => {
                getTodos();
                todo.todoName = text;
            })
        
    }

    const openEdit = () => {
        setEdit(!edit);
    }

    function changeText(e) {
        setText(e.target.value);
    }
  
    return (
        <>
            <button className="edit" onClick={openEdit}>✏️</button>
            {edit ?
            <div className="edit__input">  
                <textarea onChange={changeText} value={text}></textarea>
                <button className="edit__btn" onClick={() => {openEdit(); updateTodo(id);}}>완료</button>
            </div>
            : null    
            }
        </>
    );
}