import React, {  useState } from 'react'
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";



const EntireList = () => {
    const [todos, setTodos] = useState([]);

    return (
      <div>
        <AddTodo todos={todos} setTodos={setTodos} />
        <ListTodo todos={todos} />
      </div>
    )
}


export default EntireList;