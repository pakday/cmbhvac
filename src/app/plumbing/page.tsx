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
  Camera,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

/* ─── data ─────────────────────────────────────────────── */

const SERVICES = [
  {
    image:
      "https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-icons-plumbing-repair.png",
    title: "Plumbing Repair",
    desc: "Leaks, burst pipes, toilets, gas lines — fast diagnosis and same-day fixes.",
    href: "/plumbing-repair-services",
  },
  {
    image:
      "https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-icons-pipe-inspection.png",
    title: "Pipe Inspection",
    desc: "Non-invasive video camera inspection to find hidden problems before they worsen.",
    href: "/pipe-inspection-services",
  },
  {
    image:
      "https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-icons-repiping.png",
    title: "Repiping Services",
    desc: "Whole-home repiping in PEX or copper with full workmanship guarantee.",
    href: "/repiping-services",
  },
  {
    image:
      "https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-icons-plumbing-installation.png",
    title: "Plumbing Installation",
    desc: "Custom fixtures, sinks, tubs, and water lines installed to perfection.",
    href: "/plumbing-installation-services",
  },
  {
    image:
      "https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-icons-water-heater-installation.png",
    title: "Water Heater Services",
    desc: "Tank and tankless installs, same-day repair, energy-efficient upgrades.",
    href: "/water-heater-services",
  },
  {
    image:
      "https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-icons-water-treatments.png",
    title: "Water Treatment",
    desc: "Softeners, reverse osmosis, and whole-home filtration for Utah water.",
    href: "/water-treatment-services",
  },
];

const CREDENTIALS = [
  {
    icon: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_experience_icon.png",
    label: "Experienced",
  },
  {
    icon: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_Licensed_icon.png",
    label: "Licensed",
  },
  {
    icon: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_insured_icon.png",
    label: "Insured",
  },
  {
    icon: "https://cmbhvac.com/wp-content/uploads/2024/06/cmb-hvac-certified-icon.png",
    label: "Certified",
  },
];

const STEPS = [
  {
    num: "01",
    title: "We Text You First",
    body: "Before we arrive we'll send your exact arrival window — no guessing, no waiting around.",
  },
  {
    num: "02",
    title: "Thorough Diagnosis",
    body: "We examine and test to pinpoint the exact source and cause of your plumbing problem.",
  },
  {
    num: "03",
    title: "Fixed-Price Options",
    body: "We present multiple remediation options with upfront fixed pricing — you choose what works.",
  },
  {
    num: "04",
    title: "We Fix It Right",
    body: "Repair is completed, area cleaned up. Every job is guaranteed before we leave.",
  },
  {
    num: "05",
    title: "Financing Available",
    body: "We help you find the right financing plan to fit your budget and credit score.",
  },
];

const FAQS = [
  {
    q: "Do you offer financing?",
    a: "Of course! We work with many different banks and will help find you the right plan to fit your budget and credit score. Some of our most popular plans are 0% financing for 36\u201360 months.",
  },
  {
    q: "Do you offer weekend appointments?",
    a: "Absolutely! We understand everyone's schedule is different and we're happy to arrange a time that fits yours. Give us a ring and we'll accommodate you!",
  },
  {
    q: "How fast can I have a repair completed?",
    a: "Most installations can be scheduled the next day after your in-home measurement. Equipment shortages, emergency repairs, and specialized components can vary. Your exact date may vary due to supply chain factors out of our control.",
  },
  {
    q: "Are permits and inspection fees included?",
    a: "Permits and inspection fees may be required depending on your location and are not included in estimates. Each town and county is a little different — simply ask your plumber which permits are required so we can add them to your package.",
  },
  {
    q: "Do you offer any other brands than the equipment listed?",
    a: "Yep, we sure do! We have access to many others. Give us a ring and we'd be happy to find the perfect plumbing solution for your home!",
  },
];

/* ─── component ─────────────────────────────────────────── */

