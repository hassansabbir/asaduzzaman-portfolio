"use client";

import profileImage from "@/assets/profileImage.png";
import background from "@/assets/bannerBg.png";
import Image from "next/image";
import {
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
  slideInRight,
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
};

const Banner = () => {
  return (
    <div id="home" className="relative overflow-hidden">
      {/* Decorative gradient orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FF8D5E] to-[#FF6B6B] blur-[120px] pointer-events-none"
      />

      <div className="w-full max-w-7xl mx-auto flex items-center px-6 sm:px-8 justify-center flex-col lg:flex-row z-10 relative">
        {/* Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4"
        >
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mt-24 lg:mt-0">
            <motion.h3
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-400 font-light tracking-[0.2em] uppercase text-center lg:text-start"
            >
              Hello, I&apos;m
            </motion.h3>

            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center lg:text-start"
            >
              Md. Asadujjaman Mahfuz
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent text-center lg:text-start leading-tight"
            >
              UX/UI Designer
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-3 sm:gap-4 md:gap-4 lg:gap-4 text-gray-200 my-3 sm:my-4 md:my-5 lg:my-5 justify-center lg:justify-start"
            >
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
                      className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-[#FF8D5E]/40 hover:shadow-[0_0_15px_rgba(255,141,94,0.2)] transition-all duration-300"
                    >
                      <Icon size={18} className="sm:w-5 sm:h-5" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Download CV */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="https://drive.google.com/file/d/1QmCrEEA74ia8ys8BQXdN-7w7C-pqmCwY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r flex items-center gap-2 from-[#FF8D5E] to-[#FF6B6B] !text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 lg:py-3.5 lg:px-10 rounded-xl text-sm lg:text-lg font-semibold sm:text-base shadow-[0_4px_20px_rgba(255,107,107,0.3)] hover:shadow-[0_6px_30px_rgba(255,107,107,0.45)] transition-shadow duration-300"
              >
                <FaDownload /> Download CV
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="w-full mt-8 sm:mt-10 lg:w-1/2 lg:mt-0 flex items-center justify-center z-10"
        >
          <Image
            src={profileImage}
            alt="Profile Image"
            priority={true}
            width={5343400}
            height={53543400}
            className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] object-contain drop-shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#212428] via-[#212428]/50 to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-10 sm:top-20 md:top-40 lg:top-40 right-0 md:right-2 sm:right-4 lg:right-28 z-0 hidden md:block"
      >
        <Image
          src={background}
          alt="Background Decoration"
          width={5343400}
          height={53543400}
          className="w-[70px] sm:w-[100px] md:w-[250px] lg:w-[250px] object-contain opacity-60"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
