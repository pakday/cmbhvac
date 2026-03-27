"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  CheckCircle,
  Phone,
  AlertTriangle,
  Droplets,
  Wind,
  Thermometer,
  Wrench,
  Zap,
  Volume2,
  ArrowRight,
} from "lucide-react";

/* ─── data ─────────────────────────────────────────────── */

const CAUSES = [
  {
    icon: <Droplets className="w-5 h-5" />,
    title: "Low Refrigerant",
    desc: "Low refrigerant will eventually lead to frozen evaporator coils. Signs include rapidly increasing electric bills, ice on refrigerant lines, warm air from vents, and hissing or bubbling noises.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Frozen Evaporator Coils",
    desc: "A lack of airflow over time causes the coil's condensation to freeze over, creating a feedback loop where more ice forms until the coils are entirely frozen.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Dirty Condenser Coils",
    desc: "When dirt and dust accumulate on condenser coils, heat transfer is significantly obstructed, causing the evaporator coils to freeze and cooling effectiveness to drop.",
  },
  {
    icon: <Wind className="w-5 h-5" />,
    title: "Fan Problems",
    desc: "If evaporator coils freeze, the blower fan will likely overheat. Fan motors can malfunction, causing loud rattling, slow-spinning blades, or erratic shutdowns.",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Leaking Ducts",
    desc: "Leaky ducts cause uneven airflow, unusually high energy bills, or stuffy indoor conditions. We get into attics and crawl spaces to inspect for holes and poor insulation.",
  },
  {
    icon: <Thermometer className="w-5 h-5" />,
    title: "Thermostat Problems",
    desc: "A defective thermostat can constantly run coolant, fail to respond to settings, cause short-cycling, or display inaccurate readings. An upgraded smart thermostat fixes this.",
  },
  {
    icon: <Droplets className="w-5 h-5" />,
    title: "Pools of Water",
    desc: "Moisture pooling around an AC unit may indicate a faulty condensation pump or a blocked drain hole. This can lead to mold, mildew, and clogging of the AC system.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Clogged Drains",
    desc: "When a drain line clogs, condensation gets stuck in the waterline, increasing indoor humidity. Sitting water also causes corrosion and rust inside and around the unit.",
  },
];

const SIGNS = [
  {
    label: "Your AC is blowing warm or hot air",
    icon: <Thermometer className="w-4 h-4" />,
  },
  {
    label: "Your AC is not producing air from the vents",
    icon: <Wind className="w-4 h-4" />,
  },
  {
    label: "Your AC is abnormally noisy",
    icon: <Volume2 className="w-4 h-4" />,
  },
  {
    label: "Your AC smells musty or stale",
    icon: <AlertTriangle className="w-4 h-4" />,
  },
  {
    label: "Your electricity bill skyrocketed unexpectedly",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    label: "Insufficient or weak airflow from vents",
    icon: <Wind className="w-4 h-4" />,
  },
  {
    label: "Frequent short-cycling on and off",
    icon: <Wrench className="w-4 h-4" />,
  },
  {
    label: "High indoor humidity or water leaks inside",
    icon: <Droplets className="w-4 h-4" />,
  },
];

