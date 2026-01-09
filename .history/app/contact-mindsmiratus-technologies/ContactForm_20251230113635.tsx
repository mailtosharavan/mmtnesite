"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, User, MessageSquare, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", captcha: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaNumbers, setCaptchaNumbers] = useState<{ a: number; b: number } | null>(null);


  useEffect(() => {
    setCaptchaNumbers({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1,
    });
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    if (captchaNumbers && parseInt(formData.captcha) !== captchaNumbers.a + captchaNumbers.b)
      newErrors.captcha = "Incorrect answer. Please try again.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true); // start loading

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        console.error("Server error:", result.error || "Unknown error");
        alert("Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Network/Fetch Error:", err);

      alert("Network error occurred. Please retry later.");
    }
    setLoading(false);
  };

  return (
    <section className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between gap-12 items-start py-16">
      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 space-y-6"
      >
        <h2 className="text-3xl font-bold text-[#0078D7] mb-3">Let’s Connect</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Whether it’s a new idea or a complete digital transformatio —
          <strong className="text-[#0078D7]"> Mindsmiratus Technologies Pvt. Ltd. </strong>
          is ready to bring it to life.
        </p>

        <div className="flex items-center gap-3">
          <Mail className="text-[#0078D7]" />
          <span><a href="mailto:mail@mindsmiratus.com">mail@mindsmiratus.com</a></span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-[#0078D7]" />
          <span><a href="tel:+919625306474">+91-9625306474</a></span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="text-[#0078D7]" />
          <span>A-263, 1st Floor, Vishwakarma Colony, Delhi 110044, India</span>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.864727617972!2d77.28450047522125!3d28.501740890008495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f8f4aa824f%3A0x11711854f86aeab0!2sMindsmiratus%20Technologies%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1766750856552!5m2!1sen!2sin" width="100%" height="215px" loading="lazy" ></iframe>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 relative bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAF3FF] via-white to-transparent opacity-70 pointer-events-none rounded-2xl" />

        {submitted ? (
          <div id="success-message" className="text-center text-green-600 font-semibold text-lg relative z-10">
            ✅ Thank you! We’ve received your message and will respond soon.
          </div>
        ) : (
          <div className="relative z-10 space-y-6">
            {/* Name Field */}
            <div className="relative">
              <User className="absolute left-3 top-4 text-[#0078D7]" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`peer w-full pl-10 border-b-2 bg-transparent py-3 text-slate-800 focus:outline-none focus:border-[#0078D7] ${errors.name ? "border-red-500" : "border-slate-300"
                  }`}
              />
              <label
                className={`absolute left-10 top-3 text-slate-500 bg-white px-1 transition-all duration-200 ${formData.name
                  ? "top-[-10px] text-sm text-[#0078D7]"
                  : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
                  } peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#0078D7]`}
              >
                Your Name
              </label>
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-3 top-4 text-[#0078D7]" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`peer w-full pl-10 border-b-2 bg-transparent py-3 text-slate-800 focus:outline-none focus:border-[#0078D7] ${errors.email ? "border-red-500" : "border-slate-300"
                  }`}
              />
              <label
                className={`absolute left-10 top-3 text-slate-500 bg-white px-1 transition-all duration-200 ${formData.email
                  ? "top-[-10px] text-sm text-[#0078D7]"
                  : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
                  } peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#0078D7]`}
              >
                Email Address
              </label>
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Message Field */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-[#0078D7]" />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`peer w-full pl-10 border-b-2 bg-transparent py-3 text-slate-800 focus:outline-none focus:border-[#0078D7] ${errors.message ? "border-red-500" : "border-slate-300"
                  }`}
              ></textarea>
              <label
                className={`absolute left-10 top-3 text-slate-500 bg-white px-1 transition-all duration-200 ${formData.message
                  ? "top-[-10px] text-sm text-[#0078D7]"
                  : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
                  } peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#0078D7]`}
              >
                Your Message
              </label>
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>

            {/* Anti-Robot Field */}
            <div className="relative">
              <Shield className="absolute left-3 top-4 text-[#0078D7]" />
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                placeholder={
                  captchaNumbers ? `What is ${captchaNumbers.a} + ${captchaNumbers.b}?` : "Loading..."
                }
                className={`peer w-full pl-10 border-b-2 bg-transparent py-3 text-slate-800 focus:outline-none focus:border-[#0078D7] ${errors.captcha ? "border-red-500" : "border-slate-300"
                  }`}
              />
              {errors.captcha && <p className="text-sm text-red-500 mt-1">{errors.captcha}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 w-full bg-[#0078D7] text-white py-3 rounded-full mt-4 transition-all duration-300 shadow-md hover:shadow-lg ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#005fb0]"
                }`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Send Message
                </>
              )}
            </button>

          </div>
        )}
      </motion.form>
    </section>
  );
}
