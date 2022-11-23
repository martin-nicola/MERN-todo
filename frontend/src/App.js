import { useState } from 'react'
import './App.css'
import List from './components/List'

function App() {

  const [list, setList] = useState([
    {
      id: '1',
      name: 'Buy Milk',
      done: false
    }
  ])

  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const handleChange = (evt) => {
    evt.preventDefault()
    setId((Math.floor(Math.random()*100000000)).toString())
    setName(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setList([...list, {id, name, done: false}])
    setName('')
  }

  const handleDelete = (id) => {
    setList(list.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleChange}/>
        <button>Add Todo</button>
      </form>
      <List list={list} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
