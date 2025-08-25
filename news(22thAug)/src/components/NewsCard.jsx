export default function NewsCard({ article, onBookmark }) {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden flex flex-col">
      <img
        src={article.urlToImage || "https://via.placeholder.com/400x200?text=No+Image"}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="font-semibold text-lg mb-2">{article.title}</h2>
        <p className="text-sm flex-grow">{article.description || "No description available"}</p>
        <p className="text-xs text-gray-500 mt-2">
          {article.author || "Unknown"} • {new Date(article.publishedAt).toLocaleDateString()}
        </p>
        <div className="flex justify-between items-center mt-3">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            Read more
          </a>
          <button
            onClick={() => onBookmark(article)}
            className="text-xs px-2 py-1 border rounded hover:bg-blue-500 hover:text-white"
          >
            📌 Save
          </button>
        </div>
      </div>
    </div>
  );
}
