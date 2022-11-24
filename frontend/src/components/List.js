import React from 'react'
import Row from './Row'

export default function List(props) {
  return (
    <>
    {!props.list.length ? 
      <h3>No todos yet. Add Todos</h3>
    :
      <table className="pure-table pure-table-striped">
      <thead>
        <tr>
          <th>Todo</th>
          <th>Done?</th>
          <th></th>
        </tr>
      </thead>
      {props.list.map(todo => <Row grabTodo={props.grabTodo} key={todo._id} todo={todo} handleDelete={props.handleDelete}/> )}
    </table>
    }
  </>
  )
}
