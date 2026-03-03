"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/servicesData";

/* =========================
   Animation Variants
========================= */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.8,
    rotateX: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1], // cinematic easing
    },
  },
};

/* =========================
   Component
========================= */

export default function ServicesSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20"
        >
          Our Services
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          style={{ perspective: 1200 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                rotateY: 3,
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <span className="text-brand-accent font-medium">
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}