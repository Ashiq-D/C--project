"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WEB3FORMS_ACCESS_KEY = "ab589063-f340-4b50-bf8a-40b9e2654d06";

const ConnectClient = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check — if filled, it's a bot
    if (formData.get("website")) return;

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Inquiry from ${formData.get("fullName")} — Techmak Website`,
          from_name: "Techmak Website",
          name: formData.get("fullName"),
          email: formData.get("email"),
          company: formData.get("company") || "N/A",
          message: formData.get("projectDetails"),
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="flex-1 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-18 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold leading-tight">
            Let&apos;s <span className="text-brand-accent">Collaborate</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Let&apos;s resolve your inquiry. Simply fill out the form and
            we&apos;ll connect you with the right solution.
          </p>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Honeypot field — hidden from real users, traps spam bots */}
            <div className="absolute opacity-0 -z-10" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="fullName" className="text-sm text-gray-300">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Mr. Chowdhury"
                autoComplete="name"
                required
                className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="text-sm text-gray-300">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company"
                  autoComplete="organization"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-gray-300">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectDetails" className="text-sm text-gray-300">Project Details</label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={4}
                placeholder="Tell us more about your idea..."
                required
                className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-lg bg-brand-accent hover:bg-brand-hover transition duration-300 font-semibold shadow-lg hover:shadow-brand-accent/40 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Inquiry"}
            </button>

          </form>

          {/* Success / Error Toast */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm text-center font-medium"
              >
                ✓ Your inquiry has been sent successfully! We&apos;ll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm text-center font-medium"
              >
                Something went wrong. Please try again or email us directly at techmakbd@gmail.com
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ConnectClient;
