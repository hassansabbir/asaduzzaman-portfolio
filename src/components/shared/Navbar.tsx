"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Spin } from "antd";
import NavItems from "./NavItems";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const isLoading = false;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spin />
      </div>
    );
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <header
        className={`bg-black w-full fixed top-0 z-20 bg-opacity-20 backdrop-blur-sm`}
      >
        <nav className="h-[80px] relative z-10 w-full">
          <div className="flex justify-between items-center h-full w-[90%] mx-auto">
            <div className="flex items-center lg:gap-0 gap-1">
              <div className="md:hidden">
                <AiOutlineMenu
                  onClick={() => setShowDrawer(!showDrawer)}
                  className="text-white cursor-pointer"
                  size={24}
                />
              </div>
            </div>

            <div className="hidden md:flex p-2 items-center gap-5">
              <NavItems items={navItems} />
            </div>
          </div>
        </nav>

        <MobileDrawer
          open={showDrawer}
          setOpen={setShowDrawer}
          items={navItems}
        />
      </header>
    </div>
  );
};

export default Navbar;
