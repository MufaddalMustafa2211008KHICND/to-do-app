import ListItem from './ListItem';


function List({todo, setTodo}){

    return(
        <>
        <div className='list'>
            <h1>List</h1>
            {todo.length === 0 && <div>Nothing to show</div>}
            {todo.map(({id, text}) => <ListItem key={id} id={id} data={text} todo={todo} setTodo={setTodo} />)}
            
        </div>
        </>

    )
}

export default List;