import { Entertainment } from '@/types'
import EntertainmentCard from '@/components/EntertainmentCard'

interface EntertainmentSectionProps {
  items: Entertainment[]
}

export default function EntertainmentSection({ items }: EntertainmentSectionProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <section className="py-8 bg-white">
      <div className="max-w-apple-wide mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-apple-gray-800 mb-6 text-center">
          Entertainment
        </h2>
        
        {/* Horizontal Scrolling Container */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {items.map((item) => (
            <EntertainmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}