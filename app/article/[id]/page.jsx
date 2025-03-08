"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, Heart } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { fetchArticleById } from "@/utils/api"
import Loading from "@/components/Loading"

export default function ArticlePage() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const getArticle = async () => {
      setLoading(true)
      try {
        const data = await fetchArticleById(id)
        setArticle(data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching article:", err)
        setError("Failed to load the article. Please try again later.")
        setLoading(false)
      }
    }

    if (id) {
      getArticle()
    }
  }, [id])

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // In a real app, you would save this to user's bookmarks
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    // In a real app, you would save this to user's likes
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  if (loading) return <Loading />

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500 text-center">{error}</p>
        <Link href="/" className="text-pink-500 hover:underline mt-4 inline-block">
          <ArrowLeft className="inline-block mr-2" size={16} />
          Back to Home
        </Link>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center">Article not found.</p>
        <Link href="/" className="text-pink-500 hover:underline mt-4 inline-block">
          <ArrowLeft className="inline-block mr-2" size={16} />
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-pink-50/50 min-h-screen py-8">
      <article className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="text-pink-500 hover:text-pink-700 mb-4 inline-flex items-center transition-colors">
          <ArrowLeft className="mr-2" size={16} />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-pink-100 p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{article.title}</h1>

          <div className="flex flex-wrap items-center mb-6 text-gray-600 gap-4">
            <span className="flex items-center">
              <User className="mr-1" size={16} />
              {article.author || "Unknown Author"}
            </span>
            <span className="flex items-center">
              <Calendar className="mr-1" size={16} />
              {article.publishedAt
                ? `${formatDistanceToNow(new Date(article.publishedAt))} ago`
                : "Publication date unknown"}
            </span>
            <span className="flex items-center">
              <Clock className="mr-1" size={16} />
              {Math.ceil(article.content?.length / 1000) || 5} min read
            </span>
          </div>

          {article.urlToImage && (
            <div className="mb-6 relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image src={article.urlToImage || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
          )}

          <div className="prose max-w-none">
            <p className="text-xl mb-6 text-gray-700 leading-relaxed">{article.description}</p>
            <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t border-pink-100">
            <div className="flex space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 px-3 py-1 rounded-full ${isLiked ? "bg-pink-100 text-pink-600" : "bg-gray-100 text-gray-600"} hover:bg-pink-100 hover:text-pink-600 transition-colors`}
              >
                <Heart size={16} fill={isLiked ? "#db2777" : "none"} />
                Like
              </button>
              <button
                onClick={handleBookmark}
                className={`flex items-center gap-1 px-3 py-1 rounded-full ${isBookmarked ? "bg-pink-100 text-pink-600" : "bg-gray-100 text-gray-600"} hover:bg-pink-100 hover:text-pink-600 transition-colors`}
              >
                <Bookmark size={16} fill={isBookmarked ? "#db2777" : "none"} />
                Save
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors"
              >
                <Share2 size={16} />
                Share
              </button>
            </div>

            {article.url && (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors shadow-md"
              >
                Read Original
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}

