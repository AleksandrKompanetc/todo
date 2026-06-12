import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import ThemeToggle from './components/ThemeToggle'
import Filters from './components/Filters'
import TodoList from './components/TodoList'
import TodoStats from './components/TodoStats'
import type { Todo, Filter, Theme } from './types'


export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<Filter>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [dark, setDark] = useState(false)
  const [todoToDelete, setTodoToDelete] = useState<number | null>(null)

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }

    const savedTheme = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    setDark(shouldBeDark)

    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string) => {
    if (!text.trim()) return
    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text: text.trim(),
        completed: false
      }
    ])
    setSearchQuery('')
  }

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // const deleteTodo = (id: number) => {
  //   setTodos(prev => prev.filter(todo => todo.id !== id))
  // }

  const editTodo = (id: number, newText: string) => {
    if (!newText.trim()) return
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    )
  }

  const requestDelete = (id: number) => {
    setTodoToDelete(id)
  }

  const confirmDelete = () => {
    if (todoToDelete !== null) {
      setTodos(prev => prev.filter(todo => todo.id !== todoToDelete))
      setTodoToDelete(null)
    }
  }

  const cancelDelete = () => {
    setTodoToDelete(null)
  }

  const filteredTodos = todos
    .filter(todo => {
      const matchesSearch = todo.text.toLowerCase().includes(searchQuery.toLowerCase())
      if (filter === 'active') return !todo.completed && matchesSearch
      if (filter === 'completed') return todo.completed && matchesSearch
      return matchesSearch
    })

  const activeCount = todos.filter(todo => !todo.completed).length
  // const completedCount = todos.length - activeCount

  const toggleTheme = () => {
    const newIsDark = !dark
    setDark(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4'>
      <div className='max-w-xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Todo App</h1>
        <ThemeToggle isDark={dark} onToggle={toggleTheme} />

        <TodoForm addTodo={addTodo} />
        <div className='mt-2 relative'>
          <input
            type="text"
            placeholder='Search todos...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full px-4 py-3 my-5 rounded-xl border border-gray-300 bg-white text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-blue-500 placeholder:text-gray-400'
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
            >
              X
            </button>
          )}
        </div>

        <Filters currentFilter={filter} onFilterChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={requestDelete}
          editTodo={editTodo}
        />
        {todos.length > 0 && (
          <TodoStats
            activeCount={activeCount}
          />
        )}

        {searchQuery && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
            Найдено: {filteredTodos.length} задач
          </p>
        )}

        {todoToDelete !== null && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-sm w-full mx-4 shadow-xl'>
              <h3 className='text-xl font-semibold mb-2 dark:text-white'>Delete task?</h3>
              <p>Are you sure you want to delete this task?</p>
              <div className='flex gap-3'>
                <button
                  onClick={cancelDelete}
                  className='flex-1 py-3 px-4 bg-gray-200 dark:bg-gray-700 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className='flex-1 py-3 px-4 bg-red-600 text-white rounded-xl font-medium hover:bg-red-600 transition-colors'
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}




























// import { useState, useEffect } from 'react'
// import TodoForm from './components/TodoForm'
// import TodoList from './components/TodoList'
// import Filters from './components/Filters'
// import ThemeToggle from './components/ThemeToggle'
// import type { Todo } from './types'
// import type { Filter, Theme } from './types'
// import TodoStats from './components/TodoStats'

// export default function App() {
//   const [todos, setTodos] = useState<Todo[]>([])
//   const [filter, setFilter] = useState<Filter>('all')
//   const [isDark, setIsDark] = useState(false)

//   useEffect(() => {
//     const savedTodos = localStorage.getItem('todos')
//     if (savedTodos) {
//       setTodos(JSON.parse(savedTodos))
//     }
//     const savedTheme = localStorage.getItem('theme') as Theme | null
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

//     const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)

//     setIsDark(shouldBeDark)
//     if (shouldBeDark) {
//       document.documentElement.classList.add('dark')
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos))
//   }, [todos])


//   const addTodo = (text: string) => {
//     if (!text.trim()) return
//     setTodos(prev => [
//       ...prev,
//       {
//         id: Date.now(),
//         text: text.trim(),
//         completed: false
//       }
//     ])
//   }

//   const toggleTodo = (id: number) => {
//     setTodos(prev => prev.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ))
//   }

//   const deleteTodo = (id: number) => {
//     setTodos(prev => prev.filter(todo => todo.id !== id))
//   }

//   const editTodo = (id: number, newText: string) => {
//     if (!newText.trim()) return
//     setTodos(prev => prev.map(todo =>
//       todo.id === id ? { ...todo, text: newText.trim() } : todo
//     ))
//   }

