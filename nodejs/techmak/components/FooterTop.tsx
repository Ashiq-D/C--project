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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-brand-light-gray py-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 group cursor-pointer"
        >
          {/* Icon */}
          <div className="text-brand-light-gray group-hover:text-brand-teal transition-colors duration-300">
            {item.icon}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-sm font-semibold text-techmak-dark-blue group-hover:text-brand-teal transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
