"use client";

import figma from "../../../../assets/figma.png";
import adobeXD from "../../../../assets/adobe_XD.png";
import framerMotion from "../../../../assets/framer.png";
import illustrator from "../../../../assets/illustrator.png";
import photoshop from "../../../../assets/photoshop.png";
import maya from "../../../../assets/maya.png";
import unity from "../../../../assets/unity.png";
import premiere from "../../../../assets/premierePro.png";
import afterEffect from "../../../../assets/afterEffects.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animationVariants";

const Skills = () => {
  const skillsData = [
    { name: "Figma", image: figma },
    { name: "Adobe XD", image: adobeXD },
    { name: "Framer", image: framerMotion },
    { name: "Illustrator", image: illustrator },
    { name: "Photoshop", image: photoshop },
    { name: "Maya", image: maya },
    { name: "Unity", image: unity },
    { name: "Premiere Pro", image: premiere },
    { name: "After Effects", image: afterEffect },
  ];

  return (
    <div
      id="skills"
      className="bg-[#1e2024] w-full flex items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl mx-auto text-center">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            <span className="bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent">
              Working
            </span>{" "}
            <span className="text-white">Skills</span>
          </h2>
          {/* Decorative underline bar */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] rounded-full mb-6 mx-auto" />

          <p className="text-gray-400 text-base md:text-lg mb-16 max-w-md mx-auto">
            The skills, tools and technologies I am really good at.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap max-w-5xl mx-auto justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-12"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{
                scale: 1.08,
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className="group relative"
            >
              {/* Gradient border wrapper */}
              <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-[#FF8D5E]/50 hover:to-[#FF6B6B]/50 transition-all duration-300">
                <div className="flex flex-col items-center space-y-3 sm:space-y-4 bg-[#1e2024] p-4 sm:p-5 w-[110px] sm:w-[130px] rounded-xl">
                  {/* Gradient accent dot */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-10 h-10 md:w-14 md:h-14 lg:w-14 lg:h-14 flex items-center justify-center">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-gray-400 text-xs md:text-sm lg:text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-[#FF8D5E] group-hover:to-[#FF6B6B] group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FF8D5E]/0 to-[#FF6B6B]/0 group-hover:from-[#FF8D5E]/5 group-hover:to-[#FF6B6B]/5 blur-xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
