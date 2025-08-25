import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";
import Error from "../components/Error";
import useNewsAPI from "../hooks/useNewsAPI";
import { saveBookmark } from "../utils/localStorage";

export default function Home() {
  const [category, setCategory] = useState("business");
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("us");
  const [sortBy, setSortBy] = useState("publishedAt");
  const [page, setPage] = useState(1);

  const { articles, loading, error, fetchNews } = useNewsAPI();

  useEffect(() => {
    fetchNews({ category, query, country, sortBy, page });
  }, [category, query, country, sortBy, page]);

  return (
    <div className="my-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Search news..."
          className="border px-3 py-2 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={country} onChange={(e) => setCountry(e.target.value)} className="border px-2 py-2 rounded">
          <option value="us">US</option>
          <option value="in">India</option>
          <option value="gb">UK</option>
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border px-2 py-2 rounded">
          <option value="publishedAt">Latest</option>
          <option value="popularity">Popularity</option>
          <option value="relevancy">Relevancy</option>
        </select>
      </div>

      {/* News List */}
      {loading && <Loader />}
      {error && <Error message={error} />}
      {!loading && !error && (
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <NewsCard key={i} article={a} onBookmark={saveBookmark} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button onClick={() => setPage((p) => p + 1)} className="px-4 py-2 bg-blue-600 text-white rounded">
          Load More
        </button>
      </div>
    </div>
  );
}
