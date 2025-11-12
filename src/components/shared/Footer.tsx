import Link from "next/link";
import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import socialLinks from "@/data/socialLinks.json";

const Links = socialLinks;

const Footer = () => {
  return (
    <div className="bg-[#161618] md:h-[400px]">
      <div className="container flex flex-col items-center justify-center text-white h-full">
        <div className="flex md:flex-row flex-col items-center md:gap-10 mt-5 text-xl">
          <div className="flex gap-2 items-center">
            <FaPhone size={24} />
            <h1>+8801953512253</h1>
          </div>
          <div className="flex gap-2 items-center">
            <IoIosMail size={34} />
            <h1>Mdasadujjaman101@gmail.com</h1>
          </div>
        </div>
        <h1 className="md:text-xl text-center text-lg w-[70%] my-5">
          You may also find me on these platforms!
        </h1>
        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-4 text-gray-200 my-3 sm:my-4 md:my-5 lg:my-5 justify-center lg:justify-start">
          {Links.map((item, index) => (
            <Link key={index} href={item.url}>
              <div className="border border-gray-500 p-1.5 sm:p-2 lg:p-2 rounded-full cursor-pointer">
                {item.name === "Facebook" && (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      size={20}
                      className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
                    />
                  </Link>
                )}
                {item.name === "LinkedIn" && (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={20}
                      className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
                    />
                  </Link>
                )}
                {item.name === "Behance" && (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaBehance
                      size={20}
                      className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
                    />
                  </Link>
                )}
                {item.name === "Dribble" && (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDribbble
                      size={20}
                      className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
                    />
                  </Link>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="md:flex items-center mt-10 md:mt-0 text-center justify-center bg-[#212428] text-white h-8 md:h-10">
        <h1>© All rights reserved by Asadujjaman Mahfuz</h1>
      </div>
    </div>
  );
};

export default Footer;
