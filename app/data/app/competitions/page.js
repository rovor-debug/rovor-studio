import competitions from "@/data/competitions";

export default function Competitions() {
  return (
    <main className="min-h-screen bg-white px-6 py-32">

      <h1 className="text-5xl font-light tracking-widest mb-16">
        COMPETITIONS
      </h1>

      <div className="max-w-5xl space-y-12">

        {competitions.map((item) => (
          <article
            key={item.name}
            className="border-b pb-10"
          >

            <h2 className="text-2xl tracking-wide">
              {item.name}
            </h2>

            <p className="mt-4 text-gray-500">
              {item.organizer} — {item.year}
            </p>

            <div className="mt-4 text-sm text-gray-400 space-y-1">
              <p>
                Category: {item.category}
              </p>

              <p>
                Result: {item.result}
              </p>

              <p>
                Team: {item.team}
              </p>
            </div>

          </article>
        ))}

      </div>

    </main>
  );
}
