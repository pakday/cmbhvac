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
  Hammer,
  Star,
  ShieldCheck,
  Sparkles,
  Droplets,
} from "lucide-react";
import { useState } from "react";

export default function PlumbingInstallationPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80"
            alt="Plumbing installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2E47]/92 via-[#133F60]/80 to-[#133F60]/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-5">
              <Hammer className="w-3.5 h-3.5" />
              Plumbing Installation Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
              Expert Plumbing Installations in Salt Lake &amp; Davis County
            </h1>
            <p className="text-lg text-white/85 mb-8 max-w-xl">
              CMB Plumbing is Utah&apos;s trusted source for expert plumbing
              installation services — designed to elevate comfort, efficiency,
              and long-term value in your home.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/80">
              {[
                "Licensed Plumbers",
                "Premium Materials",
                "Precision Install",
                "Satisfaction Guaranteed",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#DB5425]" /> {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book an Installation
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
                eyebrow="Plumbing Installations"
                title="Plumbing Installation Services in Salt Lake &amp; Davis County"
                description="From water heater installations to custom tub and plumbing fixture upgrades, our licensed professionals deliver flawless results you can rely on. Proudly serving Bountiful, Salt Lake City, Ogden, Layton, West Valley City, Millcreek, Roy, and Draper."
              />
              <p className="mt-6 text-gray-700 leading-relaxed">
                Plumbing is more than messy accidents and emergency calls. CMB
                Plumbing can assist you in getting the water features, fixtures,
                and their related equipment that transform your kitchen,
                bathroom, or outdoor space. Connect with us to find out how we
                can bring your vision to life.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Schedule Your Install
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" /> Call (385) 865-6749
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=80"
                alt="Plumbing installation work"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="font-bold text-sm">5-Star Installs</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  Trusted across Northern Utah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why CMB Plumbing?"
            title="We Fix Any Plumbing Install Issue"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: "Proven Expertise",
                desc: "Licensed plumbers with decades of residential & commercial installation experience.",
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "Premium Materials",
                desc: "Trusted brands and current best practices — guaranteed lasting performance.",
              },
              {
                icon: <CheckCircle className="w-5 h-5" />,
                title: "Responsive Service",
                desc: "From first contact to final walkthrough, your comfort and satisfaction come first.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: "Results You Trust",
                desc: "Every installation backed by our workmanship guarantee — book with total confidence.",
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
            eyebrow="Our Installations"
            title="Schedule Your Plumbing Install Projects with Us"
            description="If you're planning a plumbing upgrade, don't settle for average. CMB Plumbing delivers installation excellence you can see and feel — book your appointment and enjoy hassle-free expert service tailored to your home."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Precision Water Heater Installations",
                img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
                desc: "Say goodbye to cold showers and high energy bills. CMB Plumbing specializes in fast, reliable water heater installations — whether you're upgrading to a high-efficiency tankless system or replacing an outdated unit.",
                href: "/water-heater-services",
              },
              {
                title: "Custom Bathroom Installations",
                img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
                desc: "Create the bathroom you've always wanted. CMB Plumbing installs everything from deep soaking tubs to sleek modern units. Expert installers ensure precise fit, proper plumbing integration, and clean watertight results.",
                href: "/contact",
              },
              {
                title: "Fixture Installations for Kitchens & Baths",
                img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
                desc: "Your fixtures matter. Whether you're remodeling or updating, CMB Plumbing offers top-tier installation for faucets, sinks, showerheads, and more — combining aesthetic appeal with long-lasting durability.",
                href: "/contact",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="card overflow-hidden !p-0 flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="icon-box icon-box-secondary mb-3">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <Link
                    href={service.href}
                    className="btn-ghost text-sm inline-flex items-center gap-1 mt-4"
                  >
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Plumbing Installation Questions"
            centered
          />
          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {[
              {
                q: "How long does a plumbing installation take?",
                a: "Most new installations are scheduled the next day after your in-home measurement. Complex jobs like full bathroom remodels may take longer depending on scope.",
              },
              {
                q: "Do you install all brands and fixtures?",
                a: "Yes! We have access to many brands and can help you find the perfect fixture or equipment for your home. Just give us a call.",
              },
              {
                q: "What's included in a water heater installation?",
                a: "We handle everything — removal of the old unit, installation of the new unit, connection testing, and full cleanup. Every install is performed to code and thoroughly tested.",
              },
              {
                q: "Do you offer financing for large installations?",
                a: "Absolutely. We work with multiple lenders to offer 0% financing for 36–60 months on qualifying projects.",
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
        title="Ready to Upgrade Your Plumbing?"
        description="Expert installations. Premium materials. Satisfaction guaranteed. Serving Salt Lake & Davis County."
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
