"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-techmak-gold/15 pt-20 pb-10 mt-20 z-10 overflow-hidden backdrop-blur-md" style={{ background: "linear-gradient(180deg, rgba(10,12,30,0.4) 0%, rgba(8,10,24,0.6) 100%)" }}>
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-techmak-gold/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-techmak-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="relative w-32 h-10 md:w-40 md:h-12">
              <Image
                src="/Techmak Logo.png"
                alt="Techmak Technology Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering the future of technology with advanced solutions, proven performance, and an unwavering commitment to excellence.
            </p>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-techmak-gold font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-techmak-red shrink-0 mt-0.5" />
                <span className="text-sm">123 Innovation Drive, Tech District, City 10001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-techmak-red shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-techmak-red shrink-0" />
                <span className="text-sm">info@techmak.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-techmak-gold font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-sm text-gray-400 hover:text-techmak-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#brands" className="text-sm text-gray-400 hover:text-techmak-gold transition-colors">Our Brands</Link>
              </li>
              <li>
                <Link href="#solutions" className="text-sm text-gray-400 hover:text-techmak-gold transition-colors">Solutions</Link>
              </li>
              <li>
                <Link href="#careers" className="text-sm text-gray-400 hover:text-techmak-gold transition-colors">Careers</Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-techmak-gold font-semibold mb-6">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest tech insights.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-techmak-gold/20 rounded-full px-6 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-techmak-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 p-2 bg-techmak-red text-white rounded-full hover:bg-techmak-gold transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8 border-t border-techmak-gold/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Techmak Technology Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-techmak-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-techmak-gold transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
