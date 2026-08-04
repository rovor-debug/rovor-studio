export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        <div>
          <h2 className="text-2xl tracking-[0.4em] font-light">
            ROVOR
          </h2>

          <p className="mt-4 text-gray-400 text-sm">
            Architecture Studio
          </p>
        </div>


        <div className="text-sm text-gray-400 space-y-2">
          <p>
            Email: hello@rovor-studio.com
          </p>

          <p>
            Location: Working Internationally & Remotely
          </p>

          <p>
            Instagram: @rovor__architectur_studio
          </p>
        </div>

      </div>

      <div className="mt-10 pt-6 border-t border-gray-800 text-xs text-gray-500">
        © {new Date().getFullYear()} ROVOR Studio. All rights reserved.
      </div>

    </footer>
  );
}
