import React from "react";
import Input from './Input';
import List from './List';
import { useState } from "react";

function ToDo() {

    const [todo, setTodo] = useState([]);
    const [id, setId] = useState(0);


    return (
        <div className="to-do">
            <Input todo={todo} setTodo={setTodo} id={id} setId={setId} />
            <List todo={todo} setTodo={setTodo} />
        </div>

    )
}

export default ToDo;