"use client"

import { createContext, useState, useContext } from "react"

const NewsContext = createContext()

export function NewsProvider({ children }) {
  const [recentSearches, setRecentSearches] = useState([])
  const [savedArticles, setSavedArticles] = useState([])

  const addRecentSearch = (query) => {
    if (!query) return

    setRecentSearches((prev) => {
      // Remove duplicate if exists
      const filtered = prev.filter((item) => item !== query)
      // Add to beginning and limit to 5 items
      return [query, ...filtered].slice(0, 5)
    })
  }

  const saveArticle = (article) => {
    setSavedArticles((prev) => {
      // Check if article already exists
      if (prev.some((item) => item.url === article.url)) {
        return prev
      }
      return [article, ...prev]
    })
  }

  const removeArticle = (articleUrl) => {
    setSavedArticles((prev) => prev.filter((item) => item.url !== articleUrl))
  }

  return (
    <NewsContext.Provider
      value={{
        recentSearches,
        savedArticles,
        addRecentSearch,
        saveArticle,
        removeArticle,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

export function useNews() {
  return useContext(NewsContext)
}

