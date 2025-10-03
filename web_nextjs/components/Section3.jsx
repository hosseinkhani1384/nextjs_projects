"use client"
import React from "react";
import { motion } from "framer-motion";
import allimg from "../json/img_section3.json";

export default function Section3() {
  return (
    <motion.section
      className="px-10 sm:px-20 md:px-36 lg:px-48"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-center font-medium">Works with your technologies</p>
      <div className="flex justify-evenly mt-10">
        {allimg.map((data, index) => {
          return (
            <img
              src={data.srcimg}
              alt=""
              className="hover:scale-125 active:scale-125 transition-all"
              key={index}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
