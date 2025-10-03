"use client"
import React from "react";
import { motion } from "framer-motion";
import all_item from "../json/List.json";
import Card_Section2 from "./Card_Section2";

export default function Section2() {
  return (
    <motion.section
      className="px-4 sm:px-4 md:px-20"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-2xl md:text-4xl font-bold mb-1 text-center md:text-start">
        Everything you need to start a website
      </p>
      <p className="mb-20 text-center md:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
        consequuntur.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {all_item.map((item, index) => {
          return (
            <Card_Section2
              srcimg={item.srcimg}
              header={item.header}
              description={item.description}
              key={index}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
