

import { useState } from "react";

function Input({ todo, setTodo, id, setId, setAddItem }) {

    const newDate = new Date();
    const formattedDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;

    const [input, setInput] = useState('');
    const [date, setDate] = useState(formattedDate);
    const [title, setTitle] = useState('My Todo');


    const handleClick = () => {
        if (input !== '') {
            const newArray = [{ id: id, title, text: input, dueDate: date }, ...todo];
            setInput('')
            setId(id + 1)
            setTodo(newArray);
            setAddItem(prev => !prev)
        }
        else {
            alert('Your todo is empty')
        }
    }

    console.log(formattedDate)

    return (
        <>
            <div className="input-wrapper">
                <div className="input-fields">
                    <p>Title:</p>
                    <input type="text" placeholder="✍️ Add Title" onChange={e => setTitle(e.target.value)} value={title} />
                    <p>Task details:</p>
                    <input type="text" placeholder="✍️ Add Item" onChange={e => setInput(e.target.value)} value={input} />
                    <p>Set due date:</p>
                    <input name="duedate" type="date" placeholder="Date" onChange={e => setDate(e.target.value)} min={formattedDate} value={date} />
                </div>
                <button onClick={handleClick}><i class="fa fa-plus"></i></button>
                <button onClick={() => setAddItem(prev => !prev)}>Cancel</button>
            </div>
        </>

    )
}

export default Input;