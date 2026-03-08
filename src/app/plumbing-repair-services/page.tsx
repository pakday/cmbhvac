"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  Flame,
  WashingMachine,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

/* ─── data ─────────────────────────────────────────────── */

const REPAIR_SERVICES = [
  {
    icon: <Droplets className="w-5 h-5" />,
    title: "Toilet Repair & Installations",
    desc: "Running toilet? Clogged bowl? Planning a bathroom remodel? CMB Plumbing offers comprehensive toilet services — everything from emergency repairs to complete toilet replacements. Our certified technicians ensure your toilet functions efficiently and stays trouble-free long-term. It is a service you can rely on every single time!",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Burst Pipe Repairs & Fixture Installations",
    desc: "A burst pipe can cause thousands in damage — don't wait. Call CMB Plumbing for rapid-response burst pipe repair and expert plumbing fixture installations. We install and service kitchen sinks, bathroom vanities, and luxury fixtures with precision and care. Whether standard or high-end, we make sure every install is leak-free and built to last.",
  },
  {
    icon: <Flame className="w-5 h-5" />,
    title: "Mainline & Gas Line Plumbing Repairs",
    desc: "When it comes to gas lines and mainlines, safety and skill are non-negotiable. CMB Plumbing's licensed professionals deliver safe, code-compliant gas line repairs, replacements, and installations — along with dependable mainline plumbing and heating support for homes and commercial properties alike.",
  },
  {
    icon: <WashingMachine className="w-5 h-5" />,
    title: "Specialized Installs, Replacements & Backflow Prevention",
    desc: "Need a new bathtub installed or a stop and waste valve replaced? We handle specialty plumbing jobs with unmatched precision. CMB Plumbing also offers industry-leading backflow prevention services to keep your drinking water safe and your plumbing system fully protected. Call us and we can get you an estimate today!",
  },
];

const WHY_US = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Decades of Experience",
    desc: "Combined expertise diagnosing and repairing every type of plumbing system across Northern Utah.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Fast Response",
    desc: "We get to your home or business as quickly as possible to mitigate the damage a water leak may cause.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Transparent Pricing",
    desc: "Multiple fixed-price repair options presented upfront — you choose what works for your budget.",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Workmanship Guarantee",
    desc: "Every repair is backed by our satisfaction guarantee. We leave your home cleaner than we found it.",
  },
];

const FAQS = [
  {
    q: "How fast can a repair be completed?",
    a: "Most repairs can be scheduled and completed the same day or next day. Emergency repairs are prioritized — we get to you as fast as possible.",
  },
  {
    q: "Do you fix both residential and commercial plumbing?",
    a: "Yes! CMB Plumbing serves both homeowners and business owners across Northern Utah with the same top-tier, 5-star care — every job, every time.",
  },
  {
    q: "What if I don't know where the leak is coming from?",
    a: "That's exactly what we do. Our state-of-the-art leak detection tools locate issues within walls, slabs, and underground lines without damaging your property.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes — we work with multiple banks to find the right plan. Our most popular plans include 0% financing for 36–60 months.",
  },
  {
    q: "Are permits and inspection fees included?",
    a: "Permits and inspection fees may be required depending on your location and are not included in estimates. Just ask your plumber which permits apply and we'll add them to your package.",
  },
];

/* ─── component ─────────────────────────────────────────── */