//   const clearCompleted = () => {
//     setTodos(prev => prev.filter(todo => !todo.completed))
//   }

//   const filteredTodos = todos.filter(todo => {
//     if (filter === 'active') return !todo.completed
//     if (filter === 'completed') return todo.completed
//     return true
//   })

//   const activeCount = todos.filter(todo => !todo.completed).length
//   const completedCount = todos.length - activeCount

//   const toggleTheme = () => {
//     const newIsDark = !isDark
//     setIsDark(newIsDark)

//     if (newIsDark) {
//       document.documentElement.classList.add('dark')
//       localStorage.setItem('theme', 'dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//       localStorage.setItem('theme', 'light')
//     }
//   }

//   return (
//     <div className='min-h-screen bg-gray-100 py-8 px-4'>
//       <div className='max-w-xl mx-auto'>
//         <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Todo App</h1>
//         <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

//         <TodoForm onAdd={addTodo} />
//         <Filters currentFilter={filter} onFilterChange={setFilter} />
//         <TodoList
//           todos={filteredTodos}
//           onToggle={toggleTodo}
//           onDelete={deleteTodo}
//           onEdit={editTodo}
//         />
//         {todos.length > 0 && (
//           <TodoStats
//             activeCount={activeCount}
//           />
//         )}
//       </div>
//     </div>
//   )
// }




























// import { useState, useEffect } from 'react'
// import TodoForm from './components/TodoForm'
// import TodoList from './components/TodoList'
// import Filters from './components/Filters'
// import TodoStats from './components/TodoStats'
// import ThemeToggle from './components/ThemeToggle'
// import type { Todo, Filter, Theme } from './types'


// export default function App() {
//   const [todos, setTodos] = useState<Todo[]>([])
//   const [filter, setFilter] = useState<Filter>('all')
//   const [isDark, setIsDark] = useState(false)

//   useEffect(() => {
//     const savedTodos = localStorage.getItem('todos')
//     if (savedTodos) {
//       setTodos(JSON.parse(savedTodos))
//     }

//     const savedTheme = localStorage.getItem('theme') as Theme | null
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

//     const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)

//     setIsDark(shouldBeDark)
//     if (shouldBeDark) {
//       document.documentElement.classList.add('dark')
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos))
//   }, [todos])

//   const addTodo = (text: string) => {
//     if (!text.trim()) return
//     setTodos(prev => [
//       ...prev,
//       {
//         id: Date.now(),
//         text: text.trim(),
//         completed: false
//       }
//     ])
//   }

//   const toggleTodo = (id: number) => {
//     setTodos(prev =>
//       prev.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     )
//   }

//   const deleteTodo = (id: number) => {
//     setTodos(prev => prev.filter(todo => todo.id !== id))
//   }

//   const editTodo = (id: number, newText: string) => {
//     if (!newText.trim()) return
//     setTodos(prev =>
//       prev.map(todo =>
//         todo.id === id ? { ...todo, text: newText.trim() } : todo
//       )
//     )
//   }

//   const clearCompleted = () => {
//     setTodos(prev => prev.filter(todo => !todo.completed))
//   }

//   const filteredTodos = todos.filter(todo => {
//     if (filter === 'active') return !todo.completed
//     if (filter === 'completed') return todo.completed
//     return true
//   })

//   const activeCount = todos.filter(todo => !todo.completed).length
//   const completedCount = todos.length - activeCount

//   const toggleTheme = () => {
//     const newIsDark = !isDark
//     setIsDark(newIsDark)

//     if (newIsDark) {
//       document.documentElement.classList.add('dark')
//       localStorage.setItem('theme', 'dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//       localStorage.setItem('theme', 'light')
//     }
//   }

//   return (
//     <div className='min-h-screen bg-gray-100 py-8 px-4'>
//       <div className='max-w-xl mx-auto'>
//         <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Todo App</h1>
//         <ThemeToggle theme={isDark ? 'dark' : 'light'} onToggle={toggleTheme} />

//         <TodoForm onAdd={addTodo} />
//         <Filters currentFilter={filter} onFilterChange={setFilter} />
//         <TodoList
//           todos={filteredTodos}
//           onToggle={toggleTodo}
//           onDelete={deleteTodo}
//           onEdit={editTodo}
//         />
//         {todos.length > 0 && (
//           <TodoStats
//             activeCount={activeCount}
//             completedCount={completedCount}
//             onClearCompleted={clearCompleted}
//           />
//         )}
//       </div>
//     </div>
//   )
// }