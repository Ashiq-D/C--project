import { services } from "@/lib/servicesData";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ServiceDetails({ params }: Props) {
  const service = services.find(
    (item) => item.slug === params.slug
  );

  if (!service) return notFound();

  return (
    <section className="min-h-screen bg-black text-white py-24">

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-teal-400">
          {service.title}
        </h1>

        {/* Short Description */}
        <p className="text-lg text-gray-400 mb-12">
          {service.description}
        </p>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]
                        p-10 rounded-3xl shadow-2xl border border-white/10">
          <p className="text-gray-100 leading-relaxed text-lg">
            {service.content}
          </p>
        </div>

      </div>

    </section>
  );
}