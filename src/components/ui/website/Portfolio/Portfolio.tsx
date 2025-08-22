"use client";

import image1 from "@/assets/carebox.png";
import image2 from "@/assets/inventory.png";
import image3 from "@/assets/dokterForYou.png";

import Image from "next/image";
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

// Figma Icon Component
const FigmaIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.02-3.019-3.02h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51c-1.677 0-3.043 1.355-3.043 3.02s1.366 3.02 3.043 3.02c1.677 0 3.043-1.355 3.043-3.02V16.49H8.148zm7.704 0c-.001-2.476 2.013-4.49 4.489-4.49s4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49-4.49-2.014-4.489-4.49zm4.49-3.02c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02 3.019-1.355 3.019-3.02-1.355-3.02-3.019-3.02z" />
  </svg>
);

// Behance Icon Component
const BehanceIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 7v10c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H2c-1.1 0-2 .9-2 2zm22-2v14H2V5h20z" />
    <path d="M9.5 9.5c0-.6-.4-1-1-1H3v7h5.5c.6 0 1-.4 1-1v-5zm-1 4H4.5v-3H8v3h.5zM15 9.5c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1v-5zm5.5-1h-3v1h3v-1zm0 2h-3v1h3v-1z" />
  </svg>
);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Website Design",
    "Mobile App Design",
    "Game Design",
    "3D",
  ];

  const projects = [
    {
      id: 1,
      title: "CareBox",
      subtitle: "A Social Impact UX CASE STUDY",
      description: "to Share, Donate & Resell Essentials",
      category: "Mobile App Design",
      logo: "CareBox",
      image: image1,
      type: "mobile",
      links: {
        figma: "https://figma.com/carebox",
        behance: "https://behance.net/carebox",
        external: "https://carebox.com",
      },
    },
    {
      id: 2,
      title: "Inventory",
      subtitle: "Management App",
      description: "",
      category: "Mobile App Design",
      logo: "demo",
      image: image2,
      type: "mobile-dark",
      links: {
        figma: "https://figma.com/inventory",
        behance: "https://behance.net/inventory",
        external: "https://inventory-app.com",
      },
    },
    {
      id: 3,
      title: "Dokter For You",
      subtitle: "Health & Medical",
      description: "INTERNATIONAL E-HEALTH PLATFORM",
      category: "Website Design",
      logo: "Dokter For You",
      image: image3,
      type: "website",
      links: {
        figma: "https://figma.com/dokterforyou",
        behance: "https://behance.net/dokterforyou",
        external: "https://dokterforyou.com",
      },
    },
    {
      id: 4,
      title: "EcoShop",
      subtitle: "E-commerce Platform",
      description: "Sustainable Shopping Experience",
      category: "Website Design",
      logo: "EcoShop",
      image: image1,
      type: "website",
      links: {
        figma: "https://figma.com/ecoshop",
        behance: "https://behance.net/ecoshop",
        external: "https://ecoshop.com",
      },
    },
    {
      id: 5,
      title: "MindSpace",
      subtitle: "Mental Health App",
      description:
        "Meditation & Wellness Tracking | Health & Medical | Mobile App Design | UX/UI Design | 3D Animation | Graphic Design | Professional Back-Office Service | UI/UX Design | 3D Animation | Graphic Design | Professional Back-Office Service |",
      category: "Mobile App Design",
      logo: "MindSpace",
      image: image2,
      type: "mobile",
      links: {
        figma: "https://figma.com/mindspace",
        behance: "https://behance.net/mindspace",
        external: "https://mindspace-app.com",
      },
    },
    {
      id: 6,
      title: "Dragon Quest",
      subtitle: "Fantasy RPG",
      description: "Epic Adventure Gaming Experience",
      category: "Game Design",
      logo: "Dragon Quest",
      image: image3,
      type: "game",
      links: {
        figma: "https://figma.com/dragonquest",
        behance: "https://behance.net/dragonquest",
        external: "https://dragonquest-game.com",
      },
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
      className="min-h-screen bg-gray-900 text-white py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Portfolio Title */}
        <h1 className="text-5xl font-bold text-center mb-12">Portfolio</h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
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
          {filteredProjects?.map((project) => (
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
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
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
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
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
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                      aria-label={`Visit ${project.title} website`}
                      title="Visit Website"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
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
