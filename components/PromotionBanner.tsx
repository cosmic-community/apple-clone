import { Promotion } from '@/types'
import Link from 'next/link'

interface PromotionBannerProps {
  promotion: Promotion
}

export default function PromotionBanner({ promotion }: PromotionBannerProps) {
  return (
    <div className="bg-apple-gray-100 py-3 text-center border-b border-apple-gray-200">
      <div className="max-w-apple mx-auto px-4">
        <p className="text-sm text-apple-gray-800">
          <span className="font-semibold">{promotion.title}</span>{' '}
          <span>{promotion.metadata.description}</span>{' '}
          {promotion.metadata.cta_link && promotion.metadata.cta_text && (
            <Link href={promotion.metadata.cta_link} className="apple-link text-sm">
              {promotion.metadata.cta_text} →
            </Link>
          )}
        </p>
      </div>
    </div>
  )
}