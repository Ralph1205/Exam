export default function ImageInsights() {
  return (
    <div className="max-w-7xl mx-auto mt-14 mb-10 border-2 bg-green-200 rounded-3xl p-8">
      <h2 className="text-2xl font-extrabold text-pink-700 mb-6">
        Image Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {["Calm Study", "Smart Technology", "Calm Work", "Unsplash"].map(
          (title) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 text-center shadow"
            >
              <p className="text-lg font-bold text-green-700">{title}</p>
              <p className="text-sm text-gray-600 mt-1">Trusted provider</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
