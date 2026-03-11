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
  Flame,
  Thermometer,
  Wind,
  Volume2,
  Clock,
  ArrowRight,
  Phone,
} from "lucide-react";
import { useState } from "react";

export default function FurnaceServicesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80"
            alt="Furnace heating system"
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
              Heating Services
            </div>
            <h1 className="heading-xl font-bold leading-tight mb-6">
              Furnace Repair & Installation Salt Lake City
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              When Utah winters hit, your furnace has to work. We repair all
              makes and models, install high-efficiency systems, and keep
              homeowners warm 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-lg py-3 px-8">
                Schedule Furnace Service
              </Link>
              <a
                href="tel:3858656749"
                className="btn-outline-white text-lg py-3 px-8"
              >
                <Phone className="w-5 h-5" />
                Emergency: (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <div className="bg-accent text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap font-semibold text-center">
          <AlertCircle className="w-5 h-5" />
          <span>Heating out in winter?</span>
          <a href="tel:3858656749" className="underline font-bold">
            Call (385) 865-6749 — We'll restore your heat
          </a>
        </div>
      </div>

      {/* COMMON FURNACE ISSUES */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common Problems"
            title="Furnace Not Heating? Here's What We Know"
            description="Utah winters are no joke. If your furnace is acting up, we can diagnose and fix it fast."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: <Thermometer className="w-6 h-6" />,
                title: "Not Heating or Weak Heat",
                items: [
                  "Dirty or clogged filter",
                  "Pilot light out or won't ignite",
                  "Thermostat not working",
                  "Heat exchanger clogged",
                  "Blower motor issue",
                ],
                fix: "We replace filters, relight pilots, test thermostats, and clean heat exchangers.",
              },
              {
                icon: <Wind className="w-6 h-6" />,
                title: "Poor Airflow",
                items: [
                  "Blocked vents or registers",
                  "Clogged filter restricting air",
                  "Blower fan not spinning",
                  "Ductwork collapse or blockage",
                  "Damper stuck in closed position",
                ],
                fix: "We unblock vents, replace filters, inspect ducts, and repair or replace blower motors.",
              },
              {
                icon: <Volume2 className="w-6 h-6" />,
                title: "Strange Noises",
                items: [
                  "Banging or popping sounds",
                  "Squealing or grinding noises",
                  "Rattling loose parts",
                  "Duct expansion/contraction",
                  "Blower bearing failure",
                ],
                fix: "We tighten loose components, lubricate bearings, and replace worn parts.",
              },
              {
                icon: <AlertCircle className="w-6 h-6" />,
                title: "Furnace Won't Start",
                items: [
                  "Power supply interrupted",
                  "Tripped circuit breaker or reset",
                  "Thermostat batteries dead",
                  "Gas valve failure",
                  "Control board damage",
                ],
                fix: "We check power, replace batteries, test gas valve, and reprogram controls.",
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
                  <p className="text-sm text-muted-foreground mt-1">
                    {issue.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FURNACE SERVICES */}
      <section className="bg-muted py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Complete Furnace Solutions"
            centered
          />

          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {[
              {
                title: "Furnace Repair",
                desc: "Same-day diagnostics for all furnace types (gas, oil, electric). Fixed-price repairs with warranty guarantee.",
              },
              {
                title: "Furnace Installation",
                desc: "High-efficiency models that cut heating bills by 15–25%. We handle everything including permits and venting.",
              },
              {
                title: "Fall Maintenance",
                desc: "Annual inspection before winter. We test ignition, clean burners, replace filters, and ensure safe operation.",
              },
              {
                title: "Emergency Heat Service",
                desc: "Furnace down in freezing weather? 24/7 emergency response. Members get priority scheduling with no surcharge.",
              },
              {
                title: "Furnace Replacement",
                desc: "Furnace 15+ years old? We'll assess efficiency loss and recommend replacement with rebates and financing.",
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

      {/* BRANDS WE INSTALL */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-l font-bold text-center mb-4">
            Furnace Brands We Service & Install
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            NATE-certified technicians trained on all major brands. Lennox,
            Carrier, Trane, Rheem, Goodman, York, and more.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              "Lennox",
              "Carrier",
              "Trane",
              "Rheem",
              "Goodman",
              "York",
              "American Standard",
              "ICP",
            ].map((brand, idx) => (
              <div key={idx} className="card text-center py-6">
                <p className="font-bold text-foreground">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EFFICIENCY & SAVINGS */}
      <section className="section-dark bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="heading-m font-bold mb-6">
              High-Efficiency Furnaces Save Money Year After Year
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Older furnaces waste 20–30% of fuel. New 95%+ AFUE systems can cut
              your heating bill in half.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Quieter operation — barely notice it's running",
                "Better temperature consistency throughout your home",
                "Qualifies for utility rebates and tax credits",
                "Manufacturer warranties up to 20 years",
                "Environmental benefits from reduced fuel consumption",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg p-6 mt-8">
              <p className="text-sm text-primary-foreground/80">
                <strong>Example:</strong> A homeowner upgrading from a 1995
                furnace to a high-efficiency 2024 model typically saves
                $300–$600 annually on heating bills. The new furnace pays for
                itself in 8–10 years.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 mt-6"
            >
              Get a Furnace Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Furnace Questions" centered />

          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {[
              {
                q: "How often should I replace my furnace filter?",
                a: "Every 1–3 months, depending on usage. During heating season, check it monthly. Clogged filters reduce efficiency and increase heating bills.",
              },
              {
                q: "What's the proper furnace temperature setting?",
                a: "Most homeowners set thermostats to 68–72°F during the day and 62–66°F at night. Lower temps when away. Each degree lower saves about 3% on heating costs.",
              },
              {
                q: "How many years does a furnace last?",
                a: "Well-maintained furnaces typically last 15–20 years. Beyond 15 years, consider replacement—repairs become more costly.",
              },
              {
                q: "Should I service my furnace every year?",
                a: "Yes — annual fall maintenance prevents 80% of winter breakdowns. We inspect, clean, and test to ensure safe, efficient operation.",
              },
              {
                q: "Do you offer 24/7 emergency heating service?",
                a: "Absolutely. Call (385) 865-6749 anytime. Members receive priority response with no emergency surcharge.",
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
        title="Keep Your Heat Running Reliably"
        description="Annual maintenance, fast repairs, and modern replacement options. Get ahead of winter."
        primaryText="Schedule Service"
        primaryHref="/schedule-us"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Flame className="w-5 h-5" />}
      />

      <Footer />
    </>
  );
}
