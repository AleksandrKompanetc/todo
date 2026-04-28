import type { Todo } from '../types'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

export default function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo
          onDelete={deleteTodo}
          }
          />
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