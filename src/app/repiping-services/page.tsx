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
  GitBranch,
  ShieldCheck,
  Clock,
  DollarSign,
} from "lucide-react";
import { useState } from "react";

export default function RepipingServicesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&q=80"
            alt="Repiping services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2E47]/93 via-[#133F60]/82 to-[#133F60]/45" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-5">
              <GitBranch className="w-3.5 h-3.5" />
              Repiping Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
              Plumbing Repiping Services in Salt Lake &amp; Davis County
            </h1>
            <p className="text-lg text-white/85 mb-8 max-w-xl">
              CMB Plumbing delivers expert repiping and precision plumbing
              solutions across Northern Utah — trusted by homeowners and
              businesses. Specializing in full home repiping, mainline
              replacements, and gas line installations.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/80">
              {[
                "Whole-Home Repiping",
                "PEX & Copper",
                "Gas Line Install",
                "Workmanship Guarantee",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#DB5425]" /> {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book a Repipe Assessment
              </Link>
              <a href="tel:3858656749" className="btn-outline-white">
                <Phone className="w-4 h-4" /> (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + IMAGE */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Repiping Services"
                title="Repiping Services in Salt Lake &amp; Davis County"
                description="CMB Plumbing delivers expert repiping services and precision plumbing solutions across Northern Utah — trusted by homeowners and businesses alike. Specializing in full home repiping, mainline replacements, and gas line installations, we're committed to enhancing the safety, performance, and value of your property."
              />
              <div className="mt-6 space-y-4">
                <div className="border-l-4 border-[#DB5425] pl-4">
                  <h3 className="font-bold mb-1">
                    Whole Home Repiping You Can Rely On
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    If you&apos;re dealing with frequent leaks, low water
                    pressure, or rusty water, it may be time for a full home
                    repipe. CMB Plumbing replaces outdated piping with modern,
                    long-lasting materials like PEX or copper — improving water
                    quality, system reliability, and overall peace of mind.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Schedule Your Repipe
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80"
                alt="Water pipes and plumbing system"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS YOU NEED REPIPING */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Warning Signs"
            title="Does Your Home Need Repiping?"
            description="Don't ignore the warning signs. These symptoms often mean your pipes are overdue for replacement."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              {
                title: "Frequent Leaks",
                desc: "Multiple leaks or recurring repair calls are a clear sign your pipes are failing — repiping may be more cost-effective than repeated repairs.",
              },
              {
                title: "Low Water Pressure",
                desc: "Mineral deposits and corrosion buildup inside old pipes restrict water flow and cause chronic low pressure throughout your home.",
              },
              {
                title: "Rusty or Discolored Water",
                desc: "Brown, red, or yellow water indicates corrosion inside your pipes — a direct sign that repiping is needed to safeguard your water quality.",
              },
              {
                title: "Visible Corrosion",
                desc: "Visible rust, green staining, or flaking on exposed pipes means corrosion is advanced and replacement should happen soon.",
              },
              {
                title: "Noisy Pipes",
                desc: "Banging, rattling, or humming pipes can signal pressure issues, loose fittings, or pipes that are failing under stress.",
              },
              {
                title: "Old Pipes (50+ Years)",
                desc: "Galvanized steel and polybutylene pipes were common decades ago — both are prone to failure and should be replaced with modern materials.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <div className="w-2 h-2 rounded-full bg-[#DB5425] mb-3" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80"
                alt="Certified repipe technicians"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="Why CMB Plumbing?"
                title="Why More Homeowners Trust CMB Plumbing"
              />
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Certified, Experienced Technicians",
                    desc: "Our highly trained team brings years of specialized plumbing experience to every job.",
                  },
                  {
                    title: "Reliable and On-Time Service",
                    desc: "We respect your time and your property — showing up on schedule and delivering quality without delay.",
                  },
                  {
                    title: "Workmanship Guaranteed",
                    desc: "Every project is backed by our satisfaction guarantee, so you can book with complete confidence.",
                  },
                  {
                    title: "Transparent, Upfront Pricing",
                    desc: "No hidden fees. Just honest work at fair prices — presented before we begin.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className="icon-box flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Book Your Repiping Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REPIPE TYPES */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Schedule Your Repiping with Us"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <GitBranch className="w-5 h-5" />,
                title: "Whole-Home Repiping",
                desc: "Complete replacement of all water supply lines in your home using modern PEX or copper — minimizing disruption while maximizing long-term reliability.",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                title: "Mainline Replacements",
                desc: "A damaged or aging water main can lead to serious property damage. CMB Plumbing provides fast mainline replacement using high-performance materials built to withstand the elements.",
              },
              {
                icon: <DollarSign className="w-5 h-5" />,
                title: "Gas Line Installation",
                desc: "Precision gas line installation by licensed professionals — fully compliant with building codes. Whether connecting a stove, fire pit, or new addition, we guarantee safety and long-term performance.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <div className="icon-box icon-box-secondary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL NOTE */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Ready to Upgrade?"
            title="Don't Gamble with Guesswork — Go with Utah's Trusted Repipe Experts"
            description="When it's time to upgrade your plumbing system, CMB Plumbing delivers reliable, professional service that stands the test of time. Book your appointment today and take the first step toward better plumbing, better safety, and peace of mind."
            centered
          />
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Book Your Appointment
            </Link>
            <a href="tel:3858656749" className="btn-secondary">
              <Phone className="w-4 h-4" /> (385) 865-6749
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Repiping Questions Answered"
            centered
          />
          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {[
              {
                q: "How long does whole-home repiping take?",
                a: "Most whole-home repipes are completed in 1–3 days depending on the size of the home. We work efficiently to minimize disruption to your daily routine.",
              },
              {
                q: "PEX or copper — which is better?",
                a: "Both are excellent options. PEX is flexible, freeze-resistant, and often more affordable. Copper is highly durable and has a proven track record. We'll help you choose the best fit for your home and budget.",
              },
              {
                q: "Will I need to leave my home during repiping?",
                a: "Not necessarily. Water will be off for portions of the work, but we coordinate to minimize inconvenience. Many homeowners stay home throughout the process.",
              },
              {
                q: "Do you offer financing for repiping?",
                a: "Yes — we work with multiple banks to offer 0% financing for 36–60 months on qualifying projects. Ask us about current options.",
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
        title="Expert Repiping You Can Trust"
        description="Modern materials. Guaranteed workmanship. Transparent pricing. Serving Salt Lake & Davis County."
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
