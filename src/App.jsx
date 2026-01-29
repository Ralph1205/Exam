import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const API_URL = "https://api.unsplash.com/search/photos";
  const IMAGES_PER_PAGE = 24;

  const [query, setQuery] = useState("unsplash");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = async (page = 1) => {
    if (!query) return;
    setLoading(true);

    try {
      const { data } = await axios.get(
        `${API_URL}?query=${query}&page=${page}&per_page=${IMAGES_PER_PAGE}`,
        {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
          },
        },
      );

      setImages(data.results);
      setTotalResults(data.total);
      setCurrentPage(page);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalResults / IMAGES_PER_PAGE);

  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-sky-300 py-10 px-4 md:px-10">
      <div className="flex justify-center gap-4 mb-12 items-stretch">
        <div className="text-left border-2 p-10 rounded-2xl bg-green-200 w-170 flex flex-col justify-center">
          <h1 className="text-xl font-extrabold text-pink-700 mb-3">
            Currented search
          </h1>
          <h1 className="text-5xl font-extrabold text-pink-700 mb-3">
            Find the mood
          </h1>
          <p className="text-lg text-sky-700">Hahahahahaahahahah ewan</p>
        </div>

        <div className="text-left border-2 p-10 rounded-2xl bg-green-200 w-110 flex flex-col justify-center">
          <p className="text-xl font-bold text-pink-700 mb-2">Insight</p>
          <p className="text-lg text-green-800 mb-1">24</p>
          <p className="text-sm text-sky-700 mb-1 underline">
            Images per search
          </p>
          <p className="text-sm text-sky-700">Unsplash</p>
          <p className="text-sm text-sky-700">Trusted provider</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-10 border-2 p-6 rounded-2xl bg-green-200 min-h-300px">
        <p className="text-lg font-semibold text-sky-800 mb-2">Search</p>

        <div className="flex flex-col sm:flex-row gap-4 bg-white p-5 rounded-3xl shadow-lg items-center">
          <input
            ref={inputRef}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search images..."
            value={query}
            type="text"
            className="flex-1 py-3 px-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            onClick={() => handleSearch(1)}
            className="bg-white text-green-600 border-green-600 hover:bg-green-600 hover:text-white  px-6 py-3 rounded-2xl border transition-colors cursor-pointer"
          >
            Search
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          {["Nature", "Basketball", "Cars", "Food", "Travel", "Animals"].map(
            (category) => (
              <button
                key={category}
                onClick={() => {
                  setQuery(category);
                  handleSearch(1);
                }}
                className="px-4 py-2 rounded-full bg-white text-green-600 border-green-600 hover:bg-green-600 hover:text-white cursor-pointer"
              >
                {category}
              </button>
            ),
          )}
        </div>

        <div className="flex justify-between text-sm text-green-800 mt-4">
          <p>{images.length} Results</p>
          <p>
            Page {currentPage} of {totalPages}
          </p>
        </div>
      </div>

      {images.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
              >
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 from-black/70 to-transparent p-3 text-white text-sm opacity-0 hover:opacity-100 transition-opacity">
                  {image.alt_description || "Untitled"}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto mt-14 mb-10 border-2 bg-green-200 rounded-3xl p-8">
            <h2 className="text-2xl font-extrabold text-pink-700 mb-6">
              Image Insights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow">
                <p className="text-3xl font-bold text-green-700">Calm Study</p>
                <p className="text-sm text-gray-600 mt-1">
                  Focus-friendly desk, boos, and soft light.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow">
                <p className="text-3xl font-bold text-green-700">
                  Smart Technology
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Focus-friendly desk, boos, and soft light.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow">
                <p className="text-3xl font-bold text-green-700">Calm work</p>
                <p className="text-sm text-gray-600 mt-1">edi smart</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow">
                <p className="text-lg font-bold text-green-700">Unsplash</p>
                <p className="text-sm text-gray-600 mt-1">Trusted provider</p>
              </div>
            </div>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-2 flex-wrap">
              <button
                onClick={() => currentPage > 1 && handleSearch(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border bg-white text-green-600 border-green-600 hover:bg-green-600 hover:text-white cursor-pointer"
              >
                Previous
              </button>

              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handleSearch(page)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    page === currentPage
                      ? "bg-white text-green-600 border-green-600 hover:bg-green-600 hover:text-white cursor-pointer"
                      : "bg-white text-green-600 border-green-600 hover:bg-green-600 hover:text-white cursor-pointer"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() =>
                  currentPage < totalPages && handleSearch(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border bg-white text-green-600 border-green-600 hover:bg-green-600 hover:text-white disabled:opacity-50 cursor-pointer"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center mt-20 text-gray-500 text-lg">
          No Images Found
        </div>
      )}
    </div>
  );
}

export default App;
