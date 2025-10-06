"use client"
import React from "react";
import { motion } from "framer-motion";

export default function Section4() {
  return (
    <motion.section
      className="px-10 sm:px-20 md:px-36 mt-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full bg-black text-white p-5 sm:p-10 lg:p-20 py-20 rounded-xl flex items-center gap-10 flex-col">
        <h2 className="text-2xl md:text-4xl xl:text-6xl text-center">
          Build faster websites
        </h2>
        <p>
          Pull content from anywhere and serve it fast with Astro's next-gen
          island architecture
        </p>
        <button className="btn cursor-target">Get Started</button>
      </div>
    </motion.section>
  );
}
