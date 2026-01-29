export default function SearchSection({
  query,
  setQuery,
  inputRef,
  handleSearch,
  images,
  currentPage,
  totalPages,
}) {
  return (
    <div className="max-w-6xl mx-auto mb-10 border-2 p-6 rounded-2xl bg-green-200 min-h-300px">
      <p className="text-lg font-semibold mb-2">Search</p>

      <div className="flex flex-col sm:flex-row gap-4 bg-white p-5 rounded-3xl shadow-lg items-center">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images..."
          className="flex-1 py-3 px-5 rounded-2xl border focus:outline-none"
        />
        <button
          onClick={() => handleSearch(1)}
          className="px-6 py-3 rounded-2xl border text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        {["Nature", "Basketball", "Cars", "Food", "Travel", "Animals"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => {
                setQuery(cat);
                handleSearch(1);
              }}
              className="px-4 py-2 rounded-full bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              {cat}
            </button>
          ),
        )}
      </div>

      <div className="flex justify-between text-sm mt-4">
        <p>{images.length} Results</p>
        <p>
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
}
