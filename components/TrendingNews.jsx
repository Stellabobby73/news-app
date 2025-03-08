import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Clock, ArrowUpRight } from "lucide-react"
import Loading from "./Loading"

export default function TrendingNews({ news, loading }) {
  if (loading) return <Loading />

  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center gradient-text">Trending News</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Stay updated with the most popular stories making headlines around the world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news && news.length > 0 ? (
            news.map((article, index) => (
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
            ))
          ) : (
            <div className="col-span-full text-center py-8">No trending news available at the moment.</div>
          )}
        </div>
      </div>
    </section>
  )
}

