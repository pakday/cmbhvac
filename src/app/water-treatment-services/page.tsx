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
  Filter,
  ShieldCheck,
  Droplets,
  Sparkles,
  Leaf,
} from "lucide-react";
import { useState } from "react";

export default function WaterTreatmentServicesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80"
            alt="Clean water treatment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2E47]/93 via-[#133F60]/82 to-[#133F60]/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-5">
              <Filter className="w-3.5 h-3.5" />
              Water Treatment Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
              Utah&apos;s Top Water Treatment Services in Salt Lake &amp; Davis
              County
            </h1>
            <p className="text-lg text-white/85 mb-8 max-w-xl">
              Upgrade your water quality with confidence. CMB Plumbing is
              Utah&apos;s trusted leader in professional water treatment — from
              whole-home water softeners to advanced reverse osmosis
              installations.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/80">
              {[
                "Water Softeners",
                "Reverse Osmosis",
                "Whole-Home Filtration",
                "Utah Experts",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#DB5425]" /> {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book Water Treatment Service
              </Link>
              <a href="tel:3858656749" className="btn-outline-white">
                <Phone className="w-4 h-4" /> (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Water Treatment"
                title="Water Treatment &amp; Services in Salt Lake &amp; Davis County"
                description="CMB Plumbing provides tailored solutions that ensure clean, safe, and great-tasting water for your family or business. Serving Bountiful, Salt Lake City, Ogden, Layton, West Valley City, Millcreek, Roy, and Draper — we bring expert care to every tap."
              />
              <div className="mt-6 space-y-4">
                <div className="border-l-4 border-[#DB5425] pl-4">
                  <h3 className="font-bold mb-1">
                    Water Softener Installation for Healthier Homes
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Tired of hard water buildup, dry skin, or stained fixtures?
                    CMB Plumbing offers expert water softener installation and
                    maintenance that protects your plumbing, appliances, and
                    health. Our systems extend the lifespan of your pipes while
                    delivering softer, cleaner water throughout your home.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Get a Free Assessment
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80"
                alt="Clean drinking water"
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
            title="Why More Utah Residents Choose CMB Plumbing for Water Treatment"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: <Droplets className="w-5 h-5" />,
                title: "Local Water Expertise",
                desc: "We understand Utah's unique water composition and tailor our solutions accordingly.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: "Certified Technicians",
                desc: "Licensed pros install every system to the highest standards — backed by warranties.",
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "Customized Options",
                desc: "Scalable water treatment systems for every home, budget, and family size.",
              },
              {
                icon: <Leaf className="w-5 h-5" />,
                title: "Ongoing Support",
                desc: "Responsive service, annual maintenance checks, and system upgrades when needed.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card text-center">
                <div className="icon-box mx-auto mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="We Fix Any Water System Issue"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Filter className="w-5 h-5" />,
                title: "Water Softener Installation",
                img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
                desc: "Tired of hard water buildup and stained fixtures? Our water softener systems are designed to extend the lifespan of your pipes, appliances, and fixtures while delivering softer, cleaner water.",
              },
              {
                icon: <Droplets className="w-5 h-5" />,
                title: "Reverse Osmosis Systems",
                img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80",
                desc: "CMB Plumbing installs high-efficiency reverse osmosis systems that remove up to 99% of contaminants — including lead, chlorine, fluoride, and other harmful substances. Crystal clear water, every glass.",
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "Whole-Home Water Filtration",
                img: "https://images.unsplash.com/photo-1582616698198-f978da534162?w=600&q=80",
                desc: "Clean, healthy water at every faucet. Our whole-home filtration systems ensure every tap delivers safe, filtered water — ideal for bathing, cooking, and cleaning. Targeting Utah-specific water impurities.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="card overflow-hidden !p-0 flex flex-col"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="icon-box icon-box-secondary mb-3">
                    {service.icon}
                  </div>
                  <h3 className="font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="btn-ghost text-sm inline-flex items-center gap-1 mt-4"
                  >
                    Get a Quote <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UTAH WATER QUALITY */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden min-h-[380px]">
              <Image
                src="https://images.unsplash.com/photo-1624365169198-38255b2c8df5?w=900&q=80"
                alt="Utah water quality treatment"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="Utah Water Quality"
                title="Better Water Starts with One Simple Step"
                description="Better water starts with one simple step — contact CMB Plumbing for trusted water treatment services that transform your tap. Utah's water is among the hardest in the nation. We know your local water composition and tailor every solution to address it."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Hard water causes scale buildup in pipes, reducing flow and lifespan",
                  "Salt Lake Valley water averages 250–350 ppm hardness — well above soft water threshold",
                  "Whole-home softeners protect your water heater, dishwasher, and all appliances",
                  "RO systems remove 99%+ of contaminants for safe drinking water",
                  "Filtered water improves taste, clarity, and peace of mind",
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
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Book Your Appointment Today
                </Link>
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
            title="Water Treatment Questions Answered"
            centered
          />
          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {[
              {
                q: "How do I know if I need a water softener?",
                a: "Signs include white scale buildup on fixtures and appliances, dry skin and hair after showering, soap that doesn't lather well, and stained laundry. Utah's water is notoriously hard — a softener is almost always beneficial.",
              },
              {
                q: "What's the difference between a water softener and a water filter?",
                a: "Water softeners remove hardness minerals (calcium and magnesium) through ion exchange. Water filters remove contaminants like chlorine, lead, and sediment. Many homes benefit from both.",
              },
              {
                q: "Does reverse osmosis remove all contaminants?",
                a: "RO systems remove up to 99% of dissolved solids including lead, chlorine, fluoride, nitrates, and many other contaminants. It's one of the most comprehensive filtration methods available.",
              },
              {
                q: "How often does a water softener need maintenance?",
                a: "Water softeners need salt refills every 4–8 weeks depending on your water hardness and usage. We offer annual maintenance plans to keep your system running optimally.",
              },
              {
                q: "Do you offer financing?",
                a: "Yes — we work with multiple banks and can help find 0% financing for 36–60 months on qualifying water treatment systems.",
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
        title="Cleaner, Healthier Water for Your Home"
        description="Expert water treatment tailored to Utah's unique water. Certified installers. Satisfaction guaranteed."
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
