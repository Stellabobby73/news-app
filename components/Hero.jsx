"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Search, TrendingUp, ArrowRight } from "lucide-react"
import Loading from "./Loading"

export default function Hero({ topNews, loading }) {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  const mainArticle = topNews && topNews.length > 0 ? topNews[0] : null

  return (
    <div className="relative bg-gradient-to-r from-pink-700 to-pink-500 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-float">Navigate the News Landscape</h1>
          <p className="text-xl mb-8 text-pink-100">
            Discover breaking stories, in-depth analysis, and diverse perspectives from around the world.
          </p>
          <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for news, topics, or sources..."
              className="w-full pl-5 pr-12 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-pink-300/50 shadow-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-4 top-4 text-pink-500 hover:text-pink-700 transition-colors"
            >
              <Search size={24} />
            </button>
          </form>
        </div>

        {loading ? (
          <Loading />
        ) : mainArticle ? (
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-pink-300/30 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={mainArticle.urlToImage || "/placeholder.svg?height=400&width=600"}
                  alt={mainArticle.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full flex items-center text-sm font-semibold">
                  <TrendingUp size={16} className="mr-1" /> TRENDING
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-3">{mainArticle.title}</h2>
                <p className="mb-6 text-white/80">{mainArticle.description}</p>
                <Link
                  href={`/article/${mainArticle.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center bg-white text-pink-600 font-semibold px-5 py-2 rounded-full hover:bg-pink-50 transition-all shadow-md hover:shadow-lg"
                >
                  Read Full Story <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">No trending news available at the moment.</div>
        )}
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

