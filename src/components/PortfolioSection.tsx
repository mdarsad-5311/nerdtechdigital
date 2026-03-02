"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="py-32 px-6 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">
                        Portfolio
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Real work for real brands — built to perform, convert, and scale in competitive digital environments.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {[
                        { title: "Brand Identity Redesign", tag: "Branding", color: "from-primary/20 to-primary/5" },
                        { title: "E-Commerce Platform", tag: "Web Development", color: "from-accent/20 to-accent/5" },
                        { title: "Social Media Campaign", tag: "Marketing", color: "from-primary/15 to-primary/5" },
                        { title: "Mobile App Design", tag: "UI/UX", color: "from-accent/15 to-accent/5" },
                    ].map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group relative aspect-4/3 rounded-2xl bg-linear-to-br ${project.color} border border-gray-200 overflow-hidden cursor-pointer hover:shadow-elevated transition-all duration-500`}
                        >
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <span className="text-xs font-medium uppercase tracking-[0.15em] text-black mb-2">
                                    {project.tag}
                                </span>
                                <h3 className="text-xl font-display font-semibold text-black group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-blue-400 font-medium hover:gap-3 transition-all"
                    >
                        View Work <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;