const COST_FACTORS = [
  "The type of repair needed",
  "The condition of your AC unit",
  "The parts needed to perform the repair",
  "Whether or not there's a warranty",
  "The difficulty of the repair",
  "The labor involved",
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

/* ─── component ─────────────────────────────────────────── */

export default function ACRepairPage() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          URGENT CTA BAR — above everything
      ══════════════════════════════════════════ */}
      <div className="bg-accent py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-white text-sm font-semibold">
          <span className="text-white/90">
            If you need your air conditioner operating as soon as possible —
          </span>
          <a
            href="tel:3858656749"
            className="inline-flex items-center gap-2 bg-white text-accent rounded-lg px-5 py-1.5 text-sm font-bold hover:bg-orange-50 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Call (385) 865-6749
          </a>
          <span className="hidden sm:inline text-white/70">or</span>
          <Link
            href="/contact"
            className="text-white/90 underline underline-offset-2 hover:text-white text-sm"
          >
            Book Appointment Here
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          HERO — split image right · content left
      ══════════════════════════════════════════ */}
      <section className="hero-dark relative min-h-[74vh] flex items-center overflow-hidden bg-primary-dark">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* background image, faded on left */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none">
          <Image
            src="https://cmbhvac.com/wp-content/uploads/2024/06/cmb-hvac-top-banner.jpg"
            alt="Air conditioning repair technician"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark via-primary-dark/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-7">
              <AlertTriangle className="w-3.5 h-3.5 text-accent" />
              24 Hour AC Repair · CMB HVAC
            </div>

            <h1 className="heading-2xl font-black leading-[1.05] tracking-tight mb-5">
              Air Conditioning
              <br />
              <span className="text-accent">Repair Service</span>
            </h1>
            <p className="text-primary-foreground/60 text-sm font-bold uppercase tracking-widest mb-4">
              24 HOUR AC REPAIR AVAILABLE
            </p>

            <p className="text-lg text-primary-foreground/75 leading-relaxed mb-10">
              Our friendly and well-trained AC repair technicians have the
              skillset to service, install, and repair HVAC systems of all makes
              and models — arriving with industry-grade tools to make the
              correct diagnosis and repairs quickly.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="tel:3858656749"
                className="btn-primary btn-lg"
              >
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
              <Link
                href="/contact"
                className="btn-outline-white btn-lg"
              >
                Book Online
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Licensed & Insured",
                "NATE Certified",
                "All Makes & Models",
                "Fixed Pricing",
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
          INTRO — What causes AC to stop working
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="eyebrow">AC Repair</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Air Conditioner Repair
                <br />
                <span className="text-accent">& Installation</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                When Utah&apos;s high and dry temperatures strike, an unexpected
                AC breakdown can turn your home into a sauna. When a broken AC
                unit puts your comfort on the line, you need a reliable and
                quick solution.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At CMB HVAC, we specialize in AC repairs in Salt Lake City, UT,
                providing swift, professional service that lasts. Our staff is
                committed to restoring cool comfort and efficiency in record
                time.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:3858656749" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <Link href="/contact" className="btn-secondary">
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2024/06/action-shots-11.jpg"
                alt="Technician repairing air conditioning unit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CAUSES — diagnostic grid
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Diagnostics</span>
            <h2 className="heading-xl font-black tracking-tight leading-tight mb-4">
              What Causes Your Air
              <br />
              <span className="text-primary">Conditioner to Stop Working?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              There are many reasons AC units might stop working. Here are the
              most common causes our technicians diagnose and repair every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {CAUSES.map((cause, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-white border border-border p-6 overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* accent top border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-accent/60 to-accent/20 group-hover:from-accent group-hover:to-accent-light transition-all duration-300" />
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4 text-accent">
                  {cause.icon}
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2">
                  {cause.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {cause.desc}
                </p>
              </div>
            ))}
          </div>

          {/* image row */}
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                src: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services_img09.jpg",
                alt: "Two Amana AC units outside residential home",
              },
              {
                src: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services_img10.jpg",
                alt: "Amana air conditioning unit outside house",
              },
              {
                src: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services_img11.jpg",
                alt: "Outdoor central air conditioning unit",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative rounded-2xl overflow-hidden aspect-video"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SIGNS — checklist + cost
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Signs checklist */}
            <div>
              <span className="eyebrow">Warning Signs</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Should I Call an
                <br />
                <span className="text-primary">AC Repair Technician?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Signs your air conditioner needs to be repaired:
              </p>
              <div className="space-y-3">
                {SIGNS.map((sign, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-white px-5 py-4 hover:border-accent/40 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 text-accent">
                      {sign.icon}
                    </div>
                    <span className="text-foreground text-sm font-medium">
                      {sign.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost + CTA */}
            <div>
              <span className="eyebrow">Transparent Pricing</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                How Much Does a
                <br />
                <span className="text-primary">Repair Cost?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Multiple factors determine the cost of air conditioner repairs.
                After an inspection and diagnosis, we will offer a detailed and
                transparent price estimate with no hidden fees at any point.
              </p>

              <div className="rounded-3xl bg-surface border border-border p-7 mb-8">
                <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                  Cost is determined by:
                </h4>
                <ul className="space-y-3">
                  {COST_FACTORS.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-primary-dark p-7 text-white">
                <h4 className="font-bold text-white text-base mb-3">
                  We&apos;re Ready to Solve Your AC Problems Immediately!
                </h4>
                <p className="text-primary-foreground/70 text-sm mb-6">
                  Our HVAC specialists are experienced and NATE certified.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:3858656749" className="btn-primary">
                    <Phone className="w-4 h-4" />
                    (385) 865-6749
                  </a>
                  <Link href="/contact" className="btn-outline-white">
                    Schedule Your Repair
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CREDENTIALS STRIP
      ══════════════════════════════════════════ */}
      <div className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200">
            {CREDENTIALS.map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center justify-center gap-3 py-10 px-4"
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

      <CTABanner
        title="Fast AC Repair When You Need It"
        description="Licensed & insured. Fixed prices. NATE certified. Same-day service available in Salt Lake City & Northern Utah."
        primaryText="Schedule Your Repair"
        primaryHref="/contact"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-4 h-4" />}
      />

      <Footer />
    </>
  );
}
