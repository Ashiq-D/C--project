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
    <footer className="bg-[#f7f7f7] border-t border-brand-light-gray mt-16">
      <Container>

        {/* ================= TOP CONTACT STRIP ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-brand-light-gray py-8">
          
          {/* Item */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <MapPin className="w-6 h-6 text-brand-light-gray group-hover:text-brand-teal transition-colors duration-300" />
            <div>
              <h3 className="text-sm font-semibold text-techmak-dark-blue group-hover:text-brand-teal transition-colors duration-300">
                Visit Us
              </h3>
              <p className="text-xs text-gray-500">
                4th floor, Bashundhara R/A
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 group cursor-pointer">
            <Phone className="w-6 h-6 text-brand-light-gray group-hover:text-brand-teal transition-colors duration-300" />
            <div>
              <h3 className="text-sm font-semibold text-techmak-dark-blue group-hover:text-brand-teal transition-colors duration-300">
                Call Us
              </h3>
              <p className="text-xs text-gray-500">
                +880 1611-224433
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 group cursor-pointer">
            <Clock className="w-6 h-6 text-brand-light-gray group-hover:text-brand-teal transition-colors duration-300" />
            <div>
              <h3 className="text-sm font-semibold text-techmak-dark-blue group-hover:text-brand-teal transition-colors duration-300">
                Working Hours
              </h3>
              <p className="text-xs text-gray-500">
                24 Hours Service
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 group cursor-pointer">
            <Mail className="w-6 h-6 text-brand-light-gray group-hover:text-brand-teal transition-colors duration-300" />
            <div>
              <h3 className="text-sm font-semibold text-techmak-dark-blue group-hover:text-brand-teal transition-colors duration-300">
                Email Us
              </h3>
              <p className="text-xs text-gray-500">
                info@techmakai.com
              </p>
            </div>
          </div>

        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">

          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold text-brand-teal">
              TECHMAKAI
            </h2>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Discover curated tech collections with innovation and
              comfort to elevate your lifestyle.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-brand-teal">
              <a
                href="#"
                className="hover:text-techmak-dark-blue transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-techmak-dark-blue transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-techmak-dark-blue transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-techmak-dark-blue transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4 text-techmak-dark-blue">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                About Us
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4 text-techmak-dark-blue">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Smart Devices</li>
              <li>Gadgets</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4 text-techmak-dark-blue">
              Newsletter
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to receive updates and exclusive offers.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-brand-light-gray rounded-md px-4 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />

            <button className="w-full bg-techmak-dark-blue text-white py-2 rounded-md hover:bg-brand-teal transition duration-300">
              Subscribe
            </button>
          </div>

        </div>

        {/* ================= BOTTOM COPYRIGHT ================= */}
        <div className="border-t border-brand-light-gray py-6 text-center text-sm text-gray-500">
          © 2026{" "}
          <span className="font-semibold text-techmak-dark-blue">
            TECHMAKAI
          </span>
          . All rights reserved.
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
