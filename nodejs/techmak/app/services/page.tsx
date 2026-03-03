import Link from "next/link";
import { services } from "@/lib/servicesData";

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-16">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              <span className="text-brand-accent font-medium">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}