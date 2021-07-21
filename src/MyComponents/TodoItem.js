import React from 'react'
import { Todos } from './Todos'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
           
           <h4>{todo.title}</h4>
           <h5 >{todo.desc}</h5>
        <button className="btn btn-danger" onClick={()=>{onDelete(todo)}} >Delete</button>
        <hr class="rounded"></hr>

        </div>
    )
}
