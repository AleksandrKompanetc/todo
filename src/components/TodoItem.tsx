import { Trash2, CheckCircle, Circle } from 'lucide-react'
import { Todo } from '../types'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className='border-b last:border-none flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition'> 
      <button
        onClick={() => onToggle(todo.id)}
        className='text-gray-400 hover:text-green-500 transition'
      >
        {todo.completed ? (
          <CheckCircle size={26} className='text-green-500'
        ) : (
          <Circle size={26} />
        )}
      </button>
      <span 
        className={`flex-1 text-lg ${
          todo.completed
          ? 'line-through text-gray-400'
          : 'text-gray-700'
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className='text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition'
      >
        <Trash2 size={20} />
      </button>
    </li>
  )
}