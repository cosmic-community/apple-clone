import { Entertainment } from '@/types'
import Link from 'next/link'

interface EntertainmentCardProps {
  item: Entertainment
}

const categoryColors: Record<string, string> = {
  tv: 'from-purple-600 to-purple-800',
  music: 'from-pink-500 to-red-500',
  arcade: 'from-blue-500 to-cyan-500',
  fitness: 'from-green-500 to-emerald-600',
}

export default function EntertainmentCard({ item }: EntertainmentCardProps) {
  const categoryKey = item.metadata?.category?.key || 'tv'
  const categoryValue = item.metadata?.category?.value || 'Apple TV+'
  const gradientClass = categoryColors[categoryKey] || categoryColors.tv
  
  return (
    <div className="flex-shrink-0 w-72 md:w-80">
      <Link href={item.metadata?.link || '#'} className="block group">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
          <img
            src={`${item.metadata?.thumbnail_image?.imgix_url}?w=640&h=480&fit=crop&auto=format,compress`}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={320}
            height={240}
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${gradientClass} opacity-60`} />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
            <span className="text-xs font-medium uppercase tracking-wide opacity-90">
              {categoryValue}
            </span>
            <h3 className="text-lg font-semibold mt-1 line-clamp-2">
              {item.title}
            </h3>
            {item.metadata?.subtitle && (
              <p className="text-sm opacity-80 mt-1">
                {item.metadata.subtitle}
              </p>
            )}
          </div>
        </div>
        
        {item.metadata?.cta_text && (
          <p className="text-apple-link text-sm font-medium">
            {item.metadata.cta_text} →
          </p>
        )}
      </Link>
    </div>
  )
}