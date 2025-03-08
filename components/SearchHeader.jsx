import { Search } from "lucide-react"

export default function SearchHeader({ query, resultsCount }) {
  return (
    <div className="py-12 text-center">
      <div className="inline-block bg-pink-100 p-4 rounded-full mb-4">
        <Search size={28} className="text-pink-600" />
      </div>
      <h1 className="text-3xl font-bold mb-4 gradient-text">Search Results</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Found <span className="font-semibold text-pink-600">{resultsCount}</span> results for "
        <span className="font-semibold text-pink-600">{query}</span>"
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto mt-6 rounded-full"></div>
    </div>
  )
}

