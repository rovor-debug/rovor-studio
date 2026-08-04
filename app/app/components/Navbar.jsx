export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <div className="text-xl tracking-[0.4em] font-light">
          ROVOR
        </div>

        <div className="flex gap-8 text-sm tracking-widest text-gray-700">
          <a href="/">HOME</a>
          <a href="/projects">PROJECTS</a>
          <a href="/services">SERVICES</a>
          <a href="/contact">CONTACT</a>
        </div>

      </div>
    </nav>
  );
}
