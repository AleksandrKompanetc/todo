interface TodoStatsProps {
  activeCount: number
}

export default function TodoStats({ activeCount }: TodoStatsProps) {
  return (
    <div className="text-center mt-6 text-gray-500">
      Remains to be done: <span className="font-semibold text-gray-700">{activeCount}</span>
    </div>
  )
}