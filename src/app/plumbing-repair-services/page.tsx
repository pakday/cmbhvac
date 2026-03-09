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
} from "lucide-react";
import { PageCTA } from "@/components/PageCTA";

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

/* ─── component ─────────────────────────────────────────── */

export default function PlumbingRepairPage() {
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
            src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-repair-service-1.jpg"
            alt="Plumbing Repair Services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark via-primary-dark/70 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-primary-dark/30 via-transparent to-primary-dark/40" />
        </div>

        {/* LEFT — content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-7">
              <Wrench className="w-3.5 h-3.5 text-accent" />
              CMB Plumbing · Northern Utah
            </div>

            <h1 className="text-5xl md:text-display font-black leading-[1.02] tracking-tight mb-6">
              Plumbing Repair
              <br />
              <span className="text-accent">Done Right.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10">
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
              <span className="eyebrow">Plumbing Repair Services</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                Plumbing Repair in
                <br />
                <span className="text-primary">
                  Salt Lake &amp; Davis County
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                CMB Plumbing is the trusted name for expert plumbing services
                across Northern Utah — from advanced leak detection and toilet
                repairs to high-end fixture installations. Whether you&apos;re a
                homeowner or business owner in Bountiful, Salt Lake City, Ogden,
                Layton, West Valley City, Millcreek, Roy, or Draper, you can
                count on fast, professional, and dependable plumbing solutions
                that protect your property and your peace of mind.
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
              <div className="relative rounded-3xl overflow-hidden min-h-115 md:min-h-135 lg:h-155">
                <Image
                  src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-repair-service-1.jpg"
                  alt="Advanced Water Leak Detection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
              </div>
              {/* floating badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white rounded-2xl p-5 shadow-2xl border border-border max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Droplets className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Non-invasive detection
                    </p>
                    <p className="text-sm font-bold text-foreground">
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
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
            </div>

            {/* copy */}
            <div className="order-1 lg:order-2">
              <span className="eyebrow">We Fix Any Problem</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                Advanced Water
                <br />
                <span className="text-accent">Leak Detection</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Don&apos;t let hidden leaks turn into costly disasters. At CMB
                Plumbing, our leak detection experts use state-of-the-art
                diagnostic tools to locate issues within walls, slabs, and
                underground lines — without damaging your property. We serve
                both residential and commercial customers, delivering rapid
                results and reliable repairs that prevent future problems.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We get to your home or business as quickly as possible so as to
                mitigate the damage that a water leak, overflow, or drain backup
                may be causing you. We get in, pinpoint where the problem is and
                get you all the information you need to make the right decision
                for the repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICE CTA STRIP
      ══════════════════════════════════════════ */}
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
              We Fix Any of Your
              <br />
              <span className="text-accent">Problem Plumbing Issues</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
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
                className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-3xl p-7 hover:bg-primary-foreground/10 transition-colors"
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
          SCHEDULE
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow">CMB Plumbing Services</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Schedule Your
              <br />
              <span className="text-accent">Plumbing Repairs</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Considering the immense strain under which your plumbing system is
              operating most of the time, it should come as no surprise to hear
              that you will undoubtedly find yourself in need of professional
              plumbing service repairs at some point. When you do, time is of
              the essence. As soon as you have any reason at all to suspect that
              your system is not functioning properly, give us a call. We will
              diagnose the problem precisely and make any necessary repairs with
              the expertise that so defines our expert plumbing services.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Of course, while there is no way in which to completely avoid all
              problems with your aging plumbing system, you can keep them to a
              minimum by scheduling routine system maintenance with the pros in
              our employ. No matter what type of equipment has been installed
              and may be used, routine maintenance is a must. Not only will it
              help your overall system function more effectively and reliably,
              but also more efficiently. Saving you money in the long run
              &mdash; That sounds like a pretty good deal to us.
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
        </div>
      </section>

      <PageCTA
        eyebrow="Ready for Expert Help?"
        message={
          "CMB Plumbing provides fast plumbing services in Salt Lake City and the surrounding areas."
        }
        buttonText="Book Our Expert Techs"
        buttonHref="/contact"
      />

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
              <span className="text-primary">Covered &amp; Guaranteed</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From burst pipes to backflow prevention — our licensed plumbers
              handle it all across Northern Utah with precision and care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {REPAIR_SERVICES.map((s, idx) => (
              <article
                key={idx}
                className="group relative flex flex-col rounded-2xl bg-card p-8 shadow-sm border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Get an Estimate
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </article>
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
