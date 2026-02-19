"use client";

import Link from "next/link";
import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import socialLinks from "@/data/socialLinks.json";
import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/lib/animationVariants";

const Links = socialLinks;

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Facebook: FaFacebook,
  LinkedIn: FaLinkedin,
  Behance: FaBehance,
  Dribble: FaDribbble,
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0c0d0f] relative overflow-hidden">
      {/* Top gradient border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FF8D5E]/50 to-transparent" />

      {/* Social Icons — above the name */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center gap-3 pt-20 mb-10 relative z-10"
      >
        {Links.map((item, index) => {
          const Icon = iconMap[item.name];
          if (!Icon) return null;
          return (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] hover:bg-gradient-to-br hover:from-[#FF8D5E]/15 hover:to-[#FF6B6B]/15 hover:border-[#FF8D5E]/30 transition-all duration-300"
              >
                <Icon
                  size={16}
                  className="text-gray-500 hover:text-white transition-colors"
                />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Giant name — full screen, no container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-12 w-full px-2"
      >
        <h2
          className="text-[clamp(3rem,16vw,15rem)] font-black text-center leading-none tracking-tighter select-none w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ASADUJJAMAN
        </h2>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0c0d0f] to-transparent pointer-events-none" />
      </motion.div>

      {/* Bottom bar: Copyright + Back to top */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 pb-8 border-t border-white/[0.04]">
          <span className="text-gray-600 text-xs order-2 sm:order-1">
            © {new Date().getFullYear()} Asadujjaman Mahfuz. All rights
            reserved.
          </span>

          <motion.button
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-500 text-xs font-medium hover:text-white hover:border-[#FF8D5E]/30 hover:bg-gradient-to-r hover:from-[#FF8D5E]/10 hover:to-[#FF6B6B]/10 transition-all duration-300 order-1 sm:order-2"
          >
            <FaArrowUp size={10} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
