"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "hvac",
    message: "",
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
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "hvac",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
            alt="Contact CMB HVAC"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0D2E47]/96 via-[#133F60]/88 to-[#133F60]/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Get in Touch Today
            </h1>
            <p className="text-xl text-white/85 mb-8">
              Need HVAC or plumbing help? We're here to assist. Reach out with
              your question, and we'll respond quickly with an honest
              assessment.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* LEFT: CONTACT INFO */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-8">Quick Info</h2>

              <div className="space-y-6">
                {/* PHONE */}
                <a
                  href="tel:3858656749"
                  className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="icon-box shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">PHONE</p>
                    <p className="text-lg font-bold">(385) 865-6749</p>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:Team@cmbhvac.com"
                  className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="icon-box shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">EMAIL</p>
                    <p className="text-lg font-bold">Team@cmbhvac.com</p>
                    <p className="text-sm text-gray-600">
                      We reply within 1 hour
                    </p>
                  </div>
                </a>

                {/* SERVICE AREA */}
                <div className="flex gap-4 p-4 rounded-lg bg-gray-50">
                  <div className="icon-box shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      SERVICE AREA
                    </p>
                    <p className="text-lg font-bold">Wasatch Front</p>
                    <p className="text-sm text-gray-600">
                      Salt Lake, Davis, Weber Counties
                    </p>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex gap-4 p-4 rounded-lg">
                  <div className="icon-box shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">HOURS</p>
                    <p className="text-sm font-semibold">Mon–Fri: 7am–6pm</p>
                    <p className="text-sm font-semibold">Sat: 9am–4pm</p>
                    <p className="text-sm text-gray-600">
                      24/7 emergency service
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="flex items-center justify-center py-12 text-center">
                    <div>
                      <div className="flex justify-center mb-4">
                        <div className="icon-box icon-box-lg bg-green-100 text-green-600">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                      <p className="text-gray-600 mb-4">
                        We'll contact you within the next hour.
                      </p>
                      <p className="text-sm text-gray-500">
                        In the meantime, feel free to call us at (385) 865-6749.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#133F60] focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#133F60] focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#133F60] focus:border-transparent"
                        placeholder="(385) 555-0123"
                      />
                    </div>

                    {/* SERVICE TYPE */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Service Type *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#133F60] focus:border-transparent"
                      >
                        <option value="hvac">HVAC Service</option>
                        <option value="ac">AC Repair</option>
                        <option value="heating">Heating Service</option>
                        <option value="plumbing">Plumbing Service</option>
                        <option value="water-heater">Water Heater</option>
                        <option value="water-treatment">Water Treatment</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#133F60] focus:border-transparent"
                        placeholder="Tell us about your issue or question..."
                      />
                    </div>

                    {/* SUBMIT */}
                    <button type="submit" className="btn-primary w-full">
                      Submit
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      We'll respond within 1 hour during business hours. For
                      emergencies, call (385) 865-6749.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CONTACT */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                num: "25+",
                label: "Years of Experience",
                desc: "Trusted by thousands of homeowners",
              },
              {
                num: "24/7",
                label: "Always Available",
                desc: "Emergency response when you need it",
              },
              {
                num: "100%",
                label: "Satisfaction Guarantee",
                desc: "If we don't fix it right, we make it right",
              },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold text-[#133F60] mb-2">
                  {stat.num}
                </p>
                <p className="font-bold text-lg mb-1">{stat.label}</p>
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
