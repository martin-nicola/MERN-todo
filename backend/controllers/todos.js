const Todo = require('../models/todo')

async function create(req, res) {
  await Todo.create(req.body)
  res.status(200).json('Done')
}

async function index(req, res) {
  let todos = await Todo.find({})
  res.status(200).json(todos)
}

async function deleteTodo(req, res) {
  await Todo.findByIdAndDelete(req.params.id)
  res.status(200).json('Done')
}

module.exports = {
  create,
  index,
  delete: deleteTodo
}