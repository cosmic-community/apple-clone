import { Promotion } from '@/types'
import Link from 'next/link'

interface PromoCardProps {
  promotion: Promotion
}

export default function PromoCard({ promotion }: PromoCardProps) {
  return (
    <div className="bg-apple-gray-100 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[300px]">
      <h3 className="text-headline text-apple-gray-800">
        {promotion.title}
      </h3>
      <p className="mt-2 text-body text-apple-gray-500 max-w-md">
        {promotion.metadata.description}
      </p>
      {promotion.metadata.cta_link && promotion.metadata.cta_text && (
        <Link 
          href={promotion.metadata.cta_link} 
          className="mt-4 apple-link text-lg"
        >
          {promotion.metadata.cta_text} →
        </Link>
      )}
    </div>
  )
}