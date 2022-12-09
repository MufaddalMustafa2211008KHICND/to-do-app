import React from "react";
import Input from './Input';
import List from './List';
import { useState } from "react";

function ToDo() {

    const [todo, setTodo] = useState([]);
    const [id, setId] = useState(0);


    return (
        <div className="to-do">
            <div className="header">
            <h1>To Do List</h1>
            </div>
            <Input todo={todo} setTodo={setTodo} id={id} setId={setId} />
            <List todo={todo} setTodo={setTodo} />
        </div>

    )
}

export default ToDo;