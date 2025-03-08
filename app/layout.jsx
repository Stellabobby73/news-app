import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { NewsProvider } from "@/context/NewsContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "InsightStream - Navigate the News Landscape",
  description: "A revolutionary web application designed to redefine how people discover and consume news.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NewsProvider>
          <Navbar />
          {children}
        </NewsProvider>
      </body>
    </html>
  )
}



import './globals.css'