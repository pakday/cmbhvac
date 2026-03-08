"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  ShieldCheck,
  Star,
  Award,
  Clock,
  HandCoins,
  ArrowRight,
  Phone,
  Quote,
  CheckCircle2,
  BadgeCheck,
  Zap,
  MapPin,
  Map,
} from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────────── */

const trustCards = [
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Experienced",
    desc: "With over 20 years of experience in the HVAC industry, our team has the knowledge and expertise to handle all of your heating and cooling needs.",
  },
  {
    icon: <BadgeCheck className="w-7 h-7" />,
    title: "Licensed",
    desc: "We are fully licensed and insured, so you can trust our team of professionals will provide you with high-quality service and workmanship.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Insured",
    desc: "We are fully insured to protect our clients and employees, giving you peace of mind when you choose us for your heating and cooling needs.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Certified",
    desc: "As a Certified Locally Owned and Operated company, we are your neighbors, ready to deliver the level of comfort your home needs.",
  },
];

const whyItems = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "NATE-Certified Technicians",
    desc: "Who explain everything in plain language. Our team stays current on the latest systems and tools.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Response & Emergency Service",
    desc: "On-time arrivals with 24/7 emergency availability \u2014 nights, weekends, and holidays.",
  },
  {
    icon: <HandCoins className="w-6 h-6" />,
    title: "Honest, Upfront Pricing",
    desc: "No hidden costs. No upsells. No surprises. We present fixed-price options and let you decide.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Satisfaction Guarantee",
    desc: "We back our workmanship completely. Respectful service from start to finish \u2014 we treat your home with care.",
  },
];

const services = [
  {
    img: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services01.jpg",
    imgAlt: "Technician repairing outdoor HVAC unit.",
    title: "AC Repair",
    desc: "When properly maintained an Air Conditioner should last 15\u201320 years with small repairs along the way. However, the hottest days can truly tax your equipment.",
    href: "/hvac",
  },
  {
    img: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services02.jpg",
    imgAlt: "Technician repairing a residential heating system.",
    title: "Furnace Repair",
    desc: "We have the experience and know-how necessary to assist with all types of issues \u2014 electrical, motor, thermostat problems, intermittent heating, and more.",
    href: "/hvac",
  },
  {
    img: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services03.jpg",
    imgAlt: "Air conditioning units repair with tools outdoors.",
    title: "AC Maintenance",
    desc: "During those hot and muggy days you want a system that can reliably cool your Salt Lake City or Davis County home and maintain your indoor air quality.",
    href: "/hvac",
  },
  {
    img: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services04.jpg",
    imgAlt: "Residential HVAC unit installation in progress.",
    title: "Furnace Maintenance",
    desc: "In some cases, the only thing that separates the way an old furnace runs from the way a new furnace runs is maintenance.",
    href: "/hvac",
  },
];

const reviews = [
  {
    name: "matthew villalpando",
    initials: "MV",
    ago: "1 year ago",
    text: "Awesome customer service from Channing. Saved us from a company who quoted $2,800 for a new evap coil. Channing found the actual leak and saved us $2,000. True honest company \u2014 10/10 recommend.",
  },
  {
    name: "Bekha",
    initials: "B",
    ago: "1 year ago",
    text: "Got a second opinion after a $2,800 quote. Scheduled next day. Channing was great \u2014 went through process of elimination, found the leak and saved us $2,000. Highly recommend.",
  },
  {
    name: "Marlin Harmon",
    initials: "MH",
    ago: "1 year ago",
    text: "Fast, honest, and very professional. They only charge for the work that is necessary and do not attempt to upsell. Totally recommend them.",
  },
  {
    name: "Jerrod Pittman",
    initials: "JP",
    ago: "1 year ago",
    text: "CMB HVAC was great. Squeezed me in same day. Dan was knowledgeable and up front with possible issues and discussed the fix before proceeding.",
  },
  {
    name: "Jeff Wetzel",
    initials: "JW",
    ago: "1 year ago",
    text: "Dan is outstanding and honest. Responded same day and repaired our AC that others told us needed to be replaced. Very impressive.",
  },
  {
    name: "Rich Woodworth",
    initials: "RW",
    ago: "1 year ago",
    text: "Called CMB to fix my AC. Came out in a few hours and fixed the problem quickly. Very professional!",
  },
  {
    name: "Brett Spusta",
    initials: "BS",
    ago: "1 year ago",
    text: "Had two great experiences with CMB! They are professional, timely, and honest about the work that needs to be done!",
  },
  {
    name: "April Hall",
    initials: "AH",
    ago: "1 year ago",
    text: "Stayed true to the quote they offered. Prompt and professional. Will use again.",
  },
  {
    name: "chienta chen",
    initials: "CC",
    ago: "1 year ago",
    text: "Perfect service. Great guy.",
  },
];

