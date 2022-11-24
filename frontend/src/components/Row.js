import React from 'react'
import { Link } from 'react-router-dom';

export default function Row(props) {
  let link = `/${props.todo._id}`
  return (
    <tbody>    
      <tr>
        <td><Link to={link} onClick={props.grabTodo(props.todo._id)}>{props.todo.name}</Link></td>
        <td>{props.todo.done ? "Done" : "Not Done"}</td>
        <td><button onClick={() => props.handleDelete(props.todo._id)}>X</button></td>
      </tr>
    </tbody>
  )
}
