"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { PageCTA } from "@/components/PageCTA";
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

/* ─── data ─────────────────────────────────────────────── */

const WHY_US = [
  {
    icon: <Droplets className="w-5 h-5" />,
    title: "Local Water Quality Expertise",
    desc: "We understand Utah's unique water composition and tailor our solutions accordingly.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Certified Installers & Technicians",
    desc: "Our licensed pros install every system to the highest standards — backed by warranties and satisfaction guarantees.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Customized, Affordable Options",
    desc: "We offer scalable water treatment systems for every home, budget, and family size.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Ongoing Support & Maintenance",
    desc: "Enjoy peace of mind with responsive service, annual maintenance, and system upgrades when needed.",
  },
];

const SERVICES = [
  {
    icon: <Filter className="w-5 h-5" />,
    title: "Water Softener Installation",
    desc: "Tired of dealing with hard water buildup, dry skin, or stained fixtures? Our expert water softener installation and maintenance services protect your plumbing, appliances, and health. Our systems extend the lifespan of your pipes while delivering softer, cleaner water throughout your home.",
  },
  {
    icon: <Droplets className="w-5 h-5" />,
    title: "Reverse Osmosis Systems",
    desc: "Take your water purity to the next level. CMB Plumbing installs high-efficiency reverse osmosis systems that remove up to 99% of contaminants — including lead, chlorine, fluoride, and other harmful substances. Every glass of water is crystal clear and worry-free.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Whole-Home Water Filtration",
    desc: "Clean, healthy water doesn't stop at the kitchen sink. Our whole-home water filtration services ensure every faucet delivers safe, filtered water — ideal for bathing, cooking, and cleaning. We install sediment filters, carbon filtration, and multi-stage systems targeting Utah's specific water conditions.",
  },
];

/* ─── component ─────────────────────────────────────────── */

export default function WaterTreatmentServicesPage() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — solid left · faded right image
      ══════════════════════════════════════════ */}
      <section className="hero-dark relative min-h-[75vh] flex items-center overflow-hidden bg-primary-dark">
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
            src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-water-treatment-1.jpg"
            alt="Water Treatment Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark via-primary-dark/70 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-primary-dark/30 via-transparent to-primary-dark/40" />
        </div>

        {/* LEFT — content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-7">
              <Filter className="w-3.5 h-3.5 text-accent" />
              CMB Plumbing · Northern Utah
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight mb-6">
              Water Treatment
              <br />
              <span className="text-accent">Done Right.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10">
              Utah&apos;s trusted leader in professional water treatment — from
              whole-home water softeners to advanced reverse osmosis
              installations. Serving Salt Lake &amp; Davis County with expert
              care at every tap.
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              Upgrade your water quality with confidence. CMB Plumbing is
              Utah&apos;s trusted leader in professional water treatment — from
              whole-home water softeners to advanced reverse osmosis
              installations.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="btn-primary text-base py-3.5 px-8"
              >
                Book a Water Treatment Service
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
                "Water Softeners",
                "Reverse Osmosis",
                "Whole-Home Filtration",
                "Utah Experts",
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
          INTRO — copy left · image right
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Water Treatment Services</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                Water Treatment Repair&nbsp;&amp;&nbsp;Services in
                <br />
                <span className="text-primary">
                  Salt Lake &amp; Davis County
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Upgrade your water quality with confidence — CMB Plumbing is
                Utah&apos;s trusted leader in professional water treatment
                system services. We provide tailored solutions that ensure
                clean, safe, and great-tasting water for your family or
                business. Serving Bountiful, Salt Lake City, Ogden, Layton, West
                Valley City, Millcreek, Roy, and Draper, we bring expert care to
                every tap.
              </p>
              <div className="border-l-4 border-accent pl-4 mb-10">
                <h3 className="font-bold mb-1">
                  Water Softener Installation for Healthier Homes and
                  Longer-Lasting Plumbing
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tired of dealing with hard water buildup, dry skin, or stained
                  fixtures? CMB Plumbing offers expert water softener
                  installation and maintenance services that protect your
                  plumbing, appliances, and health. Our systems are designed to
                  extend the lifespan of your pipes while delivering softer,
                  cleaner water throughout your home.
                </p>
              </div>
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
              <div className="relative rounded-3xl overflow-hidden min-h-115 md:min-h-135 lg:h-155">
                <Image
                  src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-water-treatment-1.jpg"
                  alt="CMB Plumbing Water Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white rounded-2xl p-5 shadow-2xl border border-border max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Filter className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Utah-tailored solutions
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Expert Water Treatment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE — dark immersive
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-primary-dark">
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
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Why CMB Plumbing?
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-5">
              Why More Utah Residents
              <br />
              <span className="text-accent">Choose CMB Plumbing</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              We understand Utah&apos;s unique water composition and bring
              certified expertise, affordable options, and ongoing support to
              every water treatment project we take on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-3xl p-7 hover:bg-primary-foreground/13 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent mb-5">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              We Fix Any of Your
              <br />
              <span className="text-primary">Water System Issues</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From water softeners to reverse osmosis and whole-home filtration
              — our licensed technicians handle it all across Northern Utah.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, idx) => (
              <article
                key={idx}
                className="group relative bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors text-accent">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PAGE CTA STRIP
      ══════════════════════════════════════════ */}
      <PageCTA
        eyebrow="Ready for Expert Help?"
        message="CMB Plumbing provides fast plumbing services in Salt Lake City and the surrounding areas."
        buttonText="Book Our Expert Techs"
        buttonHref="/contact"
      />

      {/* ══════════════════════════════════════════
          IMAGE + COPY — image left · copy right
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* image */}
            <div className="relative rounded-3xl overflow-hidden lg:h-130 aspect-4/5 lg:aspect-auto">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-water-treatment-2.jpg"
                alt="CMB Plumbing water treatment system"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
            </div>

            {/* copy */}
            <div>
              <span className="eyebrow">Better Water Starts Here</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                Schedule Your
                <br />
                <span className="text-accent">Water Treatment Service</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Better water starts with one simple step — contact CMB Plumbing
                for trusted water treatment services that transform your tap.
                Book your appointment today and enjoy cleaner, healthier water
                tomorrow.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Utah's water is among the hardest in the nation — we know your local composition",
                  "Whole-home softeners protect your water heater, dishwasher, and all appliances",
                  "RO systems remove 99%+ of contaminants for safe, great-tasting drinking water",
                  "Filtered water improves taste, clarity, and peace of mind for your entire family",
                ].map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book Your Appointment Here
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

      <CTABanner
        title="Cleaner, Healthier Water for Your Home"
        description="Expert water treatment tailored to Utah's unique water. Certified installers. Satisfaction guaranteed."
        primaryText="Book Your Appointment"
        primaryHref="/schedule-us"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-4 h-4" />}
      />

      <Footer />
    </>
  );
}
