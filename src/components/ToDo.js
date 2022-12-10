import React from "react";
import Input from './Input';
import List from './List';
import { useState } from "react";

function ToDo() {

    const [todo, setTodo] = useState([]);
    const [id, setId] = useState(0);
    const [addItem, setAddItem] = useState(false)
    


    return (
        <div className="to-do">
            <div className="header">
                <h1>To Do List</h1>
            </div>
            {
                addItem ? 
                <Input todo={todo} setTodo={setTodo} id={id} setId={setId} setAddItem={setAddItem}/> : 
                <List todo={todo} setTodo={setTodo} setAddItem={setAddItem} />
            }


        </div>

    )
}

export default ToDo;