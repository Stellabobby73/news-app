"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { searchNews } from "@/utils/api"
import NewsGrid from "@/components/NewsGrid"
import SearchHeader from "@/components/SearchHeader"
import Loading from "@/components/Loading"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSearchResults = async () => {
      setLoading(true)
      try {
        const data = await searchNews(query)
        setNews(data.articles)
        setLoading(false)
      } catch (error) {
        console.error("Error searching news:", error)
        setLoading(false)
      }
    }

    if (query) {
      getSearchResults()
    }
  }, [query])

  return (
    <div className="container-custom">
      <SearchHeader query={query} resultsCount={news.length} />
      {loading ? <Loading /> : <NewsGrid news={news} />}
    </div>
  )
}

