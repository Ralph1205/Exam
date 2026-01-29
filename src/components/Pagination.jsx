export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-10 gap-2 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded bg-white text-green-600 border-green-600"
      >
        Previous
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-4 py-2 border rounded ${
            p === currentPage
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 border-green-600"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded bg-white text-green-600 border-green-600"
      >
        Next
      </button>
    </div>
  );
}
