import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import axios from 'axios'
import Index from './pages/Index'
import Show from './pages/Show';

function App() {

  const [list, setList] = useState([])
  const [todo, setTodo] = useState(null)
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    async function fetchData() {      
      let res = await axios.get('/api/todos')
      setList(res.data)
    }
    fetchData()
  }, [clicked, id])

  const handleChange = (evt) => {
    evt.preventDefault()
    setName(evt.target.value)
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setId((Math.floor(Math.random()*100000000)).toString())
    setList([...list, {id, name, done: false}])
    setName('')
    axios.post('/api/todos', {id, name, done: false})
    setClicked(!clicked)
  }

  const handleDelete = (id) => {
    setList(list.filter(todo => todo.id !== id))
    axios.delete(`/api/todos/${id}`)
    setClicked(!clicked)
  }

  const grabTodo = (todoId) => {
    setTodo(list.find(todo => todo._id === todoId))
  }

  return (
    <div className="App">
      <Routes>
          <Route path="/:todoid" element={
            <Show todo={todo}/>
          } />
          <Route path="/" element={
             <Index 
              handleChange={handleChange} 
              handleSubmit={handleSubmit} 
              handleDelete={handleDelete} 
              grabTodo={grabTodo}
              list={list}
              name={name}
              />
          } />
      </Routes>
     
    </div>
  );
}

export default App;
