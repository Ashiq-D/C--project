import { Clock, MapPin, Phone, Mail } from "lucide-react";
import React from "react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "4th floor, 36/E, Road-2, Block-D, Bashundhara R/A",
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    title: "Call Us",
    subtitle: "+880 1611-224433",
    icon: <Phone className="h-6 w-6" />,
  },
  {
    title: "Working Hours",
    subtitle: "24 hrs",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Email Us",
    subtitle: "info@techmakai.com",
    icon: <Mail className="h-6 w-6" />,
  },
];

const FooterTop = () => {
  return (
    <div className="bg-brand-dark text-brand-light-text grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-white/10">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 group cursor-pointer"
        >
          {/* Icon */}
          <div className="text-brand-accent group-hover:text-brand-hover transition-colors duration-300">
            {item.icon}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-sm font-semibold group-hover:text-brand-hover transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-xs text-brand-muted mt-1">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;