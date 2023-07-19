import {useState } from 'react'

function AddTodo({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState('')

  const onSubmit = () => {
    if (inputValue.trim() !== '') {
      const todo = { id: todos.length, task: inputValue, pending: true }
      setTodos([...todos,todo])
    }
    setInputValue('')
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={inputValue}
        onKeyUpCapture={handleKeyPress}
        onChange={handleChange}
      />
      <button type="submit" onClick={onSubmit}>
        Add
      </button>
    </div>
  )
}

export default AddTodo
