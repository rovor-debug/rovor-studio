
export default function Contact() {
  return (
    <main className="min-h-screen bg-white px-6 py-32">

      <h1 className="text-5xl font-light tracking-widest mb-16">
        CONTACT
      </h1>

      <div className="max-w-3xl">

        <p className="text-gray-500 text-lg leading-relaxed mb-12">
          Working internationally and remotely.
          ROVOR welcomes collaborations, architectural projects,
          and creative partnerships across borders.
        </p>

        <form className="space-y-8">

          <div>
            <label className="block text-sm mb-2">
              Name *
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">
              Email *
            </label>
            <input
              type="email"
              className="w-full border-b border-gray-300 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">
              Project Type
            </label>

            <select className="w-full border-b border-gray-300 py-3 outline-none">
              <option>Residential</option>
              <option>Cultural</option>
              <option>Competition</option>
              <option>Interior</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">
              Message *
            </label>

            <textarea
              rows="5"
              className="w-full border-b border-gray-300 py-3 outline-none"
            />
          </div>

          <button
            type="submit"
            className="border px-8 py-3 tracking-widest hover:bg-black hover:text-white transition"
          >
           
