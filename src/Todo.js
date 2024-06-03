import React, { useState } from "react";

function Todo(props){
  const[isChecked,setIsChecked]= useState(false);
  let className = '';
  let deco = {};
  if(isChecked){
    className += 'text-muted';
    deco = {textDecoration:'line-through'}
  }
  let handleCheckbox = e=>{
    let value = !isChecked;
    setIsChecked(value);
    props.todoUpdate(props.data.id, value);
  }
  let todoDelete = e=>{
    props.deleteTodo(props.data.id)
  }
  return(
    <li>
      <input type="checkbox" id={`check${props.data.id}`} onClick={handleCheckbox}></input>
      <label style={deco} className={className} htmlFor={`check${props.data.id}`}>{props.data.title}</label>
      <button data-id={props.data.id} className="btn btn-danger btn-sm" onClick={todoDelete}>삭제</button>
    </li>
  )
}
export default Todo;
