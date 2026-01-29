export default function HeaderSection() {
  return (
    <div className="flex justify-center gap-4 mb-12 items-stretch">
      <div className="border-2 p-10 rounded-2xl bg-green-200 w-170 flex flex-col justify-center">
        <h1 className="text-xl font-extrabold text-pink-700 mb-3">
          Currented search
        </h1>
        <h1 className="text-5xl font-extrabold text-pink-700 mb-3">
          Find the mood
        </h1>
        <p className="text-lg text-sky-700">Hahahahahaahahahah ewan</p>
      </div>

      <div className="border-2 p-10 rounded-2xl bg-green-200 w-110 flex flex-col justify-center">
        <p className="text-xl font-bold text-pink-700 mb-2">Insight</p>
        <p className="text-lg text-green-800">24</p>
        <p className="text-sm underline">Images per search</p>
        <p className="text-sm">Unsplash</p>
        <p className="text-sm">Trusted provider</p>
      </div>
    </div>
  );
}
