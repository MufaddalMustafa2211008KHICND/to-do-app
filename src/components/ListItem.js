import { useState } from 'react';

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
]

function ListItem({ data, id, title, dueDate, todo, setTodo }) {

    const [isEdit, setIsEdit] = useState(false)
    const [editData, setEditData] = useState(data);
    const [editTitle, setEditTitle] = useState(title);
    const [editDate, setEditDate] = useState(dueDate);

    const onDelete = () => {
        const newArray = todo.filter((item) => item.id !== id)
        setTodo(newArray)
    }

    const onEdit = () => {
        if (isEdit) {
            if(editData !== ''){
                const updatedTodo = todo.map((item) => {
                    if (id === item.id) {
                        const updatedItem = { ...item, text: editData, title: editTitle, dueDate: editDate }
                        return updatedItem;
                    }
                    else {
                        return item;
                    }
                })
                setTodo(updatedTodo)
                setIsEdit(!isEdit)
            }
            else {
                alert("Please don't leave details section empty")
            }

        }
        else {
            setIsEdit(!isEdit)
        }

    }

    const [year, month, day] = dueDate.split('-')

    return (
        <>
            <div className="list-item">
                <div className="list-item-content">
                    {isEdit ? <><p className='title'>Edit title:</p><input className='edit' type="text" maxlength="30" value={editTitle} onChange={e => setEditTitle(e.target.value)} /></> : <h2>{title}</h2>}
                    {isEdit ? <><p className='title'>Edit task details:</p><input className='edit' type="text" maxlength="300" value={editData} onChange={e => setEditData(e.target.value)} /></> : <p className='details'>{data}</p>}
                    {isEdit ? <><p className='title'>Edit due date:</p><input className='edit-date' type="date" value={editDate} onChange={e => setEditDate(e.target.value)} /></> : <p className='date'>Due: {`${day} ${months[month-1]}, ${year}`}</p>}

                </div>
                <div className="list-item-btn">
                    <button onClick={onEdit}>{isEdit ? 'Ok' : 'Edit'}</button>
                    <button onClick={onDelete}><i class="fa fa-trash"></i></button>
                </div>
            </div>
        </>

    )
}

export default ListItem;