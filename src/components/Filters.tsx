import { Filter } from '../types'

interface FiltersProps {
  currentFilter: Filter
  onFilterChange: (filter: Filter) => void
}

const filterOptions: { value: Filter, label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' }
] 

export default function Filters({ currentFilter, onFilterChange }: FiltersProps) {
  return (
    <div className='flex gap-2 mb-6'>
      {filterOptions.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`px-5 py-2 rounded-lg font-medium transition ${
            currentFilter === value
            ? 'bg-blue-600 text-white shadow-sm'
            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}