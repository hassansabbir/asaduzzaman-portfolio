"use client";

import projects from "@/data/projects.json";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaBehance,
  FaDribbble,
  FaFigma,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animationVariants";

const linkButtons = [
  { key: "figma" as const, icon: FaFigma, label: "Figma" },
  { key: "behance" as const, icon: FaBehance, label: "Behance" },
  { key: "external" as const, icon: FaDribbble, label: "Dribble" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filters = [
    "All",
    "Website Design",
    "Mobile App Design",
    "Game Design",
    "3D",
  ];

  const projectsData = projects;

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="portfolio"
      className="min-h-screen bg-[#161618] text-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FF8D5E]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#FF6B6B]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto py-24 px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <span className="text-[#FF8D5E] text-sm font-semibold tracking-[0.3em] uppercase mb-3 block">
            My Recent Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] rounded-full mx-auto mb-5" />
          <p className="text-gray-500 max-w-lg mx-auto text-base">
            A curated collection of my design work across web, mobile, gaming,
            and 3D
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-2.5 mb-14"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentPage(1);
              }}
              className={`px-5 md:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] text-white shadow-[0_4px_20px_rgba(255,107,107,0.3)]"
                  : "bg-white/[0.03] text-gray-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.06] hover:border-white/15"
              }`}
              aria-label={`Filter by ${filter}`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {paginatedProjects?.map((project) => (
              <motion.article
                key={`${activeFilter}-${project.id}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group"
                role="article"
                aria-labelledby={`project-${project.id}-title`}
              >
                {/* Card with gradient border */}
                <div className="h-full p-[1px] rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] group-hover:from-[#FF8D5E]/40 group-hover:to-[#FF6B6B]/30 transition-all duration-500">
                  <div className="h-full flex flex-col bg-[#1c1e22] rounded-2xl overflow-hidden">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.subtitle}`}
                        width={600}
                        height={400}
                        className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority={filteredProjects.indexOf(project) < 3}
                      />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-md text-white/90 rounded-full border border-white/10">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover overlay with action buttons */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
                        <div className="flex items-center gap-3 translate-y-5 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                          {linkButtons.map((btn) => {
                            const Icon = btn.icon;
                            return (
                              <motion.button
                                key={btn.key}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                  handleLinkClick(project.links[btn.key])
                                }
                                className="w-11 h-11 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/15 hover:bg-gradient-to-br hover:from-[#FF8D5E] hover:to-[#FF6B6B] hover:border-transparent transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,141,94,0.35)]"
                                aria-label={`View ${project.title} on ${btn.label}`}
                                title={`View on ${btn.label}`}
                              >
                                <Icon className="w-[18px] h-[18px] text-white" />
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-5 relative flex-1 flex flex-col">
                      {/* Gradient accent line */}
                      <div className="absolute top-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h2
                            id={`project-${project.id}-title`}
                            className="text-lg font-bold text-white mb-1 truncate group-hover:bg-gradient-to-r group-hover:from-[#FF8D5E] group-hover:to-[#FF6B6B] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                          >
                            {project.title}
                          </h2>
                          <p className="text-gray-500 text-sm font-medium">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Quick external link */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            handleLinkClick(project.links.external)
                          }
                          className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] hover:bg-gradient-to-br hover:from-[#FF8D5E]/20 hover:to-[#FF6B6B]/20 hover:border-[#FF8D5E]/30 transition-all duration-300 mt-0.5"
                          aria-label={`Visit ${project.title}`}
                        >
                          <FaExternalLinkAlt className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#FF8D5E] transition-colors duration-300" />
                        </motion.button>
                      </div>

                      {project.description && (
                        <p className="text-gray-600 text-sm mt-2 line-clamp-1">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {filteredProjects.length > itemsPerPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center mt-14 gap-2"
          >
            {/* Previous button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <FaChevronLeft className="w-3 h-3" />
            </motion.button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-xl font-medium text-sm transition-all ${
                  currentPage === page
                    ? "bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] text-white shadow-[0_4px_15px_rgba(255,107,107,0.3)]"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {page}
              </motion.button>
            ))}

            {/* Next button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <FaChevronRight className="w-3 h-3" />
            </motion.button>
          </motion.div>
        )}

        {/* No results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <p className="text-gray-400 text-lg font-medium mb-1">
              No projects found
            </p>
            <p className="text-gray-600 text-sm">
              Try selecting a different category
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
