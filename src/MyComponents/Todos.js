import React from 'react'
import { TodoItem } from "./TodoItem";
// import { MsgEmpty } from "./MsgEmpty";

export const Todos = (props) => {
    let myStyle={
        padding: "2px ,0px",
        minheight: "28vh"
    }

return (
    <div className="container my-3px" style={myStyle}>
        <h3 className="text-center my-3">ToDos List </h3>
        {/* <h2>{props.todos}  </h2> */}
        {props.td.length === 0 ? "Empty TodosList" :
            props.td.map((todo) => {
                return <TodoItem todo={todo} onDelete={props.onDelete}> </TodoItem>


            })}



        {/* <h3>Todos List</h3>    */}
        {/* {props.todos.map(Todos) =>{
                return 
                // <TodoItem todos={todo}  onDelete={props.onDelete}></TodoItem>
            })}  */}

    </div>

);
}
{/* <TodoItem todo={props.todos[1]}></TodoItem> */ }