"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import {
  Flame,
  Snowflake,
  Building2,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { useState } from "react";

export default function HVACPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1600&q=80"
            alt="HVAC technician at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/100 via-brand/80 to-brand/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-4">
              <Flame className="w-3.5 h-3.5" />
              HVAC Services
            </div>
            <h1 className="heading-xl font-bold leading-tight mb-6">
              Let Us Cool You Down — or Warm You Up
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              From high-efficiency AC installations to emergency furnace
              repairs, CMB HVAC covers every heating and cooling need with
              speed, transparency, and guaranteed work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-lg py-3 px-8">
                Schedule Free Estimate
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

      {/* SERVICES GRID */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Heating & Cooling for Every Home"
            description="We work with all makes and models, serving the Wasatch Front with NATE-certified technicians and same-day availability."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* AC Card */}
            <Link href="/services/ac" className="card group">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1631545806609-22ceb4037852?w=600&q=80"
                  alt="Air conditioning"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="icon-box mb-3">
                <Snowflake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">Air Conditioning</h3>
              <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> AC Repair &
                  Diagnostics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> New System
                  Installation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> Ductless
                  Mini-Split Systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> Indoor Air
                  Quality
                </li>
              </ul>
              <span className="btn-ghost text-sm inline-flex items-center gap-2">
                View AC Services <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Heating Card */}
            <Link href="/services/furnace" className="card group">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80"
                  alt="Furnace heating"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="icon-box mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">Heating & Furnace</h3>
              <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> Furnace Repair
                  & Installation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> Boiler
                  Services
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> Heat Pump
                  Systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> Maintenance
                  Plans
                </li>
              </ul>
              <span className="btn-ghost text-sm inline-flex items-center gap-2">
                View Heating <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Commercial Card */}
            <div className="card">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
                  alt="Commercial HVAC"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="icon-box mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">Commercial HVAC</h3>
              <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> New
                  Construction Installs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> Commercial
                  Repair & Maintenance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> Custom System
                  Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> Service
                  Contracts
                </li>
              </ul>
              <Link
                href="/contact"
                className="btn-ghost text-sm inline-flex items-center gap-2"
              >
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-muted py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="What to Expect During Your Appointment"
          />

          <div className="space-y-4 mt-12 max-w-2xl">
            {[
              {
                num: "1",
                title: "Text Exact Arrival Time",
                desc: "No vague windows. You'll know exactly when we're on the way.",
              },
              {
                num: "2",
                title: "Examine & Load Calculate",
                desc: "We do a thorough inspection and perform load calculations for your home's needs.",
              },
              {
                num: "3",
                title: "Present Fixed-Price Options",
                desc: "You choose. No pressure, no hidden fees — just clear options that fit your budget.",
              },
              {
                num: "4",
                title: "Help with Financing",
                desc: "0% financing available for 36–60 months on qualifying purchases.",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-bold mb-1">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/contact" className="btn-primary inline-block mt-8">
            Schedule Your Appointment
          </Link>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="heading-l font-bold text-accent">25+</div>
                <div className="text-sm opacity-80 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="heading-l font-bold text-accent">A+</div>
                <div className="text-sm opacity-80 mt-1">BBB Rating</div>
              </div>
              <div>
                <div className="heading-l font-bold text-accent">24/7</div>
                <div className="text-sm opacity-80 mt-1">Emergency Service</div>
              </div>
              <div>
                <div className="heading-l font-bold text-accent">100%</div>
                <div className="text-sm opacity-80 mt-1">
                  Satisfaction Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Common HVAC Questions" centered />

          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {[
              {
                q: "Do you work on all HVAC brands?",
                a: "Yes — we work on all makes and models. CMB HVAC is independently owned and locally operated.",
              },
              {
                q: "How fast can you schedule installation?",
                a: "Usually next day. Supply chain can affect timelines, but we'll communicate clearly.",
              },
              {
                q: "Do installations require permits?",
                a: "Some may, depending on your municipality. Permits are not included in standard pricing.",
              },
              {
                q: "Is financing available?",
                a: "Yes — 0% financing for 36–60 months on qualifying purchases. Ask at your appointment.",
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
                  <div className="px-5 py-4 text-foreground border-t border-border">
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
        title="Ready to Schedule? The Service Call is Free."
        description="No upsells. No surprises. Our licensed, NATE-certified technicians are ready to help you today."
        primaryText="Book Your Appointment"
        primaryHref="/schedule-us"
        secondaryText="(385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-5 h-5" />}
      />

      <Footer />
    </>
  );
}
