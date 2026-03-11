"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Phone,
  Mail,
  Clock,
  CheckCircle,
  CalendarCheck,
  MessageSquare,
  Wrench,
  Flame,
  Snowflake,
  Droplets,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { useState } from "react";

const serviceTypes = [
  {
    id: "ac-repair",
    label: "AC Repair",
    icon: <Snowflake className="w-4 h-4" />,
  },
  {
    id: "ac-install",
    label: "AC Installation",
    icon: <Snowflake className="w-4 h-4" />,
  },
  {
    id: "furnace-repair",
    label: "Furnace Repair",
    icon: <Flame className="w-4 h-4" />,
  },
  {
    id: "furnace-install",
    label: "Furnace Installation",
    icon: <Flame className="w-4 h-4" />,
  },
  {
    id: "plumbing-repair",
    label: "Plumbing Repair",
    icon: <Wrench className="w-4 h-4" />,
  },
  {
    id: "plumbing-install",
    label: "Plumbing Installation",
    icon: <Wrench className="w-4 h-4" />,
  },
  {
    id: "water-heater",
    label: "Water Heater",
    icon: <Droplets className="w-4 h-4" />,
  },
  {
    id: "water-treatment",
    label: "Water Treatment",
    icon: <Droplets className="w-4 h-4" />,
  },
  {
    id: "other",
    label: "Other / Not Sure",
    icon: <MessageSquare className="w-4 h-4" />,
  },
];

const steps = [
  {
    number: "01",
    title: "Fill Out the Form",
    desc: "Tell us your name, contact info, the service you need, and your preferred time — it takes under 2 minutes.",
  },
  {
    number: "02",
    title: "We Confirm Your Appointment",
    desc: "A CMB team member will call or text you to confirm the time. We'll also send you a reminder the day before.",
  },
  {
    number: "03",
    title: "Technician Arrives & Diagnoses",
    desc: "We text you our exact ETA. On arrival, we assess your system, explain the issue clearly, and give you fixed pricing.",
  },
  {
    number: "04",
    title: "Problem Solved",
    desc: "We complete the repair or installation to your satisfaction. All work is backed by our workmanship guarantee.",
  },
];

