"use client";

import { motion } from "framer-motion";

const ConnectPage = () => {
  return (
    <section className="flex-1 bg-gradient-to-br from-[#071A1A] via-[#0F3D3E] to-[#052626] text-white ">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-18 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold leading-tight">
            Let’s <span className="text-brand-accent">Collaborate</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Let’s resolve your inquiry. Simply fill out the form and
            we’ll connect you with the right solution.
          </p>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10"
        >
          <form className="space-y-6">

            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-300">Company</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-300">Project Details</label>
              <textarea
                rows={4}
                placeholder="Tell us more about your idea..."
                className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-brand-accent hover:bg-brand-hover transition duration-300 font-semibold shadow-lg hover:shadow-brand-accent/40"
            >
              Send Inquiry
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ConnectPage;