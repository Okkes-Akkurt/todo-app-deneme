import { useState } from 'react'

function AddTodo({ todos,setTodos }) {
  const [inputValue, setInputValue] = useState('')

  const onSubmit = () => {
    if (inputValue.task !== '') {
      setTodos([...todos, { id: todos.length, task:inputValue, pending: true }])
    console.log(todos)
    }
    setInputValue('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  }



  return (
    <div>
      <input
        type="text"
        placeholder="Add To do"
        value={inputValue}
        onKeyUpCapture={handleKeyPress}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <button type="submit" onClick={onSubmit}>
        Add
      </button>
    </div>
  )
}

export default AddTodo