const brands = [
  {
    alt: "Amana HVAC brand logo",
    src: "https://cmbhvac.com/wp-content/uploads/2023/06/amana-logo.png",
  },
  {
    alt: "Coleman Heating and Air Conditioning logo",
    src: "https://cmbhvac.com/wp-content/uploads/2023/06/Coleman_logo.png",
  },
  {
    alt: "Daikin company logo",
    src: "https://cmbhvac.com/wp-content/uploads/2023/06/Daikin_Logo.png",
  },
  {
    alt: "Goodman brand logo",
    src: "https://cmbhvac.com/wp-content/uploads/2023/06/Goodman_Logo.png",
  },
  {
    alt: "Airease brand logo",
    src: "https://cmbhvac.com/wp-content/uploads/2023/06/airease_logo.png",
  },
];

const cities = [
  "Salt Lake City",
  "Bountiful",
  "West Valley City",
  "West Jordan",
  "Layton",
  "Taylorsville",
  "Murray",
  "Millcreek",
  "Midvale",
  "Holladay",
  "Cottonwood Heights",
  "Riverton",
  "Herriman",
  "Kearns",
  "Magna",
  "South Salt Lake",
  "Farmington",
  "Kaysville",
  "Syracuse",
  "Clearfield",
  "Clinton",
  "West Point",
  "Centerville",
  "Woods Cross",
  "W. Bountiful",
  "Fruit Heights",
];

/* ─── HELPERS ───────────────────────────────────────────────────── */

function GoogleLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      aria-label="Google"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function FiveStars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1800&q=80"
            alt="HVAC technician at work"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-primary-dark/100 via-brand/90 to-primary-dark/50" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-primary-dark/70 via-transparent to-transparent" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-accent opacity-[0.07] rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT */}
            <div className="lg:col-span-7 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-primary-foreground/90 mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                Licensed &amp; Insured &middot; 25+ Years Experience
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-display font-extrabold text-white leading-[1.05] tracking-tight mb-5">
                No More
                <br />
                <span className="text-accent">Pricing Games.</span>
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-primary-foreground/90 mb-3 leading-snug max-w-xl">
                Get the HVAC system you need, affordably, promptly, expertly.
              </p>
              <p className="text-base text-primary-foreground/70 mb-10 leading-relaxed max-w-xl">
                From scorching Salt Lake summers to mountain&#8209;cold winters
                &mdash; we keep your home comfortable year-round. Fast, honest,
                done right.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="/schedule-us"
                  className="btn-primary text-base py-3.5 px-8"
                >
                  Schedule Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:3858656749"
                  className="btn-outline-white text-base py-3.5 px-8"
                >
                  <Phone className="w-4 h-4" />
                  (385) 865-6749
                </a>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {[
                  {
                    icon: (
                      <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                    ),
                    text: "A+ BBB Rating",
                  },
                  {
                    icon: <Award className="w-3.5 h-3.5 text-accent-light" />,
                    text: "NATE Certified",
                  },
                  {
                    icon: <Clock className="w-3.5 h-3.5 text-accent" />,
                    text: "24/7 Emergency",
                  },
                ].map((p, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-3.5 py-1.5 text-xs text-primary-foreground/80 font-medium"
                  >
                    {p.icon}
                    {p.text}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — stat cards */}
            <div className="hidden lg:grid lg:col-span-5 grid-cols-2 gap-4">
              {[
                {
                  value: "25+",
                  label: "Years of Experience",
                  accent: "border-t-brand-light/60",
                },
                {
                  value: "5,000+",
                  label: "Homes Serviced",
                  accent: "border-t-accent/70",
                },
                {
                  value: "4.9 ★",
                  label: "Google Rating",
                  accent: "border-t-accent-light/70",
                },
                {
                  value: "Free",
                  label: "Service Call",
                  accent: "border-t-white/30",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 border-t-2 ${s.accent} rounded-2xl p-6 text-white`}
                >
                  <div className="text-3xl font-extrabold mb-1">{s.value}</div>
                  <div className="text-sm text-primary-foreground/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAND (Experienced / Licensed / Insured / Certified) ─ */}
      <section className="bg-primary-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
              Why Trust Us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Built on 25 Years of Integrity
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((card, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/10 p-7 hover:bg-primary-foreground/20 transition-all duration-200 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/20 text-accent mb-5 mx-auto group-hover:bg-accent/30 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Service and Maintenance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <Link
                key={i}
                href={svc.href}
                className="group flex flex-col rounded-3xl overflow-hidden border border-border bg-white shadow-sm transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={svc.img}
                    alt={svc.imgAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white font-bold text-lg drop-shadow">
                    {svc.title}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {svc.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary text-base py-3 px-8">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow">Why Choose CMB HVAC</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                We Treat Your Home
                <br className="hidden md:block" /> Like Our Own
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                At CMB HVAC, we hire the best technicians and invest in training
                to keep up with industry innovations. Our goal with every call
                is to create a healthy home and happy customer.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyItems.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="icon-box shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden aspect-4/5">
                <Image
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
                  alt="HVAC technician working on equipment"
                  width={800}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3 border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">
                    100% Satisfaction
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Guaranteed on every job
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT US ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-auto lg:h-120">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2024/06/cmb-hvac-home-certified-locally-owned.jpg"
                alt="CMB HVAC team — certified, locally owned and operated"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary-dark via-primary-dark/70 to-transparent p-8">
                <div className="flex items-center gap-6 flex-wrap">
                  {[
                    { value: "25+", label: "Years Serving Utah" },
                    { value: "5K+", label: "Happy Homeowners" },
                    { value: "64", label: "5-Star Reviews" },
                  ].map((s, i) => (
                    <div key={i} className="text-white">
                      <div className="text-2xl font-extrabold">{s.value}</div>
                      <div className="text-xs text-primary-foreground/70">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                We make sure your home stays
                <br className="hidden md:block" /> cool and comfortable
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                We&apos;ll make sure your home stays cool and comfortable even
                on the hottest days of the summer!
              </p>
              <p className="text-foreground leading-relaxed mb-8">
                At CMB HVAC, we understand that installing or replacing an HVAC
                system can be a significant investment for homeowners.
                That&apos;s why we&apos;re committed to providing our customers
                with the information they need to make informed decisions about
                their heating and cooling needs.
              </p>
              <Link
                href="/schedule-us"
                className="btn-primary text-base py-3 px-7"
              >
                Schedule Your Appointment Here
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS SLIDER ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow">Our Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              What Our Customers Say
            </h2>
            <div className="inline-flex items-center gap-3 rounded-2xl bg-muted border border-border shadow-sm px-5 py-2.5">
              <GoogleLogo className="w-5 h-5" />
              <span className="font-extrabold text-foreground text-lg leading-none">
                5.0
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">64 Google reviews</span>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={6000}
          allowTouchMove={true}
          className="overflow-visible! w-full px-4"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i} style={{ width: "320px" }}>
              <div
                className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm"
                style={{ minHeight: "240px" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <FiveStars />
                  <GoogleLogo />
                </div>
                <Quote className="w-6 h-6 text-accent/30 mb-2" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {r.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{r.ago}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ── BRANDS ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-2">Our Brands</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            Part of the CMB HVAC Family
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {brands.map((b, i) => (
              <div
                key={i}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={150}
                  height={60}
                  className="object-contain h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
        {/* dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* orange accent blob */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent opacity-10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* header */}
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
              We Serve
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Service Davis &amp; Salt Lake County
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-lg mx-auto">
              From the mountains to the valley floor &mdash; wherever you are,
              we&apos;ve got you covered.
            </p>
          </div>

          {/* city continuous slider */}
          <div className="mb-12 overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={12}
              slidesPerView="auto"
              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={5000}
              allowTouchMove={false}
              className="overflow-visible! w-full"
            >
              {[...cities, ...cities].map((city, i) => (
                <SwiperSlide key={i} style={{ width: "auto" }}>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground/80 whitespace-nowrap cursor-default select-none">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    {city}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/services"
              rel="noopener noreferrer"
              className="btn-primary py-3 px-7"
            >
              <Map className="w-4 h-4" />
              View Service Areas
            </a>
            <a
              href="https://www.google.com/maps/d/viewer?mid=15WRpP-K1nD1upUucDxlv6AiJBmRrgEc&femb=1&ll=40.865799427114816%2C-111.863819566313&z=9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white py-3 px-7"
            >
              <MapPin className="w-4 h-4" />
              Check on Map
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <CTABanner
        title="Home of the Free Service Call"
        description="Don&#39;t wait \u2014 call or book online for your free in-home consultation. The best techs, the friendliest service, 100% satisfaction guaranteed."
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
