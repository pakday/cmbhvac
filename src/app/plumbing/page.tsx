"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import {
  Wrench,
  Hammer,
  GitBranch,
  Flame,
  Filter,
  Search,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Phone,
  Camera,
} from "lucide-react";
import { useState } from "react";

export default function PlumbingPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#133F60] to-[#0D2E47]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-4">
              <Droplets className="w-3.5 h-3.5" />
              CMB Plumbing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Expert Plumbing for Salt Lake & Davis County
            </h1>
            <p className="text-xl text-white/85 mb-8">
              Burst pipe? Backed-up drain? We're already on the way. From
              routine maintenance to complete repiping, CMB Plumbing handles it
              all — fast, honest, and guaranteed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-lg py-3 px-8">
                Schedule Service
              </Link>
              <a
                href="tel:3858656749"
                className="btn-outline-white text-lg py-3 px-8"
              >
                <Phone className="w-5 h-5" />
                (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <div className="bg-[#DB5425] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap font-semibold text-center">
          <AlertCircle className="w-5 h-5" />
          <span>Have a burst pipe or backed-up drain?</span>
          <a href="tel:3858656749" className="underline font-bold">
            Call (385) 865-6749 — We respond fast
          </a>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Complete Plumbing Solutions Under One Roof"
            description="From a dripping faucet to a full home repipe, our certified plumbers serve Bountiful, Salt Lake City, Ogden, Layton, Draper, West Valley City, and surrounding communities."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {[
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "Plumbing Repair",
                items: [
                  "Leak detection",
                  "Toilet repair",
                  "Burst pipes",
                  "Mainline & gas lines",
                ],
              },
              {
                icon: <Hammer className="w-6 h-6" />,
                title: "Plumbing Installation",
                items: [
                  "Water heater installs",
                  "Custom bathrooms",
                  "Fixture installations",
                  "Premium materials",
                ],
              },
              {
                icon: <GitBranch className="w-6 h-6" />,
                title: "Repiping Services",
                items: [
                  "Whole-home repiping",
                  "Mainline replacements",
                  "PEX or copper",
                  "Guaranteed workmanship",
                ],
              },
              {
                icon: <Flame className="w-6 h-6" />,
                title: "Water Heater Services",
                items: [
                  "Repair & installation",
                  "Tank & tankless",
                  "Same-day diagnostics",
                  "Energy-efficient upgrades",
                ],
              },
              {
                icon: <Filter className="w-6 h-6" />,
                title: "Water Treatment",
                items: [
                  "Water softeners",
                  "Reverse osmosis",
                  "Whole-home filtration",
                  "Utah water specialists",
                ],
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "Pipe Inspection",
                items: [
                  "Leak detection",
                  "Video inspection",
                  "Non-invasive",
                  "Prevent emergencies",
                ],
              },
            ].map((service, idx) => (
              <div key={idx} className="card">
                <div className="icon-box icon-box-lg icon-box-secondary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-[#DB5425] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn-ghost text-sm inline-flex items-center gap-1"
                >
                  Book Service <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why CMB Plumbing?"
            title="Trusted by Homeowners Across Northern Utah"
            description="We fix it right the first time, clean up after ourselves, and back every job with honest pricing and a satisfaction guarantee."
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
            {[
              {
                title: "Certified Experts",
                desc: "Decades of expertise across all plumbing systems.",
              },
              {
                title: "On-Time Service",
                desc: "Text arrival window, show up when promised.",
              },
              {
                title: "Transparent Pricing",
                desc: "Upfront fixed-price options — no hidden fees.",
              },
              {
                title: "Fully Guaranteed",
                desc: "Workmanship guaranteed, satisfaction guaranteed.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ASSESSMENT */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#133F60] rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4 text-sm">
              <Camera className="w-4 h-4" />
              Quick Tip
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure What's Wrong?
            </h2>
            <p className="text-lg text-white/85 mb-6 max-w-xl mx-auto">
              Send us a photo or short video via our website or text. We'll give
              you a fast, no-pressure assessment so you know what you're dealing
              with before we arrive.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Send Us a Photo
              </Link>
              <a href="tel:3858656749" className="btn-outline-white">
                <Phone className="w-4 h-4" />
                Call (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Plumbing Questions"
            centered
          />

          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {[
              {
                q: "Do you offer emergency plumbing service?",
                a: "Yes — we're available for burst pipes, backed-up drains, and major leaks. Call (385) 865-6749.",
              },
              {
                q: "How quickly can you get to my home?",
                a: "We aim for same-day or next-day appointments. For emergencies, we prioritize as fast as possible.",
              },
              {
                q: "Do you offer financing?",
                a: "Yes — 0% financing for 36–60 months on qualifying projects. Ask about current offers.",
              },
              {
                q: "What areas do you serve?",
                a: "Full Wasatch Front including Salt Lake, Bountiful, Ogden, Layton, Draper, West Valley City, and 100+ communities.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="accordion-item">
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === idx ? null : idx)
                  }
                  className="accordion-trigger w-full"
                >
                  {faq.q}
                  <ArrowRight
                    className={`w-5 h-5 transition-transform ${openAccordion === idx ? "rotate-90" : ""}`}
                  />
                </button>
                {openAccordion === idx && (
                  <div className="px-5 py-4 text-gray-700 border-t border-gray-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Get Expert Plumbing Help Today"
        description="Free service call. Fixed prices. Satisfaction guaranteed. Serving Salt Lake & Davis County."
        primaryText="Book Appointment"
        primaryHref="/contact"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-5 h-5" />}
      />

      <Footer />
    </>
  );
}

function Droplets({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z" />
    </svg>
  );
}