export default function PlumbingPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — solid left content · faded right image
      ══════════════════════════════════════════ */}
      <section className="hero-dark relative min-h-[75vh] flex items-center overflow-hidden bg-primary-dark">
        {/* dot texture over entire section */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* RIGHT — image panel, fades left into the dark background */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none">
          <Image
            src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-water-leaking.jpg"
            alt="Plumbing Services"
            fill
            className="object-cover object-center"
            priority
          />
          {/* fade-left mask — blends image into the dark bg */}
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark via-primary-dark/60 to-transparent" />
          {/* subtle bottom & top vignette */}
          <div className="absolute inset-0 bg-linear-to-b from-primary-dark/30 via-transparent to-primary-dark/40" />
        </div>

        {/* LEFT — content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 w-full">
          <div className="max-w-xl">
            {/* eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-7">
              <WaterDropIcon className="w-3.5 h-3.5 text-accent" />
              CMB Plumbing · Northern Utah
            </div>

            <h1 className="heading-2xl font-black leading-[1.02] tracking-tight mb-6">
              Plumbing You Can
              <br />
              <span className="text-accent">Count On.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10">
              Burst pipe? Backed-up drain? We&apos;re already on the way. Fast,
              honest, and guaranteed — locally owned and operated.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="btn-primary text-base py-3.5 px-8"
              >
                Schedule Service
              </Link>
              <a
                href="tel:3858656749"
                className="btn-outline-white text-base py-3.5 px-8"
              >
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
            </div>

            {/* trust badges — low, small, unobtrusive */}
            <div className="flex flex-wrap gap-2">
              {[
                "Licensed & Insured",
                "Same-Day Service",
                "Upfront Pricing",
                "5-Star Rated",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 text-xs text-primary-foreground/50 font-medium"
                >
                  <CheckCircle className="w-3 h-3 text-accent/70" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CREDENTIAL STRIP
      ══════════════════════════════════════════ */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
            {CREDENTIALS.map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center justify-center gap-3 py-8 px-4"
              >
                <div className="relative w-14 h-14">
                  <Image
                    src={c.icon}
                    alt={c.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-bold text-foreground tracking-wide">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Our Services</span>
            <h2 className="heading-xl font-black tracking-tight leading-tight mb-4">
              Everything Plumbing,
              <br />
              <span className="text-primary">Under One Roof</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From a dripping faucet to a complete home repipe — our licensed
              plumbers cover it all across Northern Utah.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, idx) => (
              <Link
                key={idx}
                href={s.href}
                className="group relative flex flex-col rounded-3xl border border-border bg-white p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative w-16 h-16 mb-5 shrink-0">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.desc}
                </p>

                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT / TRUST — image left, copy right
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-4/5 md:aspect-3/4 lg:aspect-auto lg:h-145">
                <Image
                  src="https://cmbhvac.com/wp-content/uploads/2025/06/plumbing-square-fixed.jpg"
                  alt="CMB Plumbing team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/60 via-transparent to-transparent" />
              </div>

              {/* floating badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white rounded-2xl p-5 shadow-2xl border border-border max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Every job backed by our
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Workmanship Guarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow">CMB Plumbing Services</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                What You Need,
                <br />
                <span className="text-accent">Today.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                When plumbing problems strike, you don&apos;t have time to wait
                — and at CMB Plumbing, locally owned and operated, we don&apos;t
                make you. Whether it&apos;s a burst pipe at midnight, a clogged
                drain disrupting your day, or a major install that needs
                precision and speed, our licensed pros show up fast, fix it
                right, and leave your home cleaner than we found it.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Backed by years of experience, five-star reviews, and honest
                pricing — CMB Plumbing is the trusted name homeowners call first
                and the only one they ever need to call again.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { n: "Same Day", l: "Response Time" },
                  { n: "5-Star", l: "Customer Rated" },
                  { n: "Fixed", l: "Upfront Pricing" },
                  { n: "100%", l: "Satisfaction Guaranteed" },
                ].map((stat) => (
                  <div
                    key={stat.l}
                    className="rounded-2xl bg-white border border-border p-5"
                  >
                    <p className="h-small font-black text-accent">{stat.n}</p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      {stat.l}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Get Your Appointment
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SCHEDULE / SNAP & SEND — dark immersive
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cmbhvac.com/wp-content/uploads/2024/06/cmb-hvac-banner-2.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#071c2e]/100" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-8">
                <Camera className="w-3.5 h-3.5 text-accent" />
                Snap &amp; Send
              </div>

              <h2 className="heading-xl text-white tracking-tight leading-tight mb-5">
                Schedule an
                <br />
                <span className="text-accent">In-Home Visit</span>
              </h2>

              <p className="text-lg text-primary-foreground/90 leading-relaxed mb-4">
                What&apos;s the easiest way to check your plumbing problem
                today?
              </p>
              <p className="text-lg text-white leading-relaxed mb-8">
                Just snap a quick photo or video, send it to CMB Plumbing
                through our website or text line, and our experts will give you
                a fast, no-pressure assessment — no guesswork, no waiting
                around. It&apos;s the smartest way to get your plumbing problem
                solved today.
              </p>

              <p className="text-xl font-bold text-accent mb-10">
                We make sure you are satisfied!
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary text-base py-3.5 px-8"
                >
                  <Camera className="w-4 h-4" />
                  Send Us a Photo
                </Link>
                <a
                  href="tel:3858656749"
                  className="btn-outline-white text-base py-3.5 px-8"
                >
                  <Phone className="w-4 h-4" />
                  (385) 865-6749
                </a>
              </div>
            </div>

            {/* steps card */}
            <div className="bg-[#0d2640] border border-primary-foreground/10 rounded-3xl p-8 md:p-10">
              <h3 className="text-white font-bold text-xl mb-7">
                Your 30-Minute Home Visit
              </h3>
              <ol className="space-y-6">
                {STEPS.map((s) => (
                  <li key={s.num} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 text-accent text-xs font-black">
                      {s.num}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-0.5">
                        {s.title}
                      </p>
                      <p className="text-primary-foreground/80 text-sm leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 pt-7 border-t border-primary-foreground/10">
                <a
                  href="tel:3858656749"
                  className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-white text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  Give us a call if you have questions
                </a>
              </div>
            </div>
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
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-5">
                Got Questions?
                <br />
                <span className="text-primary">Straight Answers.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
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
                      open ? "border-accent/40 shadow-md" : "border-border"
                    }`}
                  >
                    <button
                      onClick={() => setOpenAccordion(open ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-muted transition-colors"
                    >
                      <span
                        className={`font-semibold text-base transition-colors ${open ? "text-accent" : "text-foreground"}`}
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-accent" : "text-muted-foreground"}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
                    >
                      <p className="px-6 pb-6 pt-1 text-muted-foreground text-sm leading-relaxed border-t border-border">
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
        title="Get Expert Plumbing Help Today"
        description="Licensed & insured. Fixed prices. Satisfaction guaranteed. Serving Northern Utah."
        primaryText="Book Appointment"
        primaryHref="/contact"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-4 h-4" />}
      />

      <Footer />
    </>
  );
}

function WaterDropIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z" />
    </svg>
  );
}
