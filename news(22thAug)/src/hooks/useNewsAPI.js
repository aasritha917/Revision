import { useState } from "react";

const API_KEY = "YOUR_NEWSAPI_KEY"; // Replace with your NewsAPI key
const BASE_URL = "https://newsapi.org/v2";

export default function useNewsAPI() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNews = async ({ category, query, country, sortBy, page }) => {
    setLoading(true);
    setError("");
    try {
      let url = `${BASE_URL}/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=${API_KEY}`;
      if (query) {
        url = `${BASE_URL}/everything?q=${query}&sortBy=${sortBy}&page=${page}&apiKey=${API_KEY}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      if (data.status === "ok") {
        setArticles((prev) => (page === 1 ? data.articles : [...prev, ...data.articles]));
      } else {
        setError(data.message || "Failed to fetch news");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return { articles, loading, error, fetchNews };
}
