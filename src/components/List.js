import ListItem from './ListItem';


function List({ todo, setTodo, setAddItem }) {

    return (
        <>
            <div className='add-item'>
                <button onClick={() => setAddItem(prev => !prev)}>Add new Task</button>
            </div>
            <div className='list'>

                {todo.length === 0 && <div className='nothing'>List is empty</div>}
                {todo.map(({ id,title, dueDate, text }) => <ListItem key={id} id={id} data={text} title={title} dueDate={dueDate} todo={todo} setTodo={setTodo} />)}
            </div>
        </>
    )
}

export default List;