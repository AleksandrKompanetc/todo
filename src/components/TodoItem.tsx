import { useState } from 'react'
import { Trash2, CheckCircle, Circle, Save, X, Edit2 } from 'lucide-react'
import type { Todo } from '../types'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onEdit: (id: number, newText: string) => void
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.text)

  const handleSave = () => {
    if (editValue.trim() && editValue !== todo.text) {
      onEdit(todo.id, editValue.trim())
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditValue(todo.text)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <li className='border-b last:border-none flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition'>
      <button
        onClick={() => onToggle(todo.id)}
        className='text-gray-400 hover:text-gray-500 transition'
      >
        {todo.completed ? (
          <CheckCircle size={26} className='text-green-500' />
        ) : (
          <Circle size={26} />
        )}
      </button>

      <div className='flex-1 min-w-0'>
        {isEditing ? (
          <div className='flex gap-2'>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className='flex-1 px-3 py-2 border border-blue-400 rounded-lg focus:outline-none text-lg'
              autoFocus
            />
            <button
              onClick={handleSave}
              className='text-green-600 hover:text-green-700 p-2'
              title='Save'
            >
              <Save size={20} />
            </button>
            <button
              onClick={handleCancel}
              className=''
              title='Cancel'
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <span className={`text-lg break-words ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
            >
              {todo.text}
          </span>
        )}
      </div>

      {!isEditing && (
        <>
          <button
            className='text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition'
            onClick={() => setIsEditing(true)}
            title='Edit'
          >
            <Edit2 size={20} />
          </button>
          <button
            className='text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition'
            onClick={() => onDelete(todo.id)}
            title='Delete'
          >
            <Trash2 size={20} />
          </button>
        </>
      )}
    </li>
  )
}


























// import { useState } from 'react'
// import { Trash2, CheckCircle, Circle, Save, X, Edit2 } from 'lucide-react'
// import type { Todo } from '../types'

// interface TodoItemProps {
//   todo: Todo
//   onToggle: (id: number) => void
//   onDelete: (id: number) => void
//   onEdit: (id: number, newText: string) => void
// }

// export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
//   const [isEditing, setIsEditing] = useState(false)
//   const [editValue, setEditValue] = useState(todo.text)

//   const handleSave = () => {
//     if (editValue.trim() && editValue !== todo.text) {
//       onEdit(todo.id, editValue.trim())
//     }
//     setIsEditing(false)
//   }

//   const handleCancel = () => {
//     setEditValue(todo.text)
//     setIsEditing(false)
//   }

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       handleSave()
//     } else if (e.key ==='Escape') {
//       handleCancel()
//     }
//   }

//   return (
//     <li className='border-b last:border-none flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition'>
//       <button
//         onClick={() => onToggle(todo.id)}
//         className='text-gray-400 hover:text-green-500 transition'
//       >
//         {todo.completed ? (
//           <CheckCircle size={26} className='text-green-500' />
//         ) : (
//           <Circle size={26} />
//         )}
//       </button>

//       <div className='flex-1 min-w-0'>
//         {isEditing ? (
//           <div className='flex gap-2'>
//             <input
//               type="text"
//               value={editValue}
//               onChange={(e) => setEditValue(e.target.value)}
//               onKeyDown={handleKeyDown}
//               className='flex-1 px-3 py-2 border border-blue-400 rounded-lg focus:outline-none text-lg'
//               autoFocus
//             />
//             <button
//               onClick={handleSave}
//               className='text-green-600 hover:text-green-700 p-2'
//               title='Save'
//             >
//               <Save size={20} />
//             </button>
//             <button
//               onClick={handleCancel}
//               className='text-gray-500 hover:text-gray-700 p-2'
//               title='Cancel'
//             >
//               <X size={20} />
//             </button>
//           </div>
//         ) : (
//           <span
//             className={`text-lg break-words ${
//               todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
//             }`}
//           >
//             {todo.text}
//           </span>
//         )}
//       </div>

//       {!isEditing && (
//         <div className='flex items-center gap-1 flex-shrink-0'>
//           <button
//             onClick={() => setIsEditing(true)}
//             className='text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition'
//             title='Edit'
//           >
//             <Edit2 size={20} />
//           </button>
//           <button
//             onClick={() => onDelete(todo.id)}
//             className='text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition'
//             title='Delete'
//           >
//             <Trash2 size={20} />
//           </button>
//         </div>
//       )}
//     </li>
//   )
// }