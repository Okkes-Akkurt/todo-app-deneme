import React, {  useEffect, useState } from 'react'
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";



const EntireList = () => {
  const [todos, setTodos] = useState([]);
  let lodos;
  useEffect(() => {
  lodos  =[...todos]
  },[todos])

    return (
      <div>
        <AddTodo todos={todos} setTodos={setTodos} />
        <ListTodo todos={todos} />
      </div>
    )
}


export default EntireList;