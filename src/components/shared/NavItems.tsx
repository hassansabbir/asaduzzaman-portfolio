/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

const NavItems = ({
  items,
  onClose,
}: {
  items: NavItem[];
  onClose?: () => void;
}) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => item.href.replace("#", ""));
      let current = sections[0];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <>
      {items.map((item, index) => {
        const sectionId = item.href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <Link
            key={index}
            href={item.href}
            onClick={onClose}
            className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 group"
          >
            {/* Active background pill */}
            {isActive && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] shadow-[0_2px_12px_rgba(255,107,107,0.3)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}

            <span
              className={`relative z-10 ${
                isActive ? "text-white" : "text-gray-400 group-hover:text-white"
              } transition-colors duration-300`}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </>
  );
};

export default NavItems;
