import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Clock, ArrowUpRight } from "lucide-react"

export default function NewsGrid({ news }) {
  if (!news || news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">No news articles found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
      {news.map((article, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-pink-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="relative h-48">
            <Image
              src={article.urlToImage || "/placeholder.svg?height=300&width=400"}
              alt={article.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white text-sm flex items-center">
              <Clock size={14} className="mr-1" />
              {article.publishedAt ? `${formatDistanceToNow(new Date(article.publishedAt))} ago` : "Recent"}
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg mb-3 line-clamp-2 text-gray-800">{article.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
            <Link
              href={`/article/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors"
            >
              Read More <ArrowUpRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

