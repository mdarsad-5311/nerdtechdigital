"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-16 overflow-hidden bg-white">
        {/* Background decorative element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.06] pointer-events-none select-none">
          <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
            <path
              fill="currentColor"
              d="M40,-62.6C52.1,-55.5,62.5,-44.7,69.5,-31.8C76.5,-18.9,80.1,-3.9,77.3,9.8C74.5,23.5,65.3,35.9,54.3,45.8C43.3,55.7,30.5,63.1,16.1,67.7C1.7,72.3,-14.3,74.1,-28.9,70.1C-43.5,66.1,-56.7,56.3,-65.1,43.5C-73.5,30.7,-77.1,15.3,-76.4,0.4C-75.7,-14.6,-70.7,-29.1,-61.5,-39.8C-52.3,-50.5,-38.9,-57.4,-25.7,-63.9C-12.5,-70.4,0.5,-76.5,13.3,-74.4C26.1,-72.3,27.9,-69.7,40,-62.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold text-blue-500 leading-[0.95] tracking-tight">
              The loud voice
              <br />
              <span className="text-blue-500">of your brand</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-12"
          >
            <p className="text-lg text-muted-foreground">
              Turn clicks into customers.
            </p>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-black font-medium border-b-2 border-black pb-1 hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
            >
              Explore
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white backdrop-blur-sm"
        >
          <div className="overflow-hidden py-4">
            <div className="animate-marquee flex whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 mx-4">
                  {[
                    "Brand Strategy",
                    "Website Design",
                    "UI / UX",
                    "Social Media Marketing",
                    "Performance Ads",
                    "Content & Storytelling",
                  ].map((item) => (
                    <span
                      key={`${i}-${item}`}
                      className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-8"
                    >
                      {item}
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      <ServicesSection />
      <PortfolioSection />
    </>
  );
};

export default HeroSection;
