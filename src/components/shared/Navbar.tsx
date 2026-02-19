"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import NavItems from "./NavItems";
import MobileDrawer from "./MobileDrawer";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full fixed top-0 z-50 flex justify-center pointer-events-none"
      >
        <nav
          className={`pointer-events-auto mt-4 mx-4 px-2 sm:px-3 h-[56px] flex items-center rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-[#111215]/70 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-white/[0.04] backdrop-blur-md border border-white/[0.06]"
          }`}
        >
          {/* Mobile menu button */}
          <div className="md:hidden px-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowDrawer(!showDrawer)}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] hover:border-[#FF8D5E]/30 transition-all duration-300"
            >
              <AiOutlineMenu className="text-white" size={16} />
            </motion.button>
          </div>

          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-1">
            <NavItems items={navItems} />
          </div>
        </nav>
      </motion.header>

      <MobileDrawer
        open={showDrawer}
        setOpen={setShowDrawer}
        items={navItems}
      />
    </>
  );
};

export default Navbar;
