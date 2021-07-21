// import React from 'react'
import { queryAllByAttribute } from '@testing-library/dom';
import React, { useState  } from 'react';

export const AddTodos = ({addTodos}) => {
  let myStyle= {

  }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit =(e)=>{
e.preventDefault();
if (!title || !desc ){
    alert("plz Complete the  feeds");
}
else{
  addTodos(title,desc);
  setTitle("");
  setDesc("");
}

}

    return (
        <>
  <div className="container" style={myStyle}>
        <h3 className="text-title my-3">Add Todos</h3>

<form onSubmit={submit}>
            <div className="mb-3 py-3">
  <label htmlFor="exampleFormControlInput1" className="form-label"><b>To Do</b></label>
  <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleFormControlInput1" placeholder="What's Upto"/>

<div className="mb-3 py-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Description"></input>
</div>


<div className="d-grid gap-2 col-3 mx-auto">
  <button type="submit" className="btn btn-outline-danger">Add</button>
  
</div>

      </div>
      </form>

      </div>
</>
    )
}
