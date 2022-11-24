import React from 'react'
import List from '../components/List'

export default function Main(props) {
  return (
    <>
      <h1>Todo List</h1>
      <form className="pure-form" onSubmit={props.handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={props.name} onChange={props.handleChange}/>
        <button className="pure-button">Add Todo</button>
      </form>
      <hr />
      <List grabTodo={props.grabTodo} list={props.list} handleDelete={props.handleDelete} />
    </>
  )
}
