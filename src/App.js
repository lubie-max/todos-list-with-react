import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState , useEffect}  from 'react';
import { AddTodos } from "./MyComponents/AddTodos";




localStorage.getItem('todos' === null);

function App(todo) {
  let initTodo;
  if (localStorage.getItem('todos')) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));

  }
  const onDelete = (todo) => {
    console.log("Hey you jst deleted it!", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }


  const addTodos = (title, desc) => {
    console.log("hey i m adding todo=", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
    // if (localStorage.getItem("todos")){
    //   localStorage.setItem('todos',JSON.stringify(todos))
    // }
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));


  }, [todos])



  return (
    <>
      <Header title="To-Dos-List"></Header>
      <AddTodos addTodos={addTodos}></AddTodos>
      <Todos td={todos} onDelete={onDelete} ></Todos>

      <Footer> </Footer>

      {/* <TodoItem></TodoItem> */}
      {/* <Footer title="This is a Footer"></Footer> */}
    </>
  );
}

export default App;
