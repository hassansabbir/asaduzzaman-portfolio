import profileImage from "../../../../assets/profileImage.png";
import backProfileText from "../../../../assets/Frame 427321449.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaBehance,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#212428] min-h-screen flex items-center overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2 text-white py-16 px-8 lg:px-16 flex flex-col justify-center">
          <p className="text-gray-300 mb-4 text-lg">Hello, I&apos;m</p>
          <h1 className="text-3xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
            Md. Asadujjaman Mahfuz
          </h1>
          <h2 className="text-4xl lg:text-6xl xl:text-6xl font-semibold mb-8">
            <span className="text-orange-500">UX/UI Designer</span>
          </h2>

          <div className="flex space-x-4 mb-8">
            <Link href="">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaInstagram />
              </div>
            </Link>
            <Link href="">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaFacebook />
              </div>
            </Link>
            <Link href="">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaDribbble />
              </div>
            </Link>
            <Link href="">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaLinkedin />
              </div>
            </Link>
            <Link href="">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaBehance />
              </div>
            </Link>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors w-fit">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download CV</span>
          </button>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start items-center py-16">
          <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 opacity-10 z-0">
            <Image
              src={backProfileText}
              alt="Background Text"
              width={602450}
              height={602450}
              className="w-[500px] h-[700px]"
            />
          </div>

          <div className="relative z-10 left-20">
            <div className="relative">
              <Image
                src={profileImage}
                alt="Md. Asadujjaman Mahfud - UX/UI Designer"
                width={5340240}
                height={62450240}
                className="w-[600px] lg:w-[600px] h-auto object-contain"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#212428] via-[#212428]/70 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
