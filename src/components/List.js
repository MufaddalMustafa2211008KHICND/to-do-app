import ListItem from './ListItem';


function List({ todo, setTodo, setAddItem }) {

    return (
        <>
            <div className='add-item'>
                <button onClick={() => setAddItem(prev => !prev)}>Add Item</button>
            </div>
            <div className='list'>

                {todo.length === 0 && <div>Nothing to show</div>}
                {todo.map(({ id,title, dueDate, text }) => <ListItem key={id} id={id} data={text} title={title} dueDate={dueDate} todo={todo} setTodo={setTodo} setAddItem={setAddItem} />)}
            </div>
        </>
    )
}

export default List;