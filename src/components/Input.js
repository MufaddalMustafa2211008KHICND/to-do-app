

import { useState } from "react";

function Input({ todo, setTodo, id, setId }) {

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        if (input !== '') {
            const newArray = [...todo, { id: id, text: input }];
            setInput('')
            setId(id + 1)
            setTodo(newArray);
        }
        else{
            alert('Your todo is empty')
        }
    }

    return (
        <>
            <div className="input">
                <input type="text" placeholder="✍️ Add Item" onChange={handleChange} value={input} />
                <button onClick={handleClick}><i class="fa fa-plus"></i></button>
            </div>
        </>

    )
}

export default Input;