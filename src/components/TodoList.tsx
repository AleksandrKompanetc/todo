import TodoItem from './TodoItem'
import type { Todo } from '../types'

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export default function TodoList({ todos,onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className='bg-white rounded-2xl shadow-sm py-12'>
        <p className='text-center text-gray-500 text-lg'>
          No tasks yet! Add some tasks to get started.
        </p>
      </div>
    )
  }
  return (
    <div className='bg-white rounded-2xl shadow-sm overflow-hidden'>
      <ul>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  )
}