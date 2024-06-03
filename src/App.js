import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Todo from './Todo';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const[todo,setTodo] = useState([
    {id:1, title:'learn web', checked:false},
    {id:2, title:'get a job', checked:false}
  ]);
  let [todoid, setTodoid] = useState(2);
  let deleteTodo = (id)=>{
    let newTodos = [...todo];
    let idx = newTodos.findIndex(item=>item.id === id);
    newTodos.splice(idx,1);
    setTodo(newTodos);
  }
  let todoUpdate = (id,value)=>{
    let newTodos = todo.map(item =>
      item.id === id ? { ...item, checked: value } : item
    );
    setTodo(newTodos);
  }
  let todos = todo.map((item,idx)=><Todo key={idx} data={item} deleteTodo={deleteTodo} todoUpdate={todoUpdate}/>);
  let addTodo = (value)=>{
    let newtodo = value;
    let newTodos = [...todo];
    let newId = todoid + 1;
    setTodoid(newId);
    newTodos.push({id:newId, title:newtodo, checked:false})
    setTodo(newTodos);
    document.querySelector('#todo').value = '';
  }
  return (
    <div className="App">
      <h1>React to do list</h1>
      <Form className="d-flex w-100 align-items-end gap-3" onSubmit={(e)=>{
        e.preventDefault();
        addTodo(e.target.todo.value);
      }}>
        <Form.Group className="w-100" controlId="todo">
          <Form.Label>할일 입력</Form.Label>
          <Form.Control type="text" placeholder="입력하세요" />        
        </Form.Group>
        <Button variant="primary" type="submit">
         입력
        </Button>
      </Form>
      <hr/>
      <ul>
        {todos}
      </ul>

    </div>
  );
}

export default App;
