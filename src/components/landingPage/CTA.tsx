
"use client";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cta, staticData } from "@/constants/data";

function CTA() {
  return (
    <section className="px-5 py-20 pb-32" id="contact">
      <motion.div
        className="mx-auto max-w-5xl rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-8 text-white shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-3xl font-bold">{cta.action_header}</h2>
        <p className="mb-6">{cta.action_copy}</p>
        <Button variant="secondary" size="lg" className="group">
          <span>{staticData.get}</span>
          <motion.span
            className="ml-2 inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <Rocket className="h-5 w-5" />
          </motion.span>
        </Button>
      </motion.div>
    </section>
  );
}

export default CTA;
