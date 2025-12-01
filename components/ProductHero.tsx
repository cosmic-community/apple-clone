import { Product } from '@/types'
import Link from 'next/link'

interface ProductHeroProps {
  product: Product
  variant?: 'dark' | 'light'
}

export default function ProductHero({ product, variant = 'dark' }: ProductHeroProps) {
  const isDark = variant === 'dark'
  
  // Safe access to metadata with fallbacks
  const tagline = product.metadata?.tagline ?? ''
  const learnMoreLink = product.metadata?.learn_more_link
  const buyLink = product.metadata?.buy_link
  const heroImage = product.metadata?.hero_image
  
  return (
    <section 
      className={`relative min-h-[580px] md:min-h-[650px] flex flex-col items-center justify-start pt-14 overflow-hidden ${
        isDark ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-800'
      }`}
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 mb-6">
        <h2 className="text-hero-sm md:text-hero-md lg:text-hero">
          {product.title}
        </h2>
        {tagline && (
          <p className={`mt-2 text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-apple-gray-500'}`}>
            {tagline}
          </p>
        )}
        <div className="mt-4 flex items-center justify-center gap-6">
          {learnMoreLink && (
            <Link href={learnMoreLink} className="apple-link text-lg">
              Learn more →
            </Link>
          )}
          {buyLink && (
            <Link href={buyLink} className="apple-link text-lg">
              Buy →
            </Link>
          )}
        </div>
      </div>

      {/* Hero Image */}
      {heroImage?.imgix_url && (
        <div className="relative w-full flex-1 flex items-end justify-center">
          <img
            src={`${heroImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={product.title}
            className="max-w-full h-auto object-contain"
            width={800}
            height={450}
          />
        </div>
      )}
    </section>
  )
}