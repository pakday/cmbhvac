"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      label: "Heating & Cooling",
      submenu: [
        { label: "All HVAC Services", href: "/services" },
        { label: "Air Conditioning", href: "/services/ac" },
        { label: "Furnace & Heating", href: "/services/furnace" },
        { label: "Commercial HVAC", href: "#" },
      ],
    },
    {
      label: "Plumbing",
      submenu: [
        { label: "All Plumbing Services", href: "/plumbing" },
        { label: "Plumbing Repair", href: "/plumbing-repair-services" },
        {
          label: "Plumbing Installation",
          href: "/plumbing-installation-services",
        },
        { label: "Repiping Services", href: "/repiping-services" },
        { label: "Water Heater Services", href: "/water-heater-services" },
        { label: "Water Treatment", href: "/water-treatment-services" },
      ],
    },
    { label: "Membership", href: "/membership" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 font-bold text-xl">
            <span className="text-[#133F60]">CMB</span>
            <span className="text-[#DB5425]">HVAC</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#133F60] transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.href}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#133F60] first:rounded-t-2xl last:rounded-b-2xl transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="font-medium text-gray-700 hover:text-[#133F60] transition-colors"
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
          <div className="lg:hidden pb-4 space-y-1">
            {navLinks.map((item, idx) => (
              <div key={idx}>
                {item.submenu ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 font-semibold text-gray-900">
                      {item.label}
                    </div>
                    {item.submenu.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.href}
                        className="block px-6 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="block px-3 py-2 font-semibold text-gray-900 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 space-y-2 px-3">
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
  );
}
