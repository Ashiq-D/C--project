"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative pt-6 sm:pt-8 pb-4 mt-4 sm:mt-6 z-10 overflow-hidden section-glow" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(26,15,20,0.5) 30%, rgba(26,15,20,0.8) 100%)" }}>
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-techmak-champagne/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-techmak-bronze/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Contact Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-techmak-champagne/10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-techmak-bronze mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold text-techmak-champagne mb-1">Visit Us</h4>
              <p className="text-sm text-white/40">Flat-5A, Lift-5, House: 207, Road: 10,</p>
              <p className="text-sm text-white/40">Mohakhali Dohs, Dhaka-1206</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-techmak-bronze mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold text-techmak-champagne mb-1">Call Us</h4>
              <p className="text-sm text-white/40">+880 9678221005</p>
              <p className="text-sm text-white/40">+880 1711776464</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-techmak-bronze mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold text-techmak-champagne mb-1">Email Us</h4>
              <p className="text-sm text-white/40">techmakbd@gmail.com</p>
              <p className="text-sm text-white/40">info@techmakbd.com</p>
            </div>
          </motion.div>
        </div>

        <div className="mb-6">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-2 max-w-lg"
          >
            <div className="relative w-28 h-8 sm:w-32 sm:h-10 md:w-40 md:h-12">
              <Image
                src="/Techmak Logo.png"
                alt="Techmak Alliance Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
              A diversified Bangladeshi business alliance delivering integrated solutions across technology, security, power & energy, and global sourcing.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-4 border-t border-techmak-champagne/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Techmak Alliance. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <Link href="#" className="hover:text-techmak-champagne transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-techmak-champagne transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
