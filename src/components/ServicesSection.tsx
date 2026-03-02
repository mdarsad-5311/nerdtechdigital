"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Fingerprint, Megaphone, BookOpen } from "lucide-react";

const services = [
    {
        icon: Target,
        title: "Strategy",
        description: "Clear direction that aligns your brand, product, and growth goals.",
    },
    {
        icon: Fingerprint,
        title: "Identity",
        description: "Strong brand identities designed to be remembered and trusted.",
    },
    {
        icon: Megaphone,
        title: "Social Media Marketing",
        description: "Campaigns built to generate leads, sales, and measurable growth.",
    },
    {
        icon: BookOpen,
        title: "Storytelling",
        description: "Stories crafted to build trust and emotional connection.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const ServicesSection = () => {
    return (
        <section id="services" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">
                        Our <span className="text-blue-500">Services</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        We design, build, and market digital products that drive real business growth. From high-converting websites to performance-driven marketing campaigns.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 mt-6 text-blue-500 font-medium hover:gap-3 transition-all"
                    >
                        Learn more <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            className="group p-8 rounded-2xl bg-gray-100 bg-card border-border hover:border-blue-500/30 hover:shadow-[var(--shadow-elevated)] transition-all duration-500 cursor-pointer"
                        >
                            <service.icon className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-lg font-display font-semibold text-black mb-3">
                                {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
