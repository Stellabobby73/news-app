"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { fetchNewsByCategory } from "@/utils/api"
import NewsGrid from "@/components/NewsGrid"
import CategoryHeader from "@/components/CategoryHeader"
import Loading from "@/components/Loading"

export default function CategoryPage() {
  const { slug } = useParams()
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getNews = async () => {
      setLoading(true)
      try {
        const data = await fetchNewsByCategory(slug)
        setNews(data.articles)
        setLoading(false)
      } catch (error) {
        console.error(`Error fetching ${slug} news:`, error)
        setLoading(false)
      }
    }

    if (slug) {
      getNews()
    }
  }, [slug])

  return (
    <div className="container-custom">
      <CategoryHeader category={slug} />
      {loading ? <Loading /> : <NewsGrid news={news} />}
    </div>
  )
}

