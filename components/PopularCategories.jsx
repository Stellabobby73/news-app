import Link from "next/link"
import { Briefcase, Cpu, Heart, FlaskRoundIcon as Flask, Landmark, Gamepad2, Film, Plane } from "lucide-react"

const categories = [
  { name: "Business", icon: <Briefcase size={24} />, slug: "business" },
  { name: "Technology", icon: <Cpu size={24} />, slug: "technology" },
  { name: "Health", icon: <Heart size={24} />, slug: "health" },
  { name: "Science", icon: <Flask size={24} />, slug: "science" },
  { name: "Politics", icon: <Landmark size={24} />, slug: "politics" },
  { name: "Entertainment", icon: <Film size={24} />, slug: "entertainment" },
  { name: "Sports", icon: <Gamepad2 size={24} />, slug: "sports" },
  { name: "Travel", icon: <Plane size={24} />, slug: "travel" },
]

export default function PopularCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Popular Categories</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore news from your favorite categories and stay informed about the topics that matter most to you.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="flex flex-col items-center p-6 bg-pink-50 rounded-xl hover:bg-pink-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-pink-100"
            >
              <div className="text-pink-600 mb-3 bg-white p-3 rounded-full shadow-sm">{category.icon}</div>
              <span className="font-medium text-gray-800">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

