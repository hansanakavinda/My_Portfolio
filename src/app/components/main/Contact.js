"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, MapPin } from "lucide-react";

// Floating Input Component
const FloatingInput = ({ label, type, name, value, onChange, required = false, isTextArea = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  const animationProps = {
    animate: {
      top: isFocused || hasValue ? -10 : 12,
      fontSize: isFocused || hasValue ? 12 : 16,
      color: isFocused ? "#a855f7" : "#9ca3af",
    },
    transition: { duration: 0.2 },
  };

  return (
    <div className="relative mb-6">
      <motion.label
        className="absolute left-4 px-1 bg-[#150a26] z-10 pointer-events-none"
        {...animationProps}
      >
        {label}
      </motion.label>
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={`w-full px-4 py-3 bg-white/5 border rounded-lg outline-none transition-colors duration-300 min-h-[120px] ${isFocused ? "border-purple-500" : "border-white/10"
            }`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={`w-full px-4 py-3 bg-white/5 border rounded-lg outline-none transition-colors duration-300 ${isFocused ? "border-purple-500" : "border-white/10"
            }`}
        />
      )}
    </div>
  );
};

const SocialCard = ({ href, icon: Icon, label, subLabel, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
  >
    <div className={`p-3 rounded-full bg-white/5 ${color} group-hover:text-white transition-colors`}>
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors">{label}</h3>
      <p className="text-xs text-gray-400">{subLabel}</p>
    </div>
  </a>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-5 relative z-10"
    >
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact Info & Socials */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Connect with me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SocialCard
                href="mailto:contact@example.com"
                icon={Mail}
                label="Email"
                subLabel="contact@example.com"
                color="text-red-400"
              />
              <SocialCard
                href="https://linkedin.com/in/"
                icon={Linkedin}
                label="LinkedIn"
                subLabel="Connect professionally"
                color="text-blue-500"
              />
              <SocialCard
                href="https://github.com/hansanakavinda"
                icon={Github}
                label="GitHub"
                subLabel="Check my code"
                color="text-white"
              />
              <SocialCard
                href="https://twitter.com"
                icon={Twitter}
                label="Twitter"
                subLabel="Follow for updates"
                color="text-blue-400"
              />
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/5 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full text-purple-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Location</h3>
                  <p className="text-gray-300">Colombo, Sri Lanka</p>
                  <p className="text-gray-400 text-sm mt-1">Open to remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
            <form onSubmit={handleSubmit}>
              <FloatingInput
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FloatingInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FloatingInput
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                isTextArea
              />

              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && (
                <div className="p-4 mb-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                  Message sent successfully!
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </motion.section>
  );
}