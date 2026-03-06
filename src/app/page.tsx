"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import {
  ShieldCheck,
  Star,
  Award,
  Clock,
  HandCoins,
  Flame,
  Snowflake,
  Droplets,
  ArrowRight,
  Phone,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const faqItems = [
    {
      q: "Do you offer financing?",
      a: "Yes — we offer 0% financing for 36-60 months on qualifying equipment purchases and installations. Ask your technician for details during your appointment.",
    },
    {
      q: "Do you offer weekend appointments?",
      a: "Yes — we schedule appointments on weekends for your convenience. We also offer 24/7 emergency service for urgent situations on nights, weekends, and holidays.",
    },
    {
      q: "How fast can you do an installation?",
      a: "Usually next day, depending on equipment availability. In some cases, supply chain conditions may affect timelines, but we'll always communicate clearly and keep you informed.",
    },
    {
      q: "What areas do you serve?",
      a: "We serve the entire Wasatch Front and Northern Utah — including Salt Lake City, Bountiful, Ogden, Layton, Draper, Sandy, Provo, Park City, West Valley City, and 100+ other communities.",
    },
    {
      q: "Is the service call really free?",
      a: "Yes! We're the home of the free service call. Call or text us for a quick, no-pressure assessment. We also offer free in-home consultations for new system installations.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="hero-dark relative overflow-hidden pt-20 pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#133F60] via-[#1A5280] to-[#0D2E47]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DB5425] opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              Licensed & Insured • 25+ Years Experience
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Your Trusted HVAC & Plumbing Experts in Salt Lake City
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              From heating and cooling to plumbing repairs, CMB HVAC delivers
              fast, reliable service backed by our satisfaction guarantee. No
              upsells. No surprises. Done the right way.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-lg py-3 px-8">
                Schedule Free Service Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:3858656749"
                className="btn-outline-white text-lg py-3 px-8"
              >
                <Phone className="w-5 h-5" />
                (385) 865-6749
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" /> A+ BBB Rating
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" /> NATE Certified
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Complete Home Comfort Solutions"
            description="We're more than HVAC technicians — we are your neighbors offering great services at a fair price. Locally owned, A+ BBB rated, and trusted across Utah."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {/* Heating */}
            <Link href="/hvac" className="card group">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80"
                  alt="Furnace heating system"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="icon-box mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-2">Heating Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Furnace repair, installation, and maintenance. High-efficiency
                systems sized for your home. 24/7 emergency heating available.
              </p>
              <span className="btn-ghost text-sm inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* AC */}
            <Link href="/services/ac" className="card group">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1631545806609-22ceb4037852?w=600&q=80"
                  alt="Air conditioning unit"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="icon-box mb-3">
                <Snowflake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-2">Air Conditioning</h3>
              <p className="text-gray-600 text-sm mb-4">
                AC repair, installation, and maintenance. Variable-speed
                systems, heat pumps, and ductless mini-splits for maximum
                efficiency.
              </p>
              <span className="btn-ghost text-sm inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Plumbing */}
            <Link href="/plumbing" className="card group">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80"
                  alt="Plumbing services"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="icon-box mb-3">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-2">Plumbing Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Repairs, installations, repiping, water heaters, and water
                treatment. Fast, accurate service with transparent pricing.
              </p>
              <span className="btn-ghost text-sm inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE ═══ */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose CMB HVAC"
            title="We Treat Your Home Like Our Own"
            description="At CMB HVAC, we hire the best technicians and invest in training to keep up with industry innovations. Our goal with every call is to create a healthy home and happy customer."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: "NATE-Certified Technicians",
                desc: "Who explain everything in plain language. Our team stays current on the latest systems and tools.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Fast Response & Emergency Service",
                desc: "On-time arrivals with 24/7 emergency availability — nights, weekends, and holidays.",
              },
              {
                icon: <HandCoins className="w-6 h-6" />,
                title: "Honest, Upfront Pricing",
                desc: "No hidden costs. No upsells. No surprises. We present fixed-price options and let you decide.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Satisfaction Guarantee",
                desc: "We back our workmanship completely. Respectful service from start to finish — we treat your home with care.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="icon-box-lg icon-box flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CREDENTIALS ═══ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { icon: <Award className="w-6 h-6" />, label: "Experienced" },
              { icon: <ShieldCheck className="w-6 h-6" />, label: "Licensed" },
              { icon: <ShieldCheck className="w-6 h-6" />, label: "Insured" },
              { icon: <Star className="w-6 h-6" />, label: "Certified" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 font-semibold text-gray-900"
              >
                <div className="icon-box icon-box-secondary">{item.icon}</div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="What to Expect When You Call"
            description="From your first call to job completion, we make the experience seamless and hassle-free."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              {
                step: "1",
                title: "Schedule",
                desc: "Call or book online. We'll text you with an exact arrival time.",
              },
              {
                step: "2",
                title: "Diagnose",
                desc: "We examine your system, run tests, and pinpoint the root cause.",
              },
              {
                step: "3",
                title: "Fixed Price",
                desc: "We present multiple options with upfront pricing. You choose what's best.",
              },
              {
                step: "4",
                title: "Done Right",
                desc: "We complete the work, clean up, and back everything with our guarantee.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#DB5425] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MEMBERSHIP ═══ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#133F60] to-[#1A5280] rounded-3xl p-8 md:p-12 text-white">
            <div className="badge badge-white mb-4">
              <Award className="w-3.5 h-3.5" />
              Save Every Year
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              CMB HVAC Maintenance Membership
            </h2>
            <p className="text-lg text-white/85 mb-6 max-w-2xl">
              Take the stress out of HVAC maintenance. Our membership program
              saves you money, prevents costly breakdowns, and keeps your system
              running at peak efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Bi-Annual Check-Ups",
                "15% Off Repairs",
                "24hr Emergency Service",
                "Priority Scheduling",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-white/90"
                >
                  <Star className="w-5 h-5 text-[#DB5425]" />
                  {item}
                </div>
              ))}
            </div>

            <Link href="/membership" className="btn-primary inline-block">
              Learn About Membership
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            centered
          />

          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {faqItems.map((item, idx) => (
              <div key={idx} className="accordion-item">
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === idx ? null : idx)
                  }
                  className="accordion-trigger w-full"
                >
                  {item.q}
                  <ArrowRight
                    className={`w-5 h-5 transition-transform ${openAccordion === idx ? "rotate-90" : ""}`}
                  />
                </button>
                {openAccordion === idx && (
                  <div className="px-5 py-4 text-gray-700 border-t border-gray-200">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABanner
        title="Home of the Free Service Call"
        description="Don't wait — call or book online for your free in-home consultation. The best techs, the friendliest service, 100% satisfaction guaranteed."
        primaryText="Schedule Your Appointment"
        primaryHref="/contact"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-5 h-5" />}
      />

      <Footer />
    </>
  );
}
