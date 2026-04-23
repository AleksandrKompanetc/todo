import { useState } from 'react'
import { Plus } from 'lucide-react'

interface TodoFormProps {
  onAdd: (text: string) => void
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [inputValue, setInputValue] = useState(' ')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    onAdd(inputValue.trim())
    setInputValue('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mb-8 flex gap-2'
    >
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Add a new todo' 
        className='flex px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 text-lg placeholder:text-gray-400'
      />
      <button
        type='submit'
        className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all active:scale-95'
      >
        <Plus />
        Add
      </button>
    </form>
  )
}




















// import { useState } from 'react'
// import { Plus } from 'lucide-react'

// interface TodoFormProps {
//   onAdd: (text: string) => void
// }

// export default function TodoForm({ onAdd }: TodoFormProps) {
//   const [inputValue, setInputValue] = useState('')

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!inputValue.trim()) return
//     onAdd(inputValue.trim())
//     setInputValue('')
//   }

//   return (
//     <form onSubmit={handleSubmit} className='mb-8 flex gap-2'>
//       <input
//       type="text"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//       placeholder='Add a new Todo'
//       className='flex px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 text-lg placeholder:text-gray-400'
//       />
//       <button
//         type='submit'
//         className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all active:scale-95'
//       >
//         <Plus />
//         Add
//       </button>
//     </form>
//   )
// }