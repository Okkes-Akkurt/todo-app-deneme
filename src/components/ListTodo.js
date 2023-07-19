import React from 'react'

const ListTodo = ({ todos }) => {
  return (
    <div>
      <ul>
        {
          todos.sort((firstId, secondId) => secondId.id - firstId.id).map((todo, i) => {
            return (
              <li key={i}>
                <p>
                  <span>
                    <input type="checkbox" />
                  </span>
                  {todo.task}
                </p>
                <p>
                  <button>Sil</button>
                  <button>Düzenle</button>
                </p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListTodo
