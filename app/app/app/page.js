import Navbar from
  "@/Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-white px-6">
        <section className="text-center">

          <h1 className="text-6xl md:text-8xl font-light tracking-widest">
            ROVOR
          </h1>

          <p className="mt-8 text-xl text-gray-600">
            Architecture Studio
          </p>

          <p className="mt-4 text-gray-500 max-w-xl">
            Designing spaces with clarity, creativity, precision and responsibility.
          </p>

        </section>
      </main>
    </>
  );
    }
