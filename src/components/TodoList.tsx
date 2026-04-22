import { useState } from 'react'

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <button
              onClick={() => toggleTodo(todo.id)}
              className=''
            >
              {todo.completed ? (
                <CheckCircle />
              ) : (
                <Circle />
              )}
            </button>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                  onClick={() => handleSave(todo.id)}
                  className=''
                  title='Save'
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className=''
                  title='Cancel'
                >
                  X
                </button>
              </>
            ) : (
              <div className='mx-2'>
                <span className={`text-sm ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
              </div>
            )}

            {!isEditing && (
              <>
                <button
                  className='px-2 py-1 bg-blue-500 text-white rounded'
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
                <button
                  className='px-2 py-1 bg-blue-500 text-white rounded'
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}



























// import TodoItem from './TodoItem'
// import type { Todo } from '../types'

// interface TodoListProps {
//   todos: Todo[]
//   onToggle: (id: number) => void
//   onDelete: (id: number) => void
//   onEdit: (id: number, newText: string) => void
// }

// export default function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
//   if (todos.length === 0) {
//     return (
//       <div className='bg-white rounded-2xl shadow-sm py-12'>
//         <p className='text-center text-gray-500 text-lg'>
//           {todos.length === 0 ? 'No todos yet!' : 'All caught up!'}
//         </p>
//       </div>
//     )
//   }
//   return (
//     <div className='bg-white rounded-2xl shadow-sm overflow-hidden'>
//       <ul>
//         {todos.map((todo) => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             onToggle={onToggle}
//             onDelete={onDelete}
//             onEdit={onEdit}
//           />
//         ))}
//       </ul>
//     </div>
//   )
// }