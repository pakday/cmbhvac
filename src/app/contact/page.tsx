"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />

      {/* PAGE HEADER */}
      <section className="pt-32 pb-20 bg-linear-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get Your HVAC System Taken Care of Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our friendly team of expert HVAC technicians is ready to help —
              fast response, honest pricing, and 100% satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:3858656749"
                className="btn-primary text-base py-3 px-8"
              >
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT: WHAT TO EXPECT */}
            <div>
              <h2 className="heading-m font-bold mb-4">
                Don&apos;t Wait for your Free Service Call!
              </h2>
              <p className="text-lg font-semibold mb-2 text-muted-foreground">
                What you can expect:
              </p>
              <p className="text-lg font-semibold mb-4">
                Professional and Affordable HVAC Services in Salt Lake City
              </p>
              <p className="text-base font-semibold mb-4">
                What you can expect:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "The Best Techs",
                  "The Friendliest Service",
                  "100% Satisfaction",
                  "Upfront Pricing & Honest Recommendations",
                  "The Best Warranties",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">
                  HOME OF THE FREE SERVICE CALL
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Call or text us now and we&apos;ll be there in a snap to get
                  your system back on no matter the weather outside.
                </p>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div>
              <div className="card p-8">
                <h2 className="h-small font-bold mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="flex items-center justify-center py-12 text-center">
                    <div>
                      <div className="flex justify-center mb-4">
                        <div className="icon-box icon-box-lg bg-green-100 text-green-600">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="h-small font-bold mb-2">Thank you!</h3>
                      <p className="text-muted-foreground">
                        We&apos;ll be in touch shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="(385) 555-0123"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Tell us about your issue or question..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-14 md:py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-m font-bold mb-10 text-center">
            Our Contact Information
          </h2>
          <div className="space-y-6">
            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:team@cmbhvac.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  team@cmbhvac.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:3858656749"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  (385) 865-6749
                </a>
              </div>
            </div>

            {/* Service Area */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Service Area
                </h3>
                <p className="text-muted-foreground">
                  Salt Lake &amp; Davis County, Utah &mdash; Wasatch Front
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Business Hours
                </h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday &ndash; Friday: 7:00 AM &ndash; 6:00 PM</p>
                  <p>Saturday: 8:00 AM &ndash; 12:00 PM</p>
                  <p>Sunday: 8:00 AM &ndash; 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT WITH US */}
      <section className="py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-m font-bold mb-10 text-center">
            Connect With Us For Your Free In-home Consultation!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:3858656749"
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all"
            >
              <div className="icon-box icon-box-lg mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Phone
              </p>
              <p className="font-bold text-lg">(385) 865-6749</p>
            </a>

            <a
              href="mailto:team@cmbhvac.com"
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all"
            >
              <div className="icon-box icon-box-lg mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Email
              </p>
              <p className="font-bold text-lg">team@cmbhvac.com</p>
            </a>

            <Link
              href="/schedule-us"
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all"
            >
              <div className="icon-box icon-box-lg mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Schedule an Appt.
              </p>
              <p className="font-bold text-lg">CLICK HERE</p>
            </Link>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://maps.google.com/maps?q=CMB+HVAC+Salt+Lake+City+UT&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CMB HVAC Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
