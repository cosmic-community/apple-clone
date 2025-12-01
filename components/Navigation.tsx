'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { label: 'Store', href: '/store' },
  { label: 'Mac', href: '/mac' },
  { label: 'iPad', href: '/ipad' },
  { label: 'iPhone', href: '/iphone' },
  { label: 'Watch', href: '/watch' },
  { label: 'Vision', href: '/vision' },
  { label: 'AirPods', href: '/airpods' },
  { label: 'TV & Home', href: '/tv-home' },
  { label: 'Entertainment', href: '/entertainment' },
  { label: 'Accessories', href: '/accessories' },
  { label: 'Support', href: '/support' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-apple-gray-800/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-apple-wide mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Apple Logo */}
          <Link href="/" className="text-apple-gray-100 hover:text-white">
            <svg className="w-4 h-4" viewBox="0 0 14 44" fill="currentColor">
              <path d="M13.0729 17.6825C13.0497 15.8813 13.8135 14.3779 15.3708 13.1844C14.5069 11.9445 13.1803 11.2591 11.4126 11.1273C9.73477 10.9991 7.88739 12.1343 7.18215 12.1343C6.43729 12.1343 4.80901 11.1733 3.47681 11.1733C0.725906 11.2187 -2.17505 13.2304 -2.17505 17.9001C-2.17505 19.2562 -1.94367 20.6588 -1.48093 22.1078C-0.861174 24.0287 1.07565 28.7484 3.09239 28.6826C4.32578 28.6522 5.21124 27.7952 6.82168 27.7952C8.38476 27.7952 9.21037 28.6826 10.5981 28.6826C12.6366 28.6522 14.3844 24.337 14.9746 22.4125C12.0002 21.0064 13.0729 17.7741 13.0729 17.6825ZM10.0693 9.31C11.3631 7.78187 11.2347 6.40001 11.1967 5.89587C10.0529 5.96251 8.72831 6.67331 7.98703 7.54187C7.17261 8.47061 6.69251 9.61967 6.79727 10.9187C8.02947 11.0113 9.16103 10.3727 10.0693 9.31Z" transform="translate(2.17505, 0)"/>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-apple-gray-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            {/* Search Icon */}
            <button className="text-apple-gray-200 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Bag Icon */}
            <button className="text-apple-gray-200 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-apple-gray-200 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-apple-gray-800 border-t border-apple-gray-700">
          <div className="max-w-apple mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-lg text-apple-gray-100 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}