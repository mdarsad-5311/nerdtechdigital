"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Rocket, Heart } from "lucide-react";

const values = [
    { icon: Lightbulb, title: "Innovation First", description: "We push creative boundaries to deliver solutions that stand out in crowded markets." },
    { icon: Users, title: "Client Partnership", description: "Your success is our success. We collaborate closely at every stage of the journey." },
    { icon: Rocket, title: "Results Driven", description: "Every pixel and every campaign is optimized for measurable business outcomes." },
    { icon: Heart, title: "Passion & Craft", description: "We genuinely love what we do, and it shows in every detail of our work." },
];

export default function AboutPage() {
    return (
        <div className="pt-16 bg-white">
            {/* Hero */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-black mb-8">
                            Who <span className="text-blue-500">We Are</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            We&apos;re a team of strategists, designers, and marketers who believe that great brands aren&apos;t born — they&apos;re built. With intention, with clarity, and with craft.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At nerdtech Digital, we partner with ambitious businesses to create digital experiences that convert visitors into loyal customers. From brand strategy to performance marketing, we handle every touchpoint of your digital presence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6 bg-gray-100 bg-card">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-display font-bold text-black mb-16"
                    >
                        Our <span className="text-blue-500">Values</span>
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-white border border-gray-200"
                            >
                                <value.icon className="w-8 h-8 text-blue-400 mb-6" />
                                <h3 className="text-lg font-display font-semibold text-black mb-3">{value.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "50+", label: "Projects Delivered" },
                            { number: "30+", label: "Happy Clients" },
                            { number: "5+", label: "Years Experience" },
                            { number: "100%", label: "Client Retention" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-4xl md:text-5xl font-display font-bold text-blue-500 mb-2">{stat.number}</p>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
