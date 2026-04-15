import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Filters from './components/Filters'
import TodoStats from './components/TodoStats'
import type { Todo, Filter } from './types'


export default function App() {
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
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo ))
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
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Todo App</h1>

        <TodoForm onAdd={addTodo} />
        <Filters currentFilter={filter} onFilterChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        {todos.length > 0 && <TodoStats activeCount={activeCount} />}
      </div>
    </div>
  )
}