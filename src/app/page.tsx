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
import { blogPosts, formatDate } from "@/lib/blog-data";

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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image layer */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1800&q=80"
            alt="HVAC technician at work"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#0D2E47]/95 via-[#133F60]/85 to-[#133F60]/40" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#0D2E47]/60 via-transparent to-transparent" />

        {/* Accent blobs */}
        <div className="absolute top-1/4 right-1/4 w-125 h-125 bg-[#DB5425] opacity-10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#1A5280] opacity-30 rounded-full blur-[80px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div className="text-white">
              <div className="badge badge-white mb-5 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                Licensed &amp; Insured · 25+ Years Experience
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 tracking-tight">
                <span className="block font-light">Utah&apos;s Most</span>
                <span className="block text-[#DB5425] font-extrabold">
                  Trusted
                </span>
                <span className="block font-light">HVAC &amp; Plumbing</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
                From scorching Salt Lake summers to mountain-cold winters — we
                keep your home comfortable year-round. Fast, honest, done right.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/schedule-us"
                  className="btn-primary text-base py-3 px-7"
                >
                  Book Free Service Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:3858656749"
                  className="btn-outline-white text-base py-3 px-7"
                >
                  <Phone className="w-5 h-5" />
                  (385) 865-6749
                </a>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: <Star className="w-4 h-4 text-yellow-400" />,
                    text: "A+ BBB Rating",
                  },
                  {
                    icon: <Award className="w-4 h-4 text-blue-300" />,
                    text: "NATE Certified",
                  },
                  {
                    icon: <Clock className="w-4 h-4 text-green-400" />,
                    text: "24/7 Emergency",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/90"
                  >
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating stat cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                {
                  value: "25+",
                  label: "Years of Experience",
                  color: "border-blue-400/30",
                },
                {
                  value: "5,000+",
                  label: "Homes Serviced",
                  color: "border-[#DB5425]/30",
                },
                {
                  value: "4.9★",
                  label: "Average Google Rating",
                  color: "border-yellow-400/30",
                },
                {
                  value: "Free",
                  label: "Service Call Included",
                  color: "border-green-400/30",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white hover:bg-white/15 transition-colors"
                >
                  <div className="text-3xl font-extrabold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
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
                <div className="icon-box-lg icon-box shrink-0">{item.icon}</div>
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
          <div className="bg-linear-to-br from-[#133F60] to-[#1A5280] rounded-3xl p-8 md:p-12 text-white">
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

      {/* ═══ BLOG PREVIEW ═══ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader
              eyebrow="From the Blog"
              title="Expert Tips & Honest Advice"
              description="Real guidance from our certified technicians — written for Utah homeowners."
            />
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#DB5425] hover:gap-3 transition-all"
            >
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold text-[#DB5425] mb-2">
                    {post.category}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#133F60] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">
                      {post.author} · {formatDate(post.date)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#DB5425] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link href="/blog" className="btn-secondary">
              View All Articles <ArrowRight className="w-4 h-4" />
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
        primaryHref="/schedule-us"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-5 h-5" />}
      />

      <Footer />
    </>
  );
}
