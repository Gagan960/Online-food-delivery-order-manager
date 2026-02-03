import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-bold shadow hover:scale-105 transition-transform duration-200"
          >
            Send Message
          </button>
          {submitted && <span className="text-green-500 font-semibold mt-2">Message sent thankyou for contacting us</span>}
        </form>
      </div>
    </section>
  );
}
