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
  ShieldCheck,
  Clock,
  DollarSign,
  Star,
} from "lucide-react";
import { useState } from "react";

export default function PlumbingPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80"
            alt="Professional plumber working"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2E47]/92 via-[#133F60]/75 to-[#133F60]/30" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-5">
              <Droplets className="w-3.5 h-3.5" />
              CMB Plumbing · Salt Lake &amp; Davis County
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
              Expert Plumbing for Salt Lake &amp; Davis County
            </h1>
            <p className="text-lg text-white/85 mb-8 max-w-xl">
              Burst pipe? Backed-up drain? We&apos;re already on the way. From
              routine maintenance to complete repiping, CMB Plumbing handles it
              all — fast, honest, and guaranteed.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/80">
              {["Licensed & Insured", "Same-Day Service", "Upfront Pricing", "5-Star Rated"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#DB5425]" /> {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Schedule Service
              </Link>
              <a href="tel:3858656749" className="btn-outline-white">
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <div className="bg-[#DB5425] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap font-semibold text-center text-sm md:text-base">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "Plumbing Repair",
                href: "/plumbing-repair-services",
                items: ["Leak detection & repair", "Toilet repair & install", "Burst pipe response", "Mainline & gas lines", "Backflow prevention"],
              },
              {
                icon: <Hammer className="w-6 h-6" />,
                title: "Plumbing Installation",
                href: "/plumbing-installation-services",
                items: ["Water heater installs", "Custom bathroom fixtures", "Kitchen sink & faucets", "Tub & shower installs", "Premium materials"],
              },
              {
                icon: <GitBranch className="w-6 h-6" />,
                title: "Repiping Services",
                href: "/repiping-services",
                items: ["Whole-home repiping", "Mainline replacements", "PEX or copper options", "Gas line installation", "Guaranteed workmanship"],
              },
              {
                icon: <Flame className="w-6 h-6" />,
                title: "Water Heater Services",
                href: "/water-heater-services",
                items: ["Same-day repair", "Tank & tankless install", "Replacement & upgrade", "Energy-efficient models", "Full warranty coverage"],
              },
              {
                icon: <Filter className="w-6 h-6" />,
                title: "Water Treatment",
                href: "/water-treatment-services",
                items: ["Water softener install", "Reverse osmosis systems", "Whole-home filtration", "Utah water specialists", "Ongoing maintenance"],
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "Pipe Inspection",
                href: "/plumbing-repair-services",
                items: ["Advanced leak detection", "Video camera inspection", "Non-invasive methods", "Slab & underground", "Emergency response"],
              },
            ].map((service, idx) => (
              <div key={idx} className="card flex flex-col">
                <div className="icon-box icon-box-lg icon-box-secondary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#DB5425] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="btn-ghost text-sm inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                alt="CMB plumbing technician"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-sm">5-Star Rated</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Trusted across Northern Utah</p>
              </div>
            </div>
            <div>
              <SectionHeader
                eyebrow="Why CMB Plumbing?"
                title="Trusted by Homeowners Across Northern Utah"
                description="When plumbing problems strike, you don't have time to wait — and at CMB Plumbing, we don't make you. Our licensed pros show up fast, fix it right, and leave your home cleaner than we found it."
              />
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <ShieldCheck className="w-5 h-5" />, title: "Licensed & Certified", desc: "Decades of expertise across all plumbing systems." },
                  { icon: <Clock className="w-5 h-5" />, title: "On-Time, Every Time", desc: "Text arrival window, show up when promised." },
                  { icon: <DollarSign className="w-5 h-5" />, title: "Transparent Pricing", desc: "Fixed-price options — no hidden fees ever." },
                  { icon: <CheckCircle className="w-5 h-5" />, title: "Satisfaction Guaranteed", desc: "Every job backed by our workmanship guarantee." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="icon-box flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">Book a Service Call</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What to Expect"
            title="Your Visit — Step by Step"
            description="We make it simple and stress-free from the moment you book to the moment we leave."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { step: "01", title: "We Text You", desc: "Before arrival, we send your exact arrival window — no guessing." },
              { step: "02", title: "We Diagnose", desc: "We thoroughly test and examine to find the exact source of your problem." },
              { step: "03", title: "Fixed-Price Options", desc: "Multiple repair options with upfront fixed pricing — you choose." },
              { step: "04", title: "We Fix It Right", desc: "Repair is done, area is cleaned up. Job guaranteed before we leave." },
            ].map((item, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-4xl font-black text-[#DB5425]/20 mb-3">{item.step}</div>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ASSESSMENT */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#133F60] rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80"
                alt=""
                fill
                className="object-cover opacity-10"
              />
            </div>
            <div className="relative p-8 md:p-14 text-white max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-lg px-4 py-2 mb-5 text-sm">
                <Camera className="w-4 h-4" />
                Snap &amp; Send
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure What&apos;s Wrong?</h2>
              <p className="text-lg text-white/85 mb-8">
                Snap a photo or short video, send it to CMB Plumbing — our experts give you a fast, no-pressure assessment so you know exactly what you&apos;re dealing with before we arrive.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="btn-primary">Send Us a Photo</Link>
                <a href="tel:3858656749" className="btn-outline-white">
                  <Phone className="w-4 h-4" /> (385) 865-6749
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Where We Serve"
            title="Plumbing Services Across Northern Utah"
            description="CMB Plumbing proudly serves homeowners and businesses across Salt Lake and Davis Counties."
            centered
          />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {["Salt Lake City","Bountiful","Ogden","Layton","Draper","West Valley City","Millcreek","Roy","Clearfield","Murray","Sandy","South Jordan","Taylorsville","Herriman"].map((city) => (
              <span key={city} className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#133F60] transition-colors cursor-default">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Common Plumbing Questions" description="Got questions? We've got straight answers." centered />
          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {[
              { q: "Do you offer emergency plumbing service?", a: "Yes — we're available for burst pipes, backed-up drains, and major leaks. Call (385) 865-6749 and we prioritize emergency calls." },
              { q: "How quickly can you get to my home?", a: "Same-day or next-day for most calls. For emergencies we respond as fast as possible — every minute counts with water damage." },
              { q: "Do you offer financing?", a: "Absolutely! We work with multiple banks to find the right plan for your budget. Popular plans include 0% financing for 36–60 months." },
              { q: "Are permits and inspection fees included?", a: "Permits and inspection fees may be required depending on your location. Ask your plumber before work begins and we'll add it to your package." },
              { q: "What areas do you serve?", a: "We serve the full Wasatch Front — Salt Lake City, Bountiful, Ogden, Layton, Draper, West Valley City, and 100+ surrounding communities." },
            ].map((faq, idx) => (
              <div key={idx} className="accordion-item">
                <button
                  onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                  className="accordion-trigger w-full text-left"
                >
                  <span>{faq.q}</span>
                  <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform ${openAccordion === idx ? "rotate-90" : ""}`} />
                </button>
                {openAccordion === idx && (
                  <div className="px-5 py-4 text-gray-700 text-sm border-t border-gray-200 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Get Expert Plumbing Help Today"
        description="Licensed & insured. Fixed prices. Satisfaction guaranteed. Serving Salt Lake & Davis County."
        primaryText="Book Appointment"
        primaryHref="/contact"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-4 h-4" />}
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
