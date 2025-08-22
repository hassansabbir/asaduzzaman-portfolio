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

const Skills = () => {
  const skillsData = [
    { name: "Figma", image: figma },
    { name: "Figma", image: adobeXD },
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
      className="bg-[#212428] min-h-screen w-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent">
            Working
          </span>{" "}
          <span className="text-white">Skills</span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg mb-16 max-w-md mx-auto">
          The skills, tools and technologies I am really good at.
        </p>

        <div className="flex flex-wrap max-w-5xl md:max-w-5xl mx-auto justify-center items-center gap-16 md:gap-16 lg:gap-16">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex bg-[#282b30] border border-gray-800 cursor-pointer p-4 w-[140px] rounded-xl flex-col items-center space-y-4 group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain filter hover:brightness-110 transition-all duration-300"
                />
              </div>

              <h3 className="text-white text-sm md:text-base lg:text-lg font-medium group-hover:bg-gradient-to-r group-hover:from-[#FF8D5E] group-hover:to-[#FF6B6B] group-hover:bg-clip-text group-hover:text-transparent group-hover:transition-colors group-hover:duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
