"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/Hero"
import PopularCategories from "@/components/PopularCategories"
import TrendingNews from "@/components/TrendingNews"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"
import { fetchTopNews } from "@/utils/api"

export default function Home() {
  const [topNews, setTopNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getTopNews = async () => {
      try {
        const data = await fetchTopNews()
        setTopNews(data.articles.slice(0, 5))
        setLoading(false)
      } catch (error) {
        console.error("Error fetching top news:", error)
        setLoading(false)
      }
    }

    getTopNews()
  }, [])

  return (
    <main className="min-h-screen">
      <Hero topNews={topNews} loading={loading} />
      <PopularCategories />
      <TrendingNews news={topNews} loading={loading} />
      <Newsletter />
      <Footer />
    </main>
  )
}

