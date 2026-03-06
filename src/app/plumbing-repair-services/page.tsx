"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Wrench,
  Droplets,
  AlertTriangle,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function PlumbingRepairPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const services = [
    {
      title: "Advanced Water Leak Detection",
      description:
        "Don't let hidden leaks turn into costly disasters. Our leak detection experts use state-of-the-art diagnostic tools to locate issues within walls, slabs, and underground lines — without damaging your property. Fast, accurate, non-invasive.",
    },
    {
      title: "Toilet Repair & Installations",
      description:
        "Running toilet? Clogged bowl? Planning a bathroom remodel? CMB Plumbing offers comprehensive toilet services — from emergency repairs to complete replacements. Our certified technicians ensure your toilet functions efficiently and stays trouble-free long-term.",
    },
    {
      title: "Burst Pipe Repairs & Fixture Installations",
      description:
        "A burst pipe can cause thousands in damage — don't wait. Call CMB Plumbing for rapid-response burst pipe repair and expert fixture installations. We install and service kitchen sinks, bathroom vanities, and luxury fixtures with precision and care.",
    },
    {
      title: "Mainline & Gas Line Plumbing Repairs",
      description:
        "When it comes to gas lines and mainlines, safety and skill are non-negotiable. Our licensed professionals deliver safe, code-compliant gas line repairs, replacements, and installations — along with dependable mainline support for homes and commercial properties.",
    },
    {
      title: "Backflow Prevention & Specialty Installs",
      description:
        "Need a new bathtub installed or a stop-and-waste valve replaced? We handle specialty plumbing jobs with unmatched precision. CMB Plumbing also offers industry-leading backflow prevention services to keep your drinking water safe.",
    },
  ];

  const whyUs = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Certified Experts",
      desc: "Decades of combined experience diagnosing and repairing all plumbing systems.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Fast Response",
      desc: "Same-day and emergency service available — we get there when you need us.",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "5-Star Care",
      desc: "Transparent pricing, clean job sites, guaranteed results every time.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Workmanship Guarantee",
      desc: "Every repair is backed by our satisfaction guarantee — no exceptions.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80"
            alt="Plumbing repair work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2E47]/92 via-[#133F60]/80 to-[#133F60]/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-5">
              <Wrench className="w-3.5 h-3.5" />
              Plumbing Repair Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
              Expert Plumbing Repair in Salt Lake &amp; Davis County
            </h1>
            <p className="text-lg text-white/85 mb-8 max-w-xl">
              CMB Plumbing is the trusted name for expert repair services across
              Northern Utah — from advanced leak detection and toilet repairs to
              burst pipes and gas line fixes.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/80">
              {[
                "Fast Response",
                "Licensed Plumbers",
                "Fixed Pricing",
                "Guaranteed Work",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#DB5425]" /> {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book a Repair
              </Link>
              <a href="tel:3858656749" className="btn-outline-white">
                <Phone className="w-4 h-4" /> (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY STRIP */}
      <div className="bg-[#DB5425] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap font-semibold text-sm md:text-base text-center">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <span>
            Burst pipe or major leak? We provide emergency plumbing service.
          </span>
          <a href="tel:3858656749" className="underline font-bold">
            Call (385) 865-6749 now
          </a>
        </div>
      </div>

      {/* INTRO + IMAGE */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Plumbing Repair Services"
                title="Plumbing Repair Services in Salt Lake &amp; Davis County"
                description="CMB Plumbing is the trusted name for expert plumbing services across Northern Utah. Whether you're a homeowner or business in Bountiful, Salt Lake City, Ogden, Layton, West Valley City, Millcreek, Roy, or Draper — you can count on fast, professional, and dependable repairs that protect your property and your peace of mind."
              />
              <div className="mt-8 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>
                    When plumbing problems strike, you don&apos;t have time to
                    wait
                  </strong>{" "}
                  — and at CMB Plumbing, locally owned and operated, we
                  don&apos;t make you. Our licensed pros show up fast, fix it
                  right, and leave your home cleaner than we found it. Backed by
                  years of experience, five-star reviews, and honest pricing,
                  CMB Plumbing is the trusted name homeowners call first.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We get to your home or business as quickly as possible to
                  mitigate damage from water leaks, overflows, or drain backups.
                  We pinpoint where the problem is and give you all the
                  information you need to make the right decision for the
                  repair.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Schedule a Repair
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=900&q=80"
                alt="Plumber repairing pipes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why CMB Plumbing?"
            title="We Fix Any Plumbing Problem Right the First Time"
            description="CMB Plumbing is more than a service call — it's peace of mind. With transparent pricing, decades of experience, and a reputation built on integrity, our team delivers solutions that last."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyUs.map((item, idx) => (
              <div key={idx} className="card text-center">
                <div className="icon-box mx-auto mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Repair Services"
            title="Schedule Your Plumbing Repairs with Us"
            description="We diagnose precisely and make any necessary repairs with the expertise that defines our service. Routine maintenance also keeps problems to a minimum — saving you money in the long run."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, idx) => (
              <div key={idx} className="card">
                <div className="icon-box icon-box-secondary mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA SECTION */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden min-h-[380px]">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80"
                alt="Professional CMB plumbing team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="CMB Plumbing"
                title="Fast Plumbing Services in Salt Lake City &amp; Surrounding Areas"
                description="Considering the immense strain on your plumbing system, professional service at the right time can prevent costly disasters. As soon as you suspect a problem, give us a call — we diagnose precisely and fix it with the expertise that defines our service."
              />
              <ul className="mt-6 space-y-2">
                {[
                  "We text you our exact arrival time before we show up",
                  "Thorough examination to find the true source of the problem",
                  "Tests to pinpoint the exact cause and location",
                  "Multiple fixed-price options presented upfront",
                  "Financing available to fit your budget",
                ].map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-[#DB5425] mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book Your Appointment
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Plumbing Repair Questions"
            centered
          />
          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {[
              {
                q: "How fast can a repair be completed?",
                a: "Most repairs can be scheduled and completed the same day or next day. Emergency repairs are prioritized — we get to you as fast as possible.",
              },
              {
                q: "Do you fix both residential and commercial plumbing?",
                a: "Yes! CMB Plumbing serves both homeowners and business owners across Northern Utah with the same top-tier service.",
              },
              {
                q: "What if I don't know where the leak is coming from?",
                a: "That's exactly what we do. Our state-of-the-art leak detection tools locate issues within walls, slabs, and underground lines without damaging your property.",
              },
              {
                q: "Do you offer financing?",
                a: "Yes — we work with multiple banks to find the right plan. Our most popular plans include 0% financing for 36–60 months.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="accordion-item">
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === idx ? null : idx)
                  }
                  className="accordion-trigger w-full text-left"
                >
                  <span>{faq.q}</span>
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${openAccordion === idx ? "rotate-90" : ""}`}
                  />
                </button>
                {openAccordion === idx && (
                  <div className="px-5 py-4 text-sm text-gray-700 border-t border-gray-200 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Fix Your Plumbing Problem?"
        description="Expert technicians. Transparent pricing. Satisfaction guaranteed. Serving Salt Lake & Davis County."
        primaryText="Book Your Appointment"
        primaryHref="/contact"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-4 h-4" />}
      />

      <Footer />
    </>
  );
}
