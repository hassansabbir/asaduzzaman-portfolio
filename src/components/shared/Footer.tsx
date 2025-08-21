import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#161618] md:h-[400px]">
      <div className="container flex flex-col items-center justify-center text-white h-full">
        <div className="md:flex gap-10 mt-5 text-xl">
          <div className="flex gap-2 items-center">
            <FaPhone size={24} />
            <h1>01500000000</h1>
          </div>
          <div className="flex gap-2 items-center">
            <IoIosMail size={34} />
            <h1>mahmoodsabbir3087@gmail.com</h1>
          </div>
        </div>
        <h1 className="md:text-xl text-center text-lg w-[70%] my-5">
          You may also find me on these platforms!
        </h1>
        <div className="flex gap-5 items-center">
          <div className="border border-gray-500 p-2 rounded-full">
            <FaLinkedin className="text-3xl" />
          </div>
          <div className="border border-gray-500 p-2 rounded-full">
            <FaFacebookF className="text-3xl" />
          </div>
          <div className="border border-gray-500 p-2 rounded-full">
            <FaDribbble className="text-3xl" />
          </div>
          <div className="border border-gray-500 p-2 rounded-full">
            <FaBehance className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="md:flex items-center mt-10 md:mt-0 text-center justify-center bg-[#34353A] text-white md:h-10">
        <h1>© All rights reserved by Mahmood Hasan Sabbir</h1>
      </div>
    </div>
  );
};

export default Footer;
