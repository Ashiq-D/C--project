import Link from "next/link";
import Container from "@/components/Container";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-white border-t border-white/10"
      style={{
        background: "rgba(7, 26, 26, 0.92)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
      }}
    >
      <Container>

        {/* ================= TOP CONTACT STRIP ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-b border-white/10 py-6 justify-items-center md:justify-items-start lg:justify-items-center">

          {/* Item */}
          <div className="flex items-center gap-5 group cursor-pointer">
            <MapPin className="w-10 h-10 text-brand-accent group-hover:text-brand-hover transition-colors duration-300" strokeWidth={1.5} />
            <div>
              <h3 className="text-[15px] font-semibold group-hover:text-brand-hover transition-colors duration-300">
                Visit Us
              </h3>
              <p className="text-[13px] text-white/70 mt-1 leading-snug">
                Flat-5A, Lift-5, House: 207, Road: 10,<br />
                Mohakhali Dohs, Dhaka-1206
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 group cursor-pointer">
            <Phone className="w-10 h-10 text-brand-accent group-hover:text-brand-hover transition-colors duration-300" strokeWidth={1.5} />
            <div>
              <h3 className="text-[15px] font-semibold group-hover:text-brand-hover transition-colors duration-300">
                Call Us
              </h3>
              <div className="text-[13px] text-white/70 flex flex-col gap-1 mt-1 leading-snug">
                <span>+880 9678221005</span>
                <span>+880 1711776464</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 group cursor-pointer">
            <Mail className="w-10 h-10 text-brand-accent group-hover:text-brand-hover transition-colors duration-300" strokeWidth={1.5} />
            <div>
              <h3 className="text-[15px] font-semibold group-hover:text-brand-hover transition-colors duration-300">
                Email Us
              </h3>
              <div className="text-[13px] text-white/70 flex flex-col gap-1 mt-1 leading-snug">
                <span>techmakbd@gmail.com</span>
                <span>info@techmakbd.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">

          {/* Column 1 */}
          <div>
            <div className="inline-block transition-transform hover:-translate-y-1 duration-300">
              <h2 className="text-4xl font-black text-white tracking-[0.2em] text-3d">
                TECHMAK
              </h2>
              <p className="text-xs font-medium tracking-[0.35em] uppercase text-brand-accent/80 mt-1">
                Technology Ltd.
              </p>
            </div>

            <p className="mt-4 text-base text-white/70 leading-relaxed">
              Discover curated tech collections with innovation and
              comfort to elevate your lifestyle.
            </p>

            {/* Logo */}
            <div className="mt-6">
              <img
                src="/images/Techmak Logo.png"
                alt="Techmak Technology Ltd."
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:col-start-4">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-base text-white/70">
              <li>
                <Link href="/about-us" className="hover:text-brand-hover transition-colors block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/connect" className="hover:text-brand-hover transition-colors block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-hover transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-brand-hover transition-colors block">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>



        </div>

        {/* ================= BOTTOM COPYRIGHT ================= */}
        <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-brand-accent">
            Techmak Technology Ltd.
          </span>
          . All rights reserved.
        </div>

      </Container>
    </footer>
  );
};

export default Footer;