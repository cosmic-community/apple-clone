import { getProducts, getEntertainment, getPromotions } from '@/lib/cosmic'
import PromotionBanner from '@/components/PromotionBanner'
import ProductHero from '@/components/ProductHero'
import ProductCard from '@/components/ProductCard'
import EntertainmentSection from '@/components/EntertainmentSection'
import PromoCard from '@/components/PromoCard'

export default async function HomePage() {
  const [products, entertainment, promotions] = await Promise.all([
    getProducts(),
    getEntertainment(),
    getPromotions(),
  ])

  // Get the first product for main hero
  const mainProduct = products.length > 0 ? products[0] : null
  // Get the second product for secondary hero
  const secondaryProduct = products.length > 1 ? products[1] : null
  // Get remaining products for grid
  const gridProducts = products.slice(2, 6)
  
  // Get trade-in and card promotions
  const tradeInPromo = promotions.find(p => p.slug === 'apple-trade-in')
  const shoppingEventPromo = promotions.find(p => p.slug === 'shopping-event')

  // Check if we have any content at all
  const hasContent = products.length > 0 || entertainment.length > 0 || promotions.length > 0

  if (!hasContent) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-semibold text-apple-gray-800 mb-4">Welcome to Apple Clone</h1>
          <p className="text-xl text-apple-gray-500 mb-8">
            No content found. Please add content to your Cosmic bucket.
          </p>
          <p className="text-sm text-apple-gray-400">
            Required Object Types: products, entertainment, promotions
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Promotional Banner */}
      {shoppingEventPromo && (
        <PromotionBanner promotion={shoppingEventPromo} />
      )}

      {/* Main Product Hero */}
      {mainProduct && (
        <ProductHero product={mainProduct} variant="dark" />
      )}

      {/* Secondary Product Hero */}
      {secondaryProduct && (
        <ProductHero product={secondaryProduct} variant="light" />
      )}

      {/* Gift Section */}
      <section className="bg-apple-gray-100 py-3">
        <div className="max-w-apple-wide mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-apple-gray-800">
            <span className="font-semibold">Give something special.</span>{' '}
            <span className="text-apple-gray-500">Find what they've been waiting for all year.</span>{' '}
            <a href="#" className="apple-link">Shop gifts →</a>
          </p>
        </div>
      </section>

      {/* Product Grid */}
      {gridProducts.length > 0 && (
        <section className="py-3 bg-white">
          <div className="max-w-apple-wide mx-auto px-1.5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {gridProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Promo Cards Section */}
      <section className="py-3 bg-white">
        <div className="max-w-apple-wide mx-auto px-1.5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tradeInPromo && <PromoCard promotion={tradeInPromo} />}
            <PromoCard 
              promotion={{
                id: 'apple-card',
                slug: 'apple-card',
                title: 'Apple Card',
                type: 'promotions',
                metadata: {
                  description: 'Get up to 3% Daily Cash back with every purchase.',
                  cta_text: 'Learn more',
                  cta_link: '/apple-card',
                  active: true,
                }
              }} 
            />
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      {entertainment.length > 0 && (
        <EntertainmentSection items={entertainment} />
      )}
    </div>
  )
}