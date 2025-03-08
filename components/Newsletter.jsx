"use client"

import { useState } from "react"
import { Send, Mail, CheckCircle } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) {
      setError("Please enter your email address")
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    // In a real app, you would send this to your backend
    console.log("Subscribing email:", email)
    setIsSubmitted(true)
    setError("")
    setEmail("")

    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section className="py-20 pink-gradient text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto transform rotate-180">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block bg-white/20 p-3 rounded-full mb-6">
          <Mail size={28} className="text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Stay Updated with InsightStream</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-pink-100">
          Subscribe to our newsletter and get the latest news delivered directly to your inbox.
        </p>

        {isSubmitted ? (
          <div className="bg-white/10 backdrop-blur-sm text-white p-6 rounded-xl max-w-md mx-auto border border-white/20 animate-fade-in flex items-center justify-center">
            <CheckCircle className="mr-2 text-green-300" size={20} />
            <span>Thank you for subscribing! You'll receive our next newsletter soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-pink-300/50 shadow-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-pink-200 text-sm mt-1 text-left pl-4">{error}</p>}
              </div>
              <button
                type="submit"
                className="bg-white text-pink-600 font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors shadow-lg"
              >
                Subscribe <Send size={16} className="ml-2" />
              </button>
            </div>
          </form>
        )}

        <div className="mt-10 text-sm text-pink-200">
          <p>We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-400/30 rounded-full blur-xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-400/20 rounded-full blur-xl"></div>
    </section>
  )
}

