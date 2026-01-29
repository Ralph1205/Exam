export default function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative overflow-hidden rounded-xl shadow bg-white hover:scale-105 transition"
        >
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0  from-black/70 to-transparent p-3 text-white text-sm opacity-0 hover:opacity-100 transition">
            {image.alt_description || "Untitled"}
          </div>
        </div>
      ))}
    </div>
  );
}
