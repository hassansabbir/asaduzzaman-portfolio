import profileImage from "@/assets/profileImage.png";
import background from "@/assets/Frame 427321449.png";
import Image from "next/image";
import { FaBehance, FaDribbble, FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  return (
    <div id="home" className="relative">
      <div className="w-full flex items-center justify-center flex-col lg:flex-row">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:w-1/2 lg:px-0 flex flex-col items-center gap-4">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mt-20 md:mt-0">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white md:text-start lg:text-start text-center">
              Hello, I&apos;m
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white md:text-start lg:text-start text-center">
              Md. Asadujjaman Mahfuz
            </h1>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold  bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent md:text-start lg:text-start text-center leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]">
              UX/UI Designer
            </p>

            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-4 text-gray-200 my-3 sm:my-4 md:my-5 lg:my-5 justify-center lg:justify-start">
              <Link href="">
                <div className="border border-gray-500 p-1.5 sm:p-2 lg:p-2 rounded-full cursor-pointer">
                  <FaLinkedin
                    size={20}
                    className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
                  />
                </div>
              </Link>
              <Link href="">
                <div className="border border-gray-500 p-1.5 sm:p-2 lg:p-2 rounded-full cursor-pointer">
                  <FaFacebook
                    size={20}
                    className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
                  />
                </div>
              </Link>
              <Link href="">
                <div className="border border-gray-500 p-1.5 sm:p-2 lg:p-2 rounded-full cursor-pointer">
                  <FaDribbble
                    size={20}
                    className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
                  />
                </div>
              </Link>
              <Link href="">
                <div className="border border-gray-500 p-1.5 sm:p-2 lg:p-2 rounded-full cursor-pointer">
                  <FaBehance
                    size={20}
                    className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
                  />
                </div>
              </Link>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] hover:from-[#FF6B6B] hover:to-[#FF8D5E] text-white px-4 sm:px-5 md:px-6 lg:px-6 py-1.5 sm:py-2 lg:py-2 rounded-full text-sm sm:text-base">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="hidden w-full mt-6 sm:mt-8 md:mt-10 lg:w-1/2 lg:mt-0 md:flex items-center justify-center z-10 lg:ms-60">
          <Image
            src={profileImage}
            alt="Profile Image"
            width={5343400}
            height={53543400}
            className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[700px] lg:h-[700px] object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#212428] via-[#212428]/70 to-transparent pointer-events-none"></div>
        </div>
      </div>
      <div className="absolute top-10 sm:top-20 md:top-40 lg:top-60 right-2 sm:right-4 lg:right-0">
        <Image
          src={background}
          alt="Profile Image"
          width={5343400}
          height={53543400}
          className="w-[60px] sm:w-[100px] md:w-[150px] lg:w-[200px] object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
