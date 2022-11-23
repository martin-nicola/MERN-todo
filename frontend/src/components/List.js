import React from 'react'
import Row from './Row'

export default function List(props) {
  return (
    <div>
      {props.list.map(todo => <Row key={todo.id} todo={todo} handleDelete={props.handleDelete}/> )}
    </div>
  )
}
