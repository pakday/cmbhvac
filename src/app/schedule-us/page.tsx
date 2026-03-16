"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function SchedulePage() {
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
              Schedule Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Book Your Appointment with Our Expert HVAC Techs
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Reserve your spot with Utah&apos;s trusted HVAC professionals —
              fast, easy, and completely hassle-free.
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

      {/* MAIN */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-m font-bold mb-4">
                Get Your HVAC System taken care of Today
              </h2>
              <p className="text-2xl font-semibold mb-4">
                Call{" "}
                <a href="tel:3858656749" className="text-accent underline">
                  385-865-6749
                </a>
              </p>
              <a
                href="tel:3858656749"
                className="btn-primary text-lg py-3 px-8 mb-6 inline-flex"
              >
                Click to Call Us
              </a>
              <p className="text-xl font-semibold mt-4 mb-6">
                Don&apos;t Wait for your Free Service Call!
              </p>

              <p className="text-lg font-semibold mb-2 text-muted-foreground">
                What you can expect with us:
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

      {/* CONNECT WITH US */}
      <section className="bg-muted py-14 md:py-16">
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

            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card">
              <div className="icon-box icon-box-lg mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Service Area
              </p>
              <p className="font-bold text-lg">Wasatch Front</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
