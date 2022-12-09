import { useState } from 'react';

function ListItem({ data, id, todo, setTodo }) {

    const [isEdit, setIsEdit] = useState(false)
    const [editData, setEditData] = useState(data);

    const onDelete = () => {
        const newArray = todo.filter((item) => item.id !== id)
        setTodo(newArray)
    }

    const onEdit = () => {
        if (isEdit) {
            const updatedTodo = todo.map((item) => {
                if (id === item.id) {
                    const updatedItem = { ...item, text: editData }
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

    const handleEdit = (e) => {
        setEditData(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
            <div className="list-item">
                <div className="list-item-content">
                    {isEdit ? <input type="text" value={editData} onChange={handleEdit} /> : data}
                </div>
                <div className="list-item-btn">
                    <button onClick={onEdit}>{isEdit ? 'OK' : 'Edit'}</button>
                    <button onClick={onDelete}><i class="fa fa-trash"></i></button>
                </div>
            </div>
        </>

    )
}

export default ListItem;