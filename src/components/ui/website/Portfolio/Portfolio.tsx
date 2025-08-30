"use client";

import projects from "@/data/projects.json";
import Image from "next/image";
import React, { useState } from "react";
import { FaBehance, FaDribbble, FaFigma } from "react-icons/fa";

// Figma Icon Component
const FigmaIcon = ({ className = "" }) => <FaFigma className={className} />;

// Behance Icon Component
const BehanceIcon = ({ className = "" }) => <FaBehance className={className} />;

// Dribble Icon Component
const DribbleIcon = ({ className = "" }) => (
  <FaDribbble className={className} />
);

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
  // console.log(projectsData);

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  // Pagination logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ behavior: "smooth" });
  };

  const handleLinkClick = (
    url: string,
    linkType: string,
    projectTitle: string
  ) => {
    // Analytics tracking could be added here
    console.log(`Opening ${linkType} for ${projectTitle}: ${url}`);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="portfolio"
      className="min-h-screen bg-[#161618] text-white py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Portfolio Title */}
        <h1 className="text-5xl font-bold text-center mb-12">Portfolio</h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentPage(1);
              }}
              className={`px-6 md:py-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              aria-label={`Filter by ${filter}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects?.map((project) => (
            <article
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              role="article"
              aria-labelledby={`project-${project.id}-title`}
            >
              {/* Project Image */}
              <div className="relative">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  width={503530}
                  height={7350340}
                  className="w-full h-80 object-cover"
                  priority={filteredProjects.indexOf(project) < 3} // Prioritize first 3 images
                />

                {/* Overlay with Icons - appears on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {/* Figma Link */}
                    <button
                      onClick={() =>
                        handleLinkClick(
                          project.links.figma,
                          "Figma",
                          project.title
                        )
                      }
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] transition-all duration-200 hover:scale-110"
                      aria-label={`View ${project.title} on Figma`}
                      title="View on Figma"
                    >
                      <FigmaIcon className="w-6 h-6 text-white" />
                    </button>

                    {/* Behance Link */}
                    <button
                      onClick={() =>
                        handleLinkClick(
                          project.links.behance,
                          "Behance",
                          project.title
                        )
                      }
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] transition-all duration-200 hover:scale-110"
                      aria-label={`View ${project.title} on Behance`}
                      title="View on Behance"
                    >
                      <BehanceIcon className="w-6 h-6 text-white" />
                    </button>

                    {/* External Link */}
                    <button
                      onClick={() =>
                        handleLinkClick(
                          project.links.external,
                          "External",
                          project.title
                        )
                      }
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] transition-all duration-200 hover:scale-110"
                      aria-label={`Visit ${project.title} website`}
                      title="View on Dribble"
                    >
                      <DribbleIcon className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info - slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 via-gray-800/90 to-transparent opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <h2
                  id={`project-${project.id}-title`}
                  className="text-2xl font-bold mb-2"
                >
                  {project.title}
                </h2>
                <p className="text-gray-200 mb-2 font-medium">
                  {project.subtitle}
                </p>
                {project.description && (
                  <p className="text-gray-300 text-sm line-clamp-1 leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>

              {/* Subtle gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {filteredProjects.length > itemsPerPage && (
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  currentPage === page
                    ? "bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] text-white shadow-md"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
