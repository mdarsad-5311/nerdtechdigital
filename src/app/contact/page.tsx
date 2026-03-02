"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="pt-16 bg-white">
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left - Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-black mb-8">
                                Let&apos;s <span className="text-blue-500">Talk</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                                Have a project in mind? We&apos;d love to hear about it. Drop us a message and we&apos;ll get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Mail, label: "hello@nerdtech.in", href: "mailto:hello@nerdtech.in" },
                                    { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
                                    { icon: MapPin, label: "India", href: "#" },
                                ].map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="flex items-center gap-4 text-muted-foreground hover:text-blue-500 transition-colors"
                                    >
                                        <item.icon className="w-5 h-5 text-blue-500" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right - Form */}
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-6 p-8 rounded-2xl bg-gray-100 bg-card border border-gray-200"
                        >
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="you@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-400 transition-colors"
                            >
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </motion.form>
                    </div>
                </div>
            </section>
        </div>
    );
}
