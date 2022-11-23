import React from 'react'

export default function Row(props) {
  return (
    <li>
      {props.todo.name} - {props.todo.done ? "Done" : "Not Done"} - 
      <button onClick={() => props.handleDelete(props.todo.id)}>Delete</button>
    </li>
  )
}
