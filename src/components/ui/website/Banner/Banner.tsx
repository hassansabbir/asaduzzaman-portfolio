"use client";

import profileImage from "@/assets/profileImage.png";
import background from "@/assets/bannerBg.png";
import Image from "next/image";
import {
  FaArrowRight,
  FaBehance,
  FaDownload,
  FaDribbble,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import socialLinks from "@/data/socialLinks.json";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "@/lib/animationVariants";

const Links = socialLinks;

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Facebook: FaFacebook,
  LinkedIn: FaLinkedin,
  Behance: FaBehance,
  Dribble: FaDribbble,
  Dribbble: FaDribbble,
};

const Banner = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#212428] pt-24 sm:pt-28 lg:pt-20 pb-4 sm:pb-6"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient glowing gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 -translate-x-1/3 -translate-y-1/3 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full bg-gradient-to-br from-[#FF8D5E] to-[#FF6B6B] blur-[130px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.16, scale: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#FF8D5E] via-[#FF6B6B]/60 to-transparent blur-[140px] pointer-events-none"
      />
      <div className="absolute -bottom-10 right-0 w-[300px] h-[300px] rounded-full bg-[#54A7C3]/8 blur-[120px] pointer-events-none" />

      {/* Atmospheric watermark typography background */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.18, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute right-4 sm:right-8 lg:right-12 xl:right-16 top-20 sm:top-24 lg:top-24 h-[60%] sm:h-[65%] lg:h-[70%] max-h-[calc(100vh-200px)] w-auto select-none pointer-events-none z-0 hidden lg:block"
      >
        <Image
          src={background}
          alt="Watermark Typography"
          priority={false}
          className="h-full w-auto object-contain brightness-125"
        />
      </motion.div>

      {/* Main Hero Content Area - Vertically Centered */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex items-center justify-center relative z-10 my-auto py-4 sm:py-6 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center w-full">
          {/* Left Column: Typography, Pitch & Actions */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-5"
          >
            {/* Title / Name Header */}
            <div className="space-y-1.5 sm:space-y-2.5 w-full">
              <motion.p
                variants={fadeInUp}
                className="text-xs sm:text-sm md:text-base text-gray-400 font-medium tracking-[0.25em] uppercase"
              >
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white font-extrabold tracking-tight leading-[1.15]"
              >
                Md. Asadujjaman Mahfuz
              </motion.h1>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black bg-gradient-to-r from-[#FF8D5E] via-[#FF7A59] to-[#FF6B6B] bg-clip-text text-transparent leading-[1.1] tracking-tight pb-1"
              >
                UX/UI Designer
              </motion.h2>
            </div>

            {/* Concise Value Proposition / Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-normal"
            >
              Crafting intuitive, human-centered digital experiences and scalable design systems that transform complex ideas into impactful, elegant products.
            </motion.p>

            {/* Action Buttons (CTAs) */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-1"
            >
              {/* Primary CTA - Explore Work */}
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="#portfolio"
                  className="bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold shadow-[0_4px_25px_rgba(255,107,107,0.35)] hover:shadow-[0_6px_30px_rgba(255,107,107,0.5)] transition-all duration-300 flex items-center gap-2.5 group"
                >
                  <span>Explore Work</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>

              {/* Secondary CTA - Download CV */}
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                href="/resume.pdf"
                download="Md Asadujjaman Mahfuz Resume for UIUX Designer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff" }}
                className="bg-white/[0.05] hover:bg-white/[0.1] !text-white border border-white/15 hover:border-[#FF8D5E]/40 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 shadow-sm"
              >
                <FaDownload className="text-xs text-[#FF8D5E]" />
                <span className="!text-white">Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2.5 sm:gap-3 pt-2 justify-center lg:justify-start"
            >
              <span className="text-xs uppercase tracking-wider text-gray-500 font-medium hidden sm:inline-block mr-1">
                Follow:
              </span>
              {Links.map((item, index) => {
                const Icon = iconMap[item.name];
                if (!Icon) return null;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                      aria-label={item.name}
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#FF8D5E]/40 hover:shadow-[0_0_15px_rgba(255,141,94,0.25)] transition-all duration-300"
                    >
                      <Icon size={16} />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Micro Highlights Strip */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-white/[0.08] w-full max-w-md lg:max-w-lg"
            >
              <div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">
                  3+
                </span>
                <span className="text-[11px] sm:text-xs text-gray-400 block font-medium">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">
                  50+
                </span>
                <span className="text-[11px] sm:text-xs text-gray-400 block font-medium">
                  Projects Done
                </span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent block">
                  30+
                </span>
                <span className="text-[11px] sm:text-xs text-gray-400 block font-medium">
                  Happy Clients
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Stage with Profile Image & Floating Badges */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="w-full lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0"
          >
            {/* Visual stage container */}
            <div className="relative w-[300px] sm:w-[380px] md:w-[420px] lg:w-[460px] xl:w-[500px] flex items-center justify-center">
              {/* Outer decorative orbit ring */}
              <div className="absolute inset-0 m-auto w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full border border-white/[0.07] pointer-events-none" />

              {/* Inner dashed glowing orbit */}
              <div className="absolute inset-0 m-auto w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] lg:w-[370px] lg:h-[370px] rounded-full border border-dashed border-[#FF8D5E]/20 pointer-events-none" />

              {/* Ambient backdrop glow */}
              <div className="absolute inset-0 m-auto w-[250px] h-[250px] sm:w-[330px] sm:h-[330px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-tr from-[#FF8D5E]/25 via-[#FF6B6B]/15 to-transparent blur-3xl pointer-events-none" />

              {/* Profile Image with subtle floating animation */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 w-full flex justify-center items-end"
              >
                <div
                  className="relative w-[260px] sm:w-[330px] md:w-[370px] lg:w-[420px] xl:w-[460px]"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 98%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 98%)",
                  }}
                >
                  <Image
                    src={profileImage}
                    alt="Md. Asadujjaman Mahfuz - UX/UI Designer"
                    priority={true}
                    width={900}
                    height={1000}
                    className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
                  />
                </div>
              </motion.div>


              {/* Floating Badge 2: Bottom-Right Experience */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-12 -right-2 sm:right-2 lg:-right-4 bg-[#1a1d21]/90 backdrop-blur-md border border-white/10 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex items-center gap-3 z-20 pointer-events-none"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FF8D5E] to-[#FF6B6B] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,107,107,0.4)]">
                  <span className="text-xs sm:text-sm font-black">3+</span>
                </div>
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    Years Experience
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-medium block">
                    Crafting Products
                  </span>
                </div>
              </motion.div>

              {/* Floating Pill: Bottom-Left Tools */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.4 }}
                className="hidden sm:flex absolute bottom-4 left-6 bg-[#1a1d21]/85 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 items-center gap-2 shadow-lg z-20 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-gray-300">
                  Figma • Framer • XD
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator to encourage down-scroll */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="w-full flex justify-center pt-2 pb-2 z-10"
      >
        <Link
          href="#about"
          aria-label="Scroll down to About section"
          className="group flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400 group-hover:text-[#FF8D5E] transition-colors">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-[#FF8D5E]/60 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#FF8D5E] to-[#FF6B6B]"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Banner;
