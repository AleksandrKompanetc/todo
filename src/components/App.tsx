import { useState, useEffect } from 'react'
import { Todo, Filter } from '../types'


function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<Filter>('all')

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false}])
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo) => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id)
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeCount = todos.filter(todo => !todo.completed).length

  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4'>
      <div className='max-w-xl mx-auto'>
        <h1>Todo App</h1>
      </div>
    </div>
  )
}