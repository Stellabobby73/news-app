// Replace with your own NewsAPI key
const API_KEY = "0c67e66674b442c6b8db184771dbce94"
const USE_MOCK_DATA = false // Set to false to use the real API

// Import mock data
import mockData from "@/data/mockNews.json"

// Fetch top news articles
export async function fetchTopNews() {
  if (USE_MOCK_DATA) {
    return mockData.topNews
  }

  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch top news: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching top news:", error)
    // Return empty data structure to prevent app from crashing
    return { articles: [] }
  }
}

// Fetch news by category
export async function fetchNewsByCategory(category) {
  if (USE_MOCK_DATA) {
    return mockData.categories[category] || { articles: [] }
  }

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`,
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch ${category} news: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error)
    return { articles: [] }
  }
}

// Search news
export async function searchNews(query) {
  if (USE_MOCK_DATA) {
    return mockData.search[query.toLowerCase()] || { articles: [] }
  }

  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=relevancy&apiKey=${API_KEY}`)

    if (!response.ok) {
      throw new Error(`Failed to search news: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error searching news:", error)
    return { articles: [] }
  }
}

// Fetch news from a specific source
export async function fetchNewsBySource(source) {
  if (USE_MOCK_DATA) {
    // This is a simplified approach - in a real app, you might have source-specific mock data
    return { articles: mockData.topNews.articles.slice(0, 3) }
  }

  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch news from ${source}: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching news from ${source}:`, error)
    return { articles: [] }
  }
}

// Fetch article by ID
export async function fetchArticleById(id) {
  if (USE_MOCK_DATA) {
    // Search for the article in our mock data
    for (const category in mockData.categories) {
      const article = mockData.categories[category].articles.find(
        (a) => a.title.toLowerCase().replace(/\s+/g, "-") === id,
      )
      if (article) return article
    }
    // If not found in categories, check top news
    const topArticle = mockData.topNews.articles.find((a) => a.title.toLowerCase().replace(/\s+/g, "-") === id)
    if (topArticle) return topArticle

    // If still not found, return null
    return null
  }

  // For the real API, you would typically have an endpoint to fetch a single article
  // Since NewsAPI doesn't provide such an endpoint, we'll have to fetch all articles and filter
  // This is not efficient and should be handled differently in a production app
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?qInTitle=${id}&apiKey=${API_KEY}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch article: ${response.status}`)
    }

    const data = await response.json()
    return data.articles[0] || null
  } catch (error) {
    console.error("Error fetching article:", error)
    return null
  }
}

