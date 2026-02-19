"use client";

import profileImage from "../../../../assets/asadProfile.png";
import Image from "next/image";
import {
  FaDownload,
  FaPalette,
  FaCube,
  FaPenNib,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  scaleIn,
} from "@/lib/animationVariants";

const services = [
  {
    icon: FaPalette,
    title: "UX/UI Design",
    description: "Creating intuitive and visually compelling interfaces",
  },
  {
    icon: FaPenNib,
    title: "Graphic Design",
    description: "Crafting stunning visual identities and brand assets",
  },
  {
    icon: FaCube,
    title: "3D Animation",
    description: "Bringing ideas to life with immersive 3D visuals",
  },
  {
    icon: FaHeadset,
    title: "Back-Office Service",
    description: "Professional support for seamless operations",
  },
];

const stats = [
  { value: "50+", label: "Projects Done" },
  { value: "3+", label: "Years Experience" },
  { value: "30+", label: "Happy Clients" },
];

const About = () => {
  return (
    <div id="about" className="bg-[#1a1d21] w-full relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF8D5E]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF6B6B]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Main content */}
      <div className="w-full max-w-7xl mx-auto py-24 px-6 sm:px-8 lg:px-8 relative z-10">
        {/* Section Header — centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-[#FF8D5E] text-sm font-semibold tracking-[0.3em] uppercase mb-3 block">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            About{" "}
            <span className="bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Two-column: Image + Bio */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          {/* Profile Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <div className="relative group">
              {/* Animated glow ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[#FF8D5E]/30 to-[#FF6B6B]/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

              {/* Image card */}
              <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-[#FF8D5E] to-[#FF6B6B]">
                <div className="rounded-3xl bg-[#1a1c1e] overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="Md. Asadujjaman Mahfuz"
                    width={600}
                    height={700}
                    className="w-[320px] h-[380px] sm:w-[360px] sm:h-[420px] md:w-[420px] md:h-[500px] object-cover object-top"
                    priority
                  />
                  {/* Bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1a1c1e] to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-5 -right-5 sm:-right-8 bg-gradient-to-br from-[#FF8D5E] to-[#FF6B6B] rounded-2xl p-4 sm:p-5 shadow-[0_8px_30px_rgba(255,107,107,0.4)]"
              >
                <div className="text-white text-center">
                  <span className="text-2xl sm:text-3xl font-bold block leading-none">
                    3+
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider opacity-90">
                    Years Exp.
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-7/12 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              Md. Asadujjaman Mahfuz
            </h3>
            <p className="text-[#FF8D5E] font-medium mb-6 text-lg">
              Senior UX/UI Designer
            </p>

            <p className="text-gray-400 text-base md:text-[17px] leading-[1.8] mb-8">
              I&apos;m a UX/UI designer dedicated to designing meaningful
              digital experiences that connect individuals with technology in
              considerate, intuitive ways. I look beyond appearance, focusing on
              purpose, usability, and emotion to turn complex issues into
              seamless, human-centered solutions.
            </p>
            <p className="text-gray-400 text-base md:text-[17px] leading-[1.8] mb-10">
              Every interface I build begins with empathy and is guided by
              research, strategy, and collaboration. I don&apos;t just create
              products — I create intuitive experiences, solve real problems,
              and provide lasting value.
            </p>

            {/* Stats row */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-6 sm:gap-10 mb-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="text-center sm:text-left"
                >
                  <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent block">
                    {stat.value}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Download CV */}
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/file/d/1QmCrEEA74ia8ys8BQXdN-7w7C-pqmCwY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] text-white px-7 py-3.5 rounded-xl font-semibold shadow-[0_4px_20px_rgba(255,107,107,0.3)] hover:shadow-[0_6px_30px_rgba(255,107,107,0.5)] transition-shadow duration-300"
            >
              <FaDownload />
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Services / Key Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
          >
            What I{" "}
            <span className="bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent">
              Do
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{
                    y: -6,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="group relative"
                >
                  {/* Gradient border */}
                  <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-[#FF8D5E]/50 group-hover:to-[#FF6B6B]/50 transition-all duration-500">
                    <div className="bg-[#1a1c1e] rounded-2xl p-6 h-full text-center relative overflow-hidden">
                      {/* Top accent line */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Icon */}
                      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#FF8D5E]/10 to-[#FF6B6B]/10 flex items-center justify-center group-hover:from-[#FF8D5E]/20 group-hover:to-[#FF6B6B]/20 transition-all duration-300">
                        <Icon className="text-[#FF8D5E] text-xl group-hover:text-[#FF6B6B] transition-colors duration-300" />
                      </div>

                      <h4 className="text-white font-semibold text-base mb-2 group-hover:bg-gradient-to-r group-hover:from-[#FF8D5E] group-hover:to-[#FF6B6B] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF8D5E]/0 to-[#FF6B6B]/0 group-hover:from-[#FF8D5E]/5 group-hover:to-[#FF6B6B]/5 blur-xl transition-all duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
