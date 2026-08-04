
import services from "@/data/services";

export default function Services() {
  return (
    <main className="min-h-screen bg-white px-6 py-32">

      <h1 className="text-5xl font-light tracking-widest mb-16">
        SERVICES
      </h1>

      <div className="max-w-5xl space-y-12">

        {services.map((service) => (
          <section key={service.number} className="border-b pb-10">

            <div className="flex gap-8">

              <span className="text-gray-400 text-sm">
                {service.number}
              </span>

              <div>
                <h2 className="text-2xl tracking-wide">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed">
                  {service.description}
                </p>
              </div>

            </div>

          </section>
        ))}

      </div>

    </main>
  );
}
