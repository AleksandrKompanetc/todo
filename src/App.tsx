import { useState, useEffect } from 'react'
import { Plus, CheckCircle, Circle, Trash2 } from 'lucide-react'
import './App.css'

interface Todo {
    id: number
    text: string
    completed: boolean
  }

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false
    }
    setTodos([...todos, newTodo])
    setInputValue('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo 
    ))
  }

  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4'>
      <div className='max-w-xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Todo App</h1>

        <form onSubmit={addTodo} className='mb-8 flex gap-2'>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='New task...'
            className='flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 text-lg'
            />
          <button
            type="submit"
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl fond-medium flex items-center gap-2 transition'
          >
            <Plus size={24} />
            Add Todo
          </button>
        </form>

        <div className='flex gap-2 mb-6'>
          {(['all', 'active', 'completed'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl font-medium transition ${
                filter === f
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              >
                {f === 'all' && 'All'}
                {f === 'active' && 'Active'}
                {f === 'completed' && 'Completed'}
              </button>
          ))}
        </div>

        <div>
          {filteredTodos.length === 0 ? (
            <p className='text-center py-12 text-gray-500'>
              {filter === 'completed' ? 'No completed tasks yet!' : 'No tasks yet!'}
            </p>
          ) : (
            <ul>
              {filteredTodos.map((todo) => (
                <li 
                  key={todo.id}
                  className='border-b last:border-none flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition'
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className='text-gray-400 hover:text-gray-500 transition'
                  >
                    {todo.completed ? (
                      <CheckCircle size={26} className='text-green-500' />
                    ) : (
                      <Circle size={26} />
                    )}
                  </button>
                  <span className={`flex-1 text-lg ${
                    todo.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-700'
                  }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className='text-gray-400 hover:text-gray-500 transition p-2'
                  >
                    <Trash2 size={20} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {todos.length > 0 && (
          <p className='text-center mt-6 text-gray-500'>
            Count: <span className='font-semibold text-gray-700'>{activeCount}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default App
