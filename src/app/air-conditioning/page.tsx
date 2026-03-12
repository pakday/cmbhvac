"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  CheckCircle,
  Phone,
  Snowflake,
  Wind,
  Zap,
  Shield,
  Volume2,
  ArrowRight,
  Star,
  Clock,
  ThumbsUp,
  Target,
} from "lucide-react";

/* ─── data ─────────────────────────────────────────────── */

const SERVICES = [
  {
    title: "AC Installation",
    desc: "Every AC system has a lifespan — and when it's time for an upgrade, we'll help you find the perfect fit. A new system means lower energy bills, better reliability, and healthier air with fewer allergens.",
    bullets: ["Lower energy bills", "Better reliability", "Healthier air"],
    icon: <Snowflake className="w-5 h-5" />,
    href: "/services/ac",
  },
  {
    title: "Air Conditioner Maintenance",
    desc: "Think of this as a reset button for your system. Our technicians rejuvenate equipment so it runs like new, catching small issues before they become big headaches. With our Membership Program, keeping your system in top shape has never been easier.",
    bullets: ["Thermostat calibration", "Coil cleaning", "Refrigerant checks"],
    icon: <Zap className="w-5 h-5" />,
    href: "/membership",
  },
  {
    title: "Mini Split Installation",
    desc: "No ducts? No problem. Ductless mini-splits deliver powerful cooling right where you need it — perfect for garages, attics, and additions. Each unit can be controlled individually, giving you customized comfort in every space.",
    bullets: [
      "Individual room control",
      "Simple installation",
      "Exceptional energy efficiency",
    ],
    icon: <Wind className="w-5 h-5" />,
    href: "/services/ac",
  },
  {
    title: "Indoor Air Quality",
    desc: "IAQ plays a vital role in your home's comfort and your family's health. Our advanced air filtration, humidity regulation, and ventilation options help reduce allergens, dust, and airborne pollutants inside your home.",
    bullets: [
      "Fewer allergy symptoms",
      "Improved sleep",
      "Cleaner indoor environment",
    ],
    icon: <Shield className="w-5 h-5" />,
    href: "/services/ac",
  },
  {
    title: "Air Conditioner Repairs",
    desc: "Breakdowns never come at a convenient time. When your AC system fails, we show up with answers — not guesswork. We troubleshoot quickly, explain the fix clearly, and back our work with a satisfaction guarantee.",
    bullets: [
      "Weak or warm airflow",
      "Frozen evaporator coils",
      "Thermostat malfunctions",
    ],
    icon: <Target className="w-5 h-5" />,
    href: "/services/ac",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Warm Air Pulled In",
    body: "Warm indoor air is pulled into return ducts and passed over an evaporator coil filled with refrigerant.",
  },
  {
    num: "02",
    title: "Heat Absorbed",
    body: "The refrigerant absorbs heat from the air, turning into a gas.",
  },
  {
    num: "03",
    title: "Heat Released Outside",
    body: "That gas is pumped to the outdoor condenser unit, where heat is released and the refrigerant cools back into a liquid.",
  },
  {
    num: "04",
    title: "Cooled Air Returns",
    body: "Cooled air is pushed back into your home through ducts and vents, lowering indoor temperatures.",
  },
];

const FACTORS = [
  {
    icon: <Snowflake className="w-5 h-5 text-blue-400" />,
    title: "Size & Capacity",
    desc: "A system that's too small cannot cool efficiently. One that's too large will cycle on and off constantly, wasting energy. Proper sizing based on your home's square footage and layout is essential.",
  },
  {
    icon: <Zap className="w-5 h-5 text-accent" />,
    title: "Efficiency (SEER Rating)",
    desc: "Look for models with high SEER (Seasonal Energy Efficiency Ratio) ratings. The higher the rating, the more energy-efficient the unit and the more you save monthly.",
  },
  {
    icon: <Volume2 className="w-5 h-5 text-purple-400" />,
    title: "Operational Noise",
    desc: "Some homeowners prefer quieter systems, especially for bedrooms or home offices. Modern AC units offer varying noise levels and we'll walk you through which models meet your needs.",
  },
  {
    icon: <Shield className="w-5 h-5 text-green-400" />,
    title: "Reliability",
    desc: "Our team recommends equipment from manufacturers with a strong reputation for durability and easy serviceability. We also help you understand manufacturer warranties.",
  },
];