export default function PlumbingRepairPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — solid left · faded right image
      ══════════════════════════════════════════ */}
      <section className="hero-dark relative min-h-[75vh] flex items-center overflow-hidden bg-[#0D2E47]">
        {/* dot texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* RIGHT — faded image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none">
          <Image
            src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-repair-service-1.jpg"
            alt="Plumbing Repair Services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0D2E47] via-[#0D2E47]/65 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-[#0D2E47]/30 via-transparent to-[#0D2E47]/40" />
        </div>

        {/* LEFT — content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70 mb-7">
              <Wrench className="w-3.5 h-3.5 text-[#DB5425]" />
              CMB Plumbing · Northern Utah
            </div>

            <h1 className="text-5xl md:text-[4rem] font-black leading-[1.02] tracking-tight mb-6">
              Plumbing Repair
              <br />
              <span className="text-[#DB5425]">Done Right.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-10">
              CMB Plumbing is the trusted name for expert repair across Northern
              Utah — from advanced leak detection and toilet repairs to burst
              pipes and gas line fixes. Fast, honest, guaranteed.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="btn-primary text-base py-3.5 px-8"
              >
                Book a Repair
              </Link>
              <a
                href="tel:3858656749"
                className="btn-outline-white text-base py-3.5 px-8"
              >
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Licensed & Insured",
                "Same-Day Service",
                "Upfront Pricing",
                "5-Star Rated",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 text-xs text-white/50 font-medium"
                >
                  <CheckCircle className="w-3 h-3 text-[#DB5425]/70" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EMERGENCY STRIP
      ══════════════════════════════════════════ */}
      <div className="bg-[#DB5425] text-white py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap font-semibold text-sm md:text-base text-center">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>
            Burst pipe or major leak? We provide emergency plumbing service.
          </span>
          <a
            href="tel:3858656749"
            className="underline font-bold whitespace-nowrap"
          >
            Call (385) 865-6749 now
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          INTRO — copy left · image right
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Plumbing Repair Services</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                Plumbing Repair in
                <br />
                <span className="text-[#133F60]">
                  Salt Lake &amp; Davis County
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                CMB Plumbing is the trusted name for expert plumbing services
                across Northern Utah — from advanced leak detection and toilet
                repairs to high-end fixture installations. Whether you&apos;re a
                homeowner or business owner in Bountiful, Salt Lake City, Ogden,
                Layton, West Valley City, Millcreek, Roy, or Draper, you can
                count on fast, professional, and dependable plumbing solutions
                that protect your property and your peace of mind.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                When plumbing problems strike, you don&apos;t have time to wait
                — and at CMB Plumbing, locally owned and operated, we don&apos;t
                make you. Our licensed pros show up fast, fix it right, and
                leave your home cleaner than we found it. Backed by years of
                experience, five-star reviews, and honest pricing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book Our Expert Techs
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* image with floating badge */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-4/5 md:aspect-3/4 lg:h-140">
                <Image
                  src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-repair-service-1.jpg"
                  alt="Advanced Water Leak Detection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0D2E47]/50 via-transparent to-transparent" />
              </div>
              {/* floating badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#DB5425]/10 flex items-center justify-center shrink-0">
                    <Droplets className="w-5 h-5 text-[#DB5425]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Non-invasive detection
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      Advanced Leak Detection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LEAK DETECTION FEATURE — image left · copy right
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* image */}
            <div className="relative rounded-3xl overflow-hidden lg:h-130 aspect-4/5 lg:aspect-auto order-2 lg:order-1">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-repair-service-2.jpg"
                alt="CMB Plumbing diagnosis"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0D2E47]/50 via-transparent to-transparent" />
            </div>

            {/* copy */}
            <div className="order-1 lg:order-2">
              <span className="eyebrow">We Fix Any Problem</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                Advanced Water
                <br />
                <span className="text-[#DB5425]">Leak Detection</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Don&apos;t let hidden leaks turn into costly disasters. At CMB
                Plumbing, our leak detection experts use state-of-the-art
                diagnostic tools to locate issues within walls, slabs, and
                underground lines — without damaging your property. We serve
                both residential and commercial customers, delivering rapid
                results and reliable repairs that prevent future problems.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                We get to your home or business as quickly as possible to
                mitigate the damage that a water leak, overflow, or drain backup
                may be causing. We pinpoint where the problem is and give you
                all the information you need to make the right decision for the
                repair.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { n: "Same Day", l: "Response Time" },
                  { n: "5-Star", l: "Customer Rated" },
                  { n: "Non-Invasive", l: "Leak Detection" },
                  { n: "100%", l: "Satisfaction Guaranteed" },
                ].map((stat) => (
                  <div
                    key={stat.l}
                    className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm"
                  >
                    <p className="text-2xl font-black text-[#DB5425]">
                      {stat.n}
                    </p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      {stat.l}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary">
                Book Our Expert Techs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE — dark immersive
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#0D2E47]">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#DB5425]">
              Why CMB Plumbing?
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-5">
              We Fix Any of Your
              <br />
              <span className="text-[#DB5425]">Problem Plumbing Issues</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              CMB Plumbing is more than just a service call — it&apos;s peace of
              mind. With decades of combined experience, transparent pricing,
              and a reputation built on integrity, our team delivers solutions
              that last. We&apos;re proud to serve Utah communities with 5-star
              care and expert service — every job, every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#DB5425]/20 border border-[#DB5425]/30 flex items-center justify-center text-[#DB5425] mb-5">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SCHEDULE — copy left · checklist card right
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-center">
            <div>
              <span className="eyebrow">CMB Plumbing Services</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                Schedule Your
                <br />
                <span className="text-[#DB5425]">Plumbing Repairs</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Considering the immense strain under which your plumbing system
                operates most of the time, it should come as no surprise that
                you&apos;ll find yourself in need of professional plumbing
                repairs at some point. When you do, time is of the essence. As
                soon as you suspect your system isn&apos;t functioning properly,
                give us a call. We&apos;ll diagnose the problem precisely and
                make any necessary repairs with the expertise that defines our
                expert plumbing services.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                While there&apos;s no way to completely avoid all problems with
                an aging plumbing system, you can keep them to a minimum by
                scheduling routine maintenance. Not only does it help your
                system function more effectively and reliably — it also saves
                you money in the long run.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book Your Appointment
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* checklist card */}
            <div className="bg-[#f7f8fa] rounded-3xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-xl font-black text-gray-900 mb-7">
                What to Expect on Your Visit
              </h3>
              <ul className="space-y-5">
                {[
                  {
                    title: "We Text You First",
                    body: "Before we arrive we'll send your exact arrival window — no guessing, no waiting around.",
                  },
                  {
                    title: "Thorough Diagnosis",
                    body: "We examine and test to pinpoint the exact source and cause of your plumbing problem.",
                  },
                  {
                    title: "Fixed-Price Options",
                    body: "Multiple remediation options with upfront fixed pricing — you choose what works for your budget.",
                  },
                  {
                    title: "We Fix It Right",
                    body: "Repair is completed and the area is cleaned up. Every job is guaranteed before we leave.",
                  },
                  {
                    title: "Financing Available",
                    body: "We help you find the right financing plan — including 0% for 36–60 months.",
                  },
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#DB5425] flex items-center justify-center shrink-0 text-white text-xs font-black">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-0.5">
                        {step.title}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          REPAIR SERVICES GRID
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Our Repair Services</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Every Repair,
              <br />
              <span className="text-[#133F60]">Covered &amp; Guaranteed</span>
            </h2>
            <p className="text-gray-500 text-lg">
              From burst pipes to backflow prevention — our licensed plumbers
              handle it all across Northern Utah with precision and care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {REPAIR_SERVICES.map((s, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DB5425]/10 flex items-center justify-center text-[#DB5425] mb-5">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#DB5425] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#DB5425]">
                  Get an Estimate
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="btn-primary text-base py-3.5 px-10"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ — sticky sidebar layout
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow">FAQs</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
                Got Questions?
                <br />
                <span className="text-[#133F60]">Straight Answers.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                At CMB Plumbing, peace of mind starts with clarity. Quick,
                honest answers so you know exactly what to expect before we even
                knock on your door.
              </p>
              <Link href="/contact" className="btn-primary">
                Ask Us Anything
              </Link>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const open = openAccordion === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      open ? "border-[#DB5425]/40 shadow-md" : "border-gray-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpenAccordion(open ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span
                        className={`font-semibold text-base transition-colors ${open ? "text-[#DB5425]" : "text-gray-900"}`}
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-[#DB5425]" : "text-gray-400"}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
                    >
                      <p className="px-6 pb-6 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Fix Your Plumbing Problem?"
        description="Licensed & insured. Fixed prices. Satisfaction guaranteed. Serving Northern Utah."
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
