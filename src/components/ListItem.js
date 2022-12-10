import { useState } from 'react';

function ListItem({ data, id, title,dueDate, todo, setTodo }) {

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
            setIsEdit(!isEdit)
        }

    }

    return (
        <>
            <div className="list-item">
                <div className="list-item-content">
                    {isEdit ? <><p>Edit title:</p><input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} /></> : <h3>{title}</h3>}
                    {isEdit ? <><p>Edit task details:</p><input type="text" value={editData} onChange={e => setEditData(e.target.value)} /></> : <p>{data}</p>}
                    {isEdit ? <><p>Edit due date:</p><input type="date" value={editDate} onChange={e => setEditDate(e.target.value)} /></> : <p>{dueDate}</p>}
                    
                </div>
                <div className="list-item-btn">
                    <button onClick={onEdit}>Edit</button>
                    <button onClick={onDelete}><i class="fa fa-trash"></i></button>
                </div>
            </div>
        </>

    )
}

export default ListItem;