const WHY_CMB = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Licensed HVAC Professionals",
    desc: "Trained in the latest systems and tools. Our team stays up-to-date on industry advancements, giving you access to the most efficient, reliable, and modern HVAC services in Salt Lake City.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Respectful On-Time Service",
    desc: "With minimal disruption to your day. Our technicians arrive when promised, treat your home with care, and clean up after completion. Seamless and hassle-free from start to finish.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Honest Recommendations",
    desc: "Tailored to your needs and home size. We assess your home's square footage, layout, and comfort goals to recommend solutions that fit your budget and long-term comfort.",
  },
  {
    icon: <ThumbsUp className="w-5 h-5" />,
    title: "Long-Term Results",
    desc: "Not band-aid fixes. Our goal is always to solve the issue at its source, so you can count on your system to perform when you need it most, season after season.",
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

/* ─── component ─────────────────────────────────────────── */

export default function AirConditioningPage() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — centered text over full image
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[76vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cmbhvac.com/wp-content/uploads/2024/06/cmb-hvac-banner-4.jpg"
            alt="Air conditioning technician servicing outdoor AC units"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary-dark/20 via-primary-dark/50 to-primary-dark/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70 mb-6">
              <Snowflake className="w-3.5 h-3.5 text-blue-300" />
              AC Services · Salt Lake Area
            </div>
            <h1 className="heading-2xl font-black text-white leading-[1.05] mb-5">
              Air Conditioning
              <br />
              <span className="text-accent">in the Salt Lake Area</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              When the Utah sun is blazing, you deserve a home that feels like
              your personal oasis. Professional AC services Salt Lake City
              homeowners can trust — repairs, upgrades, or maintenance, we make
              sure your AC works the way it should.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base py-3.5 px-8"
              >
                Contact Us Today
              </Link>
              <a
                href="tel:3858656749"
                className="btn-outline-white text-base py-3.5 px-8"
              >
                <Phone className="w-4 h-4" />
                385-865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTRO — Salt Lake City services
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-4/5">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services_img05.jpg"
                alt="CMB HVAC provides AC services in Salt Lake City"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/30 to-transparent" />

              {/* floating stat badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white rounded-2xl p-5 shadow-2xl border border-border max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Snowflake className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Over 25 years serving
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Salt Lake City, Utah
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow">Salt Lake City AC Services</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Your Home,
                <br />
                <span className="text-accent">Your Oasis</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Utah summers are unbeatable — but after the adventure, you want
                to step inside a home that feels just as refreshing. If your AC
                gives out on a hot afternoon, CMB HVAC&apos;s Home Pros are just
                a call away — fast, friendly, and ready to get your system
                running again.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                CMB HVAC is a trusted name for all your heating, ventilation,
                and air conditioning needs. We&apos;re more than friendly
                technicians — we are your neighbors, offering great services at
                a fair price. Locally owned and operated, proud member of the
                Salt Lake City community.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { n: "A+", l: "BBB Rating" },
                  { n: "5-Star", l: "Google Reviews" },
                  { n: "25+", l: "Years Experience" },
                  { n: "100%", l: "Satisfaction Guaranteed" },
                ].map((stat) => (
                  <div
                    key={stat.l}
                    className="rounded-2xl bg-surface border border-border p-5"
                  >
                    <p className="h-small font-black text-accent">{stat.n}</p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
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
          SERVICES — horizontal feature rows
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Our Services</span>
            <h2 className="heading-xl font-black tracking-tight leading-tight mb-4">
              Air Conditioning Services
              <br />
              <span className="text-primary">in Salt Lake City</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              In addition to maintenance services, we provide many other service
              options for your air conditioning system.
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
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mb-5 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle className="w-3 h-3 text-accent/70 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW AC WORKS — process steps
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-dark overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <span className="eyebrow">Trusted Installation</span>
              <h2 className="heading-xl font-black text-white tracking-tight leading-tight mb-6">
                How Central AC
                <br />
                <span className="text-accent">Actually Works</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
                Choosing the right air conditioning system is just as important
                as selecting the right team to install it. At CMB, we help Salt
                Lake City homeowners select and install central AC systems that
                meet their home&apos;s needs.
              </p>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                From load calculations to ductwork assessments, every step of
                our air conditioning installation services is designed to ensure
                long-term comfort and efficiency.
              </p>
              <p className="text-primary-foreground/60 text-sm mb-6">
                Central air conditioners cool your home by cycling warm indoor
                air through a closed-loop system. Here&apos;s the basic process:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book an Appointment Today
                </Link>
                <a href="tel:3858656749" className="btn-outline-white">
                  <Phone className="w-4 h-4" />
                  385-865-6749
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="flex items-start gap-5 bg-[#0d2640] border border-primary-foreground/10 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 text-accent text-xs font-black">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}

              <p className="text-primary-foreground/50 text-xs leading-relaxed pl-2 pt-2">
                If you need fast and convenient air conditioning services in
                Salt Lake City, Utah, contact our professionals at 385-865-6749.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FACTORS — important considerations
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">New AC Installation</span>
            <h2 className="heading-xl font-black tracking-tight leading-tight mb-4">
              Important Factors When
              <br />
              <span className="text-primary">Installing a New AC</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Installing a new AC system is an investment in your home&apos;s
              comfort. Here are the top factors our team considers during every
              installation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FACTORS.map((f, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-border bg-white p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-surface flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 className="font-bold text-foreground text-base mb-3">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADVANCED TECH — image + content
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">Advanced Technology</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Maximum Comfort &
                <br />
                <span className="text-accent">Indoor Air Quality</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Today&apos;s AC systems do more than cool — they optimize
                comfort. Our variable-speed air conditioners and heat pumps
                adjust automatically to save energy, control humidity, and
                maintain ideal indoor air quality.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                CMB HVAC is an independently owned, locally operated company —
                we install, replace, repair, and maintain all HVAC brands. We
                offer high-efficiency products that use less energy and release
                fewer emissions. Our 50-point energy audits will show you where
                you can save money and improve your energy use.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Variable-speed systems for maximum efficiency",
                  "NATE-certified licensed technicians",
                  "All major brands installed & serviced",
                  "50-point energy audits available",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-foreground text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                Book an Appointment Today
              </Link>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-4/5">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2025/08/central-air-systems-install.jpg"
                alt="Central air systems install"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CMB — 4 reasons
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Why CMB HVAC</span>
            <h2 className="heading-xl font-black tracking-tight leading-tight mb-4">
              Because we treat your home
              <br />
              <span className="text-primary">like our own</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              At CMB HVAC, we start by hiring the best technicians and investing
              in training to keep up with business innovations and trends. Our
              goal with every call is to create a healthy home and happy
              customer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CMB.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl bg-surface border border-border p-7 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-accent to-accent-light" />
                <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 text-accent">
                  {item.icon}
                </div>
                <h3 className="font-bold text-foreground text-sm mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm mb-5 font-medium">
              No Upsells, No Surprises, Done the right way
            </p>
            <Link
              href="/contact"
              className="btn-primary text-base py-3.5 px-10"
            >
              Book an Appointment Today
            </Link>
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
        title="Call Us Today at 385-865-6749"
        description="Licensed & insured AC professionals. Fixed prices. Satisfaction guaranteed. Serving Salt Lake City & Northern Utah."
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
