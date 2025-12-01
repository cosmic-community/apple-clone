import { Product } from '@/types'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative bg-white overflow-hidden min-h-[500px] flex flex-col items-center justify-start pt-12">
      {/* Content */}
      <div className="text-center px-4 mb-4 z-10">
        <h3 className="text-headline text-apple-gray-800">
          {product.title}
        </h3>
        <p className="mt-1 text-body text-apple-gray-500">
          {product.metadata.tagline}
        </p>
        <div className="mt-3 flex items-center justify-center gap-4">
          {product.metadata.learn_more_link && (
            <Link href={product.metadata.learn_more_link} className="apple-link">
              Learn more →
            </Link>
          )}
          {product.metadata.buy_link && (
            <Link href={product.metadata.buy_link} className="apple-link">
              Buy →
            </Link>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 w-full flex items-center justify-center p-6">
        <img
          src={`${product.metadata.hero_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
          alt={product.title}
          className="max-w-full max-h-80 object-contain"
          width={400}
          height={300}
        />
      </div>
    </div>
  )
}