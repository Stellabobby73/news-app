"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Menu, X, Heart } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Heart className="text-pink-600 mr-2" size={24} fill="#db2777" />
              <span className="text-2xl font-bold gradient-text">InsightStream</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/category/business"
              className="px-3 py-2 rounded-full hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition-colors"
            >
              Business
            </Link>
            <Link
              href="/category/technology"
              className="px-3 py-2 rounded-full hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition-colors"
            >
              Technology
            </Link>
            <Link
              href="/category/health"
              className="px-3 py-2 rounded-full hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition-colors"
            >
              Health
            </Link>
            <Link
              href="/category/science"
              className="px-3 py-2 rounded-full hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition-colors"
            >
              Science
            </Link>
            <form onSubmit={handleSearch} className="relative ml-2">
              <input
                type="text"
                placeholder="Search news..."
                className="pl-4 pr-10 py-2 border-2 border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 w-40 transition-all focus:w-60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2.5 text-pink-500 hover:text-pink-700">
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-600 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/category/business"
              className="block px-3 py-2 rounded-md hover:bg-pink-50 text-gray-700 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Business
            </Link>
            <Link
              href="/category/technology"
              className="block px-3 py-2 rounded-md hover:bg-pink-50 text-gray-700 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="/category/health"
              className="block px-3 py-2 rounded-md hover:bg-pink-50 text-gray-700 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Health
            </Link>
            <Link
              href="/category/science"
              className="block px-3 py-2 rounded-md hover:bg-pink-50 text-gray-700 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Science
            </Link>
            <form onSubmit={handleSearch} className="relative mt-3 px-3">
              <input
                type="text"
                placeholder="Search news..."
                className="w-full pl-4 pr-10 py-2 border-2 border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-6 top-2.5 text-pink-500 hover:text-pink-700">
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  )
}

