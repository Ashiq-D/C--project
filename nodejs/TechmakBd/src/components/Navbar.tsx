"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
  </svg>
);

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 px-4 md:px-6 lg:px-12 py-3 md:py-4 flex items-center justify-between"
    >
      <Link href="/" className="flex items-center">
        <div className="relative w-32 h-10 md:w-40 md:h-12">
          {/* Using object-contain to ensure the logo isn't distorted */}
          <Image 
            src="/Techmak Logo.png" 
            alt="Techmak Technology Logo" 
            fill 
            className="object-contain object-left" 
            priority
          />
        </div>
      </Link>

      {/* Navigation links hidden for now - remove 'hidden' and restore 'md:flex' to show them */}
      <div className="hidden items-center space-x-8 text-sm font-medium">
        <Link href="/" className="text-techmak-gold relative group transition-colors pb-1">
          Home
          <span 
            className="absolute bottom-0 left-0 w-full h-[3px] rounded-full"
            style={{
              backgroundImage: "linear-gradient(90deg, #ff4b3e, #d4a93a, #f2c14e)",
              boxShadow: "0 0 10px rgba(212, 169, 58, 0.4)"
            }}
          ></span>
        </Link>
        <Link href="#brands" className="text-gray-300 hover:text-techmak-gold relative group transition-colors pb-1">
          Brands
          <span 
            className="absolute bottom-0 left-0 w-0 h-[3px] rounded-full transition-all duration-300 group-hover:w-full"
            style={{
              backgroundImage: "linear-gradient(90deg, #ff4b3e, #d4a93a, #f2c14e)",
              boxShadow: "0 0 10px rgba(212, 169, 58, 0.4)"
            }}
          ></span>
        </Link>
        <Link href="#solutions" className="text-gray-300 hover:text-techmak-gold relative group transition-colors pb-1">
          Solutions
          <span 
            className="absolute bottom-0 left-0 w-0 h-[3px] rounded-full transition-all duration-300 group-hover:w-full"
            style={{
              backgroundImage: "linear-gradient(90deg, #ff4b3e, #d4a93a, #f2c14e)",
              boxShadow: "0 0 10px rgba(212, 169, 58, 0.4)"
            }}
          ></span>
        </Link>
        <Link href="#about" className="text-gray-300 hover:text-techmak-gold relative group transition-colors pb-1">
          About Us
          <span 
            className="absolute bottom-0 left-0 w-0 h-[3px] rounded-full transition-all duration-300 group-hover:w-full"
            style={{
              backgroundImage: "linear-gradient(90deg, #ff4b3e, #d4a93a, #f2c14e)",
              boxShadow: "0 0 10px rgba(212, 169, 58, 0.4)"
            }}
          ></span>
        </Link>
      </div>

      <div className="flex items-center space-x-3 md:space-x-4">
        <Link href="#" className="text-gray-400 hover:text-techmak-red transition-colors">
          <FacebookIcon className="w-5 h-5 md:w-5 md:h-5" />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-techmak-red transition-colors">
          <LinkedinIcon className="w-5 h-5 md:w-5 md:h-5" />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-techmak-red transition-colors">
          <YoutubeIcon className="w-5 h-5 md:w-5 md:h-5" />
        </Link>
      </div>
    </motion.nav>
  );
}
