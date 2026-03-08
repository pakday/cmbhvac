"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import {
  AlertCircle,
  CheckCircle,
  Zap,
  Thermometer,
  Wind,
  Snowflake,
  Clock,
  ArrowRight,
  Phone,
} from "lucide-react";
import { useState } from "react";

export default function ACServicesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1631545806609-22ceb4037852?w=1600&q=80"
            alt="Air conditioning unit"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/100 via-brand/80 to-brand/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-4">
              <Snowflake className="w-3.5 h-3.5" />
              AC & Cooling Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Expert AC Repair & Installation in Salt Lake City
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Your AC is everything on a hot Utah summer day. We repair,
              install, and maintain all major brands. Fast diagnosis. Fixed
              pricing. Satisfaction guaranteed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-lg py-3 px-8">
                Schedule AC Service
              </Link>
              <a
                href="tel:3858656749"
                className="btn-outline-white text-lg py-3 px-8"
              >
                <Phone className="w-5 h-5" />
                Call Now (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON AC ISSUES */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common Issues"
            title="Is Your AC Not Cooling Properly?"
            description="Here are the most common AC problems we diagnose and fix. If you're experiencing any of these, we can help."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: <Wind className="w-6 h-6" />,
                title: "Weak Airflow",
                items: [
                  "Clogged or dirty filter",
                  "Blocked air vents",
                  "Faulty blower motor",
                  "Ductwork leaks",
                  "Thermostat issue",
                ],
                fix: "We clean or replace filters, inspect ducts for leaks, and test the blower motor.",
              },
              {
                icon: <Thermometer className="w-6 h-6" />,
                title: "Not Cooling Enough",
                items: [
                  "Low refrigerant",
                  "Compressor failure",
                  "Frozen evaporator coil",
                  "Dirty condenser coil",
                  "Thermostat miscalibration",
                ],
                fix: "We check refrigerant levels, inspect the compressor, and clean coils.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "AC Won't Turn On",
                items: [
                  "Power supply issue",
                  "Tripped circuit breaker",
                  "Thermostat malfunction",
                  "Capacitor failure",
                  "Control board damage",
                ],
                fix: "We test the electrical connection, replace capacitors, and reprogram thermostats as needed.",
              },
              {
                icon: <AlertCircle className="w-6 h-6" />,
                title: "Strange Sounds or Smells",
                items: [
                  "Loose components rattling",
                  "Grinding or squealing noises",
                  "Burning smell (electrical)",
                  "Musty smell (mold in ducts)",
                  "Refrigerant leak hissing",
                ],
                fix: "We identify the source, repair or replace components, and ensure safe operation.",
              },
            ].map((issue, idx) => (
              <div key={idx} className="card">
                <div className="icon-box icon-box-lg icon-box-secondary mb-4">
                  {issue.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{issue.title}</h3>
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground font-semibold uppercase mb-2">
                    Common causes:
                  </p>
                  <ul className="space-y-1">
                    {issue.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">
                    Our solution:
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{issue.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR AC SERVICES */}
      <section className="bg-muted py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Complete AC Services"
            centered
          />

          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {[
              {
                title: "AC Repair",
                desc: "Same-day diagnostics, fixed-price repairs, all brands. We repair everything from the thermostat to the compressor.",
              },
              {
                title: "AC Installation",
                desc: "Right-sized AC units for your home. We handle permits, disconnect old units, and ensure proper installation with warranty.",
              },
              {
                title: "Maintenance Plans",
                desc: "Spring tune-ups before summer. We clean coils, check refrigerant, test electrical, and optimize performance.",
              },
              {
                title: "Emergency Service",
                desc: "AC out in the heat? We offer 24/7 emergency calls with no surcharge for members. Call (385) 865-6749.",
              },
              {
                title: "Equipment Replacement",
                desc: "AC over 10 years old? We'll assess if repair or replacement makes sense. New systems include financing options.",
              },
            ].map((service, idx) => (
              <div key={idx} className="card p-6 flex items-start gap-4">
                <div className="icon-box shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AC BRANDS WE SERVE */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            We Service All Major Brands
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From Lennox and Carrier to Rheem, Goodman, and Trane — we're
            certified to repair and maintain them all.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              "Lennox",
              "Carrier",
              "Rheem",
              "Goodman",
              "Trane",
              "York",
              "American Standard",
              "Amana",
            ].map((brand, idx) => (
              <div key={idx} className="card text-center py-6">
                <p className="font-bold text-foreground">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAINTENANCE CHECKLIST */}
      <section className="section-dark bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Keep Your AC Running All Summer
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Annual maintenance prevents 80% of AC breakdowns. Here's what we
              check:
            </p>

            <div className="space-y-3">
              {[
                "Filter condition and air quality",
                "Refrigerant levels and pressure",
                "Thermostat accuracy and settings",
                "Electrical connections and voltage",
                "Coil cleanliness",
                "Blower motor operation",
                "Condenser fan function",
                "Ductwork for leaks",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/80 mb-4">
                <strong>Pro Tip:</strong> Replace filters every 1–3 months
                during the cooling season. Dirty filters reduce efficiency by
                15–20%.
              </p>
            </div>

            <Link
              href="/membership"
              className="btn-primary inline-flex items-center gap-2 mt-6"
            >
              Join Our Maintenance Program
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="AC Questions Answered" centered />

          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {[
              {
                q: "How often should I replace my AC filter?",
                a: "Every 1–3 months during the cooling season, depending on usage and pets. Dirty filters reduce efficiency and increase energy bills.",
              },
              {
                q: "What's the right size AC for my home?",
                a: "We perform a free load calculation based on your home's square footage, insulation, and climate. We'll recommend the right size.",
              },
              {
                q: "How long do AC systems last?",
                a: "Properly maintained AC systems typically last 15–20 years. Beyond 10 years, repairs become more expensive than replacement.",
              },
              {
                q: "Do you offer emergency AC repair?",
                a: "Yes — 24/7 emergency service. Call (385) 865-6749. Members get no emergency surcharge.",
              },
              {
                q: "Do you handle AC installation and permits?",
                a: "Absolutely. We handle everything including permits, disconnection, installation, and warranty registration.",
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
        title="Ready to Fix Your AC?"
        description="Same-day service available. Free estimate. Fixed pricing. 100% satisfaction guaranteed."
        primaryText="Schedule AC Service"
        primaryHref="/schedule-us"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Snowflake className="w-5 h-5" />}
      />

      <Footer />
    </>
  );
}
