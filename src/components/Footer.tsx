import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D2E47] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-1 font-bold text-xl mb-3"
            >
              <span>CMB</span>
              <span className="text-[#DB5425]">HVAC</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted experts for heating, cooling, and plumbing services
              across Salt Lake City and the Wasatch Front. Locally owned and
              operated.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DB5425] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DB5425] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DB5425] transition-colors"
              >
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/hvac"
                  className="hover:text-white transition-colors"
                >
                  HVAC Services
                </Link>
              </li>
              <li>
                <Link
                  href="/plumbing"
                  className="hover:text-white transition-colors"
                >
                  Plumbing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="hover:text-white transition-colors"
                >
                  Membership Program
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/services/ac"
                  className="hover:text-white transition-colors"
                >
                  AC Repair & Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/furnace"
                  className="hover:text-white transition-colors"
                >
                  Furnace Repair & Installation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Plumbing Repair
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Water Heater Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Water Treatment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:3858656749"
                  className="hover:text-white transition-colors"
                >
                  (385) 865-6749
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:Team@cmbhvac.com"
                  className="hover:text-white transition-colors"
                >
                  Team@cmbhvac.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Serving the Wasatch Front, Utah</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/contact" className="btn-primary btn-sm inline-block">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center gap-4 text-sm text-gray-400">
          <span>&copy; 2025 CMB HVAC. All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
