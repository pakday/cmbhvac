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
  Flame,
  ShieldCheck,
  Clock,
  Zap,
  TrendingDown,
} from "lucide-react";
import { useState } from "react";

export default function WaterHeaterServicesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Water heater services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2E47]/93 via-[#133F60]/82 to-[#133F60]/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-5">
              <Flame className="w-3.5 h-3.5" />
              Water Heater Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
              Water Heater Repair &amp; Installation in Salt Lake &amp; Davis
              County
            </h1>
            <p className="text-lg text-white/85 mb-8 max-w-xl">
              Hot water isn&apos;t a luxury — it&apos;s a necessity. From fast
              expert repairs to seamless installations and high-efficiency
              replacements, CMB Plumbing keeps your water heater delivering
              comfort and reliability every day.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/80">
              {[
                "Same-Day Diagnostics",
                "Tank & Tankless",
                "Energy Efficient",
                "Satisfaction Guaranteed",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#DB5425]" /> {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book Water Heater Service
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
                eyebrow="Water Heater Services"
                title="Water Heater Repair Services in Salt Lake &amp; Davis County"
                description="At CMB Plumbing, we make sure your water heater delivers comfort, efficiency, and reliability every single day. Our certified plumbing team serves homeowners in Bountiful, Salt Lake City, Ogden, Layton, and surrounding Utah communities with precision and care."
              />
              <div className="mt-6 space-y-4">
                <div className="border-l-4 border-[#DB5425] pl-4">
                  <h3 className="font-bold mb-1">
                    Expert Water Heater Repairs — Fast, Accurate, Hassle-Free
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    No hot water? Strange noises? Inconsistent temperatures?
                    Whether you own a traditional tank unit or a tankless water
                    heater, CMB Plumbing offers same-day diagnostic and repair
                    services to restore your system quickly. Our technicians
                    arrive on time, identify the issue on the spot, and
                    implement durable solutions.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book a Repair
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" /> (385) 865-6749
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1624365169198-38255b2c8df5?w=900&q=80"
                alt="Water heater installation"
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
            title="Why More in Utah Choose CMB Plumbing for Water Heater Repair"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: "Certified Experts",
                desc: "Licensed plumbers highly trained in water heater diagnostics, installations, and replacements.",
              },
              {
                icon: <Flame className="w-5 h-5" />,
                title: "Top-Tier Brands",
                desc: "We install only trusted water heater systems built to perform and endure for years.",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                title: "Customer-First",
                desc: "From fast scheduling to clean job sites, your comfort and satisfaction come first.",
              },
              {
                icon: <CheckCircle className="w-5 h-5" />,
                title: "Transparent Pricing",
                desc: "No surprises — just honest, competitive quotes and quality workmanship.",
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
            title="Schedule Your Water Heater Service with Us"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Clock className="w-5 h-5" />,
                title: "Same-Day Water Heater Repair",
                desc: "Strange noises, leaks, or no hot water? Our techs arrive on time, diagnose on the spot, and implement durable solutions — no guesswork, no delays.",
                img: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?w=600&q=80",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Professional Installation Services",
                desc: "Upgrading your water heater? CMB Plumbing handles the entire process — sizing, system selection, and expert installation — so you get the best fit for your needs and budget.",
                img: "https://images.unsplash.com/photo-1595450547833-95af26a8c80d?w=600&q=80",
              },
              {
                icon: <TrendingDown className="w-5 h-5" />,
                title: "Water Heater Replacements",
                desc: "If your water heater is aging or constantly breaking down, CMB Plumbing makes replacement easy. We help you select a high-performance unit that heats faster, lasts longer, and cuts your energy bills.",
                img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
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
                    Book Service <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS OF REPLACEMENT */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
                alt="Modern home with efficient water heater"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="Smart Investment"
                title="Water Heater Replacements That Pay Off"
                description="If your current water heater is aging, inefficient, or constantly breaking down, CMB Plumbing makes replacement easy and worthwhile. We help you select a high-performance unit that heats water faster, lasts longer, and reduces your energy bills."
              />
              <ul className="mt-8 space-y-3">
                {[
                  {
                    icon: <CheckCircle className="w-4 h-4" />,
                    text: "Tailored system recommendations based on your household's water usage",
                  },
                  {
                    icon: <Zap className="w-4 h-4" />,
                    text: "Energy-efficient options to lower monthly utility costs",
                  },
                  {
                    icon: <ShieldCheck className="w-4 h-4" />,
                    text: "Flawless setup — every installation performed to code and tested thoroughly",
                  },
                  {
                    icon: <CheckCircle className="w-4 h-4" />,
                    text: "Consistent, reliable hot water from day one",
                  },
                  {
                    icon: <TrendingDown className="w-4 h-4" />,
                    text: "Reduced risk of emergency breakdowns and costly water damage",
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="text-[#DB5425] mt-0.5 flex-shrink-0">
                      {item.icon}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Get a Free Assessment
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
            title="Water Heater Questions Answered"
            centered
          />
          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {[
              {
                q: "How do I know if my water heater needs to be replaced?",
                a: "Signs include age over 10–12 years, frequent repairs, rusty water, rumbling noises, or inconsistent hot water. We'll assess your unit and give you an honest recommendation.",
              },
              {
                q: "Tank vs. tankless — which should I choose?",
                a: "Tankless water heaters offer on-demand hot water and greater energy efficiency. Traditional tanks are typically lower upfront cost. We'll help you evaluate the best option for your household.",
              },
              {
                q: "How long does water heater installation take?",
                a: "Most standard water heater replacements are completed within a few hours. Tankless installations may take longer depending on required venting or gas line work.",
              },
              {
                q: "Do you service all brands?",
                a: "Yes — we service and install all major brands. We can also help you choose the best brand for your specific needs and budget.",
              },
              {
                q: "Do you offer same-day service?",
                a: "We offer same-day diagnostic and repair service when available. For non-emergency replacements, we typically schedule the next day after your in-home assessment.",
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
        title="Hot Water Problems? We've Got You Covered."
        description="Same-day diagnostics. Energy-efficient options. Satisfaction guaranteed. Serving Salt Lake & Davis County."
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
