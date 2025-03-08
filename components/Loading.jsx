export default function Loading() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin"></div>
        <div
          className="w-16 h-16 border-4 border-transparent border-t-pink-300 rounded-full animate-spin absolute top-0 left-0"
          style={{ animationDirection: "reverse", animationDuration: "1s" }}
        ></div>
      </div>
    </div>
  )
}

