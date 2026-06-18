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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-12 py-2 md:py-3 flex items-center justify-between"
      style={{
        background: "linear-gradient(180deg, rgba(26,15,20,0.9) 0%, rgba(26,15,20,0.6) 60%, rgba(26,15,20,0) 100%)",
        backdropFilter: "blur(20px) saturate(150%)",
        WebkitBackdropFilter: "blur(20px) saturate(150%)",
      }}
    >
      <Link href="/" className="flex items-center">
        <div className="relative w-28 h-8 md:w-32 md:h-10">
          <Image 
            src="/Techmak Logo.png" 
            alt="Techmak Alliance Logo" 
            fill 
            className="object-contain object-left" 
            priority
          />
        </div>
      </Link>

      <div className="flex items-center space-x-3 md:space-x-4">
        <Link href="#" className="text-white/40 hover:text-techmak-champagne transition-colors duration-300">
          <FacebookIcon className="w-5 h-5" />
        </Link>
        <Link href="#" className="text-white/40 hover:text-techmak-champagne transition-colors duration-300">
          <LinkedinIcon className="w-5 h-5" />
        </Link>
        <Link href="#" className="text-white/40 hover:text-techmak-champagne transition-colors duration-300">
          <YoutubeIcon className="w-5 h-5" />
        </Link>
      </div>
    </motion.nav>
  );
}
