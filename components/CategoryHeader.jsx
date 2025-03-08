import { Briefcase, Cpu, Heart, FlaskRoundIcon as Flask, Landmark, Gamepad2, Film, Plane } from "lucide-react"

const categoryIcons = {
  business: <Briefcase size={28} />,
  technology: <Cpu size={28} />,
  health: <Heart size={28} />,
  science: <Flask size={28} />,
  politics: <Landmark size={28} />,
  entertainment: <Film size={28} />,
  sports: <Gamepad2 size={28} />,
  travel: <Plane size={28} />,
}

export default function CategoryHeader({ category }) {
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : ""
  const icon = categoryIcons[category] || null

  return (
    <div className="py-12 text-center">
      <div className="inline-block bg-pink-100 p-4 rounded-full mb-4">
        {icon && <div className="text-pink-600">{icon}</div>}
      </div>
      <h1 className="text-3xl font-bold mb-4 gradient-text">{formattedCategory} News</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Stay updated with the latest {formattedCategory.toLowerCase()} news from around the world. Discover breaking
        stories, in-depth analysis, and expert opinions.
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto mt-6 rounded-full"></div>
    </div>
  )
}

