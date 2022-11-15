import React from 'react';

export const TodoList = ({todo, idx, deleteTodo}) => {
    return (
        <h3>
            <input type="checkbox" onClick={() => deleteTodo(idx)}></input>
            <label key={idx} onClick={() => deleteTodo(idx)}>&nbsp;&nbsp;&nbsp;{todo}</label>
        </h3>
    )
    
}