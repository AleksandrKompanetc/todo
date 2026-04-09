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

  return (
    <div>
      
    </div>
  )
}