
interface Todo {
    userId:number,
    id: number,
    title : string,
    completed: boolean
}

export async function getServerSideProps(){
    
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const todos = await res.json() as Todo[]
    
    return {
        props: {todos}
    }
}

export default function TodoList(props:{todos:Todo[]}){

    return <div className="p-10">
        <h1 className="text-3xl">Todo ({props.todos.length})</h1>
        <hr />

    <ul className="">
        {props.todos.map((todo)=><li className="my-2" key={todo.id}><input className="mr-5" type='checkbox' checked={todo.completed}></input>{todo.title} </li>)}
    </ul>

    </div>
}