"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Flame,
  Snowflake,
  Droplets,
  Compass,
  MessageCircle,
} from "lucide-react";

interface SubItem {
  label: string;
  href: string;
  desc?: string;
}

interface NavItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  submenu?: SubItem[];
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<number | null>(null);

  const navLinks: NavItem[] = [
    {
      label: "Heating",
      icon: <Flame className="w-4 h-4 text-[#DB5425]" />,
      submenu: [
        {
          label: "Furnace Repair & Installation",
          href: "/hvac",
          desc: "Fast repairs + high-efficiency systems",
        },
      ],
    },
    {
      label: "Air Conditioning",
      icon: <Snowflake className="w-4 h-4 text-blue-400" />,
      submenu: [
        {
          label: "AC Repair & Installation",
          href: "/services/ac",
          desc: "Central AC, heat pumps & mini-splits",
        },
      ],
    },
    {
      label: "Plumbing",
      icon: <Droplets className="w-4 h-4 text-teal-500" />,
      submenu: [
        {
          label: "All Plumbing Services",
          href: "/plumbing",
          desc: "Complete plumbing solutions",
        },
        {
          label: "Plumbing Repair",
          href: "/plumbing-repair-services",
          desc: "Fast, accurate repairs",
        },
        {
          label: "Plumbing Installation",
          href: "/plumbing-installation-services",
          desc: "New installs & upgrades",
        },
        {
          label: "Repiping Services",
          href: "/repiping-services",
          desc: "Full home repiping",
        },
        {
          label: "Water Heater Services",
          href: "/water-heater-services",
          desc: "Repair, replace & maintain",
        },
        {
          label: "Water Treatment",
          href: "/water-treatment-services",
          desc: "Softeners, filters & more",
        },
      ],
    },
    {
      label: "Explore",
      icon: <Compass className="w-4 h-4 text-purple-500" />,
      submenu: [
        { label: "Blog", href: "/blog", desc: "Expert tips & honest advice" },
        {
          label: "Membership Program",
          href: "/membership",
          desc: "Save with bi-annual tune-ups",
        },
      ],
    },
    {
      label: "Contact",
      icon: <MessageCircle className="w-4 h-4 text-green-500" />,
      submenu: [
        {
          label: "Contact Us",
          href: "/contact",
          desc: "Get in touch with our team",
        },
        {
          label: "Schedule Us",
          href: "/schedule-us",
          desc: "Book your appointment online",
        },
        {
          label: "Service Areas",
          href: "/service-areas",
          desc: "Cities & towns we serve",
        },
      ],
    },
  ];

  return (
    <>
      {/* Announcement bar removed per design request */}

      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1 font-bold text-xl"
            >
              <span className="text-[#133F60]">CMB</span>
              <span className="text-[#DB5425]">HVAC</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((item, idx) => (
                <div key={idx} className="relative group">
                  {item.submenu ? (
                    <>
                      <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-[#133F60] hover:bg-gray-50 transition-colors text-sm">
                        {item.label}
                        <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                      </button>
                      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 group-hover:translate-y-0 translate-y-1">
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl w-64 overflow-hidden">
                          <div className="py-2">
                            {item.submenu.map((sub, subIdx) => (
                              <Link
                                key={subIdx}
                                href={sub.href}
                                className="flex flex-col px-5 py-3 hover:bg-gray-50 transition-colors"
                              >
                                <span className="text-sm font-semibold text-gray-800 group-hover:text-[#133F60]">
                                  {sub.label}
                                </span>
                                {sub.desc && (
                                  <span className="text-xs text-gray-400 mt-0.5">
                                    {sub.desc}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-[#133F60] hover:bg-gray-50 transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:3858656749"
                className="btn-secondary btn-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
              <Link href="/schedule-us" className="btn-primary btn-sm">
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#133F60]"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-100 mt-1 pt-2 space-y-0.5">
              {navLinks.map((item, idx) => (
                <div key={idx}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenMobile(openMobile === idx ? null : idx)
                        }
                        className="w-full flex items-center justify-between px-3 py-2.5 font-semibold text-gray-800 hover:bg-gray-50 rounded-xl text-sm"
                      >
                        <span className="flex items-center gap-2">
                          {item.icon}
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${openMobile === idx ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openMobile === idx && (
                        <div className="mt-0.5 ml-4 space-y-0.5 border-l-2 border-gray-100 pl-3">
                          {item.submenu.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              href={sub.href}
                              className="block py-2 px-2 text-sm text-gray-600 hover:text-[#133F60] hover:bg-gray-50 rounded-lg"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="flex items-center gap-2 px-3 py-2.5 font-semibold text-gray-800 hover:bg-gray-50 rounded-xl text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 space-y-2 px-3 border-t border-gray-100 mt-2">
                <a
                  href="tel:3858656749"
                  className="btn-secondary w-full flex justify-center"
                >
                  <Phone className="w-4 h-4" />
                  (385) 865-6749
                </a>
                <Link
                  href="/schedule-us"
                  className="btn-primary w-full flex justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