export default function SchedulePage() {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    timePreference: "morning",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
        timePreference: "morning",
      });
      setSelectedService("");
    }, 4000);
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80"
            alt="CMB HVAC scheduling service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/100 via-brand/90 to-brand/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-5">
              <CalendarCheck className="w-3.5 h-3.5" />
              Book an Appointment
            </div>
            <h1 className="heading-2xl font-bold leading-tight mb-5">
              Schedule Your HVAC or Plumbing Service
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              Fast, easy booking. Same-day availability. Tell us what you need
              and a CMB technician will be at your door — on time, every time.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-primary-foreground/80">
              {[
                "Free Service Call",
                "Same-Day Available",
                "Upfront Pricing",
                "No Surprises",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-accent" /> {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#booking-form" className="btn-primary">
                Book Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:3858656749" className="btn-outline-white">
                <Phone className="w-4 h-4" />
                Call (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="eyebrow">How It Works</p>
            <h2 className="heading-m font-bold mb-4 text-foreground">
              From Booking to Fixed — Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              We've made scheduling as easy as possible. Most bookings are
              confirmed within minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-full border-t-2 border-dashed border-border" />
                )}
                <div className="relative text-center">
                  <div className="w-12 h-12 rounded-2xl bg-accent text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + CONTACT */}
      <section id="booking-form" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* LEFT: CONTACT INFO */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <p className="eyebrow">Contact Us Directly</p>
                <h2 className="h-small font-bold mb-4">
                  Prefer to Call or Text?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Give us a ring and we'll get you scheduled immediately. Our
                  team answers 7 days a week, with emergency support 24/7.
                </p>
              </div>

              <a
                href="tel:3858656749"
                className="flex gap-4 items-center p-5 rounded-2xl border border-border bg-muted hover:border-primary hover:bg-white transition-all group"
              >
                <div className="icon-box icon-box-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">
                    Phone / Text
                  </p>
                  <p className="font-bold text-foreground text-lg">
                    (385) 865-6749
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Available 7 days a week
                  </p>
                </div>
              </a>

              <a
                href="mailto:team@cmbhvac.com"
                className="flex gap-4 items-center p-5 rounded-2xl border border-border bg-muted hover:border-primary hover:bg-white transition-all group"
              >
                <div className="icon-box icon-box-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">
                    Email
                  </p>
                  <p className="font-bold text-foreground">team@cmbhvac.com</p>
                  <p className="text-sm text-muted-foreground">
                    We reply within a few hours
                  </p>
                </div>
              </a>

              <div className="flex gap-4 items-center p-5 rounded-2xl border border-border bg-muted">
                <div className="icon-box icon-box-lg shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">
                    Hours
                  </p>
                  <p className="font-bold text-foreground">
                    Mon – Sat: 7AM – 8PM
                  </p>
                  <p className="text-sm text-muted-foreground">24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex gap-4 items-center p-5 rounded-2xl border border-border bg-muted">
                <div className="icon-box icon-box-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">
                    Service Area
                  </p>
                  <p className="font-bold text-foreground">
                    Salt Lake & Davis County
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <Link
                      href="/service-areas"
                      className="text-accent hover:underline"
                    >
                      View all service areas →
                    </Link>
                  </p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="pt-2">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-3">
                  You&apos;re in good hands
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Licensed & Insured",
                    "NATE Certified",
                    "A+ BBB Rating",
                    "5-Star Rated",
                  ].map((badge) => (
                    <span key={badge} className="badge text-xs">
                      <CheckCircle className="w-3 h-3" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: BOOKING FORM */}
            <div className="lg:col-span-2">
              <div className="card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="h-small font-bold mb-2">
                      Request Received!
                    </h3>
                    <p className="text-muted-foreground">
                      A CMB team member will contact you shortly to confirm your
                      appointment. We&apos;ll see you soon!
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <p className="eyebrow mb-2">Appointment Request</p>
                      <h2 className="h-small font-bold">
                        Tell Us What You Need
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Service Type */}
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          Select a Service{" "}
                          <span className="text-accent">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {serviceTypes.map((s) => (
                            <button
                              type="button"
                              key={s.id}
                              onClick={() => setSelectedService(s.id)}
                              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                                selectedService === s.id
                                  ? "border-primary bg-primary text-white"
                                  : "border-border text-foreground hover:border-border hover:bg-muted"
                              }`}
                            >
                              {s.icon}
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-foreground mb-1.5"
                          >
                            Full Name <span className="text-accent">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-foreground mb-1.5"
                          >
                            Phone Number{" "}
                            <span className="text-accent">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(385) 000-0000"
                            className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-foreground mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition"
                        />
                      </div>

                      {/* Address */}
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-semibold text-foreground mb-1.5"
                        >
                          Service Address{" "}
                          <span className="text-accent">*</span>
                        </label>
                        <input
                          id="address"
                          name="address"
                          type="text"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="123 Main St, Salt Lake City, UT"
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition"
                        />
                      </div>

                      {/* Time Preference */}
                      <div>
                        <label
                          htmlFor="timePreference"
                          className="block text-sm font-semibold text-foreground mb-1.5"
                        >
                          Preferred Time
                        </label>
                        <select
                          id="timePreference"
                          name="timePreference"
                          value={formData.timePreference}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition bg-white"
                        >
                          <option value="asap">As Soon as Possible</option>
                          <option value="morning">Morning (8AM – 12PM)</option>
                          <option value="afternoon">
                            Afternoon (12PM – 5PM)
                          </option>
                          <option value="evening">Evening (5PM – 8PM)</option>
                          <option value="weekend">Weekend</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-foreground mb-1.5"
                        >
                          Describe the Issue
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us what's happening with your system — the more detail, the faster we can help."
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full py-3 text-base"
                      >
                        <CalendarCheck className="w-5 h-5" />
                        Request Appointment
                      </button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form you agree to be contacted by CMB
                        HVAC regarding your service request. We never share your
                        information.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK EMERGENCY BAR */}
      <div className="bg-accent text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3 text-center font-semibold">
          <Clock className="w-5 h-5 shrink-0" />
          <span>Need emergency HVAC or plumbing help right now?</span>
          <a
            href="tel:3858656749"
            className="underline font-bold hover:no-underline"
          >
            Call (385) 865-6749 — We&apos;re available 24/7
          </a>
        </div>
      </div>

      {/* CTA */}
      <CTABanner
        eyebrow="Questions Before Booking?"
        title="We're Happy to Help — Call or Text Us"
        description="Not sure what service you need? Our friendly team will walk you through it. No pressure, no upsells — just honest HVAC and plumbing advice."
        primaryText="Schedule an Appointment"
        primaryHref="#booking-form"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
      />

      <Footer />
    </>
  );
}
