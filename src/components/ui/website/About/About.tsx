import { IoDiamond } from "react-icons/io5";
import profileImage from "../../../../assets/asadProfile.png";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#212428] min-h-screen w-full flex items-center justify-center py-16 px-6 sm:px-8 lg:px-8"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[650px] lg:h-[650px] flex items-start justify-start">
              <Image
                src={profileImage}
                alt="Md. Asadujjaman Mahfud"
                width={5343400}
                height={53543400}
                className="object-contain w-[650px] h-[650px] mr-80"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#212428] via-[#212428]/70 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent">
              About
            </span>{" "}
            Me
          </h2>

          <p className="text-gray-200 text-justify text-base block md:text-lg leading-relaxed mb-12 max-w-2xl">
            I&apos;m a UX/UI designer dedicated to designing meaningful digital
            experiences that connect individuals with technology in considerate,
            intuitive ways. I look beyond appearance, focusing on purpose,
            usability, and emotion to turn complex issues into seamless, human
            centered solutions. For me, design is not aesthetics. Design is
            about intention. Every interface I build begins with empathy and is
            guided by research, strategy, and collaboration. In a constantly
            evolving era of bits and bytes, I design with curiosity, precision,
            and deep respect for the user. I don&apos;t just create products. I
            create intuitive experiences, solve real problems, and provide
            lasting value.
          </p>

          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
              Key Skills:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <IoDiamond />
                </div>
                <span className="text-gray-300 text-lg font-medium">
                  UX/UI Design
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <IoDiamond />
                </div>
                <span className="text-gray-300 text-lg font-medium">
                  Graphic Design
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <IoDiamond />
                </div>
                <span className="text-gray-300 text-lg font-medium">
                  3D Animation
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <IoDiamond />
                </div>
                <span className="text-gray-300 text-lg font-medium">
                  Professional Back-Office Service
                </span>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] hover:from-[#FF6B6B] hover:to-[#FF8D5E] text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
            <FaDownload />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
