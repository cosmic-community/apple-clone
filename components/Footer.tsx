import Link from 'next/link'

const footerLinks = {
  'Shop and Learn': [
    { label: 'Store', href: '/store' },
    { label: 'Mac', href: '/mac' },
    { label: 'iPad', href: '/ipad' },
    { label: 'iPhone', href: '/iphone' },
    { label: 'Watch', href: '/watch' },
    { label: 'AirPods', href: '/airpods' },
    { label: 'TV & Home', href: '/tv-home' },
  ],
  'Services': [
    { label: 'Apple Music', href: '/services/music' },
    { label: 'Apple TV+', href: '/services/tv' },
    { label: 'Apple Arcade', href: '/services/arcade' },
    { label: 'iCloud', href: '/services/icloud' },
    { label: 'Apple Card', href: '/apple-card' },
  ],
  'Apple Store': [
    { label: 'Find a Store', href: '/retail' },
    { label: 'Genius Bar', href: '/retail/geniusbar' },
    { label: 'Today at Apple', href: '/today' },
    { label: 'Apple Trade In', href: '/shop/trade-in' },
    { label: 'Financing', href: '/shop/financing' },
  ],
  'For Business': [
    { label: 'Apple and Business', href: '/business' },
    { label: 'Shop for Business', href: '/retail/business' },
  ],
  'Apple Values': [
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'Environment', href: '/environment' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Supplier Responsibility', href: '/supplier-responsibility' },
  ],
  'About Apple': [
    { label: 'Newsroom', href: '/newsroom' },
    { label: 'Apple Leadership', href: '/leadership' },
    { label: 'Career Opportunities', href: '/careers' },
    { label: 'Investors', href: '/investor' },
    { label: 'Ethics & Compliance', href: '/compliance' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-apple-gray-100 text-apple-gray-500 text-xs">
      {/* Disclaimer */}
      <div className="max-w-apple mx-auto px-4 py-4 border-b border-apple-gray-300">
        <p className="leading-relaxed">
          1. Apple Gift Card promotion is available in select stores. See terms and conditions for details.
        </p>
        <p className="mt-2 leading-relaxed">
          2. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. 
          Not all devices are eligible for credit.
        </p>
      </div>

      {/* Links Grid */}
      <div className="max-w-apple mx-auto px-4 py-8 border-b border-apple-gray-300">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-apple-gray-800 mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-apple-gray-800 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-apple mx-auto px-4 py-4">
        <p className="text-apple-gray-400">
          More ways to shop: <a href="/retail" className="apple-link text-xs">Find an Apple Store</a> or{' '}
          <a href="/shop/find-stores" className="apple-link text-xs">other retailer</a> near you. 
          Or call 1-800-MY-APPLE.
        </p>
        <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-apple-gray-400">
            Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-apple-gray-800">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-apple-gray-800">Terms of Use</Link>
            <Link href="/sitemap" className="hover:text-apple-gray-800">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}