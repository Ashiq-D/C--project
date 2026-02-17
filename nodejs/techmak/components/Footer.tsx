import Container from "@/components/Container";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white mt-16">
      <Container>

        {/* ================= TOP CONTACT STRIP ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/10 py-10">
          
          {/* Item */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <MapPin className="w-6 h-6 text-brand-accent group-hover:text-brand-hover transition-colors duration-300" />
            <div>
              <h3 className="text-sm font-semibold group-hover:text-brand-hover transition-colors duration-300">
                Visit Us
              </h3>
              <p className="text-xs text-white/70">
                4th floor, Bashundhara R/A
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <Phone className="w-6 h-6 text-brand-accent group-hover:text-brand-hover transition-colors duration-300" />
            <div>
              <h3 className="text-sm font-semibold group-hover:text-brand-hover transition-colors duration-300">
                Call Us
              </h3>
              <p className="text-xs text-white/70">
                +880 1611-224433
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <Clock className="w-6 h-6 text-brand-accent group-hover:text-brand-hover transition-colors duration-300" />
            <div>
              <h3 className="text-sm font-semibold group-hover:text-brand-hover transition-colors duration-300">
                Working Hours
              </h3>
              <p className="text-xs text-white/70">
                24 Hours Service
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <Mail className="w-6 h-6 text-brand-accent group-hover:text-brand-hover transition-colors duration-300" />
            <div>
              <h3 className="text-sm font-semibold group-hover:text-brand-hover transition-colors duration-300">
                Email Us
              </h3>
              <p className="text-xs text-white/70">
                info@techmakai.com
              </p>
            </div>
          </div>

        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-14">

          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold text-brand-accent">
              TECHMAKAI
            </h2>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Discover curated tech collections with innovation and
              comfort to elevate your lifestyle.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-6 text-brand-accent">
              <a href="#" className="hover:text-brand-hover transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-hover transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-hover transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-hover transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="hover:text-brand-hover transition-colors cursor-pointer">
                About Us
              </li>
              <li className="hover:text-brand-hover transition-colors cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-brand-hover transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-brand-hover transition-colors cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Categories
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Smart Devices</li>
              <li>Gadgets</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Newsletter
            </h4>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to receive updates and exclusive offers.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-sm mb-4 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-hover"
            />

            <button className="w-full bg-brand-accent text-white py-2 rounded-md hover:bg-brand-hover transition duration-300">
              Subscribe
            </button>
          </div>

        </div>

        {/* ================= BOTTOM COPYRIGHT ================= */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
          © 2026{" "}
          <span className="font-semibold text-brand-accent">
            TECHMAKAI
          </span>
          . All rights reserved.
        </div>

      </Container>
    </footer>
  );
};

export default Footer;