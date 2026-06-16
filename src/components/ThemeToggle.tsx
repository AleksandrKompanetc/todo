import { Sun, Moon } from 'lucide-react'   // или используй emoji, если не хочешь ставить lucide

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <div className="flex justify-end mb-6">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 
                   hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-gray-800 dark:text-white"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <>
            <Sun className="w-5 h-5" />
            <span className="text-sm font-medium">Светлая</span>
          </>
        ) : (
          <>
            <Moon className="w-5 h-5" />
            <span className="text-sm font-medium">Тёмная</span>
          </>
        )}
      </button>
    </div>
  )
}








// import { Moon, Sun } from 'lucide-react'

// interface Props {
//   isDark: boolean
//   onToggle: () => void
// }

// export default function ThemeToggle({ isDark, onToggle }: Props) {
//   return (
//     <button
//       onClick={onToggle}
//       className='p-3 rounded-2xl bg-gray-200 dark:bg-gray-700 text-gray-800'
//     >
//       {isDark ? <Sun size={24} /> : <Moon size={24} />}
//     </button>
//   )
// }



// import { Moon, Sun } from 'lucide-react'

// interface Props {
//   isDark: boolean
//   onToggle: () => void
// }

// export default function ThemeToggle({ isDark, onToggle }: Props) {
//   return (
//     <button
//       onClick={onToggle}
//       className='p-3 rounded-2xl bg-gray-200 dark:bg-gray-700 text-gray-800'
//     >
//       {isDark ? <Sun size={24} /> : <Moon size={24} />}
//     </button>
//   )
// }

// import { Moon, Sun } from 'lucide-react'
// import type { Theme } from '../types'

// interface Props {
//   isDark: boolean
//   onToggle: () => void
// }

// export default function ThemeToggle({ isDark, onToggle }: Props) => {
//   return (
//     <button
//       onClick={onToggle}
//       className='p-3 rounded-2xl bg-gray-200 dark:bg-gray-700 text-gray-800'
//     >
//       {isDark ? <Sun size={24} /> : <Moon size={24} />}
//     </button>
//   )
// }