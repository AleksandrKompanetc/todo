import { useState } from 'react'
import TodoForm from './components/TodoForm'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    if (!text.trim()) return
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    }
    setTodos(prev => [
      ...prev,
      newTodo

    ])
  }

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
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