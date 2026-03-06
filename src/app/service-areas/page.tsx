import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  MapPin,
  Phone,
  CheckCircle,
  ArrowRight,
  Clock,
  ShieldCheck,
} from "lucide-react";

const counties = [
  {
    name: "Salt Lake County",
    description:
      "Our primary service hub. Same-day and next-day availability throughout Salt Lake County.",
    cities: [
      "Salt Lake City",
      "West Valley City",
      "Sandy",
      "South Jordan",
      "West Jordan",
      "Murray",
      "Draper",
      "Millcreek",
      "Taylorsville",
      "Midvale",
      "Cottonwood Heights",
      "Holladay",
      "Herriman",
      "Riverton",
      "South Salt Lake",
      "Magna",
    ],
  },
  {
    name: "Davis County",
    description:
      "Full coverage across Davis County — from Bountiful up to Clearfield and beyond.",
    cities: [
      "Bountiful",
      "North Salt Lake",
      "Woods Cross",
      "Centerville",
      "Farmington",
      "Kaysville",
      "Layton",
      "Clearfield",
      "Syracuse",
      "Roy",
      "Clinton",
      "West Bountiful",
    ],
  },
  {
    name: "Weber County",
    description: "Serving Ogden and the surrounding Weber County communities.",
    cities: [
      "Ogden",
      "Washington Terrace",
      "South Ogden",
      "Riverdale",
      "West Haven",
      "Plain City",
      "Farr West",
      "Pleasant View",
    ],
  },
  {
    name: "Utah County",
    description:
      "Service available for many Utah County communities — call to confirm availability.",
    cities: [
      "Provo",
      "Orem",
      "Lehi",
      "American Fork",
      "Pleasant Grove",
      "Springville",
      "Spanish Fork",
      "Saratoga Springs",
    ],
  },
  {
    name: "Summit & Wasatch Counties",
    description: "Serving Park City, Heber City, and the mountain communities.",
    cities: [
      "Park City",
      "Heber City",
      "Midway",
      "Snyderville",
      "Kimball Junction",
    ],
  },
];

const services = [
  { label: "AC Repair & Installation", href: "/services/ac" },
  { label: "Furnace Repair & Installation", href: "/services/furnace" },
  { label: "Plumbing Repair", href: "/plumbing-repair-services" },
  { label: "Plumbing Installation", href: "/plumbing-installation-services" },
  { label: "Repiping Services", href: "/repiping-services" },
  { label: "Water Heater Services", href: "/water-heater-services" },
  { label: "Water Treatment", href: "/water-treatment-services" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80"
            alt="Utah Wasatch Front landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0D2E47]/96 via-[#133F60]/88 to-[#133F60]/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-5">
              <MapPin className="w-3.5 h-3.5" />
              Service Areas · Utah
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
              Serving Utah&apos;s Wasatch Front &amp; Beyond
            </h1>
            <p className="text-lg text-white/85 mb-8 max-w-xl">
              CMB HVAC &amp; Plumbing serves over 50 communities across Salt
              Lake, Davis, Weber, Utah, and Summit counties. Licensed
              technicians, same-day availability, and satisfaction guaranteed.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/80">
              {[
                "50+ Communities Served",
                "Same-Day Available",
                "Licensed & Insured",
                "24/7 Emergency",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#DB5425]" /> {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/schedule-us" className="btn-primary">
                Book a Service
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:3858656749" className="btn-outline-white">
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTIES GRID */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="eyebrow">Where We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Cities &amp; Communities We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Don&apos;t see your city? Call us — we serve many communities
              beyond this list and may still be able to help you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {counties.map((county, idx) => (
              <div key={idx} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-box shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">{county.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {county.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {county.cities.map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full px-3 py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DB5425]" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Not Listed Card */}
            <div className="card border-dashed border-2 border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-center p-10">
              <div className="icon-box icon-box-secondary icon-box-lg mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Don&apos;t See Your City?
              </h3>
              <p className="text-gray-600 text-sm mb-5">
                We expand our coverage regularly. Give us a call — we may
                already serve your area or be able to accommodate you.
              </p>
              <a href="tel:3858656749" className="btn-primary">
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ALL SERVICES OFFERED ACROSS AREAS */}
      <section
        className="section-dark py-20 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, #0D2E47 0%, #133F60 55%, #1A5280 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#DB5425] text-xs font-bold uppercase tracking-widest mb-3">
                Full Service Coverage
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                All Services Available Across Our Coverage Area
              </h2>
              <p className="text-white/80 mb-8">
                Whether you&apos;re in Salt Lake City or Park City, you get the
                same high-quality service. Our licensed and NATE-certified
                technicians cover every community we serve.
              </p>
              <div className="space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="flex items-center gap-3 text-white/90 hover:text-white group transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-[#DB5425] shrink-0" />
                    <span className="font-medium group-hover:underline">
                      {service.label}
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="btn-white inline-flex items-center gap-2"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-80 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="CMB technician serving your area"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0D2E47]/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-[#DB5425]" />
                    <div>
                      <p className="font-bold text-sm">
                        NATE Certified Technicians
                      </p>
                      <p className="text-xs text-white/80">
                        Serving the Wasatch Front since 2008
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY + AVAILABILITY */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="icon-box icon-box-lg icon-box-secondary mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600 text-sm mb-4">
                HVAC failures and plumbing emergencies don&apos;t wait for
                business hours. Our emergency line is always open.
              </p>
              <a href="tel:3858656749" className="btn-primary">
                Emergency Line: (385) 865-6749
              </a>
            </div>

            <div className="card text-center">
              <div className="icon-box icon-box-lg mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Fast Response Times</h3>
              <p className="text-gray-600 text-sm mb-4">
                We keep technicians strategically positioned across the Wasatch
                Front so we can reach you fast — often within 1–2 hours.
              </p>
              <Link href="/schedule-us" className="btn-secondary">
                Schedule Now
              </Link>
            </div>

            <div className="card text-center">
              <div className="icon-box icon-box-lg mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Every job backed by our workmanship guarantee. If you&apos;re
                not happy, we&apos;ll make it right — no questions asked.
              </p>
              <Link href="/membership" className="btn-secondary">
                View Membership Perks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        eyebrow="Ready to Schedule?"
        title="Book Your Service in Under 2 Minutes"
        description="Our expert technicians are stationed across the Wasatch Front and ready to come to you. Same-day appointments available in most areas."
        primaryText="Book an Appointment"
        primaryHref="/schedule-us"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
      />

      <Footer />
    </>
  );
}
