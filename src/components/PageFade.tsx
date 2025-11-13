// src/components/PageFade.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function PageFade({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== "undefined" ? location.pathname : "server"}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="min-h-[70vh]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}